import React from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import ProjectCard from './ProjectCards'
import Particle from '../Particle'

import taskTracker from '../../Assets/Projects/activity-tracker.jpg'
import gallery from '../../Assets/Projects/3d-gallery.png'
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
        </Row>
      </Container>
    </Container>
  )
}

export default Projects
