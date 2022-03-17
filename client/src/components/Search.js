import React from 'react'
import './App.css'
class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      textInput : React.createRef(),
    
    };
  }

  

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.handleSearch(this.state.textInput.current.value);
  }

  render() {
    return (
      <div>
      <form 
      onSubmit={this.handleSubmit}>
        <br />
        <br />
        <br />
        <br />
        <br />
        <br />
        <label id="label">Enter a city to begin!</label><br />
          <input
         id="search-bar"
          type="text"
         placeholder="Where would you like to explore?"
         ref={this.state.textInput}
         />
   
        <input type="submit" value="Explore!" id="search-button"/>
    
      </form>
      </div>
    );
  }
}

export default Search;