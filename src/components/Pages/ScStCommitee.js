import React from 'react'
import '../PagesCss/ScStCommitee.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

function ScStCommitee() {
    return (
            <div>
                <Navigationbar/>
            <div className="sc-main-container">
            
            <div class="sc-sub-nav">
            <Link to="/antiraggingcomitee" class="sc-sub-nav-item">Anti-Ragging Comitee</Link>
                <Link to="/vishakacommitee" class="sc-sub-nav-item">Vishaka Judgement</Link>
                <Link to="/internalcommitee" class="sc-sub-nav-item">Internal Compliance Committee</Link>
                <Link to="/scstcommitee" class="sc-sub-nav-item">SC/ST Committee</Link>
                <Link to="/grivance" class="sc-sub-nav-item">Grievance Redressal Committee</Link>

             </div>
             <div className="sc-container">
                <div className="sc-container-header">
                    <div>
                    SC/ST COMITTEE
                    </div>
                    <div className="sc-container-border">
    
                    </div>
                </div>

                <table>
                    <tr>
                        <th>Sr. No.</th>
                        <th>Name</th>
                        <th>Contact</th>
                    </tr>
                    <tr>
                        <td>1</td>
                        <td>Prof. Rahuldev D. Patil</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Prof. Shahin Rahmat</td>
                        <td>-</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Prof.Shriram Lele</td>
                        <td>-</td>
                    </tr>
                    
                    
                </table>
               
           </div> 
         </div>
            <Footer/>
            </div>
              
        )
}

export default ScStCommitee 
