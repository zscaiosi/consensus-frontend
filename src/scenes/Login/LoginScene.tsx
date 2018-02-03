import * as React from 'react';
import { Switch, Route } from 'react-router-dom';
import LoginPanel from './LoginPanel';

class Login extends React.Component {
  constructor(props: any) {
    super(props);

  }

  render(){
    return(
      <div className="row centered tall-row">
        <div className="col-sm-3"></div>
        <div className="col-sm-6 d-flex flex-sm-column justify-content-center">
          <Switch>
            <Route exact path="/login" component={LoginPanel} />
          </Switch>
        </div>
        <div className="col-sm-3"></div>
      </div>
    );
  }
}

export default Login;