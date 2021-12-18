import React, { useEffect,useState } from 'react';
import Head from 'next/head'
const nav = () => {
    const [toggleMenu,setToggleMenu] = useState(false)
    const toggleNav = () => {
         setToggleMenu(!toggleMenu)
     }
    return (
        <div>
          <Head>
<title>
  LUX TV
</title>
            </Head>
            <div >
  <div  className="bg-white font-press px-6 md:px-10 fixed w-full z-20" >
    <div>
      <div className="relative z-10 bg-white md:overflow-hidden">
        <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2" fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <polygon points="50,0 100,0 50,100 0,100" />
        </svg>
        <div>
          <div className="relative py-6 nf-container">
            <nav className="relative flex items-center justify-between sm:h-10" aria-label="Global">
              <div className="flex items-center flex-grow flex-shrink-0 lg:flex-grow-0">
                <div className="flex items-center justify-between w-full md:w-auto">
                  <a href="/">
                    <img className="h-8 w-auto sm:h-10" src="https://res.cloudinary.com/luxiptv/image/upload/v1639847512/logo_light-svg_qadb6m.svg" alt="NETFLY TV Logo" />
                  </a>
                  <div className="-mr-2 flex items-center md:hidden">
                    <button onClick={ () => toggleNav() }  type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500" aria-expanded="false">
                      <span className="sr-only">Open main menu</span>
                      <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                      </svg>
                    </button>
                  </div>
                </div>
              </div>
              <div className="hidden md:block md:ml-10 lg:space-x-8 md:space-x-4">
                <a href="/" className="font-medium font-sans text-black hover:text-green-700 transition-colors">Home</a>
                <a href="/checkout" className="font-medium font-sans text-black hover:text-green-700 transition-colors">Channels</a>
                <a href="/blog/how-to-install-iptv-in-my-device" className="font-medium font-sans text-black hover:text-green-700 transition-colors">Installation</a>
                <a href="/checkout" className="font-medium font-sans text-black hover:text-green-700 transition-colors">Pricing</a>
              </div>
              <div className="hidden md:flex items-center lg:ml-8 md:ml-4 lg:space-x-8 md:space-x-4">
                
                <a x-show="! showShadow" href="/checkout" className="btn-green-700 bg-green-700 text-white p-4 px-8 rounded-xl  text-lg leading-6 font-semibold">Get started</a>
                <a x-show="showShadow" href="/checkout" className="flex space-x-2 items-center cursor-pointer bg-yellow-500 hover:bg-yellow-600 text-white text-lg py-3 px-6 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-yellow-600 focus:outline-none transition-colors duration-200 leading-6 font-semibold" style={{display: 'none'}}>
                  <span>Get 50% OFF</span>
                </a>
              </div>
            </nav>
          </div>
          <div className= { toggleMenu ? "duration-150 ease-out absolute top-0 inset-x-0 px-3 py-2 transition transform origin-top-right" : "hidden"}>
            <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
              <div className="px-5 pt-4 flex items-center justify-between">
                <a href="/">
                  <img className="h-8 w-auto sm:h-10" src="https://res.cloudinary.com/luxiptv/image/upload/v1639847512/logo_light-svg_qadb6m.svg" alt="NETFLY TV Logo" />
                </a>
                <div className="-mr-2">
                  <button onClick={ () => toggleNav() }  type="button" className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-500">
                    <span className="sr-only">Close main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  </button>
                </div>
              </div>
              <div className="px-2 pt-2 pb-3 space-y-1">
                <a href="/" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Home</a>
                <a href="/checkout" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Channels</a>
                <a href="/blog/how-to-install-iptv-in-my-device" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Installation</a>
                <a href="/checkout" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50">Pricing</a>
             
              </div>
              <a  href="/checkout" className="block w-full px-5 py-3 text-center font-medium text-green-600 bg-gray-50 hover:bg-gray-100">Get started</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div style={{height: '88px', width: '100%'}} id="empty-box" />
</div>

        </div>
    );
};

export default nav;