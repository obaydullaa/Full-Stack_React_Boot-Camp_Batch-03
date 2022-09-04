
import { yupResolver } from '@hookform/resolvers/yup';
import React, { useContext } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import * as yup from "yup";
import { AuthContext } from '../context/Auth.context';
import FormTextInput from '../layouts/FormTextInput';
import { Link } from 'react-router-dom';

const schema = yup.object({
  email: yup
    .string()
    .lowercase()
    .required('Email is Required'),
  password: yup
    .string()
    .required('password is required'),
})


function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
    isSubmitting,
  } = useForm({
    resolver: yupResolver(schema),
  })

  const {login} = useContext(AuthContext)

  const onSubmit = (data) => {
    console.log(data)
    //register user
    login({
      identifier: data.email,
      password: data.password,
    })
  }

  return (
    <>
    <h2 className='text-center mb-5'>Login</h2>
    <Form onSubmit={handleSubmit(onSubmit)}>
        <FormTextInput
          name='email'
          label='Email'
          placeholder='Enter Your Email'
          errors={errors}
          register={register}
          defaultValue='Obaydul@gmail.com'
        />
        <FormTextInput
          name='password'
          label='password'
          placeholder='Enter password'
          errors={errors}
          register={register}
          type='password'
          defaultValue='abcdeFf1@'
        />
        <p>Forgot Password ? <Link to='/forgot-password'>Click Here</Link></p>

        <Button
          variant='primary'
          size='md'
          type='submit'
          disabled={isSubmitting ? 'disabled' : ''}
          className='text-center d-inline-block w-auto'
        >
          Login
        </Button>
      </Form>
    </>
  )
}

export default Login