import { loginStart, loginFailure, loginSuccess } from './userRedux';
import { publicReq } from '../axios';

export const login = async(dispatch, user) => {
    dispatch(loginStart());
    try{
        const res = await publicReq.post("/auth/login", user);
        dispatch(loginSuccess(res.data))
    } catch(err) {
        console.log(err)
        dispatch(loginFailure());
    }
}