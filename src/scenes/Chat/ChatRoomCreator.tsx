import * as React from "react";
import { connect } from 'react-redux';
import { postCreateRoomRequest } from '../../actions/roomActions';

class ChatRoomCreator extends React.Component<any, any> {
  constructor(props:any){
    super(props);

    this.state = {
      roomName: ''
    }
  }

  componentWillReceiveProps(nextProps: any){
    if ( this.props.isPostingRoom && !nextProps.isPostingRoom && nextProps.postRoomSuccess !== null ) {
      alert('Sala criada com sucesso!');
    }

    if ( this.props.isPostingRoom && !nextProps.isPostingRoom && nextProps.postRoomError !== null ) {
      alert('Não foi possível criar a sala!');
      console.log(nextProps.postRoomError);
    }
  }

  handleChange(e: any){
    this.setState({
      roomName: e.target.value
    });
  }

  handleCreate(e: any){
    e.preventDefault();

    this.props.postCreateRoomRequest({ name: this.state.roomName });
  }

  render() {
    return (
      <div className="container">
        <div className="panel panel-primary" style={{ width: "100%" }}>
          <div className="panel-body">
            <form onClick={e => e.preventDefault()}>
              <div className="form-group">
                <label htmlFor="name">Nome da sala:</label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  name="roomName"
                  value={this.state.roomName}
                  onChange={e => this.handleChange(e)}
                />
              </div>

              <button
                type="submit"
                className="btn btn-primary"
                onClick={e => this.handleCreate(e)}
              >
                ENTRAR
              </button>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isPostingRoom: state.room.isPostingRoom,
    postRoomSuccess: state.room.postRoomSuccess,
    postRoomError: state.room.postRoomError
  }
}

export default connect(mapStateToProps, {postCreateRoomRequest})(ChatRoomCreator);
