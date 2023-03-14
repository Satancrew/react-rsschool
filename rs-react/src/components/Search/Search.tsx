import React, { ChangeEvent, Component } from 'react';
import './Search.scss';

class Search extends Component {
  state = {
    term: '',
  };

  onSearchChange = (ev: ChangeEvent<HTMLInputElement>) => {
    const term = ev.target.value;
    this.setState({ term });
  };

  render() {
    return (
      <div className="search">
        <div className="search__wrapper">
          <input
            type="text"
            className="search__input"
            placeholder="What are you looking?"
            value={this.state.term}
            onChange={this.onSearchChange}
          />
          <button type="submit" className="search__btn">
            <i className="bx bx-search search__icon"></i>
          </button>
        </div>
      </div>
    );
  }
}

export default Search;
