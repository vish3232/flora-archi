import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import '../PagesCss/GuestLecture.css'
import { Link } from 'react-router-dom'

function GuestLecture() {
    return (
     <div className="guest-main-container">
            <Navigationbar/>
            <div className="guest-sub-nav">
            <Link className="guest-sub-nav-item" to="/events">Events</Link>
                <Link className="guest-sub-nav-item" to="/workshop">Workshops</Link>
                <Link className="guest-sub-nav-item" to="/studycase">Study tours & Case Studies</Link>
                <Link className="guest-sub-nav-item" to="/guestlecture">Guest Lectures</Link>
                <Link className="guest-sub-nav-item" to="/competition">Competitions</Link>
                <Link className="guest-sub-nav-item" to="/annual">Annual College Exhibition</Link>
           
            </div>
            <div className="guest-container">
                <div className="guest-container-header">
                    <div>
                    Guest Lectures
                    </div>
                    <div className="guest-container-border">
    
                    </div>
                </div>
                <div className="guest-container-paragraph">
                Guest Lecture:<br/> 1. Prof. (Dr.) Joy Sen: Prof (Dr.) Joy Sen, Professor and Head, Department of Architecture, IIT, Kharagpur, presented a seminar on the strategies to excel in Architecture during and after the 5-year course in January 2019. Prof. Joy Sen has kindly agreed to support FCOA in Academics through IIT, Kharagpur.<br/><br/>
               </div>
            <div class="guest-ICT-card-container">
                        <div class="guest-ICT-card">
    
                        </div>
                        <div class="guest-ICT-card">
    
                        </div>
                        <div class="guest-ICT-card">
    
                        </div>
                        <div class="guest-ICT-card">
    
                        </div>
              </div>
            </div>
            <Footer/>
        </div>


        )
}

export default GuestLecture
