import React from 'react';
import {Radio} from './Radio'

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
			categories: ['All', 'Movie', 'Series'],
      filter: 'all'
		}
	}

	handleSearch = (event) => {
		if(event.key === 'Enter') {
			this.props.callback(this.state.search, this.state.filter)
		} else {
			this.setState({search: event.target.value});
		}
	}

	handleFilter = (filter) => {
		this.setState(() => ({filter: filter}), () => {this.props.callback(this.state.search, this.state.filter)});
	}

	render() {
		return (
			<>
				<div className="input-field">
				<input 
					onKeyUp={this.handleSearch} 
					onChange={this.handleSearch} 
					placeholder="Seacrh" 
					id="first_name" 
					type="search" 
					className="validate" 
					value={this.state.search}
				/>
			</div>
			<div className='categories'>{this.state.categories.map((category, id) => (
				<Radio
					handleFilter={this.handleFilter}
					dataset={category.toLowerCase()} 
					value={this.state.filter} 
					key={id}>
					{category}
				</Radio>
				))}</div>
			</>
		)
	}
}

export {Search}