import React, { useEffect,useState } from 'react';
import Head from "next/head";
import Router from 'next/router'
import { Icon } from '@iconify/react';
import Header from './nav'

function Feature (props){
  const h1 = props.h1
  const h2 = props.h2
  const icon = props.icon 
  return (
      <div className="flex flex-col items-center justify-between col-span-4 px-8 py-12 space-y-4 bg-gray-100 sm:rounded-xl text-center">
      <div className="p-3 text-white  ">
      <Icon icon={icon} width="80" height="80" />
      </div>
      <h4 className="text-xl font-bold text-black"> {h1} </h4>
      <p className="text-base text-center text-gray-500"> {h2}</p>
    </div>
  )
}

export default function Home() {
  

  const myRef = React.createRef();

  const gotopricing = () => {
 
    myRef.current.scrollIntoView({ behavior: "smooth", block: "start" });
 }
  const [connections, setCo] = useState(1);
  const month12 = () => {
      setNote("Init Checkout to 12 Months")
      setMyLink('/pricing?pack=12&connections=1')
      Router.push('/pricing?pack=12&connections=1')
    }
    const month1 = () => {
      setNote("Init Checkout to 1 Month")
      setMyLink('/pricing?pack=1&connections=1')
      Router.push('/pricing?pack=1&connections=1')
    }
    const month3 = () => {
      setNote("Init Checkout to 3 Months")
      setMyLink('/pricing?pack=3&connections=1')
      Router.push('/pricing?pack=3&connections=1')
    }
    const month6 = () => {
      setNote("Init Checkout to 6 Months")
      setMyLink('/pricing?pack=6&connections=1')
      Router.push('/pricing?pack=6&connections=1')
    }

    const [popup,setPopup] = useState(false)
    
const [note, setNote] = useState('');
const incr = () => {
  
  
  if(connections >=5){
    setCo(5)
  }
  else {
    setCo(connections+1)
  }
}
const decr = () => {
  
  if(connections <=1){
    setCo(1)
  }
  else {
    setCo(connections-1)
  }
}
const [mylink, setMyLink] = useState('');
    const togglepop = () => {
      setPopup(!popup)
    }
    const [email, setEmail] = useState("");
const changemail = (e) => {
  setEmail(e.target.value)
 
}

useEffect(() => {
  setEmail(email)
}, [email]);
const redirectnow = () => {
  
  Router.push(mylink)
}

  
    const global = 
      {"_id":"618d4e7d61164405fc99c901","title":"Best Fast IPTV UK / Ireland Subscription For 2021","slug":"home","seo":{"preventIndexing":true,"_id":"618d4e7d61164405fc99c902","metaTitle":"Best Fast IPTV UK / Ireland Subscription For 2021","metaDescription":"Best Iptv provider in the UK. We have fast iptv uk subscription for you with over 14500+ channels, movies, sports, 4k Hd, free setup guide ","meta":[],"__v":0,"metaImage":{"_id":"618eea052221754b70184481","name":"watch-live-football-match-iptv.png","alternativeText":"","caption":"","hash":"watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","size":201.8,"width":1207,"height":581,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755960/watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"watch_live_football_match_iptv_08f804f8d2","resource_type":"image"},"formats":{"thumbnail":{"name":"thumbnail_watch-live-football-match-iptv.png","hash":"thumbnail_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":245,"height":118,"size":61.69,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755962/thumbnail_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"thumbnail_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}},"large":{"name":"large_watch-live-football-match-iptv.png","hash":"large_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":1000,"height":481,"size":778.93,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755967/large_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"large_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}},"medium":{"name":"medium_watch-live-football-match-iptv.png","hash":"medium_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":750,"height":361,"size":456.73,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755972/medium_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"medium_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}},"small":{"name":"small_watch-live-football-match-iptv.png","hash":"small_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":500,"height":241,"size":218.1,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755974/small_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"small_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}}},"provider":"cloudinary","related":[],"createdAt":"2021-11-12T22:26:13.735Z","updatedAt":"2021-11-15T18:44:25.366Z","__v":0,"id":"618eea052221754b70184481"},"id":"618d4e7d61164405fc99c902"},"block":[{"__component":"components.homefeature","_id":"618d4e7e61164405fc99c905","h1":"Paying way too much for cable TV ?","body":"IT'S TIME TO KICK YOUR CABLE TV BILL. THANKS TO LUXURY IPTV, YOU DON'T NEED CABLE OR SATELLITE SERVICE ANYMORE TO WATCH ALL OF THE TV SHOWS, MOVIES, NEWS AND SPORTING EVENTS LIVE OR ON-DEMAND","image":[{"_id":"618d4e7e61164405fc99c915","alt":"Firestick IPTV","__v":0,"img":{"_id":"618eea052221754b70184481","name":"watch-live-football-match-iptv.png","alternativeText":"","caption":"","hash":"watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","size":201.8,"width":1207,"height":581,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755960/watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"watch_live_football_match_iptv_08f804f8d2","resource_type":"image"},"formats":{"thumbnail":{"name":"thumbnail_watch-live-football-match-iptv.png","hash":"thumbnail_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":245,"height":118,"size":61.69,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755962/thumbnail_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"thumbnail_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}},"large":{"name":"large_watch-live-football-match-iptv.png","hash":"large_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":1000,"height":481,"size":778.93,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755967/large_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"large_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}},"medium":{"name":"medium_watch-live-football-match-iptv.png","hash":"medium_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":750,"height":361,"size":456.73,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755972/medium_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"medium_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}},"small":{"name":"small_watch-live-football-match-iptv.png","hash":"small_watch_live_football_match_iptv_08f804f8d2","ext":".png","mime":"image/png","width":500,"height":241,"size":218.1,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636755974/small_watch_live_football_match_iptv_08f804f8d2.png","provider_metadata":{"public_id":"small_watch_live_football_match_iptv_08f804f8d2","resource_type":"image"}}},"provider":"cloudinary","related":[],"createdAt":"2021-11-12T22:26:13.735Z","updatedAt":"2021-11-15T18:44:25.366Z","__v":0,"id":"618eea052221754b70184481"},"id":"618d4e7e61164405fc99c915"}],"__v":1,"id":"618d4e7e61164405fc99c905"},{"__component":"blocks.herobody","_id":"618d4e7e61164405fc99c904","h1":"MOST STABLE | UK IPTV SERVER | UK BASED IPTV CHANNELS","body":"We support all kinds of devices such as Smart TVs, Firestick, MAG, Android Smart Phone, Android Boxes, Enigma, DreamBox, Vu+ (…), PC, VLC, Kodi/XBMC (…), Smart TV.\n","image":[{"_id":"618d4e7e61164405fc99c90e","alt":"sky uk iptv m3u","__v":0,"img":{"_id":"61929d2a0e57630016d1ad07","name":"Iptv-Supported-Devices-Firestick-Android-Mac-Mag-Box-Amazon-Samsung-LG-Smart (1).jpg","alternativeText":"","caption":"","hash":"Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","ext":".jpg","mime":"image/jpeg","size":33.54,"width":1496,"height":168,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636998440/Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5.jpg","provider_metadata":{"public_id":"Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","resource_type":"image"},"formats":{"thumbnail":{"name":"thumbnail_Iptv-Supported-Devices-Firestick-Android-Mac-Mag-Box-Amazon-Samsung-LG-Smart (1).jpg","hash":"thumbnail_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","ext":".jpg","mime":"image/jpeg","width":245,"height":28,"size":3.1,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636998441/thumbnail_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5.jpg","provider_metadata":{"public_id":"thumbnail_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","resource_type":"image"}},"large":{"name":"large_Iptv-Supported-Devices-Firestick-Android-Mac-Mag-Box-Amazon-Samsung-LG-Smart (1).jpg","hash":"large_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","ext":".jpg","mime":"image/jpeg","width":1000,"height":112,"size":19.16,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636998441/large_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5.jpg","provider_metadata":{"public_id":"large_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","resource_type":"image"}},"medium":{"name":"medium_Iptv-Supported-Devices-Firestick-Android-Mac-Mag-Box-Amazon-Samsung-LG-Smart (1).jpg","hash":"medium_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","ext":".jpg","mime":"image/jpeg","width":750,"height":84,"size":13.5,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636998442/medium_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5.jpg","provider_metadata":{"public_id":"medium_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","resource_type":"image"}},"small":{"name":"small_Iptv-Supported-Devices-Firestick-Android-Mac-Mag-Box-Amazon-Samsung-LG-Smart (1).jpg","hash":"small_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","ext":".jpg","mime":"image/jpeg","width":500,"height":56,"size":7.78,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1636998442/small_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5.jpg","provider_metadata":{"public_id":"small_Iptv_Supported_Devices_Firestick_Android_Mac_Mag_Box_Amazon_Samsung_LG_Smart_1_753e1992a5","resource_type":"image"}}},"provider":"cloudinary","related":[],"createdAt":"2021-11-15T17:47:22.866Z","updatedAt":"2021-11-15T19:32:10.243Z","__v":0,"id":"61929d2a0e57630016d1ad07"},"id":"618d4e7e61164405fc99c90e"}],"button":[{"_id":"618d4e7f61164405fc99c918","label":"See Pricing","href":"/pricing","__v":0,"id":"618d4e7f61164405fc99c918"},{"_id":"618d4e7f61164405fc99c919","label":"Channels List","href":"/iptv-channels","__v":0,"id":"618d4e7f61164405fc99c919"}],"__v":2,"id":"618d4e7e61164405fc99c904"},{"__component":"components.featurez","_id":"618d4e7e61164405fc99c906","ft":[{"_id":"618d4e7e61164405fc99c90f","h1":"10% Cashback on all orders","h2":"For example if you make a purchase of £57 , you'll receive a £5.7 that you can use to renew or buy a new subscription !","icon":"flat-color-icons:donate","__v":0,"id":"618d4e7e61164405fc99c90f"},{"_id":"618d4e7e61164405fc99c910","h1":"Multi-connections subscriptions","h2":"You can choose to use for example, to connect your Living room TV and your bedroom TV and watch your favorite program at the same time (Simultaneously).","icon":"flat-color-icons:multiple-smartphones","__v":0,"id":"618d4e7e61164405fc99c910"},{"_id":"618d4e7e61164405fc99c911","h1":"Fast Order Delivery","h2":"We Deliver Your Premium IPTV subscription A Few minutes After Payment Is Made.","icon":"flat-color-icons:flash-on","__v":0,"id":"618d4e7e61164405fc99c911"},{"_id":"618d4e7e61164405fc99c912","h1":"FULL 4K/HD/FHD Quality","h2":"Most of our TV channels are available in HD quality and some of them are in 4K.","icon":"flat-color-icons:video-file","__v":0,"id":"618d4e7e61164405fc99c912"},{"_id":"618d4e7e61164405fc99c913","h1":"Safe, Secure Payment","h2":"Secure Payments – No complicated billing processes required.","icon":"flat-color-icons:lock","__v":0,"id":"618d4e7e61164405fc99c913"},{"_id":"618d4e7e61164405fc99c914","h1":"Amazing Customer Service","h2":"Our customer service team is available via live chat and ticketing, 7 days a week!","icon":"flat-color-icons:assistant","__v":0,"id":"618d4e7e61164405fc99c914"}],"__v":1,"id":"618d4e7e61164405fc99c906"},{"__component":"blocks.hero","_id":"618d4e7e61164405fc99c907","h1":"Live Sport and TV-shows for best friends","h2":"With our complete and large collection of TV channels, never miss your favorite sport games and TV shows. You can be the first one to see your new episode of your favorite TV series.","images":[{"_id":"618d4e7e61164405fc99c90d","alt":"watch live sports with iptv","__v":0,"img":{"_id":"6192aa830e57630016d1ad29","name":"livesport (1).png","alternativeText":"","caption":"","hash":"livesport_1_1752387eaa","ext":".png","mime":"image/png","size":576.96,"width":687,"height":623,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1637001858/livesport_1_1752387eaa.png","provider_metadata":{"public_id":"livesport_1_1752387eaa","resource_type":"image"},"formats":{"thumbnail":{"name":"thumbnail_livesport (1).png","hash":"thumbnail_livesport_1_1752387eaa","ext":".png","mime":"image/png","width":172,"height":156,"size":56.67,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1637001859/thumbnail_livesport_1_1752387eaa.png","provider_metadata":{"public_id":"thumbnail_livesport_1_1752387eaa","resource_type":"image"}},"small":{"name":"small_livesport (1).png","hash":"small_livesport_1_1752387eaa","ext":".png","mime":"image/png","width":500,"height":453,"size":424.04,"path":null,"url":"https://res.cloudinary.com/luxiptv/image/upload/v1637001859/small_livesport_1_1752387eaa.png","provider_metadata":{"public_id":"small_livesport_1_1752387eaa","resource_type":"image"}}},"provider":"cloudinary","related":[],"createdAt":"2021-11-15T18:44:19.900Z","updatedAt":"2021-11-15T19:32:10.243Z","__v":0,"id":"6192aa830e57630016d1ad29"},"id":"618d4e7e61164405fc99c90d"}],"button":[{"_id":"618d4e7f61164405fc99c92e","label":"See Pricing","href":"/pricing","__v":0,"id":"618d4e7f61164405fc99c92e"},{"_id":"618d4e7f61164405fc99c92f","label":"Channels List","href":"/iptv-channels","__v":0,"id":"618d4e7f61164405fc99c92f"}],"feat":[],"__v":2,"id":"618d4e7e61164405fc99c907"},{"__component":"blocks.pricing","_id":"618d4e7e61164405fc99c908","packs":[{"_id":"618d4e7e61164405fc99c909","name":"1 Month Subscription","price":10,"link":"buy-iptv-subscription-1-month","__v":0,"id":"618d4e7e61164405fc99c909"},{"_id":"618d4e7e61164405fc99c90a","name":"3 Months Subscription","price":23,"link":"buy-iptv-subscription-3-months","__v":0,"id":"618d4e7e61164405fc99c90a"},{"_id":"618d4e7e61164405fc99c90b","name":"6 Months Subscription","price":37,"link":"buy-iptv-subscription-6-months","__v":0,"id":"618d4e7e61164405fc99c90b"},{"_id":"618d4e7e61164405fc99c90c","name":"12 Months Subscription","price":59,"link":"buy-iptv-subscription-12-months","__v":0,"id":"618d4e7e61164405fc99c90c"}],"pricingfeatures":[{"_id":"618d4e7f61164405fc99c925","feature":"11,071+ Live TV Channels","__v":0,"id":"618d4e7f61164405fc99c925"},{"_id":"618d4e7f61164405fc99c926","feature":"16,577+ Movies & Series","__v":0,"id":"618d4e7f61164405fc99c926"},{"_id":"618d4e7f61164405fc99c927","feature":"Premium Adult Channels ( Optional )","__v":0,"id":"618d4e7f61164405fc99c927"},{"_id":"618d4e7f61164405fc99c928","feature":"99.9% Uptime","__v":0,"id":"618d4e7f61164405fc99c928"},{"_id":"618d4e7f61164405fc99c929","feature":"AntiFreeze Technology","__v":0,"id":"618d4e7f61164405fc99c929"},{"_id":"618d4e7f61164405fc99c92a","feature":"FHD,HD & SD TV Channels","__v":0,"id":"618d4e7f61164405fc99c92a"},{"_id":"618d4e7f61164405fc99c92b","feature":"Works on any device","__v":0,"id":"618d4e7f61164405fc99c92b"},{"_id":"618d4e7f61164405fc99c92c","feature":"Free Updates","__v":0,"id":"618d4e7f61164405fc99c92c"},{"_id":"618d4e7f61164405fc99c92d","feature":"24/7 support","__v":0,"id":"618d4e7f61164405fc99c92d"}],"__v":2,"id":"618d4e7e61164405fc99c908"}],"createdAt":"2021-11-11T17:10:21.179Z","updatedAt":"2021-11-15T18:44:26.426Z","__v":2,"id":"618d4e7d61164405fc99c901"}
   
  const websiteurl = "http://luxuryiptv.com/";
  const apiurl = "http://localhost:1337";

  return (
        <div className="font-Poppins font-extrabold">
        <Head>
          <Header />
      <title>{global.title} </title>
<meta name="description" content={global.seo.metaDescription} />
<link rel="canonical" href={websiteurl} />
<meta property="og:locale" content="en_GB" />
<meta property="og:type" content="website" />

<meta property="og:description" content={global.seo.metaDescription}/>
<meta property="og:title" content={global.seo.metaTitle}/>
<meta property="og:url" content={websiteurl} />
<meta property="og:site_name" content="Fast IPTV Subscription - UK&#039;s No.1 IPTV Providers" />
<meta property="og:image" content={global.seo.metaImage.url} />
<meta name="twitter:card" content="summary_large_image" />
<meta name="twitter:site" content="@iptvfirestick" />
<meta name="twitter:label1" content="Est. reading time" />
<meta name="twitter:data1" content="5 minutes" />

    </Head>


    <section className="px-2 py-7 bg-white md:px-0">
  <div className="container items-center w-full px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
       
            <span className="block text-red-600 xl:inline">{global.block[0].h1}</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">{global.block[0].body}</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
        
          <button  onClick={ () => gotopricing() } className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-600 rounded-md sm:mb-0 hover:bg-red-700 sm:w-auto">
            GET IPTV NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </button>

            <a href="https://wa.me/447916416654" className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-600 rounded-md sm:mb-0 hover:bg-red-700 sm:w-auto">
            CONTACT SUPPORT
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
           
         
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={global.seo.metaImage.url} alt={global.seo.metaImage.caption} />
        </div>
      </div>
    </div>
  </div>
</section>



   <section className="bg-indigo-50 pt-7 pb-14">
        <div className="container px-8 mx-auto sm:px-12 lg:px-20">
          <h1 className="text-3xl font-bold tracking-wide text-center text-gray-800 uppercase mb-7"> {global.block[1].h1} </h1>
          <h2 className=" font-semibold  text-center text-gray-800 uppercase mb-7">{global.block[1].body}</h2>
          <img className="mx-auto" src = {global.block[1].image[0].img.url} alt={global.block[1].image[0].img.caption}  />
        
        </div>
      </section>

   <section className="py-5 bg-white">
        <div className="container max-w-6xl mx-auto">
          <h2 className="text-4xl font-bold tracking-tight text-center">Our Features</h2>
          <p className="mt-2 text-lg text-center text-gray-600">Check out our list of awesome features below.</p>


          <div className="grid grid-cols-4 gap-8 mt-10 sm:grid-cols-8 lg:grid-cols-12 sm:px-8 xl:px-0">

         
            {
                global.block[2].ft.map( (feat) =>
                <Feature h1 = {feat.h1} h2 = {feat.h2} icon = {feat.icon} />

                )
            }
       
      
          </div>
        </div>

     
      </section>
   <section className="py-8 leading-7 text-gray-900 bg-red-50 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
          <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div className="box-border flex-1 text-center border-solid sm:text-left">
              <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
             {"Enjoy Now with 4K/Ultra HD Quality"}
              </h2>
              <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
              {"More Americans than ever are cutting the cable TV cord in favor of streaming services ."}
              </p>
            </div>
            <button onClick={ () => gotopricing() }  className="inline-flex uppercase items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-extralight text-base leading-none text-white no-underline bg-red-600 border border-red-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-red-700 hover:border-red-700 hover:text-white focus-within:bg-red-700 focus-within:border-red-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
            Subscribe Now
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </button>
          </div>
        </div>
      </section>

      <section className="px-2 py-7 bg-white md:px-0">
  <div className="container items-center w-full px-8 mx-auto xl:px-5">
    <div className="flex flex-wrap items-center sm:-mx-3">
      <div className="w-full md:w-1/2 md:px-3">
        <div className="w-full pb-6 space-y-6 sm:max-w-md lg:max-w-lg md:space-y-4 lg:space-y-8 xl:space-y-9 sm:pr-5 lg:pr-0 md:pb-0">
          <h1 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl md:text-4xl lg:text-5xl xl:text-6xl">
       
            <span className="block text-red-600 xl:inline">{global.block[3].h1}</span>
          </h1>
          <p className="mx-auto text-base text-gray-500 sm:max-w-md lg:text-xl md:max-w-3xl">{global.block[3].h2}</p>
          <div className="relative flex flex-col sm:flex-row sm:space-x-4">
        
          <button  onClick={ () => gotopricing() }  className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-600 rounded-md sm:mb-0 hover:bg-red-700 sm:w-auto">
            GET IPTV NOW
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </button>

            <a href="https://wa.me/447916416654" className="flex font-bold items-center w-full px-6 py-3 mb-3 text-lg text-white bg-red-600 rounded-md sm:mb-0 hover:bg-red-700 sm:w-auto">
            CONTACT SUPPORT
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>
            </a>
           
         
          </div>
        </div>
      </div>
      <div className="w-full md:w-1/2">
        <div className="w-full h-auto overflow-hidden rounded-md shadow-xl sm:rounded-xl">
          <img src={global.block[3].images[0].img.url} alt={global.block[3].images[0].img.caption} />
        </div>
      </div>
    </div>
  </div>
</section>



        
<section className="flex items-center justify-center py-20 bg-white min-w-screen">
        <div className="px-16 bg-white">
          <div className="container flex flex-col items-start mx-auto lg:items-center">
            <p className="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-purple-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>
            <h2 className="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center">
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" className="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-gray-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
              </svg>
              See what others are saying</h2>
            <div className="block w-full h-0.5 max-w-lg mt-6 bg-purple-100 rounded-full" />
            <div className="items-center justify-center w-full mt-12 mb-4 lg:flex">
              <div className="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1700&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">MELBERG H.</h4>
                    <p className="text-gray-600">Germany</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">"Was chatting to Sonia who set me up in 5 mins, all the sports, movies and 1000's of movies! Absolute no brainer to buy this IPTV"</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1544725176-7c40e5a71c5e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2547&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">MELANIE H.</h4>
                    <p className="text-gray-600">United Kingdom</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">"Great support, best I have had in years no matter what service. EPG and everything works just as it should and it is by far the best IPTV service I have tried."</blockquote>
              </div>
              <div className="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                <div className="flex items-center justify-center">
                  <div className="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                    <img src="https://images.unsplash.com/photo-1545167622-3a6ac756afa4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1256&q=80" className="object-cover w-full h-full" />
                  </div>
                  <div className="flex flex-col items-start justify-center">
                    <h4 className="font-bold text-gray-800">JAMES L.</h4>
                    <p className="text-gray-600">United States</p>
                  </div>
                </div>
                <blockquote className="mt-8 text-lg text-gray-500">"Loads of channels and VOD. Responsive customer service to get you through the set up process. Overall a strong proposition. Happy to recommend."</blockquote>
              </div>
            </div>
          </div>
        </div>
      </section>




   
   <div  className="py-5 px-4 md:px-16 lg:px-0 ">
  <div className=" container mx-auto py-4">
    {/* Start Title */}
    <div className="pb-4 lg:pb-8">
      <div className="lg:w-4/5 mx-auto text-center">
      <h2 ref={myRef}  className="font-Poppins text-3xl md:text-5xl font-bold">Fair, simple pricing for all.
</h2> <h3 className="hidden font-Poppins text-xl md:text-2xl font-bold mt-2">How many devices / connections you need ?
</h3>

<div class="hidden flex flex-row h-10 w-full rounded-lg mx-auto  relative bg-transparent mt-4">
    <button data-action="decrement" onClick={ () => decr() } class=" bg-red-600 text-white hover:text-white rounded-tl-2xl	rounded-bl-2xl	 hover:bg-red-800 w-4/12 h-full  rounded-l cursor-pointer outline-none">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" class=" focus:outline-none text-center w-3/12 bg-red-500 text-white hover:text-white hover:bg-red-800  md:text-basecursor-default flex items-center   outline-none" name="custom-input-number" value={connections}></input>
  <button onClick={ () => incr() }  data-action="increment" class="bg-red-600 text-white hover:text-white hover:bg-red-800  h-full rounded-tr-2xl	rounded-br-2xl rounded-r w-4/12 cursor-pointer">
    <span class="m-auto text-2xl font-thin">+</span>
  </button>
</div>


<div  class="hidden flex flex-row h-10 mx-auto w-full rounded-lg relative bg-transparent mt-4">
    <button data-action="decrement" class=" bg-red-300 rounded-tl-2xl	rounded-bl-2xl text-white hover:text-white hover:bg-red-400 h-full w-20 rounded-l cursor-pointer outline-none">
      <span class="m-auto text-2xl font-thin">−</span>
    </button>
    <input type="number" class=" focus:outline-none text-center w-9/12 bg-red-300 font-semibold text-md hover:text-white focus:text-white  md:text-basecursor-default flex items-center text-white  outline-none" name="custom-input-number" value="0"></input>
  <button data-action="increment" class="bg-red-300 rounded-tr-2xl	rounded-br-2xl	 text-white hover:text-white hover:bg-red-400 h-full w-20 rounded-r cursor-pointer">
    <span class="m-auto text-2xl font-thin">+</span>
  </button>
</div>
      </div>
    </div>
    {/* End Title */}
    {/* Start Pricing Block */}
    <div className=" w-full flex flex-col lg:flex-row fade-in fade-in-second mb-8" >
   
      {/* Start Pricing Option*/}
      <div onClick={ () => month1() } className="cursor-pointer  w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-red-400 rounded text-center">
          <div>
            <h3 className="font-Poppins  font-semibold   text-lg">1 Month Subscription
</h3>
            <div class="text-red-500">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£10 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/mo</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-red-500 hover:bg-red-600   w-full text-base font-semibold font-Poppins  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}

    {/* Start Pricing Option*/}
    <div  onClick={ () => month3() } className="cursor-pointer   w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-green-400 rounded text-center">
          <div>
            <h3 className="font-Poppins  font-semibold   text-lg">3 Months Subscription

</h3>
            <div class="text-green-500">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£23 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/3mo</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-green-500 hover:bg-green-600  w-full text-base font-semibold font-Poppins  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}

          {/* Start Pricing Option*/}
          <div>
         
        </div>
          <div onClick={ () => month12() } className="cursor-pointer w-full lg:w-3/12 mt-8 bg-blue-400    ">
      
        <div className="px-3 py-2  m-2   rounded text-center">
      
          <div>

       
            <h3 className="font-Poppins text-white  font-semibold   text-lg">
        <span className="py-1 px-3 rounded-md text-white text-sm font-normal ml-1" style={{background: '#00cc99'}}>
                    
                    BEST DEAL
                            </span> <br/>   1 Year Subscription
</h3>

            <div class="text-white">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£59 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/yr</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#fff" />
            

            <p class=" font-Poppins text-white  text-base py-1 font-semibold font-Poppins pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-white   w-full text-base font-semibold font-Poppins  p-4 text-blue-400 hover:border-blue-500 hover:text-blue-800 inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}

          {/* Start Pricing Option*/}
          <div onClick={ () => month6() } className="cursor-pointer w-full lg:w-3/12 mt-8 bg-white   ">
        <div className="px-3 py-2 border-4 m-2  border-yellow-400 rounded text-center">
          <div>
            <h3 className="font-Poppins  font-semibold   text-lg">6 Months Subscription
</h3>
            <div class="text-yellow-500">
            <h1 class="text-6xl text-blue-eyes font-bold inline">£37 </h1>
            <span class="font-dm-sans pl-1 pt-1 text-2xl text-marble-blue">/6mo</span>
          </div>
     


          </div>

          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
11,071+ Live TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              16,577+ Movies & Series</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Premium Adult Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              99.9% Uptime</strong>
            </p>
          </div>

          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              AntiFreeze Technology</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              FHD,HD & SD TV Channels</strong>
            </p>
          </div>
          
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Works on any device</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              Free Updates</strong>
            </p>
          </div>
        
          <div class="flex items-center mt-6">
            <Icon class="w-6" icon="teenyicons:tick-circle-solid" color="#00CC99" />
            

            <p class=" font-Poppins text-gray-800  text-base py-1 font-semibold  pl-2">
              <strong>
              24/7 support</strong>
            </p>
          </div>
        

        
          <div className="my-4">
  <strong  className="bg-yellow-500   w-full text-base font-semibold font-Poppins  p-4 text-white hover:border-blue-500 hover:text-white inline-flex   rounded-full  justify-center items-center">BUY NOW <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 ml-2 " fill="none" viewBox="0 0 24 24" stroke="currentColor">
  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
</svg></strong>          </div>
        </div>
      </div>
      {/* End Pricing Option*/}
        
          
    </div>
    {/* End Pricing Block */}
  </div>
</div>

<div class= { + popup ? "main-modal fixed w-full mt-4 lg:mt-8  inset-0 z-50 overflow-hidden  justify-center items-center animated fadeIn faster " : "hidden main-modal fixed w-full  inset-0 z-50 overflow-hidden  justify-center items-center animated fadeIn faster" }>
		<div class="border border-blue-500 shadow-lg modal-container  w-11/12 bg-white  mx-auto rounded-xl  z-50 overflow-y-auto">
			<div class="modal-content py-4 text-left px-6">
			
				<div class="flex justify-between items-center pb-3">
					<p class="text-2xl flex justify-center font-bold text-gray-500 text-center">Get your Premium IPTV Subscription !</p>
					<div onClick={ () => togglepop() } class="modal-close cursor-pointer z-50" onclick="modalClose('main-modal')">
						<svg class="fill-current text-gray-500" xmlns="http://www.w3.org/2000/svg" width="18" height="18"
							viewBox="0 0 18 18">
							<path
								d="M14.53 4.53l-1.06-1.06L9 7.94 4.53 3.47 3.47 4.53 7.94 9l-4.47 4.47 1.06 1.06L9 10.06l4.47 4.47 1.06-1.06L10.06 9z">
							</path>
						</svg>
					</div>
				</div>
		
				<div class="my-5 mr-5 ml-5 flex justify-center">
                    <div class="w-full">
                        <div class="">
                            <div class="">
                                <label for="names" class="text-md  text-gray-600">Email</label>
                            </div>
                            <div class="">
                                <input
                                
                                value={email}
                                onChange={changemail}
                                type ="text"
                                name="email" id="email" 
                                class="h-3 p-6 w-full border-2 border-gray-300 mb-5 rounded-md" placeholder="Example: John@gmail.com"/>
                            </div>
                        </div>
                    </div>
				</div>
				<div class="flex justify-center pt-2 space-x-14">
          
        <button onClick={ () => redirectnow() } className="flex items-center w-9/12 text-left px-6 py-3 mb-3  text-white ml-2  bg-red-600 rounded-md sm:mb-0 hover:bg-red-600  text-xl sm:w-auto">
        CONTINUE
        <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round"><line x1={5} y1={12} x2={19} y2={12} /><polyline points="12 5 19 12 12 19" /></svg>

           
            </button>

    
				</div>
			</div>
		</div>
	</div>  


   <section className="py-8 leading-7 text-gray-900 bg-red-50 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
          <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div className="box-border flex-1 text-center border-solid sm:text-left">
              <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
              Got Many Devices ?
              </h2>
              <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
              Multi-connections subscription can be used simultaneously on multiple devices & platforms without interruption. You can choose to use for example, to connect your Living room TV and your bedroom TV and watch your favorite program at the same time (Simultaneously).
              </p>
            </div>
            <a href="https://wa.me/447916416654" className="inline-flex items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-extralight text-base leading-none text-white no-underline bg-red-600 border border-red-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-red-700 hover:border-red-700 hover:text-white focus-within:bg-red-700 focus-within:border-red-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
            ORDER MULTI CONNECTIONS
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section class="py-12 bg-purple-600 sm:py-16 md:py-20 lg:py-24 pb-28">
           <div className="max-w-6xl px-8 mx-auto lg:px-16">
           <h2 class="mb-2 text-2xl font-bold text-center text-white md:text-3xl lg:text-4xl">Frequently Asked Questions</h2>
           <div className="relative flex flex-col mt-8 mt-16 lg:flex-row" >
            
           <div class="relative w-full space-y-3 lg:space-y-5 lg:w-1/2 lg:pr-4" >
     
            <details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>

</div>
<div class="relative w-full mt-3 space-y-3 lg:mt-0 lg:space-y-5 lg:w-1/2 lg:pl-4" >
<details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>
<details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>

<details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg></summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>

<details class="relative px-6 py-2 overflow-hidden text-white bg-purple-700 rounded-lg select-none">
                <summary class="flex items-center justify-between py-4 text-base font-medium text-purple-100 cursor-pointer sm:text-lg hover:text-white">What does the package include?<svg class="w-4 h-4 mr-1 transition-all duration-200 ease-out transform rotate-0"  fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M19 9l-7 7-7-7"></path></svg>
                
                
                </summary>
                <span class="px-1 pt-0 mt-1 text-purple-200 sm:text-lg py-7">When you subscribe to our service, you get login credentials to IPTV server with instructions for how to setup it on your device via email.

.</span></details>




    </div>
</div>

</div>
</section>

   
   <section className="py-8 leading-7 text-gray-900 bg-red-50 sm:py-12 md:py-16 lg:py-24">
        <div className="max-w-6xl px-4 px-10 mx-auto border-solid lg:px-12">
          <div className="flex flex-col items-start leading-7 text-gray-900 border-0 border-gray-200 lg:items-center lg:flex-row">
            <div className="box-border flex-1 text-center border-solid sm:text-left">
              <h2 className="m-0 text-4xl font-semibold leading-tight tracking-tight text-left text-black border-0 border-gray-200 sm:text-5xl">
              Got A Question ?
              </h2>
              <p className="mt-2 text-xl text-left text-gray-900 border-0 border-gray-200 sm:text-2xl">
              Contact Our Customer Service
              </p>
            </div>
            <a href="https://wa.me/447916416654" className="inline-flex uppercase items-center justify-center w-full px-5 py-4 mt-6 ml-0 font-extralight text-base leading-none text-white no-underline bg-red-600 border border-red-600 border-solid rounded cursor-pointer md:w-auto lg:mt-0 hover:bg-red-700 hover:border-red-700 hover:text-white focus-within:bg-red-700 focus-within:border-red-700 focus-within:text-white sm:text-lg lg:ml-6 md:text-xl">
            24/7 SUPPORT
              <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 ml-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round">
                <line x1={5} y1={12} x2={19} y2={12} />
                <polyline points="12 5 19 12 12 19" />
              </svg>
            </a>
          </div>
        </div>
      </section>
      


    </div>
  );
}
