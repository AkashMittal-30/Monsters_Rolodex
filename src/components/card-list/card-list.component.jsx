// import { Component } from "react";
import './card-list.styles.css';
import Card from '../card/card.component';

// Functional Approach

const CardList=({monsters})=>{
  return(
    <div className="card-list" >
      {
        monsters.map ( (monster) => { 
          return ( 
            <Card user={monster}/>
        )})	
      }
    </div>
  );
}

// Class Approach

// class CardList extends Component{
//   render(){
//     // console.log('render card-list');
//     const {monsters}=this.props;
//     return (
      // <div className="card-list">
      //   {
      //     monsters.map ( (monster) => { 
      //       return ( 
      //         <Card user={monster}/>
      //     )})	
      //   }
      // </div>
//     )
//   }
// }

export default CardList;