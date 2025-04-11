import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { EyeIcon, EyeOffIcon, UserIcon, LockIcon } from 'lucide-react';
export const LoginForm: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    email?: string;
    password?: string;
  }>({});
  const validate = () => {
    const newErrors: {
      email?: string;
      password?: string;
    } = {};
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you would handle authentication here
      console.log('Login form submitted', {
        email,
        password
      });
      alert('Login form submitted successfully');
    }
  };
  return <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Input id="email" type="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} error={errors.email} icon={<UserIcon size={18} className="text-gray-500" />} />
      </div>
      <div>
        <Input id="password" type={showPassword ? 'text' : 'password'} label="Password" value={password} onChange={e => setPassword(e.target.value)} error={errors.password} icon={<LockIcon size={18} className="text-gray-500" />} endIcon={<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 focus:outline-none">
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>} />
      </div>
      <div className="flex items-center justify-between">
        <div className="flex items-center">
          <input id="remember-me" name="remember-me" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" />
          <label htmlFor="remember-me" className="ml-2 block text-sm text-gray-700">
            Remember me
          </label>
        </div>
        <div className="text-sm">
          <a href="#" className="text-blue-600 hover:text-blue-800 font-medium">
            Forgot password?
          </a>
        </div>
      </div>
      <Button type="submit" className="w-full">
        Sign in
      </Button>
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or continue with</span>
        </div>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <button type="button" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          Google
        </button>
        <button type="button" className="w-full flex justify-center py-2 px-4 border border-gray-300 rounded-md shadow-sm bg-white text-sm font-medium text-gray-700 hover:bg-gray-50">
          Facebook
        </button>
      </div>
    </form>;
};