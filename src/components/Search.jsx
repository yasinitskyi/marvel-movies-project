import React from 'react';

class Search extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			search: '',
		}
	}

	handleSearch = (event) => {
		if(event.key === 'Enter') {
			this.props.callback(this.state.search, this.props.value)
		} else {
			this.setState({search: event.target.value});
		}
	}

	render() {
		return (
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
		)
	}
}

export {Search}