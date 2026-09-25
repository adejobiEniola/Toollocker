import { useEffect, useLayoutEffect, useState } from 'react'
import gsap from 'gsap'
import LandingPage from './components/LandingPage'
import LoginPage from './components/LoginPage'
import './assets/css/app.css'

function App() {
  const [isLoginPage, setIsLoginPage] = useState(() => window.location.hash === '#login')

  useEffect(() => {
    function handleHashChange() {
      setIsLoginPage(window.location.hash === '#login')
    }

    window.addEventListener('hashchange', handleHashChange)
    return () => window.removeEventListener('hashchange', handleHashChange)
  }, [])

  useLayoutEffect(() => {
    const media = gsap.matchMedia()
    media.add('(prefers-reduced-motion: no-preference)', () => {
      gsap.from('.reveal, .auth-card, .intro-copy', { y: 20, opacity: 0, duration: 0.8, stagger: 0.09, ease: 'power3.out', clearProps: 'all' })
    })
    return () => media.revert()
  }, [isLoginPage])

  return isLoginPage ? <LoginPage /> : <LandingPage />
}

export default App
