import Wrapper from './components/Wrapper';
import Header from './components/Header';
import Searchbar from './components/Searchbar';
import EmployeeList from './components/EmployeeList';
import EmployeeListItem from './components/EmployeeListItem';

import React from "react";
import './App.css';

function App() {
  return (
    <div className="App">
   <Wrapper>
     <Header />
     <Searchbar />
     <EmployeeList />
     <EmployeeListItem />
   </Wrapper>

    </div>
  );
}

export default App;
