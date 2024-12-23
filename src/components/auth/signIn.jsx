'use client';

import { useForm } from 'react-hook-form';
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { Error, Title, Button, FormContainer, Input, Label } from './styles';
import { loginSchema } from '../../utils/validators/login.schema';
import { zodResolver } from '@hookform/resolvers/zod';
import React from 'react';
import { toast } from 'react-hot-toast';

const Signin = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: zodResolver(loginSchema) });
  const router = useRouter();
  console;
  const onSubmit = async (data) => {
    console.log(data);
    const result = await signIn('credentials', {
      username: data.username,
      password: data.password,
      redirect: false,
    });

    if (result?.error) {
      toast(result.error);
      router.push('/blog');
    } else {
      router.push('/blog');
    }
  };

  return (
    <FormContainer>
      <Title>Sign In</Title>
      <form onSubmit={handleSubmit(onSubmit, (e) => console.log(e))}>
        <div>
          <Label>Username:</Label>
          <Input
            {...register('username', { required: 'Username is required' })}
          />
          {errors.email && <Error>{errors?.username?.message}</Error>}
        </div>
        <div>
          <Label>Password:</Label>
          <Input
            type='password'
            {...register('password', { required: 'Password is required' })}
          />
          {errors.password && <Error>{errors?.password?.message}</Error>}
        </div>
        <Button type='submit'>Sign In</Button>
      </form>
    </FormContainer>
  );
};
export default Signin;
