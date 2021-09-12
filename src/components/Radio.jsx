import React from 'react';

class Radio extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			type: '',
		}
	}

	componentDidMount() {
		this.setState({type: this.props.dataset})
	}

	render() {
		return (
			<p>
				<label>
					<input 
						onChange={() => {this.props.handleFilter(this.state.type)}}
						className="with-gap" 
						name="category" 
						type="radio" 
						data-type={this.props.dataset}
						checked={this.props.value === this.state.type}
					/>
					<span>{this.props.children}</span>
				</label>
			</p>
		)
	}
}

export { Radio }