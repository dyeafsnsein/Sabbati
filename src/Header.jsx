import React, { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  MagnifyingGlassIcon, 
  ChevronDownIcon, 
  UserIcon, 
  HeartIcon, 
  ShoppingBagIcon 
} from '@heroicons/react/24/solid';
import logo from './assets/logo.png';
import AuthModal from './Login';

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);

  const handleScroll = () => {
    setIsScrolled(window.scrollY > 0);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  const dropdownVariants = {
    hidden: { 
      opacity: 0, 
      y: -20,
      transition: { duration: 0.3 }
    },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.3 }
    }
  };

  const shoeCategories = [
    { 
      label: 'Men', 
      dropdown: [
        { 
          label: 'Running Shoes', 
          icon: '🏃', 
          description: 'Performance & Comfort'
        },
        { 
          label: 'Casual Sneakers', 
          icon: '👟', 
          description: 'Street Style Essentials'
        },
        { 
          label: 'Training Shoes', 
          icon: '💪', 
          description: 'Gym & Workout Gear'
        },
        { 
          label: 'Limited Editions', 
          icon: '✨', 
          description: 'Exclusive Releases'
        }
      ]
    },
    { 
      label: 'Women', 
      dropdown: [
        { 
          label: 'Running Shoes', 
          icon: '🏃‍♀️', 
          description: 'Performance Engineered'
        },
        { 
          label: 'Casual Sneakers', 
          icon: '👟', 
          description: 'Everyday Comfort'
        },
        { 
          label: 'Training Shoes', 
          icon: '💪', 
          description: 'Fitness & Style'
        },
        { 
          label: 'Designer Collection', 
          icon: '✨', 
          description: 'Haute Couture Sneakers'
        }
      ]
    }
  ];

  const openLoginModal = (e) => {
    e.stopPropagation();
    setIsOpen(true);
    setActiveDropdown(null);
  };

  return (
    <div 
      className="fixed top-0 left-0 right-0 z-50"
      onMouseLeave={() => setActiveDropdown(null)}
    >
      {/* Top Navigation */}
      <nav 
        className={`px-8 py-4 flex justify-between items-center transition-all duration-300 
        ${isScrolled 
          ? 'bg-white/60 backdrop-blur-xl shadow-lg' 
          : 'bg-transparent'
        }`}
      >
        {/* Logo Section */}
        <div className="flex items-center space-x-4">
          <img src={logo} alt="Logo" className="h-10 w-10 rounded-full" />
          <h1 className="text-xl font-bold text-[#150259]">Sabbati</h1>
        </div>

        {/* Navigation Links */}
        <div className="flex items-center space-x-6">
          {shoeCategories.map((item, index) => (
            <div 
              key={index} 
              className="relative group"
              onMouseEnter={() => setActiveDropdown(item.label)}
            >
              <button 
                className="flex items-center text-[#150259] font-semibold 
                hover:text-blue-600 transition-colors"
              >
                {item.label}
                <ChevronDownIcon 
                  className={`ml-2 h-4 w-4 transition-transform 
                  ${activeDropdown === item.label ? 'rotate-180' : ''}`} 
                />
              </button>
            </div>
          ))}

          {/* Search and Icons */}
          <div className="flex items-center space-x-4">
            <div className="relative">
              <input 
                type="text" 
                placeholder="Search shoes..." 
                className="pl-8 pr-4 py-2 rounded-full 
                bg-white/30 backdrop-blur-xl border border-white/20 
                focus:outline-none focus:ring-2 focus:ring-blue-500 
                text-[#150259] placeholder-gray-600"
              />
              <MagnifyingGlassIcon 
                className="absolute left-2 top-1/2 -translate-y-1/2 
                h-5 w-5 text-gray-600" 
              />
            </div>

            <button onClick={openLoginModal}>
              <UserIcon className="h-6 w-6 text-[#150259] hover:text-blue-600 transition-colors" />
            </button>
            <HeartIcon className="h-6 w-6 text-[#150259] hover:text-blue-600 transition-colors" />
            <ShoppingBagIcon className="h-6 w-6 text-[#150259] hover:text-blue-600 transition-colors" />
          </div>
        </div>
      </nav>

      {/* Full Width Dropdown */}
      <AnimatePresence>
        {activeDropdown && (
          <motion.div 
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={dropdownVariants}
            className="absolute left-0 right-0 
            bg-white/80 backdrop-blur-2xl shadow-2xl"
          >
            <div className="container mx-auto py-8 grid grid-cols-4 gap-6">
              {shoeCategories
                .find(item => item.label === activeDropdown)
                ?.dropdown.map((subItem, index) => (
                  <div 
                    key={index} 
                    className="flex items-center space-x-4 
                    bg-white/60 backdrop-blur-xl 
                    p-4 rounded-xl shadow-md 
                    hover:bg-blue-50 transition-all duration-300 
                    cursor-pointer group"
                  >
                    <span className="text-3xl mr-4">{subItem.icon}</span>
                    <div>
                      <h3 className="font-bold text-[#150259]">
                        {subItem.label}
                      </h3>
                      <p className="text-sm text-gray-600">
                        {subItem.description}
                      </p>
                    </div>
                  </div>
                ))
              }
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Auth Modal */}
      {isOpen && <AuthModal onClose={() => setIsOpen(false)} />}
    </div>
  );
};

export default Header;