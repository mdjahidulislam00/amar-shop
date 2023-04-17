import React, { useState } from 'react';
import { FaFacebook,  FaGithub,  FaGoogle} from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider, GithubAuthProvider } from "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react';
import { userLogInData } from '../../App';
import { useLocation, useNavigate } from 'react-router-dom';

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        phone: '',
        photo: '',
        isErrorMessage: '',
        isSuccessMessage: '',
    });

    const [logInUser, setLogInUser] = useContext(userLogInData);

    const facebookProvider = new FacebookAuthProvider();
    const googleProvider = new GoogleAuthProvider();
    const gitHubProvider = new GithubAuthProvider();

    let navigate = useNavigate();
    let location = useLocation();
    let { from } = location.state || { from: { pathname: "/" } };

    const handelOnBlur = (e) =>{
        let isFiledValid = true;
        if(e.target.name === 'email'){
            isFiledValid = /^([a-zA-Z0-9_\-\.]+)@([a-zA-Z0-9_\-\.]+)\.([a-zA-Z]{2,5})$/.test(e.target.value);
            errorMessageHandel('email not valid')
        }
        if(e.target.name === 'password'){
            isFiledValid = (e.target.value.length > 6);
            errorMessageHandel('password should be 6 character')
        }
        if(isFiledValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const successMessageHandel = (ssms) =>{
            const newUserSuccessMessage = {...user}
            newUserSuccessMessage.isSuccessMessage = ssms;
            newUserSuccessMessage.isErrorMessage = ' ';
            setLogInUser(newUserSuccessMessage);
            setUser(newUserSuccessMessage);
            console.log(newUserSuccessMessage);
    }
    const errorMessageHandel = (esms) => {
        const newUserErrorMessage = {...user}
                newUserErrorMessage.isErrorMessage = esms;
                newUserErrorMessage.isSuccessMessage = ' ';
                setUser(newUserErrorMessage)
                console.log(newUserErrorMessage)
    }
    const handelSubmit =(e) =>{
        if(newUser && user.email && user.password){
            const auth = getAuth();
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then( res => {
                successMessageHandel('SignIn SuccessFully')
                console.log(res);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                errorMessageHandel(error.message)
                
                console.log(errorMessage)
            });
            
        }
        if(!newUser && user.email && user.password){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, user.email, user.password)
            .then((res) => {
                successMessageHandel('Login SuccessFully')
                navigate(from)
                console.log('signIn user' + res.user);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                errorMessageHandel(error.message)
                
        });  
        }
        e.preventDefault();
    }

    const handelGoogleSignIn = () =>{  
        const auth = getAuth(app);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const user = result.user;
            successMessageHandel('Sign in with Google')
            console.log(user);
        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            const email = error.customData.email;
            const credential = GoogleAuthProvider.credentialFromError(error);
            errorMessageHandel(error.message)
            console.log('google signIn :'+ errorCode, errorMessage, credential, email)
    });
    }
    const handelFacebookLogIn = () =>{
           const auth = getAuth();
            signInWithPopup(auth, facebookProvider)
            .then((result) => {
                successMessageHandel('Sign in with Facebook')
                const user = result.user;
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;
                
                console.log('facebook signIn'+ user);
            })
            .catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = FacebookAuthProvider.credentialFromError(error);
                errorMessageHandel(error.message)
                console.log('facebook'+errorCode, errorMessage, credential)
            });
        }
        const handelGitHubLogIn = () =>{
            const auth = getAuth();
            signInWithPopup(auth, gitHubProvider)
            .then((result) => {
                successMessageHandel('Sign in with Github')

                const credential = GithubAuthProvider.credentialFromResult(result);
                const token = credential.accessToken;
                const user = result.user;
                console.log('github'+user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                // The email of the user's account used.
                const email = error.customData.email;
                // The AuthCredential type that was used.
                const credential = GithubAuthProvider.credentialFromError(error);
                // ...
                errorMessageHandel(error.message)
                console.log('gitHub:'+ errorCode, errorMessage, email, credential)
            });

        }
    return (
        <div className='w-100% h-auto bg-cover bg-gradient-to-r from-yellow-500 to-yellow-600'>
            <div className="logInCard container mx-auto flex flex-row justify-center">
                <div className="cardBody w-80 my-20 rounded-lg bg-gray-100">
                    <div className="cardTitle text-center ">
                        <div className='text-3xl font-bold py-4 text-yellow-600'>Login</div>
                    </div>
                    <div className='mt-8' >
                        <form className="cardContent flex flex-col space-y-4 items-center">
                        { newUser && <input onBlur={handelOnBlur}  className="w-56 rounded-lg py-2 px-5 shadow-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none text-sm text-gray-400" placeholder='Name' type="text" name="name" id="name" />}
                        <input onBlur={handelOnBlur}  className="w-56 rounded-lg py-2 px-5 shadow-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none text-sm text-gray-400" placeholder='Email' type="email" name="email" id="email" />
                        {user.isErrorMessage && <div className=' w-52 text-sm text-center text-red-500'>{user.isErrorMessage}</div>}
                        <input onBlur={handelOnBlur} className="w-56 rounded-lg py-2 px-5 shadow-lg  focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none text-sm text-gray-400 " placeholder='Password'type="password" name="password" id="password" />
                        {user.isSuccessMessage && <div className=' w-52 p-1 text-sm font-semibold text-green-500 text-center'>{user.isSuccessMessage}</div> }
                        <input onClick={handelSubmit} className="w-56 bg-yellow-500 text-white rounded-lg py-2 px-5 shadow-lg mt-5 text-md font-semibold cursor-pointer hover:bg-yellow-400" type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
                        </form>
                    </div>
                    <div className="anotherLogIn text-center mt-2">
                        <span className="text-sm text-gray-400">Login with</span>
                        <div className="item flex flex-row space-x-3 justify-center mt-2">
                            <span onClick={handelGoogleSignIn} className="text-2xl text-red-500 font-bold rounded-full cursor-pointer hover:scale-110"><FaGoogle /></span>
                            <span onClick={handelFacebookLogIn} className="text-2xl text-blue-500 font-bold rounded-full cursor-pointer hover:scale-110"><FaFacebook /></span>
                            <span onClick={handelGitHubLogIn} className="text-2xl text-gray-700 font-bold rounded-full cursor-pointer hover:scale-110"><FaGithub /></span>
                        </div>
                    </div>
                    <div className="signup text-center mt-3 p-5">
                        <span className="text-sm text-gray-400">Or <span onClick={()=>setNewUser(!newUser)} className='text-blue-400 font-semibold text-md border border-blue-300 rounded p-1 cursor-pointer hover:bg-blue-300 hover:text-white'>{newUser ? 'LogIn' : 'SignUp'}</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default LogIn;