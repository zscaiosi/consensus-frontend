import * as React from 'react';
import { Link } from 'react-router-dom';
import * as clientSocket from 'socket.io-client';
import { MouseEvent } from 'react';

class LoginPanel extends React.Component<any, any> {
  constructor(props: any){
    super(props);
    
    this.state = {
      clientName: '',
      roomName: '',
      isChatting: false
    }
  }

  handleLogin(e: MouseEvent<HTMLButtonElement>){
    e.preventDefault();

    const cs = clientSocket('http://localhost:8888/');

    cs.on(this.state.clientName, (message: string) => {
      alert(message);
    });

    cs.on('new_client', (message: string) => {
      this.setState({
        isChatting: true
      });
    });

    cs.emit('enter_room', { name: this.state.roomName, clientName: this.state.clientName });
  }

  handleChange(e: any){
    const name = e.target.name;
    const value = e.target.value;

    this.setState({
      [name]: value
    });
    
  }

  render(){
    if ( this.state.isChatting ) {
      return(
        <div className="container">
          ENTROU NA SALA!
        </div>
      );
    } else {
      return(
        <div className="container">
          <div className="col-sm-12">
            <div className="row">
  
              <div className="panel panel-primary" style={{width: '100%'}}>
                <div className="panel-body">
                  <form onClick={(e) => e.preventDefault()}>
                    <div className="form-group">
                      <label htmlFor="name">Seu Nome:</label>
                      <input type="text" className="form-control" id="name" name="clientName" value={this.state.clientName} onChange={(e) => this.handleChange(e) } />
                    </div>
                    <div className="form-group">
                      <label htmlFor="roomName">Link da Sala:</label>
                      <input type="text" className="form-control" id="roomName" name="roomName" value={this.state.roomName} onChange={(e) => this.handleChange(e) } />
                    </div>
                    <button type="submit" className="btn btn-primary" onClick={ (e) => this.handleLogin(e) }>ENTRAR</button>
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
}

export default LoginPanel;