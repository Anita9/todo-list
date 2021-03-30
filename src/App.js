import React from 'react';
import './App.css';
import todo from './img/todo.png';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import AddIcon from '@material-ui/icons/Add';
import DeleteIcon from '@material-ui/icons/Delete';
import ItemsList from './ItemsList';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      item: '',
      items: []
    }
  }

  handleInputChange = (event) => {
    this.setState({
      item: event.target.value
    })
  }

  handleAddBtnChange = () => {
    let itemsList = this.state.items;
    itemsList.push(this.state.item)
    this.setState({
      items: itemsList,
      item: ''
    })
  }

  handleOnEnterChange = (event) => {
    if (event.keyCode === 13) {
      this.handleAddBtnChange();
    }
  }

  handleDeleteBtnChange = () => {
    this.setState({
      items: []
    })
  }

  handleDeleteItem = (index) => {
    let itemsList = this.state.items;
    index > -1 && itemsList.splice(index, 1);
    this.setState({
      items: itemsList
    })
  }

  render(){
    const value = this.state.item;
    const list = this.state.items;
    return (
      <div className="App">
        <div>
          <img src={todo} alt='todo' className="banner"/>
        </div>
        <div>
          <TextField label="Add item"
            variant="outlined"
            size="small"
            value={this.state.item}
            onChange={this.handleInputChange}
            autoFocus
            className='inputField'/>
          <Button
            variant="outlined"
            color="primary"
            size="medium"
            className="inputBtns"
            disabled={value === '' ? true : false}
            endIcon={<AddIcon />}
            onClick={this.handleAddBtnChange}
            onKeyPress={() => this.handleAddBtnChange}>
            Add
            </Button>
          <Button
            variant="outlined"
            color="secondary"
            size="medium"
            className="inputBtns"
            disabled={list.length < 1 ? true : false}
            endIcon={<DeleteIcon />}
            onClick={this.handleDeleteBtnChange} >
              Reset List
          </Button>
        </div>
        <div>
          <ItemsList items = {this.state.items} handleDeleteItem={this.handleDeleteItem}/>
        </div>
      </div>
    )
  }
};

export default App;
