import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import '../PagesCss/StudyCase.css'
import { Link } from 'react-router-dom'

function StudyCase() {
    return (
   <div className="study-main-container">
            <Navigationbar/>
            <div className="study-sub-nav">
            <Link className="study-sub-nav-item" to="/events">Events</Link>
                <Link className="study-sub-nav-item" to="/workshop">Workshops</Link>
                <Link className="study-sub-nav-item" to="/studycase">Study tours & Case Studies</Link>
                <Link className="study-sub-nav-item" to="/guestlecture">Guest Lectures</Link>
                <Link className="study-sub-nav-item" to="/competition">Competitions</Link>
                <Link className="study-sub-nav-item" to="/annual">Annual College Exhibition</Link>
           
            </div>
            <div className="study-container">
                <div className="study-container-header">
                    <div>
                    Study tours & Case Studies
                    </div>
                    <div className="study-container-border">
    
                    </div>
                </div>
                <div className="study-container-paragraph">
                1. Jala Srushti: Site visit at Jala Srushti gave students a wonderful experience on the practical implementation of art, design, style and techniques in architecture.<br/><br/> 2. Harappan Civilisation:<br/> 7 days tour to the origin of Harappan civilisation (Bhuj - Gujarat) Guidance on restoration by Ar. Anjali Kalamdani and Ar. Kiran Kalamdani Settlement study tour Menavali (Wai)<br/><br/> 3. North Karnataka: Students of second-year Architecture explored evolution on of south Indian Architecture through study tour at Hampi, Badami and Bijapur in November 2018.<br/><br/> 4. Ajanta-Ellora: First-year students learnt historic Buddhist and Jain style Architecture during the visit of heritage sites at Ajanta, Ellora and Aurangabad in January 2019.
               </div>
            <div class="study-ICT-card-container">
                        <div class="study-ICT-card">
    
                        </div>
                        <div class="study-ICT-card">
    
                        </div>
                        <div class="study-ICT-card">
    
                        </div>
                        <div class="study-ICT-card">
    
                        </div>
              </div>
            </div>
            <Footer/>
        </div>

        )
}

export default StudyCase
