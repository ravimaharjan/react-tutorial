import React, { Component } from 'react'


class AddNinja extends Component {
    state = {
        name : "",
        age : "",
        belt: ""
    }
    handleChange = (e) =>{
        this.setState({
            [e.target.id]: e.target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault();
        let addNinjaFunc = this.props.addNinjaFunc;
        addNinjaFunc(this.state)
    }
    render(){
        return (
            <div className="addNinja"> 
                <form onSubmit={ this.handleSubmit }>
                    <label htmlFor="name">Name</label>
                    <input type="text" id="name" onChange={ this.handleChange }></input>
                    <label htmlFor="name">Age</label>
                    <input type="text" id="age" onChange={ this.handleChange}></input>
                    <label htmlFor="name">Belt</label>
                    <input type="text" id="belt" onChange={ this.handleChange }></input>
                    <button>Submit</button>
                </form>
            </div>
        )
    }
}
export default AddNinja