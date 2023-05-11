
const Validation = ({userInfo})=>{
 console.log(userInfo.name)
   const validationErrors={};
   const email_pattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;

    if(userInfo.name === ''){
        validationErrors.name ='name is required!';
    }
    if(userInfo.email === ' '){
       validationErrors.email ='email is required!'; 
    }
    else if(!email_pattern.test(userInfo.email)){
        validationErrors.email ='email is not a valid!';
    }
    if(userInfo.password === ' '){
        validationErrors.password ='password is required!';
    }
    else if(userInfo.password <= 4){
        validationErrors.password = 'password must be 4 digits';
    }
    return validationErrors;
}
export default Validation;