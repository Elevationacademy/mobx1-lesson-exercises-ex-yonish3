import { observable, action } from 'mobx'
import { Item } from './Item'


export class ShoppingList {
    // your code here
    @observable list = [];
    @observable length;
    @action checkItem = (name) => {
        let item = this.list.find(i => i.name === name)
        item.completed = !item.completed
    }

    @action addItem = (name) => {
        // your code here
        const item = new Item(name)
        this.list.push(item)
    }
    editItem = () => {
        // your code here
        
    }
    deleteItem = () => {
        // your code here
    } 
}

