import React from 'react'
import LinkedInIcon from '@mui/icons-material/LinkedIn'
import EmailIcon from '@mui/icons-material/Email'
import GithubIcon from '@mui/icons-material/GitHub'

import "../styles/Home.css"


function Home() {

  return (
    <div className='home'>
      <div className='about'>
        <h3>I'm<div className='name'>Saii HarshaVardhan Reddy Pallerla</div></h3>
        <div className='prompt'>
          <p className='info'>A Software Developer,passionate programmer with a curious mind who enjoys solving complex and challenging real-world problems.</p>
          <br/>
          <br/>
          <div className='contactMe'>
          <a href='https://www.linkedin.com/in/harsha4499'><LinkedInIcon/></a>
          <EmailIcon onClick={() => window.location = 'mailto:saiharsha4499@gmail.com'}/>
          <a href='https://github.com/HARSHA4499?tab=repositories'><GithubIcon/></a>
          </div>
        </div>
      </div>
      <div className='skills'>
        <h1>Skills</h1>
        <ol className='list'>
          <li className='item'>
            <h2>Front-End</h2>
            <span>
              ReactJS, Redux, ReactNative, JavaScript, HTML/CSS
            </span>
          </li>
          <li className='item'>
            <h2>Back-End</h2>
            <span>
              NodeJS, Spring Boot
            </span>
          </li>
          <li className='item'>
            <h2>Languages</h2>
            <span>
              Python, Java, C++, C
            </span>
          </li>
          <li className='item'>
            <h2>Databases</h2>
            <span>
              MySQL, MongoDB, Firebase
            </span>
          </li>
          <li className='item'>
            <h2>Libraries</h2>
            <span>
              Numpy, Pandas
            </span>
          </li>
        </ol>
      </div>
    </div>
  )
}

export default Home