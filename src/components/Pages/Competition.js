import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import '../PagesCss/Competition.css'
import { Link } from 'react-router-dom'

function Competition() {
    return (
   <div className="competition-main-container">
            <Navigationbar/>
            <div className="competition-sub-nav">
                <Link className="competition-sub-nav-item" to="/events">Events</Link>
                <Link className="competition-sub-nav-item" to="/workshop">Workshops</Link>
                <Link className="competition-sub-nav-item" to="/studycase">Study tours & Case Studies</Link>
                <Link className="competition-sub-nav-item" to="/guestlecture">Guest Lectures</Link>
                <Link className="competition-sub-nav-item" to="/competition">Competitions</Link>
                <Link className="competition-sub-nav-item" to="/annual">Annual College Exhibition</Link>
            
            </div>
            <div className="competition-container">
                <div className="competition-container-header">
                    <div>
                    Competitions
                    </div>
                    <div className="competition-container-border">
    
                    </div>
                </div>
                <div className="competition-container-paragraph">
                Competition:<br/> 1. Umbrella Painting competition: Flora second-year student organised the competition for Pune city Architecture students on Umbrella painting in July 2018.
               </div>
            <div class="competition-ICT-card-container">
                        <div class="competition-ICT-card">
    
                        </div>
                        <div class="competition-ICT-card">
    
                        </div>
                        <div class="competition-ICT-card">
    
                        </div>
                        <div class="competition-ICT-card">
    
                        </div>
              </div>
            </div>
            <Footer/>
        </div>


        )
}

export default Competition
