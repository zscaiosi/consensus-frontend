import {
  POST_CREATE_ROOM,
  POST_CREATE_ROOM_SUCCESS,
  POST_CREATE_ROOM_ERROR
} from '../actions/roomActions';

const ROOM_STATE = {
  isPostingRoom: false,
  postRoomSuccess: null,
  postRoomError: null
}

export const room = (state = ROOM_STATE, action: any) => {
  switch (action.type) {
    case POST_CREATE_ROOM:
      return {
        ...state,
        isPostingRoom: true,
        postRoomSuccess: null,
        postRoomError: null
      }
    case POST_CREATE_ROOM_SUCCESS:
      return {
        ...state,
        isPostingRoom: false,
        postRoomSuccess: action.response,
        postRoomError: null
      }
    case POST_CREATE_ROOM_ERROR:
      return {
        ...state,
        isPostingRoom: false,
        postRoomSuccess: null,
        postRoomError: action.error
      }
    default:
      return {
        ...state
      }
  }
} 