import React from 'react';
import '../PagesCss/ICT.css';
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

function ICT() {
    return (
        <div>
            <Navigationbar/>
        <div class="ICT-main-container">
            
            <div class="ICT-sub-nav">
            <Link to="/studentcorner" class="ICT-sub-nav-item">Student Corner</Link>
                <Link to="/ict" class="ICT-sub-nav-item">ICT</Link>
                <Link to="/hostel" class="ICT-sub-nav-item">Hostel</Link>
                <Link to="/library" class="ICT-sub-nav-item">Library</Link>
                <Link to="/sport" class="ICT-sub-nav-item">Sports</Link>
                <Link to="/transport" class="ICT-sub-nav-item">Transport</Link>
                <Link to="/computerlab" class="ICT-sub-nav-item">Computer lab</Link>
                <Link to="/materiallibrary" class="ICT-sub-nav-item">Material Library</Link>
            </div>
            <div className="ICT-container">
                <div className="ICT-container-header">
                    <div>
                    ICT
                    </div>
                    <div className="ICT-container-border">
    
                    </div>
                </div>
                <div className="ICT-ICT-container">
                        <div className="ICT-ICT-border"></div>
                        <div className="ICT-ICT-header">ICT</div>
                    </div>
                <div class="ICT-container-paragraph">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when anunknown printer took a galley of type and scrambled it to make a type specimen book.
                </div>
                <div class="ICT-ICT-card-container">
                        <div class="ICT-ICT-card">
    
                        </div>
                        <div class="ICT-ICT-card">
    
                        </div>
                        <div class="ICT-ICT-card">
    
                        </div>
    
                    </div>
    
        
            </div>
          
            </div>
            <Footer/>
        </div>
                  

    )
}

export default ICT
