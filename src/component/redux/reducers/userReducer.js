const { createSlice } = require("@reduxjs/toolkit");

let initState = [];

// const userSlice = createSlice({
//     name: 'user',
//     initialState: initState,
//     reducers: {
//         register: function (state, action){
//             return [...state, action.payload];
//         },

//         changePass: function (state, action){
//             state[action.payload.index] = action.payload.password;
//             return state;
//         }
//     }
// })

export const userReducer = function (state = initState, action){
    switch (action.type) {
        case 'user/register':
            return [...state, action.payload];

        case 'user/changePass':
            let clone = [...state];
            clone[action.payload.index] = action.payload.password;
            return clone;
    
        default:
            return state;
    }
}


// export const {changePass, register} = userSlice.actions
// export default userSlice