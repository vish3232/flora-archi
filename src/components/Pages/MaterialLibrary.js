import React from 'react'
import '../PagesCss/Library.css';
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

function MaterialLibrary() {
    return (
        <div>
            <Navigationbar/>
        <div class="library-main-container">
            
            <div class="library-sub-nav">
            <Link to="/studentcorner" class="library-sub-nav-item">Student Corner</Link>
                <Link to="/ict" class="library-sub-nav-item">ICT</Link>
                <Link to="/hostel" class="library-sub-nav-item">Hostel</Link>
                <Link to="/library" class="library-sub-nav-item">Library</Link>
                <Link to="/sport" class="library-sub-nav-item">Sports</Link>
                <Link to="/transport" class="library-sub-nav-item">Transport</Link>
                <Link to="/computerlab" class="library-sub-nav-item">Computer lab</Link>
                <Link to="/materiallibrary" class="library-sub-nav-item">Material Library</Link>
         
         
            </div>
            <div className="library-container">
                <div className="library-container-header">
                    <div>
                    MATERIAL LIBRARY
                    </div>
                    <div className="library-container-border">
    
                    </div>
                </div>
                <div></div>
                <div class="library-container-paragraph">
                FCOAs Material Library is regularly updated with timely market surveys and material samples from the market so the students can have real-time knowledge of all construction materials, their properties, how to work with it and most importantly, the costing and estimation!
                </div>
                <div class="library-ICT-card-container">
                        <div class="library-ICT-card">
    
                        </div>
                        <div class="library-ICT-card">
    
                        </div>
                        <div class="library-ICT-card">
    
                        </div>
                        <div class="library-ICT-card">
    
                        </div>
    
                    </div>
    
        
            </div>
          
            </div>
            <Footer/>           

        </div>
           
        )
}

export default MaterialLibrary
