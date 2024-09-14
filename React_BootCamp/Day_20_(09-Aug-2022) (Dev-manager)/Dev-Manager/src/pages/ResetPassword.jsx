
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { AuthContext } from '../context/Auth.context';
import FormTextInput from '../layouts/FormTextInput';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { axiosPublicInstance } from '../config/axios';
import { toast } from 'react-toastify';

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
  const [searchParams] = useSearchParams()
  const code = searchParams.get('code')
  const navigate = useNavigate();

  console.log(code)

    const {
        register,
        handleSubmit,
        formState: { errors },
        isSubmitting,
      } = useForm({
        resolver: yupResolver(schema),
      })
    
    const onSubmit = async (data) => {
      console.log(data)
      try {
        const response = await axiosPublicInstance.post('/auth/reset-password', {
          code: code,
          password: data.password,
          passwordConfirmation: data.confirmPassword,
        })
        console.log(response.data)
        toast.success('Password resetted successfully, now can login with updated password')
        navigate('/login')

      } catch(err) {
        console.log(err.response)
        toast.error('Issue in Resetting password please try again')
      }
      // console.log(response.data)
    }

    return (
        <>
        <h2 className='text-center mb-5'>Reset Password</h2>
        <Form onSubmit={handleSubmit(onSubmit)}>
            <FormTextInput
              name='password'
              type='password'
              label='password'
              placeholder='Enter Your Password'
              errors={errors}
              register={register}
            />
            <FormTextInput
              name='confirmPassword'
              type='password'
              label='Confirm Password'
              placeholder='Confirm your password'
              errors={errors}
              register={register}
              
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