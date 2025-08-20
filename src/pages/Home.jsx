import React from 'react'
import Hotsports from '../components/hotsports'
import ExperienceBox from '../components/ ExperienceBox'
import Strength from '../components/Strength'
import JobTimeline from '../components/JobTimeline'
import ProjectShowcase from '../components/ProjectShowcase'
import EducationTimeline from '../components/EducationTimeline'

function Home() {
  return (
    <div className='mainBody'>
      <Hotsports/>
      <ExperienceBox/>
      <Strength/>
      <JobTimeline/>
      <ProjectShowcase/>
      <EducationTimeline/>
    </div>
  )
}

export default Home
