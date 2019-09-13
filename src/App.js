import React, { Component } from 'react';
import TodoList from './components/TodoList';
import TodoInput from './components/TodoInput';

import uuid from 'uuid';


class App extends Component {
  state = { 
    item:'',
    items:[],
    id:uuid(),
    editStatus: false

   }
    onInputChangeHandler=(e)=>{
        this.setState({
            item: e.target.value
        })
    }
    onSubmitHandler=(e)=>{
      e.preventDefault();
      const newItem = {
        id:this.state.id,
        item:this.state.item
          };
      const updatedItems = [...this.state.items,newItem];
      this.setState({
        items :updatedItems,
        item: "",
        id:uuid(),
        editStatus: false
      })

    }

    deleteItemHandler=(id)=>{
        const filteredItems = this.state.items.filter(item => item.id !== id);
        this.setState({
          items:filteredItems
        })
    }

    editItemHandler=(id)=>{
      const filteredItems = this.state.items.filter(item => item.id !== id);
      const selectedItem = this.state.items.find(item=>item.id===id);
      
      this.setState({
        items:filteredItems,
        item: selectedItem.item,
        id:id,
        editStatus: true,
      })

    }

    clearListHandler=()=>{

      this.setState({
        items: []
      })
    }

  render() { 
    return ( 
     <div className="container">
      <div className="row">
          <div className="col-10 mx-auto col-md-8 mt-4">
          <h3 className="text-capitalize text-center">todo input</h3>
              <TodoInput 
                item={this.state.item}
                inputChange={this.onInputChangeHandler} 
                onSubmit={this.onSubmitHandler}
                editStatus={this.state.editStatus}/>
              <TodoList 
              items={this.state.items} 
              removeItem={this.deleteItemHandler}
              editItem={this.editItemHandler}
              clearList={this.clearListHandler}
              />
          </div>
      </div>
     </div>
     );
  }
}
 
export default App;

