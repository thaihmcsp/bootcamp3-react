import React, { useState, useEffect } from 'react';
import axios from '../../configs/axios';
import { Card } from 'antd';
import { Link } from 'react-router-dom';
const { Meta } = Card;
const domain = 'https://tiki.thaihm.site/'
function Home() {
    const [listProduct, setListProduct] = useState([]);

    useEffect(() => {
        getProductData()
    }, [])

    async function getProductData () {
        try {
            let res = await axios.get('/product/get-all-products');
            setListProduct(res.data.listProduct);
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <h1>Home</h1>
        <div style={{display: 'flex', 'flexWrap': 'wrap'}}>
            {listProduct.map((product, index) => {
                let link
                if(product.thump[0]){
                    link = product.thump[0]
                }else{
                    link = product.productDetailId[0]?.listImg[0]
                }

                let html = product.productDetailId[0] ? 
                    <Link to={`/detail/` + product._id}>
                        <Card key={index} hoverable style={{ width: 240, marginLeft: 16}} cover={<img alt="example" src={link.startsWith('http') ? link : domain + link } />}>
                            <Meta title={product.productName} description={product.productDetailId[0].price} />
                        </Card>
                    </Link>
                    :
                    null
                return html
            })}
        </div>
    </div>
  )
}

export default Home