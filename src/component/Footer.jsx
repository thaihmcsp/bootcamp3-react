import React from 'react';

class Footer extends React.Component {
    constructor (props) {
        super(props);
        this.state = {
            info: '21321321321',
            user: {name: 'test', age: 111}
        }
    }


    render () {
        return (
            <div>
                Footer
            </div>
        )
    }
}

export default Footer