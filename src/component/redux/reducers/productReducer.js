let productInit = [];

export const productReducer = function (state = productInit, action){
    switch (action.type) {
        case 'product/create':
            return [...state, action.payload];

        case 'product/update':
            let newList = [...state];
            newList[action.payload.index] = action.payload.product;
            return newList;

        case 'product/delete':
            let copyList = [...state];
            copyList.splice(action.payload.index, 1);
            return copyList;
    
        default:
            return state;
    }
}


// export default productReducer