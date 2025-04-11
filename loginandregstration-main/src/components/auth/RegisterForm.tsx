import React, { useState } from 'react';
import { Button } from '../ui/Button';
import { Input } from '../ui/Input';
import { EyeIcon, EyeOffIcon, UserIcon, MailIcon, LockIcon } from 'lucide-react';
export const RegisterForm: React.FC = () => {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState<{
    fullName?: string;
    email?: string;
    password?: string;
    confirmPassword?: string;
  }>({});
  const validate = () => {
    const newErrors: {
      fullName?: string;
      email?: string;
      password?: string;
      confirmPassword?: string;
    } = {};
    if (!fullName) {
      newErrors.fullName = 'Full name is required';
    }
    if (!email) {
      newErrors.email = 'Email is required';
    } else if (!/\S+@\S+\.\S+/.test(email)) {
      newErrors.email = 'Email is invalid';
    }
    if (!password) {
      newErrors.password = 'Password is required';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters';
    }
    if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      // In a real app, you would handle registration here
      console.log('Register form submitted', {
        fullName,
        email,
        password
      });
      alert('Registration form submitted successfully');
    }
  };
  return <form onSubmit={handleSubmit} className="space-y-5">
      <div>
        <Input id="fullName" type="text" label="Full Name" value={fullName} onChange={e => setFullName(e.target.value)} error={errors.fullName} icon={<UserIcon size={18} className="text-gray-500" />} />
      </div>
      <div>
        <Input id="email" type="email" label="Email" value={email} onChange={e => setEmail(e.target.value)} error={errors.email} icon={<MailIcon size={18} className="text-gray-500" />} />
      </div>
      <div>
        <Input id="password" type={showPassword ? 'text' : 'password'} label="Password" value={password} onChange={e => setPassword(e.target.value)} error={errors.password} icon={<LockIcon size={18} className="text-gray-500" />} endIcon={<button type="button" onClick={() => setShowPassword(!showPassword)} className="text-gray-500 focus:outline-none">
              {showPassword ? <EyeOffIcon size={18} /> : <EyeIcon size={18} />}
            </button>} />
      </div>
      <div>
        <Input id="confirmPassword" type={showPassword ? 'text' : 'password'} label="Confirm Password" value={confirmPassword} onChange={e => setConfirmPassword(e.target.value)} error={errors.confirmPassword} icon={<LockIcon size={18} className="text-gray-500" />} />
      </div>
      <div className="flex items-center">
        <input id="terms" name="terms" type="checkbox" className="h-4 w-4 text-blue-600 border-gray-300 rounded focus:ring-blue-500" required />
        <label htmlFor="terms" className="ml-2 block text-sm text-gray-700">
          I agree to the{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Terms of Service
          </a>{' '}
          and{' '}
          <a href="#" className="text-blue-600 hover:text-blue-800">
            Privacy Policy
          </a>
        </label>
      </div>
      <Button type="submit" className="w-full">
        Create Account
      </Button>
      <div className="relative mt-6">
        <div className="absolute inset-0 flex items-center">
          <div className="w-full border-t border-gray-300"></div>
        </div>
        <div className="relative flex justify-center text-sm">
          <span className="px-2 bg-white text-gray-500">Or sign up with</span>
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