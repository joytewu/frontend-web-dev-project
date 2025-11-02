cat > src/components/Logo.jsx << 'EOF'
import React from 'react';

const Logo = ({ text = "Classroom" }) => {
  return (
    <div className="flex items-center space-x-3 cursor-pointer">
      <div className="w-12 h-12 bg-gradient-to-br from-blue-500 to-blue-600 rounded-xl flex items-center justify-center shadow-md">
        <span className="text-white font-bold text-xl">C</span>
      </div>
      <span className="text-2xl font-bold text-gray-800">{text}</span>
    </div>
  );
};

export default Logo;
EOF