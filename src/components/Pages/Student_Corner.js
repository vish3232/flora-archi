import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

import '../PagesCss/Student_Corner.css'
function Student_Corner() {
    return (
        <div>
        <Navigationbar/>
        <div class="student-corner-main-container">
            <div class="student-corner-sub-nav">
                <Link to="/studentcorner" class="student-corner-sub-nav-item">Student Corner</Link>
                <Link to="/ict" class="student-corner-sub-nav-item">ICT</Link>
                <Link to="/hostel" class="student-corner-sub-nav-item">Hostel</Link>
                <Link to="/library" class="student-corner-sub-nav-item">Library</Link>
                <Link to="/sport" class="student-corner-sub-nav-item">Sports</Link>
                <Link to="/transport" class="student-corner-sub-nav-item">Transport</Link>
                <Link to="/computerlab" class="student-corner-sub-nav-item">Computer lab</Link>
                <Link to="/materiallibrary" class="student-corner-sub-nav-item">Material Library</Link>
            </div>
            <div className="student-corner-container">
                <div className="student-corner-container-header">
                    <div>
                    Student Corner
                    </div>
                    <div className="student-corner-container-border">
    
                    </div>
                </div>
                <div className="student-corner-ICT-container">
                        <div className="student-corner-ICT-border"></div>
                        <div className="student-corner-ICT-header">CREATIVE ROOMS</div>
                    </div>
                <div class="student-corner-container-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div class="student-corner-ICT-card-container">
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
    
                </div>

                <div className="student-corner-ICT-container2">
                        <div className="student-corner-ICT-border"></div>
                        <div className="student-corner-ICT-header">WIFI ENABLED</div>
                    </div>
                <div class="student-corner-container-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div class="student-corner-ICT-card-container">
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
    
                    </div>
    

                    <div className="student-corner-ICT-container2">
                        <div className="student-corner-ICT-border"></div>
                        <div className="student-corner-ICT-header">BOARD GAMES</div>
                    </div>
                <div class="student-corner-container-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div class="student-corner-ICT-card-container">
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
    
                    </div>
    

                    <div className="student-corner-ICT-container2">
                        <div className="student-corner-ICT-border"></div>
                        <div className="student-corner-ICT-header">TEA CENTRE</div>
                    </div>
                <div class="student-corner-container-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div style={{paddingBottom:50}} class="student-corner-ICT-card-container">
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
                        <div class="student-corner-ICT-card">
    
                        </div>
    
                    </div>
    
    
        
            </div>
          
            </div>
            <Footer />

          
        </div>
       
        )
}

export default Student_Corner
