'use client';
import React from 'react';
import { useForm } from 'react-hook-form';
import { useRouter } from 'next/navigation';
import { Error, Title, Button, FormContainer, Input, Label } from './styles';
import { zodResolver } from '@hookform/resolvers/zod';
import { signUpSchema } from '../../utils/validators/signup.schema';
import { signIn } from 'next-auth/react';
import toast from 'react-hot-toast';

const SignUp = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(signUpSchema) });
  const router = useRouter();

  const onSubmit = async (data) => {
    if (data.password !== data.confirmPassword) {
      return;
    }
    const result = await signIn('credentials', {
      name: data.name,
      email: data.email,
      username: data.username,
      password: data.password,
      type: 'register',
      redirect: false,
    });

    if (result?.error) {
      toast(result.error);
    } else {
      router.push('/blog');
    }
  };

  return (
    <FormContainer>
      <Title>Sign Up</Title>
      <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
        <div>
          <Label>Username:</Label>
          <Input
            type='username'
            {...register('username', { required: 'Username is required' })}
          />
          {errors.username && <Error>{errors.username.message}</Error>}
        </div>
        <div>
          <Label>Name:</Label>
          <Input
            type='name'
            {...register('name', { required: 'Name is required' })}
          />
          {errors.name && <Error>{errors.name.message}</Error>}
        </div>
        <div>
          <Label>Email:</Label>
          <Input
            type='email'
            {...register('email', { required: 'Email is required' })}
          />
          {errors.email && <Error>{errors.email.message}</Error>}
        </div>
        <div>
          <Label>Password:</Label>
          <Input
            type='password'
            {...register('password', { required: 'Password is required' })}
          />

          {errors.password && <Error>{errors.password.message}</Error>}
        </div>

        <div>
          <Label>Confirm Password:</Label>
          <Input
            type='password'
            {...register('confirmPassword', {
              required: 'confirmPassword is required',
            })}
          />

          {errors.password && <Error>{errors.password.message}</Error>}
        </div>
        <Button type='submit'>Sign Up</Button>
      </form>
    </FormContainer>
  );
};
export default SignUp;
