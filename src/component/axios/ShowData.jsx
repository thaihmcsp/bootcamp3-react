import axios from './axios';
import React, { useEffect, useState } from 'react';
import { Pagination } from 'antd';
import { useLocation, useNavigate } from 'react-router-dom';

function ShowData() {
    const nav = useNavigate()
    const [data, setData] = useState([]);
    const [count, setCount] = useState(0);
    const [showData, setShowData] = useState([]);
    const search = useLocation();
    let object = {page: 1, pageSize: 10}
    
    if(search.search){
        search.search.slice(1).split('&').map((value)=> {
            let array = value.split('=')
            object[array[0]] = array[1]
        });
    }

    useEffect(() => {
        axios.get('/bootcamp-1-s')
        .then((data) => { 
            setData( data.data); 
            const start = (object.page - 1) * object.pageSize;
            const stop = object.page * object.pageSize;
            setShowData(data.data.slice(start, stop));
        })
        .catch( err => {console.log(10, err);});
    }, [count])

    function addData () {
        axios.post('/bootcamp-1-s', {Price: 500000, Storage: 100, ProductName: 'test data'})
        .then(data => {
            console.log(data);
            setCount(count + 1)
        })
        .catch(error => {console.log(error);})
    }
    
    function removeData (id){
        axios.delete('/bootcamp-1-s/'+id)
        .then(data => {
            console.log(data);
            setCount(count + 1)
        })
        .catch(error => {console.log(error);})
    }

    function updateData (id) {
        axios.put('/bootcamp-1-s/'+id, {ProductName: 'thai product'})
        .then(data => {
            console.log(data);
            setCount(count + 1)
        })
        .catch(error => {console.log(error);})
    }

    function change (page, pageSize){
        let start = (page - 1) * pageSize;
        let stop = page * pageSize;
        setShowData(data.slice(start, stop));
        nav(`/user/show-data?page=${page}&pageSize=${pageSize}`);
    }

    return (
        <div>
            Show Data

            <button onClick={addData}>addData</button>

            <Pagination defaultCurrent={6} onChange={change} pageSize={object.pageSize} total={data.length} showSizeChanger={true} pageSizeOptions={[10,20,30,40]}/>

            {showData.map((value) => {
                return (
                    <div>
                        {value.ProductName} / {value.Price} / {value.Storage} / 
                        <button onClick={() => {removeData(value.id)}}>Delete</button> /
                        <button onClick={() => {updateData(value.id)}}>Update</button>
                    </div> 
                )
            })}

        </div>
    )
}

export default ShowData