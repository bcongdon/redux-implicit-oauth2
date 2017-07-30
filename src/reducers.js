import { hasToken, getToken, getExpiresAt } from './util/token'
import { LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILURE, LOGOUT } from './actions'

const initialState = {
  isLoggedIn: hasToken(),
  token: getToken(),
  expiresAt: getExpiresAt(),
  isAuthenticating: false,
  error: null
}

const auth = (state = initialState, action) => {
  switch (action.type) {
    case LOGIN_REQUEST:
      return Object.assign({}, state, {
        isAuthenticating: true
      })
    case LOGIN_SUCCESS:
      return Object.assign({}, state, {
        isLoggedIn: true,
        token: action.token,
        expiresAt: action.expiresAt,
        error: null,
        isAuthenticating: false
      })
    case LOGIN_FAILURE:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null,
        expiresAt: null,
        error: action.error,
        isAuthenticating: false
      })
    case LOGOUT:
      return Object.assign({}, state, {
        isLoggedIn: false,
        token: null,
        expiresAt: null,
        error: null
      })
    default:
      return state
  }
}

export default auth
