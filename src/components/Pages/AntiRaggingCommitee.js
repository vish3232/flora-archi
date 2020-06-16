import React from 'react'
import '../PagesCss/AntiRaggingCommitee.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

function AntiRaggingCommitee() {
    return (
        <div>
        <Navigationbar/>
        <div class="anti-main-container">
            
            <div class="anti-sub-nav">
                <Link to="/antiraggingcomitee" class="anti-sub-nav-item">Anti-Ragging Comitee</Link>
                <Link to="/vishakacommitee" class="anti-sub-nav-item">Vishaka Judgement</Link>
                <Link to="/internalcommitee" class="anti-sub-nav-item">Internal Compliance Committee</Link>
                <Link to="/scstcommitee" class="anti-sub-nav-item">SC/ST Committee</Link>
                <Link to="/grivance" class="anti-sub-nav-item">Grievance Redressal Committee</Link>
             </div>
             <div className="anti-container">
                <div className="anti-container-header">
                    <div>
                    ANTI RAGGING COMITEE
                    </div>
                    <div className="anti-container-border">
    
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
                        <td>Ar. Swapna Birajdar</td>
                        <td>9860404589</td>
                    </tr>
                    <tr>
                        <td>2</td>
                        <td>Ar. Dhamale Supriya Shashikant</td>
                        <td>7588623814</td>
                    </tr>
                    <tr>
                        <td>3</td>
                        <td>Prof. Dr. Sumant Kulkarni</td>
                        <td>9423470761</td>
                    </tr>
                    
                    
                </table>
               
           </div> 
         </div>
        <Footer/>
        </div>
             )
}

export default AntiRaggingCommitee
