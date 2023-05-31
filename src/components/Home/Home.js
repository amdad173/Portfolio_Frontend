import React, { useEffect, useState } from 'react'
import './Home.scss'
import { Link } from 'react-router-dom'
import logo from '../../assets/images/logo_rm.png'
import AnimatedLetter from '../AnimatedLetter/AnimatedLetter'
import Logo from './Logo/Logo'
import Loader from 'react-loaders'
const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
  const nameArray = ['M', 'D', 'A', 'D', 'U', 'L', ' ','H', 'A', 'Q', 'U', 'E']
  const jobArray = [
    'M',
    'E',
    'R',
    'N',
    ' ',
    'S',
    'T',
    'A',
    'C',
    'K',
    ' ',
    'D',
    'E',
    'V',
    'E',
    'L',
    'O',
    'P',
    'E',
    'R',
  ]
  useEffect(() => {
    return setTimeout(() => {
      setLetterClass('text-animate-hover')
    }, 4000)
  }, [])

  return (
    <>
      <div className="container home-page">
        <div className="text-zone">
          <h1>
            <span className={`${letterClass}`}>H</span>
            <span className={`${letterClass} _12`}>I,</span>
            <br />
            <span className={`${letterClass} _13`}>I</span>
            <span className={`${letterClass} _14`}>'M</span>
            <img
              src={logo}
              alt="Javascript Developer Name, Web Developer Name"
            />

            <AnimatedLetter
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
            <br />
            <AnimatedLetter
              letterClass={letterClass}
              strArray={jobArray}
              idx={20}
            />
          </h1>
          <h3>
            Frontend / Backend / Javascript Developer / Full Stack Developer.{' '}
          </h3>
          <Link className="flat-button" to={'/contact'}>
            CONTACT ME
          </Link>
        </div>
        <Logo />
      </div>
      <Loader type="pacman" />
    </>
  )
}

export default Home
