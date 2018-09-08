import React, { Component } from 'react';
import '../App.css';
import TabPanel from './TabPanel';
import Users from './Users';
import { BrowserRouter as Router, Route } from 'react-router-dom';

const tabList = [
  { route: '/', name: 'Главная' },
  { route: '/users', name: 'Пользователи' }
];

const Home = () => (
  <div className="home">
    <input placeholder="Можно написать что угодно, hello world или ничего ;)" />
  </div>
);

class App extends Component {
  constructor(props) {
    
    super();
  }
  render() {
    return (
      <Router>
        <div className="app">
          <TabPanel list={tabList} />
          <Route exact path="/" component={Home} />
          <Route path="/users" component={Users} />
        </div>
      </Router>
    );
  }
}

export default App;
