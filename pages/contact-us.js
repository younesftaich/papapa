import React from 'react';

import Nav from './nav'
import Foot from './footer'
const how = () => {
    return (
        <div>
            <Nav />
  
            <main>
  <div className="nf-container items-center py-20 text-center">
    <div className="mx-auto max-w-2xl">
      <h1 className="uppercase text-4xl leading-none font-extrabold tracking-tight text-gray-900 mb-6 sm:mb-10 select-none">
        Let us hear from you directly!
      </h1>
      <p className="mb-6 leading-7">
        We always want to hear from you! Let us know how we can best help you and we'll do our very best.
      </p>
      <button onclick="openChat()" className="mx-auto flex justify-center space-x-1 w-48 cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white py-2 px-4 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-500 focus:outline-none transition-colors duration-200 mt-6">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
        <span className="uppercase">Start Live Chat</span>
      </button>
    </div>
  </div>
</main>


            <Foot />
        </div>
    );
};

export default how;