import { PLAY, STOP, PAUSE } from '../constants/actions'

const defaultState = null
export default (state = defaultState, action) => {
  switch (action.type) {
    case PLAY:
    case PAUSE:
      return action.payload.player
    case STOP:
      return defaultState
    default:
      return state
  }
}
