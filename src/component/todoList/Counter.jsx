import React, { Component } from 'react'

export default class Counter extends Component {
    constructor (props){
        super(props);
        this.state = {
            count : 0
        }
    }
    sumMoney = () => {
        let sum = 0;
        for(let i = 0; i < this.props.listData.length; i++){
            sum += this.props.listData[i].amount * 1;
        }
        return sum
    }

    componentDidMount() {
        console.log('didMount');
        this.setState({count: this.sumMoney()})
    }

    componentDidUpdate(oldProps, oldState){         // thucj thi mooix khi setState
        if(oldProps.listData !== this.props.listData){
            this.setState({count: this.sumMoney()})
        }
    }

    render() {
        return (
        <div >{this.state.count}</div>
        )
    }
}
