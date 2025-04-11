import React from 'react';
interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
  endIcon?: React.ReactNode;
}
export const Input: React.FC<InputProps> = ({
  label,
  id,
  error,
  icon,
  endIcon,
  className = '',
  ...props
}) => {
  return <div className="space-y-1">
      <label htmlFor={id} className="block text-sm font-medium text-gray-700">
        {label}
      </label>
      <div className="relative">
        {icon && <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            {icon}
          </div>}
        <input id={id} className={`
            block w-full rounded-md shadow-sm 
            ${icon ? 'pl-10' : 'pl-3'} 
            ${endIcon ? 'pr-10' : 'pr-3'} 
            py-2
            border-gray-300 
            ${error ? 'border-red-500 focus:ring-red-500 focus:border-red-500' : 'focus:ring-blue-500 focus:border-blue-500'} 
            ${className}
          `} {...props} />
        {endIcon && <div className="absolute inset-y-0 right-0 pr-3 flex items-center">
            {endIcon}
          </div>}
      </div>
      {error && <p className="text-red-600 text-sm">{error}</p>}
    </div>;
};