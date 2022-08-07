import React from 'react'
import { useState } from 'react'

export default function ControlledForm() {
    const initialData  = {
        fullName: '',
        userName: '',
        email: '',
        bdNumber: '',
        password: '',
        confirmPassword: '',
        webSlug: '',
        webUrl: '',
    }

    const [userData, setUserData] = useState(initialData)
    const [errors, setErrors] = useState({
        fullName: '',
        userName: '',
        email: '',
        bdNumber: '',
        password: '',
        confirmPassword: ''
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (evt) => {
        // console.log(evt.target.name, evt.target.value)
        setUserData({
            ...userData,
            [evt.target.name]: evt.target.value,
        })

        setErrors({
            ...userData,
            [evt.target.name]: '',
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const {fullName, userName, email, bdNumber, password, confirmPassword } = userData;
        
        const userError = {
            fullName: '',
            userName: '',
            email: '',
            bdNumber: '',
            password: '',
            confirmPassword: '',
        }

        let isError = true;
        
        if(fullName === ''){
                isError = true;
                userError.fullName = 'Full Name is Required';
            }
        
        if(userName === ''){
                isError = true;
                userError.userName = 'User Name is Required'
            }

        if(email === ''){
                isError = true;
                userError.email = 'Email is Required'
            }
            
        if(bdNumber == ''){
                isError = true;
                userError.bdNumber = 'Number is Required'
            }
        if(password === ''){
                isError = true;
                userError.password = 'Password is Required'
            }
        if(confirmPassword === ''){
                isError = true;
                userError.confirmPassword = 'Confirm Password is Required'
            }
            setErrors(userError)

        if(isError) return;
        setSubmitted(true)
    }
     
    const {
            fullName, 
            userName, 
            email, 
            bdNumber,
            password, 
            confirmPassword,
            webSlug,
            webUrl
        } = userData;

        console.log(errors.fullName)
        console.log(errors.userName)
        console.log(errors.password)
        console.log(errors.bdNumber)

  return (
    <div className='container' style={{width: 600, margin:'50pz auto'}}>
        
     <h2>Controlled Form React Form Validation</h2>
     {submitted && (<h2>Form Submit Successfully</h2>)}
     <br/>
    {!submitted && (<form onSubmit={handleSubmit}>
            <div>
               <div>
               <input type="text"
                    placeholder='Full Name*'
                    name='fullName'
                    id='fullName'
                    value={fullName}
                    onChange={handleChange}
                />
               </div>
                <p style={{color: 'red'}}>{errors.fullName}</p>
                <div>
                <input type="text"
                    placeholder='User Name*'
                    name='userName'
                    id='userName'
                    value={userName}
                    onChange={handleChange}
                />
                </div>
                <p style={{color: 'red'}}>{errors.userName}</p>
            </div>
            <br/>

            <div>
                <input type="email"
                    placeholder='Email*'
                    name='email'
                    id='email'
                    value={email}
                    onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.email}</p>
                <input type="number"
                    placeholder='Bd Number*'
                    name='bdNumber'
                    id='bdNumber'
                    value={bdNumber}
                    onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.bdNumber}</p>
            </div>
            <br/>

            <div>
                <input type="password"
                    placeholder='Password*'
                    name='password'
                    id='password'
                    value={password}
                    onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.password}</p>
                <input type="password"
                    placeholder='Confirm Password*'
                    name='confirmPassword'
                    id='confirmPassword'
                    value={confirmPassword}
                    onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.confirmPassword}</p>
            </div>
            <br/>

            <div>
                <input type="url"
                    placeholder='Website URL*'
                    name='webUrl'
                    id='webUrl'
                    value={webUrl}
                    onChange={handleChange}
                />
                {/* <p style={{color: 'red'}}>{errors.webUrl}</p> */}
                <input type="text"
                    placeholder='Slug*'
                    name='webSlug'
                    id='webSlug'
                    value={webSlug}
                    onChange={handleChange}
                />
                {/* <p style={{color: 'red'}}>{errors.webSlug}</p> */}
            </div>
            <br/>
            <br/>
            <button type='submit' value='submit'>Submit</button>
        </form>)}
    </div>
  )
}
