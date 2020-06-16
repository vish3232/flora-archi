import React from 'react'
import '../PagesCss/Transport.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'
function Transport() {
    return (
        <div>
            <Navigationbar/>
        <div class="transport-main-container">
            
            <div class="transport-sub-nav">
            <Link to="/studentcorner" class="transport-sub-nav-item">Student Corner</Link>
                <Link to="/ict" class="transport-sub-nav-item">ICT</Link>
                <Link to="/hostel" class="transport-sub-nav-item">Hostel</Link>
                <Link to="/library" class="transport-sub-nav-item">Library</Link>
                <Link to="/sport" class="transport-sub-nav-item">Sports</Link>
                <Link to="/transport" class="transport-sub-nav-item">Transport</Link>
                <Link to="/computerlab" class="transport-sub-nav-item">Computer lab</Link>
                <Link to="/materiallibrary" class="transport-sub-nav-item">Material Library</Link>
         
            </div>
            <div className="transport-container">
                <div className="transport-container-header">
                    <div>
                    TRANSPORT
                    </div>
                    <div className="transport-container-border">
    
                    </div>
                </div>
                <div></div>
                <div class="transport-container-paragraph">
                FCOA is located on the outskirts of Pune, near Khed Shivapur toll plaza, so we make sure that a convenient and easily accessible transport facility is made available for all the students as well as teaching and non- teaching staff. We have 2 buses running on 2 dedicated routes in Pune city. Both the routes have several stops where students can easily catch the bus. So, do not worry about the distance from Pune city and transport because we have got you covered there!
                </div>
                <div class="transport-ICT-card-container">
                        <div class="transport-ICT-card">
    
                        </div>
                        <div class="transport-ICT-card">
    
                        </div>
                        <div class="transport-ICT-card">
    
                        </div>
                        <div class="transport-ICT-card">
    
                        </div>
    
                    </div>
    
        
            </div>
          
            </div>
            <Footer />
        </div>
                   
    )
}

export default Transport
