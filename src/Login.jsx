import React, { useState, useEffect } from 'react';
import { 
  LockClosedIcon, 
  EnvelopeIcon, 
  ArrowRightIcon,
  XMarkIcon 
} from '@heroicons/react/24/solid';

const AuthModal = ({ onClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    repeatPassword: ''
  });

  useEffect(() => {
    const originalStyle = window.getComputedStyle(document.body);
    const scrollPosition = window.scrollY;

    document.body.style.position = 'fixed';
    document.body.style.top = `-${scrollPosition}px`;
    document.body.style.width = '100%';
    document.body.style.overflow = 'hidden';

    return () => {
      document.body.style.position = '';
      document.body.style.top = '';
      document.body.style.width = '';
      document.body.style.overflow = '';
      
      window.scrollTo(0, parseInt(document.body.style.top) * -1);
    };
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { email, password, repeatPassword } = formData;

    if (isLogin) {
      console.log('Logging in with', { email, password });
    } else {
      if (password !== repeatPassword) {
        alert("Passwords do not match!");
        return;
      }
      console.log('Signing up with', { email, password, repeatPassword });
    }
    onClose();
  };

  return (
    <div 
      className="fixed inset-0 flex items-center justify-center 
      bg-black bg-opacity-40 backdrop-blur-sm z-50 overflow-hidden"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div 
        className="relative w-[500px] bg-white/10 rounded-3xl 
        shadow-2xl overflow-hidden animate-fade-in"
      >
        <button 
          onClick={onClose} 
          className="absolute top-4 right-4 z-50 
          bg-white/20 rounded-full p-2 
          hover:bg-white/30 transition-all group"
        >
          <XMarkIcon 
            className="w-6 h-6 text-white 
            group-hover:rotate-90 transition-transform duration-300" 
          />
        </button>

        <div 
          className="absolute inset-0 
          bg-gradient-to-br from-blue-900/40 to-white-500/30 
          -z-10 transform skew-y-6"
        ></div>
        
        <div className="p-8 relative z-10">
          <div className="flex justify-center mb-6">
            <button 
              onClick={() => setIsLogin(true)} 
              className={`mr-4 px-4 py-2 rounded-full transition-all ${
                isLogin 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Login
            </button>
            <button 
              onClick={() => setIsLogin(false)} 
              className={`px-4 py-2 rounded-full transition-all ${
                !isLogin 
                  ? 'bg-white/20 text-white shadow-lg' 
                  : 'text-white/60 hover:text-white'
              }`}
            >
              Sign Up
            </button>
          </div>

          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="relative">
              <EnvelopeIcon 
                className="absolute left-3 top-1/2 -translate-y-1/2 
                w-5 h-5 text-white/70"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                required
                placeholder="Email Address"
                className="w-full pl-10 pr-4 py-3 
                bg-white/10 rounded-xl border border-white/20 
                text-white placeholder-white/50 
                focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            <div className="relative">
              <LockClosedIcon 
                className="absolute left-3 top-1/2 -translate-y-1/2 
                w-5 h-5 text-white/70"
              />
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                required
                placeholder="Password"
                className="w-full pl-10 pr-4 py-3 
                bg-white/10 rounded-xl border border-white/20 
                text-white placeholder-white/50 
                focus:outline-none focus:ring-2 focus:ring-purple-500"
              />
            </div>

            {!isLogin && (
              <div className="relative">
                <LockClosedIcon 
                  className="absolute left-3 top-1/2 -translate-y-1/2 
                  w-5 h-5 text-white/70"
                />
                <input
                  type="password"
                  name="repeatPassword"
                  value={formData.repeatPassword}
                  onChange={handleInputChange}
                  required
                  placeholder="Confirm Password"
                  className="w-full pl-10 pr-4 py-3 
                  bg-white/10 rounded-xl border border-white/20 
                  text-white placeholder-white/50 
                  focus:outline-none focus:ring-2 focus:ring-purple-500"
                />
              </div>
            )}

            <button
              type="submit"
              className="w-full flex items-center justify-center py-3 
              bg-gradient-to-r from-blue-900 to-blue-600 
              text-white rounded-xl 
              hover:opacity-90 transition-all group"
            >
              {isLogin ? 'Login' : 'Sign Up'}
              <ArrowRightIcon 
                className="ml-2 w-5 h-5 
                group-hover:translate-x-1 transition-transform"
              />
            </button>
          </form>

          {isLogin && (
            <div className="text-center mt-4">
              <a 
                href="#" 
                className="text-white/70 hover:text-white text-sm"
              >
                Forgot Password?
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default AuthModal;