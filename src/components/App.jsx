import React, { Component } from 'react';
import SearchBar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';

class App extends Component {
  state = {
    value: '',
  };

  addToState = value => {
    this.setState({ value: value });
  };

  render() {
    return (
      <div className="App">
        <SearchBar onSubmit={value => this.addToState(value)} />
        <ImageGallery value={this.state.value}/>
      </div>
    );
  }
}

export default App;
