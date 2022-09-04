
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { AuthContext } from '../context/Auth.context';
import FormTextInput from '../layouts/FormTextInput';
import { Link } from 'react-router-dom';

const schema = yup.object({
    password: yup
    .string()
    .required('password is required')
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{6,})/,
      'Must Contain 6 Characters, One Uppercase, One Lowercase, One Number and One Special Case Character'
    ),
  confirmPassword: yup
    .string()
    .required('confirm Password is Required')
    .oneOf([yup.ref('password')], "confirm password doesn't match"),
  })

function ResetPassword() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        isSubmitting,
      } = useForm({
        resolver: yupResolver(schema),
      })
    
    
        const onSubmit = (data) => {
        // console.log(data)
        // //register user
        // login({
        //     identifier: data.email,
        //     password: data.password,
        // })
    }

    return (
        <>
        <h2 className='text-center mb-5'>Reset Password</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTextInput
              name='password'
              label='password'
              placeholder='Enter Your Password'
              errors={errors}
              register={register}
            />
            <FormTextInput
              name='confirmPassword'
              label='Confirm Password'
              placeholder='Confirm your password'
              errors={errors}
              register={register}
              defaultValue='Obaydul@gmail.com'
            />
            {/* <p>Forgot Password ? <Link to='/forgot-password'>Click Here</Link></p> */}
    
            <Button
              variant='primary'
              size='md'
              type='submit'
              disabled={isSubmitting ? 'disabled' : ''}
              className='text-center d-inline-block w-auto'
            >
              Reset Password
            </Button>
          </Form>
        </>
      )
}


export default ResetPassword