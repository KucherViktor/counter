import React from "react";
export class Counter extends React.Component{
    static defaultProps = {
        value: 0,
        min: 0,
        max: 100
    }
    constructor(props){
        super(props);
        this.state = {
            value: props.value,
            min: props.min,
            max: props.max
        }
    }
    handleIncrement() {
        this.setState(
            (state,props) => {
                if(state.value < props.max)
                    return {
                        value: state.value+1
                    };
                
            }
        )
    }
    handleDecrement(){
        this.setState(
            (state,props)=>{
                if(state.value > props.min){
                    return {
                        value: state.value-1
                    }
                }
            }
        )
    }
    render(){
        return (
        <>
            <div>Counter {this.state.value}</div>
            <div>
                <button onClick={this.handleDecrement.bind(this)}>-</button>
                <button onClick={this.handleIncrement.bind(this)}>+</button>
            </div>
        </>);
        
    }
}