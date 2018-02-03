import * as   React from 'react';
import { Switch, Route } from 'react-router-dom';
import ChatRoomCreator from './ChatRoomCreator';

class ChatRoom extends React.Component {
  render(){
    return(
      <Switch>
        <Route path="/chat/criarSala" component={ChatRoomCreator} />
      </Switch>
    );
  }
}

export default ChatRoom;