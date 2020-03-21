import React from 'react';
import './App.css';
import {CardList} from './components/card-list/card-list.component'
import {SearchBox} from './components/search-box/search-box.component'

class App extends React.Component{
  constructor(){
    super();
    this.state={
      album:[],
      searchField:""
    }
  }

  handleChange=(event)=>{
    this.setState({searchField:event.target.value});
  }

  componentDidMount(){
    fetch("https://jsonplaceholder.typicode.com/users").then(response=>response.json()).then(response=>this.setState({album:response}))
  }
  render(){

    const filtered = this.state.album.filter(element=>element.username.toLowerCase().includes(this.state.searchField.toLowerCase()));
    return(

      <div className="App">
        <h1>Art Gallery</h1>
        <SearchBox handleChange={this.handleChange} placeholder="Search"/>
        <CardList album={filtered} /> 
      </div>
    )
  }

}

export default App;
