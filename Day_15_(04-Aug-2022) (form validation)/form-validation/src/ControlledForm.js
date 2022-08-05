import React, { useRef } from 'react'
import { useState } from 'react'

export default function ControlledForm() {
    const intialData = {
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
        gender: 'male',
    }
    const [userData, setUserData] = useState(intialData)
    const [submitted, setSubmitted] = useState(false)
    const [errors, setErrors] = useState({
        firstName: '',
        lastName: '',
        email: '',
        profession: '',
    })

    const handleChange = (evt) => {
        // console.log(evt.target.name, evt.target.value)

        setUserData({
            ...userData,
            [evt.target.name] : evt.target.value
        })

        setErrors({
            ...errors,
            [evt.target.name] : ''
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault();
        const {firstName, lastName, email, profession} = userData;

        const userErrors = {
            firstName: '',
            lastName: '',
            email: '',
            profession: '',
        }
        
        let isError = false;

        if(firstName === ''){
            isError = true;
            userErrors.firstName = 'First Name is Required'
        }
        if(lastName === ''){
            isError = true;
            userErrors.lastName = 'Last Name is Required'
        }
        if(email === ''){
            isError = true;
            userErrors.email = 'Email is Required'
        }
        if(profession === ''){
            isError = true;
            userErrors.profession = 'Profession is Required'
        }
        setErrors(userErrors)

        // if(userErrors.values().some(elm => elm.length > 0)){
        //     return 
        // }

        if(isError) return
        setSubmitted(true)
        setUserData(intialData)


        // Form is valid, Now you can submit the form.
        // Submit form
    }
    // console.log(errors)

    const {firstName, lastName, email, profession, gender} = userData;

  return (
    <div className='container' style={{width: 600, margin:'50pz auto'}}>
        
     <h2>Controlled Form React Form Validation</h2>
     <br/>
        {submitted && <h2>From Successfully Submitted</h2>}
         {!submitted && (<form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="firstName">FirstName: </label>
                <input 
                    type="text" 
                    name='firstName' 
                    id='firstName' 
                    value={firstName}
                    onChange={handleChange}
                />
            </div>
            <p style={{color: 'red'}}>{errors.firstName }</p>
            <br/>

           <div>
            <label htmlFor="lastName">LastName: </label>
                <input 
                    type="text" 
                    name='lastName' 
                    id='lastName' 
                    value={lastName}
                    onChange={handleChange}
                />
           </div>
           <p style={{color: 'red'}}>{errors.lastName }</p>
            <br/>

            <div>
                <label htmlFor="email">Email: </label>
                <input 
                    type="mail" 
                    name='email' 
                    id='email' 
                    value={email}
                    onChange={handleChange}
                />
            </div>
            <p style={{color: 'red'}}>{errors.email }</p>
            <br/>

            <div>
                <label htmlFor="profession">Profession: </label>
                <select
                id='profession'
                name='profession'
                value={profession}
                onChange={handleChange}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="developer">Web Developer</option>
                    <option value="softDeveloper">Software Developer</option>
                    <option value="designer">Designer</option>
                </select>
            </div>
            <p style={{color: 'red'}}>{errors.profession }</p>
            <br/>

            <div>
                <label htmlFor="gender">Gender: </label>
                <input type="radio" 
                name='gender'
                checked={gender === 'male'}
                value='male'
                onChange={handleChange}
                /> Male
                <input type="radio" 
                name='gender'
                checked={gender === 'female'}
                value='female'
                onChange={handleChange}
                /> Female
            </div>
            <br/>
            <button type='submit' value='submit'>Submit</button>
        </form>)}

    </div>
  )
}
