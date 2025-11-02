cat > src/components/Header.jsx << 'EOF'
import React from 'react';
import Logo from './Logo';
import Search from './Search';
import Navigation from './Navigation';

const Header = () => {
  return (
    <header className="bg-white shadow-lg border-b border-gray-200 sticky top-0 z-50">
      <div className="container mx-auto px-6 py-4">
        <div className="flex items-center justify-between">
          <Logo text="Classroom" />
          <Search placeholder="Search classrooms, assignments, or materials..." />
          <Navigation />
        </div>
      </div>
    </header>
  );
};

export default Header;
EOF