import React, { Component } from 'react';

import './Search.css';

import SearchIcon from 'react-icons/lib/md/search';

//////////////////////////////////////////////////////// THIS COMPONENT IS BEING RENDERED IN THE *HEADER* COMPONENT

export default class Search extends Component {
  constructor(){
    super()
    this.state={
      text:''
    }
  }

  handleChange=(e)=>{
    this.setState({
      text:e.target.value
    })
  }

  searchPost=()=>{
    let text=this.state.text;
    const {searchPostFn}= this.props;
    searchPostFn(text);
    this.setState({
      text:''
    })
  }

  render() {
    return (
      <section className="Search__parent">

        <div className="Search__content">
          <input placeholder="Search Your Feed" onChange={this.handleChange} value={this.state.text}/>

          <SearchIcon id="Search__icon" onClick={this.searchPost}/>
        </div>
        
      </section>
    )
  }
}