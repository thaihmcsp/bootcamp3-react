exports.crateProduct = function (product){
    return {
        type: 'product/create',
        payload: product
    }
}

exports.updateProduct = function (product, index){
    return {
        type: 'product/update',
        payload: {product, index}
    }
}

exports.deleteProduct = function (index){
    return {
        type: 'product/delete',
        payload: {index}
    }
}