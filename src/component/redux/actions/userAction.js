exports.register = function (user) {
    return {
        type: 'user/register',
        payload: user
    }
}

exports.changePass = function  (password, index){
    return {
        type: 'user/changPass',
        payload: {password, index}
    }
}
