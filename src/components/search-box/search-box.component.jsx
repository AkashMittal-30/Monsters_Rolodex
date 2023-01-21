// import { Component } from "react";
import './search-box.styles.css';

const SearchBox=({className, placeholder, onChange})=>{
  return(
    <div>
      <input className={`search-box ${className}`} type='search' placeholder={placeholder}
      onChange={onChange}
      />
    </div>
  )
}

//CLass Approach

// class SearchBox extends Component{
//   render(){
//     // console.log('render search-box');
//     return(
      // <div>
      //   <input className={`search-box ${this.props.className}`} type='search' placeholder={this.props.placeholder}
      //   onChange={this.props.onChange}
      //   />
      // </div>
//     )
//   }
// }

export default SearchBox