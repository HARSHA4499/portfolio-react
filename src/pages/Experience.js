import React from 'react'
import { VerticalTimeline,VerticalTimelineElement } from 'react-vertical-timeline-component';
import "react-vertical-timeline-component/style.min.css";
import SchoolIcon from "@mui/icons-material/School"
import WorkIcon from "@mui/icons-material/Work"
import "../styles/Experience.css"

function Experience() {
  return (
    <div className="experience">
      <VerticalTimeline lineColor='#3e497a'>
        <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='Aug 2022 - May 2024' iconStyle={{background:"#3e497a",color:"#fff"}}
            icon={<SchoolIcon/>}>
              <h3 className='vertical-timeline-element-title'>
                University Of North Texas(Student)
              </h3>
              <p>Master's in Computer Sciences.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='August 2021-July 2022' iconStyle={{background:"#e9d35b",color:"#fff"}}
          icon={<WorkIcon/>}>
            <h3 className='vertical-timeline-element-title'>
              Cognizant Technology Solution(Software Developer)
            </h3>
            <p>Developed complex automation flows and created multiple webpages using Apex and Visualforce in Salesforce for the client's project.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
            className='vertical-timeline-element--education'
            date='March 2021 - July 2021' iconStyle={{background:"#e9d35b",color:"#fff"}}
            icon={<WorkIcon/>}>
              <h3 className='vertical-timeline-element-title'>
                Cognizant Technology Solutions(Software Intern)
              </h3>
              <p>Trained on Core Java and SQL Databases.Implemented few user stories and enhanced company's website in Java(Kotlin).</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='Nov 2020 - Jan 2021' iconStyle={{background:"#e9d35b",color:"#fff"}}
          icon={<WorkIcon/>}>
            <h3 className='vertical-timeline-element-title'>
              HCL Technologies(Web Developer Intern)
            </h3>
            <p>Worked on the Front End Development for the project called "Gharbazar" and also managed the version control(in Github).</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='May 2019 - June 2019' iconStyle={{background:"#e9d35b",color:"#fff"}}
          icon={<WorkIcon/>}>
            <h3 className='vertical-timeline-element-title'>
              Electronics Corporation Of India Pvt Lmd(Internship on Mobile App Development in Java)
            </h3>
            <p>Worked as a team and developed mobile Application for “Online Election System”.It was developed in Kotlin
              With the help of Android Studio IDE.</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='August 2017 - May 2021' iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon/>}>
            <h3 className='vertical-timeline-element-title'>
              Jawaharlal Nehru Technological University(VBIT)
            </h3>
            <p>Bachelor's in Computer Science and Engineering</p>
          </VerticalTimelineElement>
          <VerticalTimelineElement 
          className='vertical-timeline-element--education'
          date='June 2014 - May 2017' iconStyle={{background:"#3e497a",color:"#fff"}}
          icon={<SchoolIcon/>}>
            <h3 className='vertical-timeline-element-title'>
              Paramita High School
            </h3>
            <p>High School(Tenth,Eleventh and twelfth Standard)</p>
          </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  )
}

export default Experience