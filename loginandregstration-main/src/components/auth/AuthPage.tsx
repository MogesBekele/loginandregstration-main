import React, { useState } from 'react';
import { LoginForm } from './LoginForm';
import { RegisterForm } from './RegisterForm';
export const AuthPage: React.FC = () => {
  const [isLogin, setIsLogin] = useState(true);
  return <div className="flex flex-col md:flex-row w-full">
      {/* Left side - Branding/Image */}
      <div className="hidden md:flex md:w-1/2 bg-blue-600 text-white justify-center items-center p-8">
        <div className="max-w-md">
          <h1 className="text-4xl font-bold mb-4">Welcome to our Platform</h1>
          <p className="text-xl opacity-90">
            Join thousands of users to access all our amazing features and
            services.
          </p>
        </div>
      </div>
      {/* Right side - Auth forms */}
      <div className="w-full md:w-1/2 flex justify-center items-center p-4 md:p-8">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-800">
              {isLogin ? 'Sign In' : 'Create Account'}
            </h2>
            <p className="text-gray-600 mt-2">
              {isLogin ? 'Enter your credentials to access your account' : 'Fill out the form to get started'}
            </p>
          </div>
          {isLogin ? <LoginForm /> : <RegisterForm />}
          <div className="text-center mt-6">
            <p className="text-gray-600">
              {isLogin ? "Don't have an account?" : 'Already have an account?'}
              <button onClick={() => setIsLogin(!isLogin)} className="ml-1 text-blue-600 hover:text-blue-800 font-medium">
                {isLogin ? 'Sign up' : 'Sign in'}
              </button>
            </p>
          </div>
        </div>
      </div>
      
    </div>;
};