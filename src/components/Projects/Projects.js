import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import taskTracker from '../../Assets/Projects/activity-tracker.jpg'
import gallery from '../../Assets/Projects/3d-gallery.png'
import applab from '../../Assets/Projects/applab.png'
import crantifiedimg from '../../Assets/Projects/carntified-talent-consultants.png'
import dmcdashboard from '../../Assets/Projects/dex-market-cap-dashbord.png'
import dmslanding from '../../Assets/Projects/dex-market-cap-landingpage.png'
import dmcreact from '../../Assets/Projects/dex-market-cap-react-app.png'
import gatsbyportfolio from '../../Assets/Projects/gatsby-portfolio-site.png'
import musicapp from '../../Assets/Projects/music-app.png'
import punchertypeface from '../../Assets/Projects/puncher-typefase-img.png'
import punchertypewrite from '../../Assets/Projects/typewrite-project.png'
import fonts from '../../Assets/Projects/fonts-js-project.PNG'

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: 'white' }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: 'center', paddingBottom: '10px' }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={taskTracker}
              isBlog={false}
              title="Activity Tracker"
              description="Activity task tracker allows you to add your rotuine activities. Activity/Task Tracker application has been build in React. The idea was to build an application from scratch where you can perform CRUD operations like create, delete, update and read. You can also set a reminder for the tasks to make sure whether it's completed or still has to be completed.
"
              link="https://activity-tracker-7ec8e.web.app/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gallery}
              isBlog={false}
              title="3D Gallery Slider"
              description="A freelance project to create 3d room rotating effect. It gives the feeling of an art image gallery. The project was build in plain html, css and javascript with no extra library or framework being utilized."
              link="https://github.com/zubair-kamboh/Slider-3d"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fonts}
              isBlog={false}
              title="Designer Landing Page"
              description="Created a landing page for a designer. The project was originally build in Wordpress with php as a scripting side language and pain vanilla javascript used for introducing interactivity"
              link="https://www.markovicpredrag.com/the_puncher_typeface/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={punchertypeface}
              isBlog={false}
              title="Custom Punchter Fonts"
              description="Added custom made fonts to a client website. Utilized html canvas to build this project"
              link="https://github.com/zubair-kamboh/scroll-animation-client-project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={punchertypewrite}
              isBlog={false}
              title="Typewriting Effect"
              description="Nice Typewriting effect with custom fonts. Tech: html, css, javascript"
              link="https://github.com/zubair-kamboh/scroll-animation-client-project"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gatsbyportfolio}
              isBlog={false}
              title="Gatsby Portfolio"
              description="Builing my personel portfolio & blog website using Gatsby, ReactJs & Material_Ui"
              link="https://github.com/zubair-kamboh/My-Personel-Portfolio-and-Blog"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={crantifiedimg}
              isBlog={false}
              title="Landing Page"
              description="Created a Landing Page for Cranfield Talent Consultants with modern Bootstrap 5"
              link="https://github.com/zubair-kamboh/crafield-talent-consult"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={applab}
              isBlog={false}
              title="AppLab Clone"
              description="App lab clone, Psd to html conversion"
              link="https://github.com/zubair-kamboh/AppLab-website"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={musicapp}
              isBlog={false}
              title="Music App"
              description="Create sounds with just one tap, build this just for fun"
              link="https://github.com/zubair-kamboh/Music-App"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dmslanding}
              isBlog={false}
              title="Figma to Bootstrap"
              description="Created a landing page for DexMarketCap, a cryptocurrency platform"
              link="https://github.com/zubair-kamboh/dex-market-cap-landing-page"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dmcreact}
              isBlog={false}
              title="React App for DexMarketCap"
              description="Build out a react application for DexMarketCap Cyrptocurrency Platform"
              link="https://github.com/zubair-kamboh/dex-market-cap-react"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dmcdashboard}
              isBlog={false}
              title="React Dashboard"
              description="Developed a responsive dashboard with darks & lightmode, color picker, complex datatables"
              link="https://github.com/zubair-kamboh/dex-market-cap-dashboard"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
