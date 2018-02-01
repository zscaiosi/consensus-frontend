import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import Login from './scenes/Login/LoginScene';
// import * as logo from './logo.svg';

class Base extends React.Component {

  componentDidMount(){
    
  }

  render() {
    return (
      <div className="container-fluid">
        <div className="col-xs-12">
          <Switch>
            <Route path="/login" component={Login} />
          </Switch>
        </div>
      </div>
    );
  }
}

export default Base;
