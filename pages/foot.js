import React from 'react';
import Link from 'next/link'

const foot = () => {
    return (
        <div>
            <section className="px-6 py-6 text-gray-600 bg-gray-50 lg:px-8 md:py-12">
 
  <div className="grid max-w-screen-xl gap-6 mx-auto md:grid-cols-2 lg:grid-cols-3 lg:gap-x-8">
    <div>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
         <img src = "https://res.cloudinary.com/luxiptv/image/upload/v1639492597/lxx_2_1_twoitu.png" />
          </li>
          <li>
            <p  className="text-base font-normal text-gray-800">We are doing everything to make both retail and wholesale customers happy. Our mission is to educate and surprise our customers.

</p>
          </li>
        </ul>
      </nav>
    </div>

    <div>
      <h5 className="text-xl font-semibold text-gray-700">Support</h5>
      <nav className="mt-4">
        <ul className="space-y-2">
          <li>
          <Link href="/terms-and-conditions">
          <a  className="text-base font-normal hover:text-gray-400">Terms and Conditions</a>
        </Link>

          </li>
          <li>
          <Link href="/privacy-policy">
          <a  className="text-base font-normal hover:text-gray-400">Privacy Policy</a>
        </Link>
          </li>
       
          <li>   <Link href="/disclaimers">
          <a  className="text-base font-normal hover:text-gray-400">Disclaimers</a>
        </Link>
          </li>
        </ul>
      </nav>
    </div>
    
    <div>
      <h5 className="text-xl font-semibold text-gray-700">Contact</h5>
      <div className="mt-4 space-y-4 md:space-y-6">
        <div className="flex items-start space-x-4">
          <div>
            <svg className="w-6 h-6 mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" /><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" /></svg>
          </div>
          <div className="flex-1">
            <address className="not-italic">
            71-75 Shelton St, 
<br />
London WC2H 9JQ, UK<br />
            </address>
          </div>
        </div>
        <div className="flex items-start space-x-4">
          <div>
            <svg className="w-6 h-6 mt-1 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" /></svg>
          </div>
          <div className="flex-1">
            <a href="#" className="hover:text-gray-500">fastiptvshop@gmail.com</a>
          </div>
        </div>
      </div>
    </div>
  </div>
  <div className="flex flex-col items-center justify-between max-w-screen-xl mx-auto mt-16 md:flex-row lg:mt-20">
   
    <div className="text-sm">
      © 2021 Luxury TV. All Rights Reserved.
    </div>
  </div>
</section>

        </div>
    );
};

export default foot;