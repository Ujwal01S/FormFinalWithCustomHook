
import useInput from '../hooks/use-input';

const SimpleInput = (props) => {
  const {
    value: enteredName,
    isValid: enteredNameIsValid,
    hasError: nameInputHasError,
    valueChangeHandler: nameChangeHandler,
    reset: resetNameInput,
    inputBlurHandler: nameBlurHandler
  }= useInput((value)=>value.trim() !== '');

  const {
    value:enteredEmail,
    isValid: enteredEmailIsValid,
    hasError: emailInputHasError,
    valueChangeHandler: emailChangeHandler,
    reset: resetEmailInput,
    inputBlurHandler: emailBlurHandler
  }= useInput(value =>value.includes('@'));


  let formIsValid= false;

  if(enteredNameIsValid && enteredEmailIsValid) {
    formIsValid= true;
  }

  // const nameInputChangeHandler= (event)=> {
  //   setEnteredName(event.target.value);
  //   // if(event.target.value.trim() !== ''){
  //   //   setEnteredNameIsValid(true);
  //   // }
  // };

  // const nameInputBlurHandler= (event)=> {
  //   setEnteredNameIsTouched(true);
  //   // if(enteredName.trim() === ''){
  //   //   setEnteredNameIsValid(false);
  //   // }
  // };

  // const emailInputChangeHandler= (event)=> {
  //   setEnteredEmail(event.target.value);
  //  };

  // const emailInputBlurHandler= (event)=> {
  //   setEnteredEmailIsTouched(true);
  // };

  const formSubmissionHandler= (event)=> {
    event.preventDefault();

    if(!enteredNameIsValid){
      return;
    }
    // if(enteredName.trim() === ''){
    //   setEnteredNameIsValid(false);
    //   return;
    // }
    // setEnteredNameIsValid(true);
    console.log(enteredName);
    resetNameInput();

    // setEnteredEmail('');
    // setEnteredEmailIsTouched(false);
    resetEmailInput();

  };

  const nameInputClasses= nameInputHasError
   ? 'form-control invalid' 
   : 'form-control';



   const emailInputClasses= emailInputHasError
   ? 'form-control invalid' 
   : 'form-control';

  return (
    <form onSubmit={formSubmissionHandler}>
      <div className={nameInputClasses}>
        <label htmlFor='name'>Your Name</label>
        <input
         onChange={nameChangeHandler}
         onBlur={nameBlurHandler}
         type='text' 
         id='name'
         value={enteredName} 
         />
         {nameInputHasError && <p className="error-text">Name must not be empty</p>}
      </div>

      <div className={emailInputClasses} >
      <label htmlFor='email'>Your Email</label>
        <input
         onChange={emailChangeHandler}
         onBlur={emailBlurHandler}
         type='email' 
         id='email'
         value={enteredEmail} 
         />
         {emailInputHasError && <p className='error-text'>Email must not be empty</p>}
      </div>
      <div className="form-actions">
        <button disabled= {!formIsValid} >Submit</button>
      </div>
    </form>
  );
};

export default SimpleInput;
