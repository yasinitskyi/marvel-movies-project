import React from 'react';

class Search extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
			type: 'all'
    };
  }

	handleFilter = (event) => {
		this.setState(() => ({type: event.target.dataset.type}), () => {this.props.callback(this.state.search, this.state.type);})
	}

  handleSearch = (event) => {
    if (event.key === 'Enter') {
      this.props.callback(
        this.state.search,
				this.state.type
      );
    } else {
      this.setState({
        search: event.target.value,
      });
    }
  };

  render() {
    return (
      <>
        <div className='input-field'>
          <input
            onKeyUp={this.handleSearch}
            onChange={this.handleSearch}
            placeholder='Seacrh'
            id='first_name'
            type='search'
            className='validate'
            value={this.state.search}
          />
        </div>
        <div className='categories'>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
							data-type='all'
							onChange={this.handleFilter}
							checked={this.state.type === 'all'}
            />
            <span>All</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
							data-type='movie'
							onChange={this.handleFilter}
							checked={this.state.type === 'movie'}
            />
            <span>Movie</span>
          </label>
          <label>
            <input
              className='with-gap'
              name='type'
              type='radio'
							data-type='series'
							onChange={this.handleFilter}
							checked={this.state.type === 'series'}
            />
            <span>Series</span>
          </label>
        </div>
      </>
    );
  }
}

export { Search };
