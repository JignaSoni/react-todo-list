import React, { Component } from 'react';
import TodoItems from './TodoItems';

export default class TodoList extends Component {
    render() {
        const { items, removeItem, clearList, editItem } =this.props;
        return (
            <ul className="list-group my-5">
            <h3 className="text-center text-capitalize">todo list</h3>
{
items.map(item=>{
    return    <TodoItems
                 key={item.id} 
                 title={item.item} 
                 deleteItem={()=> removeItem(item.id)}
                 editThisItem={()=> editItem(item.id)}/>
})
}
            
             <button 
                className="btn btn-danger btn-block text-capitalize mt-5"
                onClick={clearList}
                disabled={items.length===0}>clear list</button>
            </ul>
        );
    }
}
