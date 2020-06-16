import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import '../PagesCss/Workshop.css'
import { Link } from 'react-router-dom'

function Workshop() {
    return (
         <div className="workshop-main-container">
            <Navigationbar/>
            <div className="workshop-sub-nav">
            <Link className="workshop-sub-nav-item" to="/events">Events</Link>
                <Link className="workshop-sub-nav-item" to="/workshop">Workshops</Link>
                <Link className="workshop-sub-nav-item" to="/studycase">Study tours & Case Studies</Link>
                <Link className="workshop-sub-nav-item" to="/guestlecture">Guest Lectures</Link>
                <Link className="workshop-sub-nav-item" to="/competition">Competitions</Link>
                <Link className="workshop-sub-nav-item" to="/annual">Annual College Exhibition</Link>
           
            </div>
            <div className="workshop-container">
                <div className="workshop-container-header">
                    <div>
                    Workshops
                    </div>
                    <div className="workshop-container-border">
    
                    </div>
                </div>
                <div className="workshop-container-paragraph">
                1. Frame Making workshop: The opportunity was availed by FCOA, First-year students to make commercial frames offered by Ar st Girish Dhamane for his paintings. The same paintings with frames made by Flora students were exhibited in PNG Galleries at Kothrud, Chinchwad and Aundh in October 2018.<br/><br/> 2. Bamboo Workshop: FCOA organized a workshop on the importance of Bamboo as a local and sustainable building material in October 2018.
               </div>
            <div class="workshop-ICT-card-container">
                        <div class="workshop-ICT-card">
    
                        </div>
                        <div class="workshop-ICT-card">
    
                        </div>
                        <div class="workshop-ICT-card">
    
                        </div>
                        <div class="workshop-ICT-card">
    
                        </div>
              </div>
            </div>
            <Footer/>
        </div>
    )
}

export default Workshop
