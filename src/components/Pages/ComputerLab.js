import React from 'react';
import '../PagesCss/ComputerLab.css';
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'
function ComputerLab() {
    return (
        <div>
            <Navigationbar/>
        <div class="computer-main-container">
            
            <div class="computer-sub-nav">
            <Link to="/studentcorner" class="computer-sub-nav-item">Student Corner</Link>
                <Link to="/ict" class="computer-sub-nav-item">ICT</Link>
                <Link to="/hostel" class="computer-sub-nav-item">Hostel</Link>
                <Link to="/library" class="computer-sub-nav-item">Library</Link>
                <Link to="/sport" class="computer-sub-nav-item">Sports</Link>
                <Link to="/transport" class="computer-sub-nav-item">Transport</Link>
                <Link to="/computerlab" class="computer-sub-nav-item">Computer lab</Link>
                <Link to="/materiallibrary" class="computer-sub-nav-item">Material Library</Link>
         
         
            </div>
            <div className="computer-container">
                <div className="computer-container-header">
                    <div>
                    COMPUTER LAB
                    </div>
                    <div className="computer-container-border">
    
                    </div>
                </div>
                <div></div>
                <div class="computer-container-paragraph">
                FCOA has a fully equipped computer lab with state of the art facilities like super-fast wifi, printers, scanners as well as plotting machines which makes it a one-stop-shop for students any printing and scanning requirements. Also, Computers are equipped with all the latest software like AutoCAD, Google Sketchup, Revit, Adobe Suite and many more.
                </div>
                <div class="computer-ICT-card-container">
                        <div class="computer-ICT-card">
    
                        </div>
                        <div class="computer-ICT-card">
    
                        </div>
                        <div class="computer-ICT-card">
    
                        </div>
                        <div class="computer-ICT-card">
    
                        </div>
    
                    </div>
    
        
            </div>
          
            </div>
            <Footer/>
           
        </div>
            

    )
}

export default ComputerLab
