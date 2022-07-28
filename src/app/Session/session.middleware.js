import { sessionServices } from "./session.services";
import { loginRequest, loginResponse, loginResponseError } from "./session.slice"

const sessionMiddleware = ({ getState, dispatch }) => next => action => {
    next(action);

    switch (action.type) {
        case loginRequest.type:

            const body = {
                email: action.payload.email,
                password: action.payload.password
            }

            sessionServices.login(body)
                .then(res => {
                    dispatch(loginResponse(res));

                    // Next actions for get data
                })
                .catch(err => dispatch(loginResponseError(err)))
            break;
        default: break;
    }
}

export default sessionMiddleware;