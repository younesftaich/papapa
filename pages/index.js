import Head from 'next/head'
import Image from 'next/image'
import Nav from './nav'
import Homepage from './home'
import Foot from './footer'
export default function Home() {

  return (
   
   
    <div >
      <Nav />
      <Homepage />
      <Foot />
    </div>
  )
}
