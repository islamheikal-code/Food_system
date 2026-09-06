const initialState = {
  isAuthenticated: false,
  user: null,
  loginError: null
};

export const AuthReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      return { ...state, isAuthenticated: true, user: action.payload, loginError: null };
    case 'LOGIN_FAILURE':
      return { ...state, isAuthenticated: false, user: null, loginError: action.payload };
    case 'LOGOUT':
      return { ...state, isAuthenticated: false, user: null, loginError: null };
    default:
      return state;
  }
};