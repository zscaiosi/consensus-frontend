import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './scenes/Login/LoginScene';
// import * as logo from './logo.svg';
import Home from './scenes/Home/HomeScene';
import ChatRoom from './scenes/Chat/ChatRoomScene';
import './css/index.css';

class Base extends React.Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="container-fluid tall-row">
        <div className="col-sm-12 d-flex flex-column justify-content-center">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/chat/criarSala" component={ChatRoom} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Base;
