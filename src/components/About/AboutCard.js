import React from 'react'
import Card from 'react-bootstrap/Card'
import { ImPointRight } from 'react-icons/im'

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: 'justify' }}>
            Hi Everyone, I am <span className="purple">Zubair Ali </span>
            from <span className="purple"> Panjab, Pakistan.</span>
            <br />I am a senior pursuing Bachlors in Information Technology in
            UOS Sargodha.
            <br />
            A professional MERN stack developer with 3-4 years of hands-on
            experience in front-end and back-end website development. I have
            been involved in building rich and attractive websites in the past.
            JavaScript is my core programming language and proficient in any
            front-end and backend tech related to JS. My skills are Reactjs,
            JavaScript, Nodejs, MongoDB, Expressjs, Mysql, Firebase, Gatsbyjs,
            Nextjs, JQuery, Redux, WordPress, Html, CSS, Bootstrap, SASS,
            Material UI. I have been engaged in building mini projects for small
            to medium-sized businesses. I helped my clients in building
            e-commerce, portfolio, business websites. Throughout this time, I
            have successfully completed numerous projects working independently
            as well as working within teams. I’m always open to experiencing new
            technologies and working environments and always open to becoming an
            asset to your company
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Writting Tech Blogs
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: 'rgb(155 126 172)' }}>
            "Strive to build things that make a difference!"{' '}
          </p>
          <footer className="blockquote-footer">Soumyajit</footer>
        </blockquote>
      </Card.Body>
    </Card>
  )
}

export default AboutCard
