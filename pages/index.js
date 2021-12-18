import Head from 'next/head'
import Image from 'next/image'
import { Icon } from '@iconify/react';
import React, { useEffect,useState } from 'react';

import Link from 'next/link'
import Nav from './nav'
import Foot from './foot'
export default function Home() {
  var link1 = "https://sowl.co/GJbJB"
  var link3 = "https://sowl.co/6X5We"
  var link6 = "https://sowl.co/K2veh"
  var link12 = "https://sowl.co/bwhSWr"

  const [toggleMenu,setToggleMenu] = useState(false)
   const toggleNav = () => {
        setToggleMenu(!toggleMenu)
    }
    const myRef = React.createRef();
    const togglePrice = () => {
   
      myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
   }
  return (
    <div >
      <Head>
        <title>Buy Premium Tv Service</title>
      </Head>

     
<nav className="  font-Poppins  bg-white-200">
  <div className="   max-w-6xl mx-auto px-4">
    <div className="   flex justify-between ">
           <div className="   flex space-x-4">
        <div>
        <Link href="/">
        <a  className="   flex items-center py-5 px-2 text-gray-700 hover:text-gray-900">
          <img className="  md:h-14 lg:h-12 w-9/12 h-9" src={"https://res.cloudinary.com/luxiptv/image/upload/v1639492597/lxx_2_1_twoitu.png"}  />
              </a>
</Link>
          
        </div>
         <div className="   hidden md:flex items-center space-x-1">
          <a onClick={ () => togglePrice() }  className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">Home</a>
          <a onClick={ () => togglePrice() }  className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">About</a>
          <a onClick={ () => togglePrice() }  className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">Features</a>
          <a onClick={ () => togglePrice() }  className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">Pricing</a>

<a onClick={ () => togglePrice() }  className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">Installaton</a>

        </div>
      </div>

      <div className="   hidden md:flex items-center space-x-1">
      
        <a onClick={ () => togglePrice() }   className="   py-5 px-3 font-medium font-sans text-black hover:text-primary transition-colors">{'Contact Us'}</a>
        <a onClick={ () => togglePrice() }   x-show="showShadow"  className="   py-2 px-3 flex space-x-2 items-center cursor-pointer bg-red-500 hover:bg-red-600 text-white text-lg py-3 px-6 border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 focus:outline-none transition-colors duration-200 leading-6 font-semibold">

<span>Order Now</span>
</a>

      </div>  <div className="   md:hidden flex items-center">
        <button onClick={ () => toggleNav() } className="   mobile-menu-button">
          <svg className="   w-6 h-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>

    </div>
  </div>

  <div className={toggleMenu ? 'mobile-menu  md:hidden': 'mobile-menu hidden md:hidden'} 
 >
 <a onClick={ () => togglePrice() }  className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors ">Home</a>
   
 <a onClick={ () => togglePrice() }  className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">About</a>
 <a onClick={ () => togglePrice() }  className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">Features</a>
 <a onClick={ () => togglePrice() }  className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">Pricing</a>
 <a onClick={ () => togglePrice() }  className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">Installation</a>
 <a onClick={ () => togglePrice() }  className="   block py-2 px-4 text-sm  font-medium font-sans text-black hover:text-primary transition-colors">Contact Us</a>
    
    <a onClick={ () => togglePrice() } x-show="showShadow"  className="   block py-2 px-2 text-sm  font-medium font-sans  cursor-pointer bg-red-500 hover:bg-red-600 text-white text-center  border border-transparent rounded-md focus:ring-2 focus:ring-offset-2 focus:ring-offset-white focus:ring-red-600 focus:outline-none transition-colors duration-200 leading-6 ">
<span>Order Now</span>
</a>
  </div>
</nav>



           

     <section className="w-full bg-white" x-data="{ showMenu: false }">
  <div className="box-border flex-grow w-full px-10 pt-8 pb-2 mx-auto leading-6 text-gray-800 lg:pt-16 lg:pb-2 max-w-7xl">
    <div className="relative w-full px-0 mb-12 leading-6 text-left md:text-center lg:flex-grow-0 lg:flex-shrink-0">
      <h1 className="box-border mt-0 mb-4 text-3xl font-black text-gray-800 md:text-4xl lg:text-5xl xl:text-6xl">
      The #1 Reliable 
        <span className="font-black text-orange-600"> lPTV Provider</span>
      </h1>
      <p className="box-border mt-0 text-base font-normal text-gray-800 opacity-90 lg:text-xl xl:text-2xl">One of the best subscription service provider worldwide with fast activation and no setup fees.</p>
      <div className="box-border text-left text-gray-800 md:text-center">
 
        <div className="my-4">
  <strong onClick={ () => togglePrice() } className="bg-red-500 hover:bg-red-600 cursor-pointer  md:text-2xl text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">Get Started <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
      </div>
    </div>
 
  </div>
</section>

<section className="py-2 bg-white">
  <div className="flex flex-col px-8 mx-auto space-y-12 max-w-7xl xl:px-12">
    <div className="relative">
      <h2 className="w-full text-3xl font-bold text-center sm:text-4xl md:text-5xl"> Awesome Things
About Us</h2>
      <p className="w-full py-8 mx-auto -mt-2 text-lg text-center text-gray-700 intro sm:max-w-3xl">The most powerful service in the market, where we use the latest technologies and top servers to provide you with an optimal quality to follow your favorite programs quickly. </p>

    </div>
    <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
      <div className="hidden md:flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
        <img className="rounded-lg shadow-xl" src="https://res.cloudinary.com/luxiptv/image/upload/v1639494418/pexels-jeshootscom-1040160_2_p4qxpm.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
        <p className="mb-2 text-sm font-semibold leading-none text-left text-orange-600 uppercase">PREMIUM STREAMING</p>
        <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">4K / Ultra HD Picture Quality
</h3>
        <p className="mt-5 text-lg text-gray-700 text md:text-left">Enjoy more than 54000 TV Channels, Movies and TV shows with 4K Image Quality , We offer HD / SD Image Quality as well for users who don't have a good internet speed .</p>
        <div className="box-border text-left text-gray-800 md:text-left">
        <div className="my-4">
  <strong onClick={ () => togglePrice() } className="bg-red-500 hover:bg-red-600 cursor-pointer  md:text-2xl text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">Get Started <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>      </div>      
      </div>

    
    </div>
    <div className=" flex flex-col mb-8 animated fadeIn sm:flex-row">
      <div className="hidden md:flex items-center mb-8 sm:w-1/2 md:w-5/12">
        <img className="rounded-lg shadow-xl" src="https://res.cloudinary.com/luxiptv/image/upload/v1639495067/pexels-jeshootscom-1201996_nlkorm.jpg" alt="" />
      </div>
      <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pl-16">
        <p className="mb-2 text-sm font-semibold leading-none text-left bg-orange-200 text-orange-600 uppercase">AntiFreeze Technology
</p>
        <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Never Miss Big Sports Games</h3>
        <p className="mt-5 text-lg text-gray-700 text md:text-left">Our monthly subscription now comes with 2 backup servers. That's why it's 99.99% Uptime !</p>
        <div className="box-border text-left text-gray-800 md:text-left">
        <div className="my-4">
  <strong onClick={ () => togglePrice() } className="bg-red-500 hover:bg-red-600 cursor-pointer  md:text-2xl text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">Get Started <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>      </div> 
      </div>
    </div>
    <div className="flex flex-col mb-8 animated fadeIn sm:flex-row">
      <div className="flex items-center mb-8 sm:w-1/2 md:w-5/12 sm:order-last">
        <img className="rounded-lg shadow-xl" src="https://res.cloudinary.com/luxiptv/image/upload/v1639495465/Support_Multiple_Devices_All-IPTV-Player_svy4rl.png" alt="" />
      </div>
      <div className="flex flex-col justify-center mt-5 mb-8 md:mt-0 sm:w-1/2 md:w-7/12 sm:pr-16">
        <p className="mb-2 text-sm font-semibold leading-none text-left text-orange-600 uppercase">Working on all operating systems</p>
        <h3 className="mt-2 text-2xl sm:text-left md:text-4xl">Use it on all your Favorite Devices & Apps</h3>
        <p className="mt-5 text-lg text-gray-700 text md:text-left">
       
After placing your order , we'll send you a step by step video tutorials to Download our app from your Smart TV Store, Firetvstick Downloader, Apple App Store, Google Play, or the Windows Phone Store and start streaming on your Smartphones and Tablets.


        </p>

        <div className="box-border text-left text-gray-800 md:text-left">
        <div className="my-4">
  <strong onClick={ () => togglePrice() } className="bg-red-500 hover:bg-red-600 cursor-pointer  md:text-2xl text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">Get Started <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>      </div> 
      </div>
    </div>
  </div>
</section>

<div  ref={myRef} className="py-5 px-4 md:px-16 lg:px-0 ">
  <div className=" container mx-auto py-4">
    {/* Start Title */}
    <div className="pb-4 lg:pb-8">
      <div className="lg:w-4/5 mx-auto text-center">
        <h2 className="font-press-start text-3xl md:text-5xl font-bold">Fair, simple pricing for all.
</h2>
      </div>
    </div>
    {/* End Title */}
    {/* Start Pricing Block */}
    <div className=" w-full flex flex-col lg:flex-row fade-in fade-in-second mb-8" >
   
      {/* Start Pricing Option*/}
      <a href={link1} className="cursor-pointer  w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-red-400 rounded text-center">
          <div>
            <h3 className="font-press-start  font-semibold   text-lg">1 Month Subscription
</h3>
            <div className="text-red-500">
            <h1 className="text-6xl text-blue-eyes font-bold inline">£10 </h1>
            <span className="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/mo</span>
          </div>
     


          </div>

          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-red-500 hover:bg-red-600   w-full text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </a>
      {/* End Pricing Option*/}

    {/* Start Pricing Option*/}
    <a  href={link3} className="cursor-pointer   w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-green-400 rounded text-center">
          <div>
            <h3 className="font-press-start  font-semibold   text-lg">3 Months Subscription

</h3>
            <div className="text-green-500">
            <h1 className="text-6xl text-blue-eyes font-bold inline">£23 </h1>
            <span className="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/3mo</span>
          </div>
     


          </div>

          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-green-500 hover:bg-green-600  w-full text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </a>
      {/* End Pricing Option*/}

          {/* Start Pricing Option*/}
          <div>
         
        </div>
          <a href={link12} className="cursor-pointer w-full lg:w-3/12 mt-8 bg-blue-400    ">
      
        <div className="px-3 py-2  m-2   rounded text-center">
      
          <div>

       
            <h3 className="font-press-start text-white  font-semibold   text-lg">
        <span className="py-1 px-3 rounded-md text-white text-sm font-normal ml-1" style={{background: '#00cc99'}}>
                    
                    BEST DEAL
                            </span> <br/>   1 Year Subscription
</h3>

            <div className="text-white">
            <h1 className="text-6xl text-blue-eyes font-bold inline">£59 </h1>
            <span className="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/yr</span>
          </div>
     


          </div>

          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p className=" font-press-start text-white  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-white   w-full text-base font-semibold font-press-start  p-4 text-blue-400 hover:border-blue-500 hover:text-blue-800 inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </a>
      {/* End Pricing Option*/}

          {/* Start Pricing Option*/}
          <a href= {link6} className="cursor-pointer w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-yellow-400 rounded text-center">
          <div>
            <h3 className="font-press-start  font-semibold   text-lg">6 Months Subscription
</h3>
            <div className="text-yellow-500">
            <h1 className="text-6xl text-blue-eyes font-bold inline">£37 </h1>
            <span className="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/6mo</span>
          </div>
     


          </div>

          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div className="flex items-center mt-6">
            <Icon className="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p className=" font-press-start text-gray-800  text-base py-1 font-semibold font-press-start pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-yellow-500   w-full text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </a>
      {/* End Pricing Option*/}
        
          
    </div>
    {/* End Pricing Block */}
  </div>
</div>

<section className="flex items-center justify-center py-16 bg-gray-100 min-w-screen">
  <div className="max-w-6xl px-12 mx-auto bg-gray-100 md:px-16 xl:px-10">
    <div className="flex flex-col items-center lg:flex-row">
      <div className="flex flex-col items-start justify-center w-full h-full pr-8 mb-10 lg:mb-0 lg:w-1/2">
        <p className="mb-2 text-base font-medium tracking-tight text-orange-500 uppercase">Our customers love our product</p>
        <h2 className="text-4xl font-extrabold leading-10 tracking-tight text-gray-900 sm:text-5xl sm:leading-none md:text-6xl lg:text-5xl xl:text-6xl">Testimonials</h2>
        <p className="my-6 text-lg text-gray-600">Don't just take our word for it, read from our extensive list of case studies and customer testimonials.</p>
        <div className="my-4">
  <strong onClick={ () => togglePrice() } className="bg-red-500 hover:bg-red-600 cursor-pointer  md:text-2xl text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">Get Started <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>

      </div>
      <div className="w-full lg:w-1/2">
        <blockquote className="flex items-center justify-between w-full col-span-1 p-6 bg-white rounded-lg shadow">
          <div className="flex flex-col pr-8">
            <div className="relative pl-12">
              <svg className="absolute left-0 w-10 h-10 text-orange-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
              </svg>
              <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Great customer support, great quality streaming service. They always respond quickly to emails and technical problems can mostly be resolved on the same day.</p>
            </div>
            <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
              Jane Coo***
            </h3>
          </div>
       
        </blockquote>
        <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
          <div className="flex flex-col pr-10">
            <div className="relative pl-12">
              <svg className="absolute left-0 w-10 h-10 text-orange-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
              </svg>
              <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">For the moment I am very satisfied everything is working wonderfully…. I hope that it will always be like that in the days and months to come.</p>
            </div>
            <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
              Anna Do***
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
          </div>
       
        </blockquote>
        <blockquote className="flex items-center justify-between w-full col-span-1 p-6 mt-4 bg-white rounded-lg shadow">
          <div className="flex flex-col pr-10">
            <div className="relative pl-12">
              <svg className="absolute left-0 w-10 h-10 text-orange-500 fill-current" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 125">
                <path d="M30.7 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2C12.7 83.1 5 72.6 5 61.5c0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S30.7 31.6 30.7 42zM82.4 42c0 6.1 12.6 7 12.6 22 0 11-7.9 19.2-18.9 19.2-11.8 0-19.5-10.5-19.5-21.6 0-19.2 18-44.6 29.2-44.6 2.8 0 7.9 2 7.9 5.4S82.4 31.6 82.4 42z" />
              </svg>
              <p className="mt-2 text-sm text-gray-600 sm:text-base lg:text-sm xl:text-base">Large selection of TV channels, fast, efficient and it works. special thanks to the customer service they helped me with the whole process.</p>
            </div>
            <h3 className="pl-12 mt-3 text-sm font-medium leading-5 text-gray-800 truncate sm:text-base lg:text-sm lg:text-base">
              Ferando Ca***
           
            </h3>
            <p className="mt-1 text-sm leading-5 text-gray-500 truncate" />
          </div>
  
        </blockquote>
      </div>
    </div>
  </div>
</section>

<section className="py-24 bg-indigo-700">
  <div className="max-w-6xl px-10 mx-auto xl:max-w-7xl">
    <div className="flex flex-col items-start justify-between lg:flex-row">
      <div className="relative">
        <h2 className="text-4xl font-extrabold text-white xl:text-5xl">Got Any Questions ?</h2>
        <p className="mt-2 text-2xl text-white">Our 24/7 Customer Service Will Solve Your Issue In A Few Minutes.</p>
      </div>
      <div  className="flex items-center justify-center px-10 py-5 mt-10 text-2xl font-medium text-white bg-green-500 rounded-full hover:bg-green-400 lg:mt-0">
        Whatsapp : +44 7916416654</div>
    </div>
  </div>
</section>




<div className="py-6 mx-auto mb-12 space-y-6 border-b-2 border-gray-200 max-w-7xl lg:mb-16 md:py-12 lg:pb-20 md:flex md:justify-between md:items-center md:flex-row md:space-x-12 ">
    <div className="flex-1 max-w-3xl ">
      <h4 className="text-2xl font-medium text-gray-700 sm:text-3xl md:text-4xl">Get The Service of Your Dreams</h4>
      <p className="mt-4 text-base font-medium leading-relaxed text-gray-500 md:text-xl">The most powerful provider in the market, where we use the latest technologies and top servers to provide you with a service of optimal quality.</p>
    </div>
    <div className="my-4">
  <strong onClick={ () => togglePrice() } className="bg-red-500 hover:bg-red-600 cursor-pointer  md:text-2xl text-base font-semibold font-press-start  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">Get Started <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>

  </div>
<Foot />
     
    </div>
  )
}
