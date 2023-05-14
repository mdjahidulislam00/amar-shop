import React, { useState } from 'react';
import { FaFacebook, FaGoogle} from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider} from "firebase/auth";
import firebaseConfig from '../../firebase.config';
import { useContext } from 'react';
import { currentUser } from '../../App';
import { useEffect } from 'react';
import { useLocation, useNavigate,  } from 'react-router-dom';



const app = initializeApp(firebaseConfig);


const SignUp = () => {
    const [logInUser, setLogInUser] = useContext(currentUser);
    const [newUser, setNewUser] = useState(false);
    const [userInfo, setUserInfo] = useState({
        name:'',
        email: '',
        password: '',
        isSignIn: false
    });

    const [validationError, setValidationError] = useState({})
    const navigate = useNavigate();
    const location = useLocation();
    const {from} = location.state || {from: {pathname: ''}}
    const handelInput = (e) =>{
        setUserInfo({...userInfo, [e.target.name]: e.target.value});
    }

    const handelSubmit =(e) =>{
        setValidationError(Validation(userInfo));

        if(newUser && userInfo.name && userInfo.email && userInfo.password ){
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then( res => {
                const user = res.user;
                console.log(user);
                setLogInUser(user)
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log(errorMessage, errorCode)
            });
            
        }
        if(!newUser && userInfo.email && userInfo.password){
            const auth = getAuth();
            signInWithEmailAndPassword(auth, userInfo.email, userInfo.password)
            .then((res) => {
                const user = res.user;
                setLogInUser(user)
                navigate('/OrderConfirmPage')
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
          
        });  
        }
        e.preventDefault();
    }

    useEffect(() => {
 
        if(Object.keys(validationError).length === 0){
            console.log(userInfo)
            userInfo.isSignIn = true;
        }
    },[validationError])

    const Validation = (userInfo) =>{
        const userError = {};
        const email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

        if(newUser &&  userInfo.name === ''){
            userError.name ='name is required!';
        }
        if(userInfo.email === ''){
            userError.email ='email is required!'; 
        }
        else if(!email_pattern.test(userInfo.email)){
            userError.email ='email is not a valid!';
        }
        if(userInfo.password === ''){
            userError.password ='password is required!';
        }
        else if(userInfo.password.length < 6){
            userError.password = 'password must be 4 digits';
        }
        else if(userInfo.password.length > 10){
            userError.password = 'password should not more than 10 digits';
        }
        return userError;
    }
    //GoogleSignIn
    const googleProvider = new GoogleAuthProvider();
    const handelGoogleSignIn =()=>{
        console.log('clicked google sign in')
        const auth = getAuth(app);
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            console.log('google user' + user)
            setLogInUser(user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
        }).catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = GoogleAuthProvider.credentialFromError(error);
            // ...
        });

    }
    //Facebook log in handel
    const facebookProvider = new FacebookAuthProvider();
    const handelFacebookSignUp =()=>{
        const auth = getAuth();
        signInWithPopup(auth, facebookProvider)
          .then((result) => {
            // The signed-in user info.
            const user = result.user;
            console.log('facebook user' + user)
        
            // This gives you a Facebook Access Token. You can use it to access the Facebook API.
            const credential = FacebookAuthProvider.credentialFromResult(result);
            const accessToken = credential.accessToken;
            setLogInUser(user)
            // IdP data available using getAdditionalUserInfo(result)
            // ...
          })
          .catch((error) => {
            // Handle Errors here.
            const errorCode = error.code;
            const errorMessage = error.message;
            // The email of the user's account used.
            const email = error.customData.email;
            // The AuthCredential type that was used.
            const credential = FacebookAuthProvider.credentialFromError(error);
        
            // ...
          });
    }
    return (
        <div className='w-100% h-auto bg-cover bg-gradient-to-r from-yellow-500 to-yellow-600'>
            <div className="logInCard container mx-auto flex flex-row justify-center">
                <div className="cardBody w-80 my-12 rounded-lg bg-gray-100">
                    <div className="cardTitle text-center ">
                        <div className='text-3xl font-bold py-4 text-yellow-600'>{newUser ? 'Sign Up' : 'Log In'}</div>
                    </div>
                    <div className='mt-8' >
                        <form onSubmit={handelSubmit} className="cardContent flex flex-col space-y-2 items-center">
                            {newUser && <input onChange={handelInput}  className="w-56 rounded-lg py-2 px-5 shadow-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none text-sm text-gray-400" placeholder='Name' type="text" name="name" id="name" />}
                            <span className='text-sm font-light text-red-500'>{validationError.name}</span>
                            <input onChange={handelInput}   className="w-56 rounded-lg py-2 px-5 shadow-lg focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none text-sm text-gray-400" placeholder='Email' type="email" name="email" id="email" />
                            <span className='text-sm font-light text-red-500'>{validationError.email}</span>
                            <input onChange={handelInput}  className="w-56 rounded-lg py-2 px-5 shadow-lg  focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none text-sm text-gray-400 " placeholder='Password'type="password" name="password" id="password" />
                            <span className='text-sm font-light text-red-500'>{validationError.password}</span>
                            <input className="w-56 bg-yellow-500 text-white rounded-lg py-2 px-5 shadow-lg mt-5 text-md font-semibold cursor-pointer hover:bg-yellow-400" type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
                        </form>
                    </div>
                    <div className="anotherLogIn text-center mt-2">
                        <span className="text-sm text-gray-400">Login with</span>
                        <div className="item flex flex-row space-x-3 justify-center mt-2">
                            <div onClick={handelGoogleSignIn} className="text-2xl text-red-500 font-bold rounded-full cursor-pointer hover:scale-110"><FaGoogle /></div>
                            <div onClick={handelFacebookSignUp} className="text-2xl text-blue-500 font-bold rounded-full cursor-pointer hover:scale-110"><FaFacebook /></div>
                        </div>
                    </div>
                    <div className="signup text-center mt-3 p-5">
                        <span className="text-sm text-gray-400">Or <span onClick={()=>setNewUser(!newUser)} className='ml-1 text-blue-400 font-semibold text-md border border-blue-300 rounded p-1 cursor-pointer hover:bg-blue-300 hover:text-white'>{newUser ? 'Log In' : 'Sign Up'}</span></span>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SignUp;