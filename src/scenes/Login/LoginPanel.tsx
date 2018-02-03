import * as React from 'react';
import { Link } from 'react-router-dom';

class LoginPanel extends React.Component {
  constructor(props: any){
    super(props);
    
  }

  render(){
    return(
      <div className="container">
        <div className="col-sm-12">
          <div className="row">

            <div className="panel panel-primary" style={{width: '100%'}}>
              <div className="panel-body">
                <form onClick={(e) => e.preventDefault()}>
                  <div className="form-group">
                    <label htmlFor="email">Seu Nome:</label>
                    <input type="email" className="form-control" id="email" />
                  </div>
                  <div className="form-group">
                    <label htmlFor="pwd">Link da Sala:</label>
                    <input type="password" className="form-control" id="pwd" />
                  </div>
                  <button type="submit" className="btn btn-primary">ENTRAR</button>
                </form>
              </div>
            </div>

          </div>
          <div className="row">
            <span>
            <Link to="/" className="voltar-link" >Voltar</Link>
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginPanel;