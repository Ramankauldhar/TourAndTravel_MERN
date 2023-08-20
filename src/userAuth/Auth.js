import { createContext, useEffect, useReducer } from "react";

const storedUser = localStorage.getItem('user');
const initialState = {
  user: storedUser ? JSON.parse(storedUser) : null,
  loading: false,
  error: null,
};

export const Auth = createContext(initialState);
const AuthReducer = (state, action) => {
    switch(action.type){
        case "LOGIN_START":
          return {
            user: null,
            loading: true,
            error: null,
          };
        case "LOGIN_SUCCESS":
            return {
                user: action.payload,
                loading: false,
                error: null,
            };
        case "LOGIN_FAIL":
            return {
                user: null,
                loading: false,
                error: action.payload,
            }    
        case "REGISTER_SUCCESS":
            return {
                user: null,
                loading: false,
                error: null,
            }  
        case "LOGOUT":
            return {
                user: null,
                loading: false,
                error: null,
            }        
            default:
                return state;
    }
};

export const AuthContextProvider = ({children}) => {
    const [state, dispatch] = useReducer(AuthReducer, initialState);

    useEffect(() => {
        localStorage.setItem('user', JSON.stringify(state.user));
    }, [state.user]);

    return (
        <Auth.Provider
         value={{
            user:state.user,
            loading:state.loading,
            error:state.error,
            dispatch,
         }}
         >
            {children}
        </Auth.Provider>
    )
}