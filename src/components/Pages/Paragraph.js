import React from 'react'
import '../PagesCss/Paragraph.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

function Paragraph() {
    return (
        <div>
            <Navigationbar/>
        <div class="sport-main-container">
            
            <div class="sport-sub-nav">
            <Link to="/studentcorner" class="sport-sub-nav-item">Student Corner</Link>
                <Link to="/ict" class="sport-sub-nav-item">ICT</Link>
                <Link to="/hostel" class="sport-sub-nav-item">Hostel</Link>
                <Link to="/library" class="sport-sub-nav-item">Library</Link>
                <Link to="/sport" class="sport-sub-nav-item">Sports</Link>
                <Link to="/transport" class="sport-sub-nav-item">Transport</Link>
                <Link to="/computerlab" class="sport-sub-nav-item">Computer lab</Link>
                <Link to="/materiallibrary" class="sport-sub-nav-item">Material Library</Link>
         
            </div>
            <div className="sport-container">
                <div className="sport-container-header">
                    <div>
                    SPORTS
                    </div>
                    <div className="sport-container-border">
    
                    </div>
                </div>
                <div></div>
                <div class="sport-container-paragraph">At FCOA, We have developed a beautiful jogging track along with a huge playground. We make sure that everyone, not just the students but the faculty as well is engaged in various sports events and competitions. We do hold an Annual Sports Competition where everyone participates in various sports like football, cricket, basketball to name a few.</div>
                <div class="sport-ICT-card-container">
                        <div class="sport-ICT-card">
    
                        </div>
                        <div class="sport-ICT-card">
    
                        </div>
                        <div class="sport-ICT-card">
    
                        </div>
                        <div class="sport-ICT-card">
    
                        </div>
    
                    </div>
    
        
            </div>
          
            </div>
            <Footer/>
        </div>
               )
}

export default Paragraph
