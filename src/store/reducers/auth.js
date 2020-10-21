import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utility';

const initialState = {
    token: null,
    error: null, 
    loading: false,
    signinSuccessful: null,
    signupSuccessful: null,
    otpsent: null,
    otpverified: null,
    user_id: null,
    emailsent:null,
    /*authMode: null,
    showVerifyMail: false,
    signUpFailed: false,
    signInFailed: true,
    showResendSuccess: false,
    user_id: null,
    user_email: null,
    user_verified: null,*/
}


const actionStart = (state,action) => {
    return updateObject(state, {
        error: null,
        loading: false, 
        [action.actionstatus]: null,
    })
}

const actionSuccess = (state,action) => {
    return updateObject(state,{
        [action.actionstatus]: true,
    })
}

const actionFailed = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        [action.actionstatus] : false
    });
}

const signinSuccess = (state,action) => {
    return updateObject(state,{
        signinSuccessful: true,
        token: action.token,
        user_id: action.user_id,
    })
}

const authLogout = (state, action) => {
    return updateObject(state, {
        token: null,
        user_id: null,
    });
}


/*const authStart = (state, action) => {
    return updateObject(state, {
        error: null,
        loading: true,
        otpsent: false,
        otpverified
        showVerifyMail: false,
        signInFailed: false,
        signUpFailed: false,
        showResendSuccess: false,
    });
}

const authSuccess = (state, action) => {
    return updateObject(state, {
        token: action.token,
        error: null,
        loading: false,
        user_id: action.user_id,
        user_email: action.user_email,
        user_verified: action.user_verified,
    });
}

const authVerifyEmail = (state, action) => {
    return updateObject(state, {
        showVerifyMail: true,
        loading: false
    });
}

const authShowResendSuccess = (state, action) => {
    return updateObject(state, {
        showResendSuccess: true,
        loading: false
    });
}

const authFail = (state, action) => {
    return updateObject(state, {
        error: action.error,
        loading: false,
        [action.typeFailed] : true
    });
}*/




const reducer = (state=initialState, action) => {
    switch (action.type) {
        case actionTypes.ACTION_START: return actionStart(state,action);
        case actionTypes.ACTION_SUCCESS: return actionSuccess(state,action);
        case actionTypes.ACTION_FAILED: return actionFailed(state,action);
       /* case actionTypes.AUTH_START: return authStart(state, action);
        case actionTypes.AUTH_SUCCESS: return authSuccess(state, action);
        case actionTypes.AUTH_FAIL: return authFail(state, action);
        case actionTypes.AUTH_LOGOUT: return authLogout(state, action);
        case actionTypes.AUTH_VERIFY_EMAIL: return authVerifyEmail(state, action);
        case actionTypes.AUTH_RESEND_SUCCESS: return authShowResendSuccess(state, action);*/
        case actionTypes.SIGNIN_SUCCESS: return signinSuccess(state,action);
        case actionTypes.ACCOUNT_LOGOUT: return authLogout(state,action);
        default:
            return state;
    }
}

export default reducer;