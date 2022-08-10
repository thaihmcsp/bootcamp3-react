import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from '../../configs/axios';
import { Card } from 'antd';
import { Segmented } from 'antd';
const { Meta } = Card;
const domain = 'https://tiki.thaihm.site/'

function Detail() {
    const { productId } = useParams()
    const [product, setProduct] = useState({})
    const [url, setUrl] = useState('')
    const [listDetail, setListDetail] = useState([])
    const [listOption, setListOption] = useState([])
    console.log(product);
    useEffect(() => {
        getProduct();
    }, [])

    async function getProduct () {
        try {
            const res = await axios.get('/product/get-one-product/' + productId);
            setProduct(res.data.product);
            let url = res.data.product.thump[0]
            if(!url) { url = res.data.product.productDetailId[0].listImg[0] }
            let listDetail = res.data.product.productDetailId;
            let options = listDetail.map((value) => {
                return value.option
            })

            let keys = options[0].map(value => value.optionName)

            console.log(30, options);
            console.log(31, keys);
            let listOption = keys.map(key => {
                const arr = [];
                let check = options.map(option => {
                    console.log(option);
                })
                console.log(38, check);
            })
            setListDetail(res.data.product.productDetailId);
            if(!url.startsWith('http')) { url = domain + url }
            setUrl(url)
        } catch (error) {
            console.log(error);
        }
    }

  return (
    <div>
        <h1>Detail</h1>
        <div>
            <Card hoverable style={{ width: 240, marginLeft: 16}} cover={<img alt="example" src={url} />}>
                <Meta title={product.productName} description={product.productDetailId ? product.productDetailId[0].price : 0} />
            </Card>
            <Segmented options={['Daily', 'Weekly', 'Monthly', 'Quarterly', 'Yearly']} />
        </div>
    </div>
  )
}

export default Detail