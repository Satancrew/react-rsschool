import React, { ChangeEvent, Component } from 'react';
import './Search.scss';

class Search extends Component {
  state = {
    term: '',
  };

  componentDidMount() {
    const term = localStorage.getItem('value');
    this.setState({ term });
  }

  onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const term = ev.target.value;
    localStorage.setItem('value', term);
    this.setState({ term });
  };

  render() {
    return (
      <div className="search">
        <div className="search__wrapper">
          <input
            type="text"
            name="text"
            className="search__input"
            placeholder="What are u looking for?"
            value={this.state.term}
            onChange={this.onSearchChange}
          />
        </div>
      </div>
    );
  }
}

export default Search;
