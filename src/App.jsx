import React from 'react'
import { Link, animateScroll as scroll } from 'react-scroll'

import Hero from './components/Hero'
import Services from './components/Services'
import Projects from './components/Projects'
import Contact from './components/Contact'

export default function App() {
  return (
    <div className="font-sans text-gray-900">
      <nav className="fixed w-full z-30 bg-white/30 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto px-6 py-3 flex justify-between items-center">
          <div className="text-xl font-bold">RAF Productions</div>
          <div className="space-x-4">
            <Link to="hero" smooth duration={600} className="cursor-pointer">Home</Link>
            <Link to="services" smooth duration={600} className="cursor-pointer">Services</Link>
            <Link to="projects" smooth duration={600} className="cursor-pointer">Projects</Link>
            <Link to="contact" smooth duration={600} className="cursor-pointer">Contact</Link>
          </div>
        </div>
      </nav>

      <main className="pt-16">
        <section id="hero" className="bg-hero bg-cover bg-center" style={{ height: '80vh' }}>
          <div className="h-full bg-black/40 flex items-center justify-center">
            <Hero />
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Services />
          </div>
        </section>

        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-6">
            <Projects />
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-6">
            <Contact />
          </div>
        </section>
      </main>
    </div>
  )
}
