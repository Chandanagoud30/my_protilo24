// src/App.tsx
import { useEffect, useState } from 'react'
import Header from './components/Header'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/ContactMe'
import Footer from './components/Footer'
import Hero from './components/Hero'

function App() {
  const [darkMode, setDarkMode] = useState(false)

  useEffect(() => {
    const root = window.document.documentElement
    darkMode ? root.classList.add('dark') : root.classList.remove('dark')
  }, [darkMode])

  const sections = [
    { Component: Hero, id: 'hero' },
    { Component: About, id: 'about' },
    { Component: Projects, id: 'projects' },
    { Component: Skills, id: 'skills' },
    { Component: Contact, id: 'contact' },
    { Component: Footer, id: 'footer' },
  ]

  return (
    <div className="font-sans bg-white text-gray-900 dark:bg-gray-900 dark:text-white transition-colors duration-300">
      <Header darkMode={darkMode} toggleDark={() => setDarkMode(prev => !prev)} />

      {sections.map(({ Component, id }) => (
        <Component key={id} />
      ))}
    </div>
  )
}

export default App
