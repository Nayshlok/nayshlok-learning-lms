import React from 'react';
import Auth from '../../authentication/Auth';

const auth = new Auth();

export default function Login (){
  auth.login();
  auth.handleAuthentication();
  return null;
}
