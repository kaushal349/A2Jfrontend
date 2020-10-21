import axios from 'axios';
import * as actionTypes from './actionTypes';
import qs from "qs"

export const actionStart = (actionstatus) => {
    return {
        type: actionTypes.ACTION_SUCCESS,
        actionstatus: actionstatus,
    }
}

export const actionSuccess = (actionstatus) => {
    return {
        type: actionTypes.ACTION_SUCCESS,
        actionstatus: actionstatus,
    }
}

export const actionFailed = (error, actionstatus) => {
    return {
        type: actionTypes.ACTION_FAILED,
        error: error,
        actionstatus: actionstatus,
    }
}

export const signinSuccess = (token,user_id) => {
    return {
        type: actionTypes.SIGNIN_SUCCESS,
        token: token,
        user_id: user_id,
    }
}



export const logout = () => {
     localStorage.removeItem('token');
     localStorage.removeItem('expirationDate');
     return {
         type: actionTypes.ACCOUNT_LOGOUT
     };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}
 
export const authSignup = (firstname,middlename,lastname,country_code,mobile_number,password1, password2) => {
    return dispatch => {
        dispatch(actionStart('signupSuccessful'));
        axios.post('auth/registration', qs.stringify({
            password1: password1,
            password2: password2,
            username: mobile_number,
            country_code:country_code,
            firstname: firstname,
            middlename: middlename,
            lastname: lastname,
        }))
        .then(res => {
            console.log('Signup Success!')
            console.log(res)
            dispatch(actionSuccess('signupSuccessful'))
            dispatch(sendOTP(mobile_number))
           // dispatch(authVerifyEmail())
        })
        .catch(err => {
            console.log('Error received!')
            console.log(err.response)
            dispatch(actionFailed(err.response.data, 'signupSuccessful'))
        })
    }
}

export const sendOTP = (mobile_number) => {
    return dispatch => {
        dispatch(actionStart('otpsent'))
        axios.post('sendotp/',{
            mobile_no : mobile_number
        })
        .then(res => {
            console.log('OTP sent successfully')
            console.log(res)
            dispatch(actionSuccess('otpsent'))
        })
        .catch(err => {
            console.log('Error in otp sending')
            console.log(err.response)
            dispatch(actionFailed(err.res.data.non_field_errors,'otpsent'))
        })
    }
}

export const verifyOTP = (otp,mobile_number) => {
    return dispatch => {
        dispatch(actionStart('verifyotp'))
        axios.post('verifyotp/',{
            otp: otp,
            mobile_no: mobile_number,
        })
        .then(res => {
            console.log('OTP verified',res)
            dispatch(actionSuccess('otpverified'))
        })
        .catch(err => {
            console.log('OTP not verified',err.response)
            dispatch(actionFailed(err.response.data,'otpsent'))
        })
    }
}

export const verifyEmail = (email) => {
    return dispatch => {
        dispatch(actionStart('emailsent'))
        axios.post('sendverificationemail/',{
           email:email
        })
        .then(res => {
            dispatch(actionSuccess('emailsent'))
        })
        .catch(err => {
            console.log('Email not verified',err.response)
            dispatch(actionFailed(err.response.data.message,'emailsent'))
        })
    }
}

