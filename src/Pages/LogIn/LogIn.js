import React, { useState } from 'react';
import { FaFacebook, FaGoogle, FaTwitter } from 'react-icons/fa';
import { initializeApp } from 'firebase/app';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, GoogleAuthProvider, signInWithPopup, FacebookAuthProvider } from "firebase/auth";
import firebaseConfig from '../../firebase.config';

const app = initializeApp(firebaseConfig);

const LogIn = () => {
    const [newUser, setNewUser] = useState(false);
    const [user, setUser] = useState({
        isSignIn: false,
        name: '',
        email: '',
        password: '',
        phone: '',
        photo: '',
        isErrorMessage: false,
        isSuccessMessage: false
    });

    const handelOnBlur = (e) =>{
        let isFiledValid = true;
        if(e.target.name === 'email'){
            isFiledValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(e.target.value);
        }
        if(e.target.name === 'password'){
            isFiledValid = (e.target.value.length > 6);
        }
        if(isFiledValid){
            const newUserInfo = {...user};
            newUserInfo[e.target.name] = e.target.value;
            setUser(newUserInfo);
        }
    }
    const handelSubmit =(e) =>{
        if(newUser && user.email && user.password){
            const auth = getAuth(app);
            createUserWithEmailAndPassword(auth, user.email, user.password)
            .then( res => {
                const newUserErrorMessage = {...user}
                newUserErrorMessage.isSuccessMessage = true;
                newUserErrorMessage.isErrorMessage = false;
                setUser(newUserErrorMessage)
                console.log(res);
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                const newUserErrorMessage = {...user}
                newUserErrorMessage.isErrorMessage = true;
                newUserErrorMessage.isSuccessMessage = false;
                setUser(newUserErrorMessage)
                
                console.log(errorMessage)
            });
        }
        if(!newUser && user.email && user.password){
            const auth = getAuth(app);
                signInWithEmailAndPassword(auth, user.email, user.password)
                .then((res) => {
                    const newUserErrorMessage = {...user}
                    newUserErrorMessage.isSuccessMessage = true;
                    newUserErrorMessage.isErrorMessage = false;
                    setUser(newUserErrorMessage);
                    console.log(res);
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    const newUserErrorMessage = {...user}
                    newUserErrorMessage.isErrorMessage = true;
                    newUserErrorMessage.isSuccessMessage = false;
                    setUser(newUserErrorMessage)
            });
        }
        e.preventDefault();
    }

    const handelGoogleSignIn = () =>{
        const googleProvider = new GoogleAuthProvider();
        
        const auth = getAuth();
        signInWithPopup(auth, googleProvider)
        .then((result) => {
            // This gives you a Google Access Token. You can use it to access the Google API.
            const credential = GoogleAuthProvider.credentialFromResult(result);
            const token = credential.accessToken;
            // The signed-in user info.
            const user = result.user;
            // IdP data available using getAdditionalUserInfo(result)
            // ...
            console.log(user);
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
    const handelFacebookLogIn = () =>{
        const facebookProvider = new FacebookAuthProvider();
            const auth = getAuth(app);
            signInWithPopup(auth, facebookProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                console.log(user);

                // This gives you a Facebook Access Token. You can use it to access the Facebook API.
                const credential = FacebookAuthProvider.credentialFromResult(result);
                const accessToken = credential.accessToken;

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
                console.log('facebook error'+ errorMessage + email)
                // ...
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
                        {user.isErrorMessage && <div className=' w-52 text-sm text-red-500'>This email {newUser ? 'already use' : 'not valid'}</div>}
                        <input onBlur={handelOnBlur} className="w-56 rounded-lg py-2 px-5 shadow-lg  focus:border-yellow-500 focus:ring-1 focus:ring-yellow-500 focus:outline-none text-sm text-gray-400 " placeholder='Password'type="password" name="password" id="password" />
                        {user.isSuccessMessage && <div className=' w-52 p-1 text-sm font-semibold text-green-500 text-center'>Successfully {newUser ? 'SignUp': 'LogIn'}</div> }
                        <input onClick={handelSubmit} className="w-56 bg-yellow-500 text-white rounded-lg py-2 px-5 shadow-lg mt-5 text-md font-semibold cursor-pointer hover:bg-yellow-400" type="submit" value={newUser ? 'Sign Up' : 'Log In'} />
                        </form>
                    </div>
                    <div className="anotherLogIn text-center mt-2">
                        <span className="text-sm text-gray-400">Login with</span>
                        <div className="item flex flex-row space-x-3 justify-center mt-2">
                            <span onClick={handelGoogleSignIn} className="text-2xl text-red-500 font-bold rounded-full cursor-pointer hover:scale-110"><FaGoogle /></span>
                            <span onClick={handelFacebookLogIn} className="text-2xl text-blue-500 font-bold rounded-full cursor-pointer hover:scale-110"><FaFacebook /></span>
                            <span className="text-2xl text-blue-400 font-bold rounded-full cursor-pointer hover:scale-110"><FaTwitter /></span>
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