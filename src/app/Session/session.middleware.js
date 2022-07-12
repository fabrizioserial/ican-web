import { LOGIN_REQUEST, REGISTER_REQUEST, sessionActions } from "./session.actions";
import { sessionServices } from "./session.services";

const sessionMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case LOGIN_REQUEST:
            sessionServices.login(action.body)
                .then(res => {
                    if (res.status === 201) {
                        dispatch(sessionActions.loginResponse(res.body));

                        // Next actions for get data

                    } else {
                        dispatch(sessionActions.loginResponseError(res));
                    }
                })
                .catch(err => {
                    dispatch(sessionActions.loginResponseError(err));
                })
            break;
        case REGISTER_REQUEST:
            sessionServices.register(action.body)
                .then(res => {
                    if (res.status === 400) { dispatch(sessionActions.registerResponseError(res.errorMessage)); }
                    else if (res.status === 201) {
                        dispatch(sessionActions.loginRequest(res.body)) // TODO
                    };
                })
                .catch(err => {
                    dispatch(sessionActions.registerResponseError(err))
                })
            break;
        default: break;
    }
}

export default sessionMiddleware;