export const authLogin = (login_id, password, method) => {
    return dispatch => {
        dispatch(actionStart('signinSuccessful'))

        if(method==='mobile')
        {
            axios.post('auth/login/',{
                username: login_id,
                password: password,
            })
            .then(res => {

                axios.get('getuserid/',{
                    params:{
                        'token':res.data.key
                    }
                })
                .then(resp => {
                    const user_id = resp.data.user_id
                    const token =res.data.key
                    const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                    localStorage.setItem('token', token);
                    localStorage.setItem('expirationDate', expirationDate);
                    localStorage.setItem('user_id',user_id);
                    console.log('Successfully logeed in',res,user_id)
                    dispatch(signinSuccess(token,user_id));
                    dispatch(checkAuthTimeout(3600));
                })
                .catch(err => {
                    console.log(err.response)
                })
                
            })
            .catch(err => {
                axios.post('isaccountregistered/',{
                    mobile_no:login_id
                })
                .then(res => {
                    const isregistered = res.data.isregistered
                    if(isregistered)
                    {
                        console.log('Mobile number is not verified yet')
                        dispatch(actionFailed({data:{non_field_errors:'Mobile number is not verified yet'}},'signinSuccessful'))
                    }
                    else
                    {
                        console.log(err.response)
                        dispatch(actionFailed(err.response,'signinSuccessful'))

                    }
                })
                
            })
        }
        else if(method === 'email')
        {
            axios.post('auth/login/',{
                email: login_id,
                password: password,
            })
            .then(res => {
                const token =res.data.key
                const user_id = '1'
                const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
                localStorage.setItem('token', token);
                localStorage.setItem('expirationDate', expirationDate);
                localStorage.setItem('user_id',user_id);
                console.log('Successfully logeed in',res)
                dispatch(signinSuccess(token,user_id));
                dispatch(checkAuthTimeout(3600));
            })
            .catch(err => {
                axios.post('isemailregistered/',{
                    email:login_id
                })
                .then(res => {
                    const isregistered = res.data.isregistered
                    if(isregistered)
                    {
                        console.log('Email is not verified yet')
                        dispatch(actionFailed({data:{non_field_errors:'Email is not verified yet'}},'signinSuccessful'))
                    }
                    else
                    {
                        console.log(err.response)
                        dispatch(actionFailed(err.response,'signinSuccessful'))

                    }
                })
                console.log(err.response)
                dispatch(actionFailed(err.response,'signinSuccessful'))
            })
        }
    
    }
}

export const authCheckState = () => {
    return dispatch => {
        const token = localStorage.getItem('token');
        const user_id = localStorage.getItem('user_id')
        if (token === undefined) {
            dispatch(logout());
        } else{
            const expirationDate = new Date(localStorage.getItem('expirationDate'));
            if ( expirationDate <= new Date() ) {
                dispatch(logout());
            } else {
                dispatch(signinSuccess(token,user_id,));
                dispatch(checkAuthTimeout( (expirationDate.getTime() - new Date().getTime()) / 1000) );
            }
        }
    }
}


/*

export const authFail = (error, actionstatus) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
        actionstatus : actionstatus,
    }
}

export const authStart = () => {
    return {
        type: actionTypes.AUTH_START
    }
}


export const authLogin = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('auth/login/', {
            email: email,
            password: password,
        })
        .then(res => {
            console.log('I ma hereeee!')
            console.log(res);
            // if(res.data == )
            console.log(res)
            const token = res.data.key;
            const expirationDate = new Date(new Date().getTime() + 3600 * 1000);
            localStorage.setItem('token', token);
            localStorage.setItem('user_email', email);
            localStorage.setItem('expirationDate', expirationDate);

            axios.get('lawyers/getuser',{
                'headers':{
                    'Authorization': 'Token ' + token
                }
                
            }).then( res =>{
                    const user_id=res.data['user_id']
                    const user_verified = res.data['verified']
                    const user_email = email
                    localStorage.setItem('user_id',user_id)
                    localStorage.setItem('user_email',user_email)
                    localStorage.setItem('user_verified',user_verified)
                    console.log(res)
                    dispatch(authSuccess(token,user_id,user_email,user_verified));
                    dispatch(checkAuthTimeout(3600));
            }).catch(err => {
                console.log(err.response)
            })

        })
        .catch(err => {
            dispatch(authFail(err,'signInFailed'))
        })
    }
}

export const authShowResendSuccess = () => {
    return {
        type: actionTypes.AUTH_RESEND_SUCCESS
    }
}

export const authResendConfirmation = (email, password) => {
    return dispatch => {
        dispatch(authStart());
        axios.post('sendconfirmationemail/', {
            email: email,
            password: password
        })
        .then(res => {
            console.log('Success!')
            console.log(res)
            dispatch(authShowResendSuccess())
        })
        .catch(err => {
            console.log(err)
        })
    }
}







export const authFail = (error, typeFailed) => {
    return {
        type: actionTypes.AUTH_FAIL,
        error: error,
        typeFailed : typeFailed,
    }
}

export const authVerifyEmail = () => {
    return {
        type: actionTypes.AUTH_VERIFY_EMAIL,
    }
}


export const logout = () => {
   /* localStorage.removeItem('token');
    localStorage.removeItem('expirationDate');
    localStorage.removeItem('user_id')
    return {
        type: actionTypes.AUTH_LOGOUT
    };
}

export const checkAuthTimeout = expirationTime => {
    return dispatch => {
        setTimeout(() => {
            dispatch(logout());
        }, expirationTime * 1000)
    }
}*/