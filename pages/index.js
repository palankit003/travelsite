import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Navbar from '../components/Navbar'
import Vidhandle from '../components/Vidhandle'
import { HeroText } from '../components/HeroText'

export default function Home() {
  return (
    <>
    <Navbar/>
    <Vidhandle/>
    <HeroText/>
    </>
  )
}
