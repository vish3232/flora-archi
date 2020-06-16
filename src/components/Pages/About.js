import React from 'react'
import ImageHeader from '../ReusableComponents/Header'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import '../PagesCss/About.css'
import Footer from '../ReusableComponents/Footer'

const About = () => {
    return (
        <div>
            <Navigationbar />
            <ImageHeader title="ABOUT US" />
            <div className="about-border">
                <div className="about-title">
                    <strong>ABOUT FLORA</strong>
                    <div className="about-line"></div>
                </div>
                <p>In June, 2011, Rishikesh Kanase with his dad came to enroll as the first student at Flora Institutes. Ever since then, Flora Institutes has been fulfilling its role as a leading technical institute in Pune. Flora is a family of academic institutions that include Schools, Colleges, and Skill Centres which have been imparting quality education for over 8 years. ’Flora’ word originates from the Latin word ‘Flor’ meaning flowers. Founder of the institute,
                     Dr.Atul Padalkar who has worked professionally as a
                     teacher over 35 years, thought this name apt for the
                     institution. At Flora, every student is nurtured and
                     nourished as a flower so that one day they blossom
                     fragrance and become successful.
                     The campus epitomizes Flora’s vision, ‘Education for
                      a Sustainable Development'. Flora Institutes, provides
                       fresh air and ample opportunities for the holistic
                       development of students who will be accomplished
                       individuals in many ways; happy and confident of
                       leading their lot to a brighter future. It is a place
                       where brilliant minds assemble and collaborate,
                       where they pool together their talents across disciplines
                       in service of big projects and ideas. It’s a vibrant
                       community teaming up with students collaborating with
                       experts and specialists; a place of creativity and
                       innovation. It is an intersection of disciplines, a launching pad for a brilliant career, and a highly unique state of mind. It is a perfect environment to pursue your passion. Here the future is envisioned each day.  At Flora Institutes, we dedicate our efforts to that spirit of love of learning
                       and service toward the greater good. We are committed
                       to making a great education accessible to all by investing in
                       people and resources while holding the line on cost.
                       The Management solicits help, co-operation, generation of
                        new ideas from our Teaching &amp; Non- Teaching Staff,
                        Principals / Directors / Heads, Members of the General Body,
                         Parents, Past students and Well Wishers to help us achieve
                          this vision for Flora Institutes in the future.</p>
            </div>
          
            <Footer />
        </div>
    )
}

export default About
