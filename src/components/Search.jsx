import React, {useState} from 'react';
import {Radio} from './Radio'

function Search(props) {
	const {callback = Function.prototype} = props;
	const [search, setSearch] = useState('');
	const [filter, setFilter] = useState('all');
	const [categories, setCategories] = useState(['All', 'Movie', 'Series']);

	const handleSearch = (event) => {
		if(event.key === 'Enter') {
			callback(search, filter);
		} else {
			setSearch(event.target.value);
		}
	}

	const handleFilter = (filter) => {
		setFilter(filter);
		callback(search, filter);
	}

	return (
		<>
			<div className="input-field">
			<input 
				onKeyUp={handleSearch} 
				onChange={handleSearch} 
				placeholder="Seacrh" 
				id="first_name" 
				type="search" 
				className="validate" 
				value={search}
			/>
		</div>
		<div className='categories'>{categories.map((category, id) => (
			<Radio
				handleFilter={handleFilter}
				dataset={category.toLowerCase()} 
				value={filter} 
				key={id}>
				{category}
			</Radio>
			))}</div>
		</>
	)
}

export {Search}