import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPanel from './LoginPanel';

class Login extends React.Component {
  constructor(props: any) {
    super(props);

  }

  render(){
    return(
      <div className="row centered">
        <div className="col-md-5"></div>
        <div className="col-md-3">
          <Switch>
            <Route exact path="/login" component={LoginPanel} />
          </Switch>
        </div>
        <div className="col-md-5"></div>
      </div>
    );
  }
}

export default Login;