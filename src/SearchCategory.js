import React from 'react';

const SearchCategory = ({categoryChange}) => {
  return(
    <div className="dn db-l SearchCategory relative ma0 pa0 fr">
      <div className="radio-box pa0 di">
        <input type="radio" name="category" value="location" id="category1" onChange={categoryChange}/> <label htmlFor="category1">Location</label>
      </div>
      <div className="radio-box pa0 di">
        <input type="radio" name="category" value="name" id="category2" defaultChecked onChange={categoryChange}/> <label htmlFor="category2">Name</label>
      </div>
      <div className="radio-box pa0 di">
        <input type="radio" name="category" value="job title" id="category3" onChange={categoryChange}/> <label htmlFor="category3">Job Title</label>
      </div>
    </div>
  )
}

export default SearchCategory;
