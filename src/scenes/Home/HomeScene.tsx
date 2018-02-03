import * as React from 'react';
import { withRouter } from 'react-router';
import { Link } from 'react-router-dom';

class Home extends React.Component <any, any>{
  render(){
    return(
      <div className="row  tall-row">
        <div className="col-6 d-flex flex-column justify-content-center" id="entrar-sala">
          <div className="row ">
            <p className="description-text">
              Se você já foi convidado para participar de uma discussão em torno de uma pauta, peça o link de identificação da sala e junte-se aos outros participantes!
            </p>
          </div>
          <div className="row d-flex flex-row justify-content-center">
            <button className="btn btn-primary">
              <Link to="/login" style={{ all: 'unset' }} >
                ENTRAR EM UMA SALA
              </Link>
            </button>
          </div>
        </div>
        <div className="col-6 d-flex flex-column justify-content-center" id="criar-sala">
          <div className="row">
            <p className="description-text">
              Se você já tem uma pauta, mas ainda não tem uma sala, crie uma nova aqui e convide mais participantes!
            </p>
          </div>
          <div className="row d-flex flex-row justify-content-center">
              <button className="btn btn-primary">
                <Link to="/chat/criarSala" style={{ all: 'unset' }} >
                CRIAR UMA SALA
                </Link>
              </button>
          </div>
        </div>
      </div>
    );
  }
}

export default withRouter(Home);