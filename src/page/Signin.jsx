import React, { useState,useEffect } from 'react'
import ButtonSigninToLogin from '../component/ButtonSigninToLogin'
import SwicthPage from '../component/SwicthPage'

function Signin() {
  
      const initialValues = { username: '' , email: '' ,password: ''}
      const [formValues, setformValues] = useState(initialValues);
      const [formErrors, setformErrors] = useState({});
      const [isSubmit,setIsSubmit] = useState(false);

      const handleChange = (e) => {
            const {name, value} = e.target
            setformValues ({...formValues, [name]: value});
            console.log(formValues)
      }
      
      const handleSubmit = (e) => {
            e.preventDefault();
            setformErrors(validate(formValues));
            setIsSubmit(true)

            if (Object.keys(formErrors).length === 0) {
                  localStorage.setItem('userData', JSON.stringify(formValues));
              }
      }

      useEffect(() => {
           
            if (Object.keys(formErrors).length === 0 && isSubmit) {
                localStorage.setItem('userData', JSON.stringify(formValues));
            }
        }, [formErrors, isSubmit]);

      const validate = (values) => {
            const errors = {};
            const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
            if (!values.username) {
                  errors.username = "Username is required";
            }
            if (!values.email) {
                  errors.email = "Email is required";
            } else if (!regex.test(values.email)) {
                  errors.email = "This is not a valid email format!"
            }
            if (!values.password) {
                  errors.password = "Password is required";
            }else if (values.password < 4) {
                  errors.password = "Password must be more than 4 characters"
            }else if (values.password > 10 ) {
                  errors.password = "Password cannot exceed more than 10 characters"
            }
            return errors
      }



  return (
      <>
             
                  <div className="boxsignin" >
                        <h1 className="textWelcom">SIGN IN</h1>
                              <section onSubmit={handleSubmit}> 
                              <form onSubmit={handleSubmit}>
                                    <div className="forminput">
                                          <input type = "email" 
                                                name = 'email' 
                                                placeholder=""
                                                value={formValues.email} 
                                                onChange={handleChange} />
                                          <label className="formlable">Email</label>
                                    </div>
                                    <p>{formErrors.email}</p>
                                    <div className="forminput">
                                          <input type = "text" 
                                                name = 'username' 
                                                placeholder="" 
                                                value={formValues.username}
                                                onChange={handleChange} />
                                          <label className="formlable">Username</label>    
                                    </div>
                                    <p>{formErrors.username}</p>
                                    <div id="main-container">
                                    <div className="forminput">
                                          <input type = "password" 
                                                name = 'password' 
                                                placeholder="" 
                                                value={formValues.password}
                                                onChange={handleChange} />
                                          <label className="formlable" for ="password">Password</label>
                                    </div>
                                    <p>{formErrors.password}</p>
                  </div>
                  {Object.keys(formErrors).length === 0 && isSubmit ? 
                        (<div className='ui massage success'> Signed in succes</div>
                        ) : (
                              <pre>{JSON.stringify( undefined,2)}</pre>
                        )}
                  <button className='BoxbuttonSigninmain BoxbuttonSigninmain1' type="submit">Submit</button>
                  </form>
                  <ButtonSigninToLogin/>
              </section>
      </div>
      
 
      </>
      )
}

export default Signin