// import { Component } from "react";
import './card.styles.css';

const Card=({user})=>{
  const {id,name,email}=user;
  // console.log(id);
  return(
    <div className="card-container" key={id}>
      <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
      <h2>{name}</h2>
      <p>{email}</p>
    </div>
  )
}


// Class Approach 

// class Card extends Component{
//   render(){
//     const {id,name,email}=this.props.user;
//     return(
      // <div className="card-container" key={id}>
      //   <img src={`https://robohash.org/${id}?set=set2&size=180x180`} alt={`monster ${name}`} />
      //   <h2>{name}</h2>
      //   <p>{email}</p>
      // </div>
//     )
//   }
// }

export default Card;