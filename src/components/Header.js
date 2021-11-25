// import React from "react";

// function Header({isDarkMode, setIsDarkMode}){
//     function handleDarkModeClick() {
//         setIsDarkMode((isDarkMode) => !isDarkMode);
//     }
    
//     return(
//         <header>
//         <h2>Shopster</h2>
//         <button onClick={handleDarkModeClick}>
//         {isDarkMode ? "Dark" : "Light"} Mode
//         </button>
//     </header>
//     )
// }

// export default Header



   
function Header({onDarkModeClick, mode}){
  
    return(
      <header>
        <h2>Shopster</h2>
        <button onClick={onDarkModeClick}>
        {mode ? "Dark" : "Light"} Mode
        </button>
      </header>
    )
  }
  
  export default Header