cat > src/components/Navigation.jsx << 'EOF'
import React from 'react';

const Navigation = () => {
  const navItems = ['Home', 'Calendar', 'Gemini', 'Enrolled', 'To-do'];
  
  return (
    <nav className="flex items-center space-x-6">
      {navItems.map((item, index) => (
        <button
          key={index}
          className="text-gray-600 hover:text-blue-500 font-medium transition-colors duration-200 py-2 px-1 border-b-2 border-transparent hover:border-blue-500"
        >
          {item}
        </button>
      ))}
    </nav>
  );
};

export default Navigation;
EOF