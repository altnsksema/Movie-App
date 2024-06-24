import React, { useState } from 'react';
import '@fortawesome/fontawesome-free/css/all.min.css';
import '../styles/Search.css';

const Search = () => {
  const [searchValue, setSearchValue] = useState('');

  const handleInputChange = (e) => {
    setSearchValue(e.target.value);
  };



  return (
    <div className='col col-sm-12 search-box'>
     <div className='input-group'>
				<input
					className='form-control'
					value={searchValue}
					onChange={handleInputChange}
					placeholder='Search...'
				/>
				<div className='input-group-append'>
					<span className='input-group-text'>
						<i className='fas fa-search'></i>
					</span>
				</div>
			</div>
    </div>
  );
};

export default Search;
