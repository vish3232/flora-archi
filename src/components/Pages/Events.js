import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import '../PagesCss/Events.css'
import { Link } from 'react-router-dom'

function Events() {
    return (
        <div className="event-main-container">
            <Navigationbar/>
            <div className="event-sub-nav">
            <Link className="event-sub-nav-item" to="/events">Events</Link>
                <Link className="event-sub-nav-item" to="/workshop">Workshops</Link>
                <Link className="event-sub-nav-item" to="/studycase">Study tours & Case Studies</Link>
                <Link className="event-sub-nav-item" to="/guestlecture">Guest Lectures</Link>
                <Link className="event-sub-nav-item" to="/competition">Competitions</Link>
                <Link className="event-sub-nav-item" to="/annual">Annual College Exhibition</Link>
           
            </div>
            <div className="event-container">
                <div className="event-container-header">
                    <div>
                    Events
                    </div>
                    <div className="event-container-border">
    
                    </div>
                </div>
                <div className="event-card-header">
                1. Governing council visit
                </div>
                <div class="event-ICT-card-container">
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
    
                </div>
    
                <div className="event-card-header">
                2. Cleanliness drive
                </div>
                <div class="event-ICT-card-container">
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
    
                </div>

                <div className="event-card-header">
                3. Excellentia
                </div>
                <div class="event-ICT-card-container">
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
    
                </div>
    
                <div className="event-card-header">
                4. Zonasa
                </div>
                <div class="event-ICT-card-container">
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
                        <div class="event-ICT-card">
    
                        </div>
    
                </div>
    
            </div>
            <Footer/>
        </div>
    )
}

export default Events
