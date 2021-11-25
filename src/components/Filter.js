// import React from "react";


// function Filter({setSelectedCategory}){

//     function handleCategoryChange(event) {
//         setSelectedCategory(event.target.value);
//     }
    
//     return(
//         <select name="filter" onChange={handleCategoryChange}>
//           <option value="All">Filter by category</option>
//           <option value="Produce">Produce</option>
//           <option value="Dairy">Dairy</option>
//           <option value="Dessert">Dessert</option>
//         </select>
//     )
// }

// export default Filter;


function Filter({onCategoryChange}){
    return(
    <select name="filter" onChange={onCategoryChange}>
      <option value="All">Filter by category</option>
      <option value="Produce">Produce</option>
      <option value="Dairy">Dairy</option>
      <option value="Dessert">Dessert</option>
    </select>
    )}
  
  export default Filter