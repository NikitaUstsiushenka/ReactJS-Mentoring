import React from 'react';

export default class Search extends React.Component {
  state = {
    searchValue: '',
  }

  handleSubmit = () => {
    alert(this.state.searchValue);
  }

  handleChange = (event) => {
    this.setState({ searchValue: event.target.value });
  }

  render() {
    const { searchValue } = this.state;
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
	  <input value={searchValue} onChange={this.handleChange} />
	  <button type="submit">
	    {'Search'}
	  </button>
        </form>
      </div>
    );
  }
}
