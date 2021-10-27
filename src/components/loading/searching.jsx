import React from 'react';


const DataSearching = ({text})=>{
  return(
    <div className="d-flex flex-column justify-content-center align-items-center" style={{height: 'calc(100vh - 200px)'}}>
      <div className="search-loading-icon"/>
      <h3 className="search-loading-text text-muted mt-4">{text?text:'Searching...'}</h3>
    </div>
  )
}

export default DataSearching;