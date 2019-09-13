import React, { Component } from 'react'

export default class TodoInput extends Component {
    render() {
        const {inputChange, onSubmit, item, editStatus} = this.props;
        return (
            <div className="card card-body my-3">
            <form onSubmit={onSubmit}>
                <div className="input-group">
                <div className="input-group-prepend">
                <div className="input-group-text bg-primary text-white ">
                    <i className="fa fa-book"></i>
                </div>
                </div>
                <input type="text" 
                className="form-control text-capitalize" 
                placeholder="add your task"
                value={item}
                onChange={inputChange}/>
                </div>

                <button 
                    type="submit"
                    className=
                    { editStatus ? "btn btn-success btn-block mt-3" :"btn btn-primary btn-block mt-3"}
                    disabled={item===""}>
                    { editStatus ? "Edit Item" : "Add Item"}
                    </button>
            </form>
               
            </div>
        )
    }
}
