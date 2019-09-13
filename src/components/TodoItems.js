import React, { Component } from 'react'

export default class TodoItems extends Component {
    render() {
            const { title,deleteItem,editThisItem }=this.props;

        return (
           <li className="list-group-item  text-capitalize d-flex justify-content-between my-2">
          
               <h6>{title}</h6>
               <div className="todo-icon">
                   <span className="mx-2 text-success" onClick={editThisItem}>
                       <i className="fa fa-pencil" ></i>
                   </span>
                   <span className="mx-2 text-danger" onClick={deleteItem}>
                      <i className="fa fa-trash" ></i>
                   </span>
               
               </div>
         
           </li>
        )
    }
}
