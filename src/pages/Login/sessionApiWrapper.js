import { useLoginMutation, useAddPostMutation } from "../../redux/api/sessionApi";
import { setLoginError } from "../../redux/slices/authSlice";
import { useSelector } from "react-redux";

const sessionWrapper = (dispatch) => {
    const [login, res] = useLoginMutation();
    const accessToken = useSelector(state => state.authState.accessToken);
    const bodyBuilder = (body) => ({ body, accessToken }); // TODO This does not apply in this case

    const endpointsBehavior = {
        "login": (email, password) => login(bodyBuilder({ email, password })).unwrap().catch(res => dispatch(setLoginError({ errorMessage: res.data.message[0] })))
    }

    return endpointsBehavior;
}

export default sessionWrapper;