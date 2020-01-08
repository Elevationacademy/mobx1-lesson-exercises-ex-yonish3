import React, { Component } from 'react';
import { observer } from 'mobx-react'

@observer
class Item extends Component {
    checkItem = (e) => {
      this.props.store.checkItem(e.target.value)
      }

      editItem = () => {
        //your code here
        var newLocation = prompt('Edit location', 'New location')
        this.props.store.editItem(newLocation)
      }
      deleteItem = () => {
        //your code here
      }
    render() {
      let item=this.props.item
        return (
            <div className = {item.completed ? "crossed":null}>

              <input type="checkbox" value={item.name} onChange={this.checkItem}/>
              <span>{item.name} {item.location}</span>
              <button className='editButton' onClick={this.editItem}>Click Me To Edit Location</button>
      
            </div>)
    }
}

export default Item