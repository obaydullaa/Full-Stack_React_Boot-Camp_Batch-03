import React from 'react'
import { useState } from 'react'

export default function ControlledForm() {
    const initialData = {
        fullName: '',
        userName: '',
        email: '',
        bdNumber: '',
        password: '',
        confirmPassword: '',
        webSlug: '',
        webUrl: '',
        profession: '',
        gender: 'male',
    }

    const [userData, setUserData] = useState(initialData)
    const [errors, setErrors] = useState({
        fullName: '',
        userName: '',
        email: '',
        bdNumber: '',
        password: '',
        confirmPassword: '',
        webUrl: '',
        profession: '',
    })
    const [submitted, setSubmitted] = useState(false)

    const handleChange = (evt) => {
        // console.log(evt.target.name, evt.target.value)
        setUserData({
            ...userData,
            [evt.target.name]: evt.target.value,
        })

        setErrors({
            ...errors,
            [evt.target.name]: '',
        })
    }

    const handleSubmit = (evt) => {
        evt.preventDefault()
        const {fullName, userName, email, bdNumber, password, confirmPassword, webUrl, profession } = userData;
        
        const userError = {
            fullName: '',
            userName: '',
            email: '',
            bdNumber: '',
            password: '',
            confirmPassword: '',
        }

        let isError = false;
        
        if(fullName === ''){
                isError = true;
                userError.fullName = 'Full Name is Required';
            }
        
        if(userName === ''){
                isError = true;
                userError.userName = 'User Name is Required'
            }
        
        const regexEmail = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/;
        if(email === '' || !regexEmail.test(email)){
                isError = true;
                userError.email = 'Email is Required and must be valid'
            }

            const bdPhoneNum = /(^(\+8801|8801|01|008801))[1|3-9]{1}(\d){8}$/
            
        if(bdNumber === '' || !bdPhoneNum.test(bdNumber)){
                isError = true;
                userError.bdNumber = 'Bangladeshi Number is Required'
            }
            // const decimal=  /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[^a-zA-Z0-9])(?!.*\s).{8,15}$/;
            // console.log(!password.match(decimal))
            // function password_validate(p) {
            //     return /[A-Z]/.test(p) && /[0-9]/.test(p) && !/[aeiou]/.test(p) && /^[@#][A-Za-z0-9]{7,13}$/.test(p);
            // }

          const regPassword =  /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{8,})/;

        if(password === '' || !regPassword.test(password)){
                isError = true;
                // userError.password = 'Password is Required & must be valid';
                userError.password = 'At least 8 characters, start a-z then A-Z, then 0-9 & special character';
            }

            if( confirmPassword === '' || password !== confirmPassword){
                isError = true;
                userError.confirmPassword = 'Please Confirm your Password'
            }
            // const regexWebUrl = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?'); 
            function urlPatternValidation(webUrl){
                const regex = new RegExp('(https?://)?([\\da-z.-]+)\\.([a-z.]{2,6})[/\\w .-]*/?');    
                return regex.test(webUrl);
              };

            if( webUrl === '' || urlPatternValidation(password)){
                isError = true;
                userError.webUrl = 'Please Valid URL'
            }
            if( profession === '' ){
                isError = true;
                userError.profession = 'Profession is Required'
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
            webUrl,
            profession,
            gender,
        } = userData;

  return (
    <div className='container'>
        
        <h2 className='formHeading'>React Control Form Validation</h2>
        {submitted && (<h2>Form Submit Successfully</h2>)}
        <br/>
        {!submitted && 
        (<form onSubmit={handleSubmit}>
            <fieldset>
                <input type="text"
                placeholder='Full Name*'
                name='fullName'
                id='fullName'
                value={fullName}
                onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.fullName}</p>
            </fieldset>

            <fieldset>
                <input type="text"
                placeholder='User Name*'
                name='userName'
                id='userName'
                value={userName}
                onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.userName}</p>
            </fieldset>

            <fieldset>
                <input type="email"
                placeholder='Email*'
                name='email'
                id='email'
                value={email}
                onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.email}</p>
            </fieldset>

            <fieldset>
                <input type="number"
                placeholder='Bd Number*'
                name='bdNumber'
                id='bdNumber'
                value={bdNumber}
                onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.bdNumber}</p>
            </fieldset>

            <fieldset>
                <input type="password"
                placeholder='Password*'
                name='password'
                id='password'
                value={password}
                onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.password}</p>
            </fieldset>   

            <fieldset>
                <input type="password"
                placeholder='Confirm Password*'
                name='confirmPassword'
                id='confirmPassword'
                value={confirmPassword}
                onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.confirmPassword}</p>
            </fieldset>  

            <fieldset>
                <input type="url"
                placeholder='Website URL*'
                name='webUrl'
                id='webUrl'
                value={webUrl}
                onChange={handleChange}
                />
                <p style={{color: 'red'}}>{errors.webUrl}</p>
            </fieldset>
            <fieldset>
                <input type="text"
                placeholder='Slug'
                name='webSlug'
                id='webSlug'
                value={webSlug}
                onChange={handleChange}
                />    
            </fieldset>  
                
            <fieldset>
                <select 
                name="profession" 
                id="profession"
                onChange={handleChange}
                value={profession}
                >
                    <option value="" disabled>Select Option</option>
                    <option value="reactDeveloper">React js Developer</option>
                    <option value="vueDeveloper">Vue js Developer</option>
                    <option value="mernDeveloper">MERN Stack Developer</option>
                    <option value="wpDeveloper">Wordpress Developer</option>
                </select>
                <p style={{color: 'red'}}>{errors.profession}</p>
            </fieldset>
            
            <fieldset>
                <div className='radioBtnWrap'>
                    <div className='singleRadio'>
                        <input type="radio"
                        name='gender' 
                        value='male' 
                        id='male' 
                        checked={gender === 'male'}
                        onChange={handleChange}
                        />
                        <label htmlFor="male"> Male </label>
                    </div>
                                
                <div className='singleRadio'>
                    <input type="radio"
                        name='gender'
                        value='female' 
                        id='female' 
                        checked={gender === 'female'}
                        onChange={handleChange}
                        />
                        <label htmlFor="female">Female</label>
                </div>
                </div>
            </fieldset>
            <div className="button-wrap">
                <button className='submitBtn' type='submit' value='submit'>Submit</button>
            </div>
        </form>)}
    </div>
  )
}
