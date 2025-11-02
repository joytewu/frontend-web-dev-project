import React from 'react';

const ClassroomSection = () => {
  return (
    <section className="bg-white rounded-xl shadow-md p-8 mb-8 border border-gray-200">
      <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between">
        <div className="flex-1 mb-4 lg:mb-0">
          <h1 className="text-2xl lg:text-3xl font-bold text-gray-800 mb-2">
            Classroom › Front-end Web Dev - C ISISV315 (ITEM351)
          </h1>
          <p className="text-gray-600 text-base lg:text-lg">
            Learn modern web development with React, Tailwind CSS, and Vite
          </p>
        </div>
        <button className="bg-blue-500 hover:bg-blue-600 text-white px-6 lg:px-8 py-3 rounded-lg font-semibold transition-colors duration-200 shadow-md hover:shadow-lg whitespace-nowrap">
          Select Front-end Web Dev
        </button>
      </div>
      
      <div className="mt-6 flex flex-wrap gap-2">
        <span className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
          Active
        </span>
        <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
          35 Students
        </span>
        <span className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
          Semester 5
        </span>
        <span className="bg-orange-100 text-orange-800 px-3 py-1 rounded-full text-sm font-medium">
          Web Development
        </span>
      </div>
    </section>
  );
};

export default ClassroomSection;