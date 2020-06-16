import React from 'react'
import '../PagesCss/Library.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

function Library() {
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
                    LIBRARY
                    </div>
                    <div className="library-container-border">
    
                    </div>
                </div>
                <div></div>
                <div class="library-container-paragraph">
                At FCOA, we have developed a spacious library with a reading hall with the books collection from across all the domain. The Library is 24 hrs open for students to access it.
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

export default Library
