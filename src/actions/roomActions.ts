import axios from 'axios';

export const POST_CREATE_ROOM = 'POST_CREATE_ROOM';
export const POST_CREATE_ROOM_SUCCESS = 'POST_CREATE_ROOM_SUCCESS';
export const POST_CREATE_ROOM_ERROR = 'POST_CREATE_ROOM_ERROR';

const postCreateRoom = () => {
  return {
    type: POST_CREATE_ROOM
  }
}

const postCreateRoomSuccess = (response: any) => {
  return {
    type: POST_CREATE_ROOM_SUCCESS,
    response
  }
}

const postCreateRoomError = (error: any) => {
  return {
    type: POST_CREATE_ROOM_ERROR,
    error
  }
}

export const postCreateRoomRequest = (payload: any) => {
  const instance = axios.create({
    headers: {
      'Content-Type' : 'application/json'
    }
  });

  const request = instance.post(`http://localhost:8888/room/create`, payload);

  return (dispatch: any) => {
    dispatch(postCreateRoom());

    return request
      .then( (response) => {
        dispatch(postCreateRoomSuccess(response));
      })
      .catch( (error) => {
        dispatch(postCreateRoomError(error));
      });
  }
}