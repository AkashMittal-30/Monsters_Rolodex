import "./App.css";
// import { Component } from 'react';
import CardList from "./components/card-list/card-list.component";
import SearchBox from "./components/search-box/search-box.component";

import { useState, useEffect } from "react";

const App = () => {
  console.log("render");
  const [searchField, setSearchField] = useState("");
  const [monsters, setMonsters] = useState([]);
  const [filteredMonsters, setFilteredMonsters] = useState(monsters);
  const onSearchChange = (event) => {
    setSearchField(event.target.value);
  };
  useEffect(() => {
    setFilteredMonsters(
      monsters.filter((monster) => {
        return monster.name.toLowerCase().includes(searchField.toLowerCase());
      })
    );
  }, [monsters, searchField]);
  useEffect(() => {
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => setMonsters(users));
  }, []);
  return (
    <div className="App">
      <h1 className="app-title">Monsters Rolodex</h1>
      <SearchBox
        className="monster-search-box"
        placeholder="Search monster"
        onChange={onSearchChange}
      />
      <CardList monsters={filteredMonsters} />
    </div>
  );
};

// Class Approach :

// class App extends Component {
//   constructor(){
//     super();
//     // console.log('constructor');
//     this.state={
//       monsters:[],
//       searchField:""
//     };
//   }
//   componentDidMount(){
//     // console.log('componentDidMount');
// fetch("https://jsonplaceholder.typicode.com/users")
// .then((response)=>response.json())
// .then((users)=>this.setState(()=>({monsters:users})));
//   }
//   onSearchChange=(event)=>{
//     // console.log('onSearchChange');
//     return this.setState(()=>({searchField:event.target.value}))
//   } //Modification done to stop created multiple copies of this function and destroying it every-time

//   render() {
//     // console.log('render');
//     const {monsters, searchField} = this.state; // Modification done to keep writing short
//     const {onSearchChange} = this;

// const filteredMonsters=monsters.filter((monster)=>{
//   return monster.name.toLowerCase().includes(searchField.toLowerCase());
// })

//     return (
//       <div className='App'>
//         <h1 className='app-title'>Monsters Rolodex</h1>
//         <SearchBox
//           className='monster-search-box'
//           placeholder='Search monster'
//           onChange={onSearchChange}
//          />
//         <CardList monsters={filteredMonsters}/>
//       </div>
//     );
//   }
// }

export default App;
