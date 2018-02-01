import * as React from 'react';

class LoginPanel extends React.Component {
  constructor(props: any){
    super(props);
    
  }

  render(){
    return(
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
    );
  }
}

export default LoginPanel;