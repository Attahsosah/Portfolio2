import type { NextPage } from 'next'
import Head from 'next/head'
import Link from 'next/link'
import About from '../components/About'
import ContactMe from '../components/ContactMe'
import Header from '../components/Header'
import Hero from '../components/Hero'
import Projects from '../components/Projects'
import Skills from '../components/Skills'
import WorkExperience from '../components/WorkExperience'

const Home: NextPage = () => {
  return (
    <div className='bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-scroll  z-0 overflow-y-scroll overflow-x-hidden scrollbar-thin scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 '>
      <Head>
        <title>Portfolio</title>
        
      </Head>

      <Header />
      
      <section id="hero" className="snap-start">
         <Hero />
      </section>
      
      <section id='about' className='snap-center'>
        <About />
      </section>
      
      <section id='experience' className='snap-center'>
        <WorkExperience />

      </section>
     
      <section id='skills' className='snap-start'>
        <Skills />
      </section>
      {/* Projects */}
      <section id='projects' className='snap-start'>
        <Projects />
      </section>
      {/* Contact Me */}
      <section id='contact' className='snap-start'>
        <ContactMe />
      </section>

      <Link href="#hero" className='transition-all transform duration-1000'>
      <footer className=" sticky bottom-5 w-full cursor-pointer ">
        <div className='flex items-center justify-end pr-4'>
          <img className='h-10 w-10 rounded-full filter grayscale hover:gray-scale-0 cursor-pointer' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSHpMlcgNRldPhvxO6PQatDPekVroEPNMWK6PZuwpQBfN84QAKtv8liXZ8eKICnGMSr80s&usqp=CAU" alt="" />
        </div>
      </footer>
      </Link>


    </div>
  )
}

export default Home
