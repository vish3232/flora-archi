import React from 'react'
import '../PagesCss/Hostel.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import { Link } from 'react-router-dom'

function Hostel() {
    return (
        <div>
        <Navigationbar/>
        <div class="hostel-main-container">
            
            <div class="hostel-sub-nav">
            <Link to="/studentcorner" class="hostel-sub-nav-item">Student Corner</Link>
                <Link to="/ict" class="hostel-sub-nav-item">ICT</Link>
                <Link to="/hostel" class="hostel-sub-nav-item">Hostel</Link>
                <Link to="/library" class="hostel-sub-nav-item">Library</Link>
                <Link to="/sport" class="hostel-sub-nav-item">Sports</Link>
                <Link to="/transport" class="hostel-sub-nav-item">Transport</Link>
                <Link to="/computerlab" class="hostel-sub-nav-item">Computer lab</Link>
                <Link to="/materiallibrary" class="hostel-sub-nav-item">Material Library</Link>
         
            </div>
            <div className="hostel-container">
                <div className="hostel-container-header">
                    <div>
                    HOSTEL
                    </div>
                    <div className="hostel-container-border">
    
                    </div>
                </div>
                <div class="hostel-container-paragraph2">
                At FCOA, we have developed a beautiful campus which offers not only regular college education but also takes care of other necessities like accommodation, monthly mess as well as an outdoor cafeteria.
                </div>
                <div class="hostel-container-paragraph2">
                At FCOA, We have developed a fully equipped hostel, separate sections for boys and girls. Every room has 4 occupants and has an attached bath and toilet. Other facilities include an in house gymnasium, monthly mess and strict rules that are carefully observed by wardens all the time.
                </div>

                <div class="hostel-ICT-card-container">
                        <div class="hostel-ICT-card">
    
                        </div>
                        <div class="hostel-ICT-card">
    
                        </div>
                        <div class="hostel-ICT-card">
    
                        </div>
                        <div class="hostel-ICT-card">
    
                        </div>
    
                    </div>
                    {/* Hostel fess container */}
                    <div class="Hostel-fees-container">
                        <div class="Hostel-fees-border"></div>
                        <div className="Hostel-fess-header">Hostel Fees</div>
                    
                    </div>
                    <div className="Hostel-fees-table">
                    <table>
                        <tr>
                            <th>Hostel + Mess</th>
                            <td>Rs 45,000</td>
                     
                        </tr>
                     </table>
                    
                    </div>
                    {/* Gurukul Model for Hostel Students container */}
                     <div className="Hostel-fees-container">
                        <div className="Hostel-fees-border"></div>
                        <div className="Hostel-fess-header">Gurukul Model for Hostel Students</div>
                    </div>
                    <div className="Gurukul-model-table">
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Activities</th>
                     
                        </tr>
                        <tr>
                            <td>8.00 am to 8.30 am</td>
                            <td>Breakfast</td>
                        </tr>
                        <tr>
                            <td>8.30 am to 2.30 pm</td>
                            <td>Lectures and Practicals</td>
                        </tr>
                        <tr>
                            <td>2.30 pm to 3.30 pm</td>
                            <td>Skill Development</td>
                        </tr>
                        <tr>
                            <td>4.30 pm to 7 pm</td>
                            <td>Foreign Language Training (German / French /Japanese), Additional Curriculum Coaching</td>
                        </tr>
                        <tr>
                            <td>7 pm to 8.30 pm</td>
                            <td>Entertainment (TV / Indoor Games)</td>
                        </tr>
                        <tr>
                            <td>8.30 pm to 9 pm</td>
                            <td>Dinner</td>
                        </tr>
                        <tr>
                            <td>9 pm to 12 am</td>
                            <td>Studies in 24-hour open Library Reading Hall</td>
                        </tr>
                     
                     </table>
                 
                    </div>

                     {/* Day Boarding Model for Non-Hostel Students container */}
                     <div className="Hostel-fees-container">
                        <div className="Hostel-fees-border"></div>
                        <div className="Hostel-fess-header">Day Boarding Model for Non-Hostel Students</div>
                    </div>
                    <div className="Gurukul-model-table">
                    <table>
                        <tr>
                            <th>Time</th>
                            <th>Activities</th>
                     
                        </tr>
                        <tr>
                            <td>7.30 am to 8.00 am</td>
                            <td>Travel Time (City to College)</td>
                        </tr>
                        <tr>
                            <td>8.00 am to 8.30 am</td>
                            <td>Breakfast</td>
                        </tr>
                        <tr>
                            <td>8.30 am to 2.30 pm</td>
                            <td>Lectures and Practicals</td>
                        </tr>
                        <tr>
                            <td>2.30 pm to 3.30 pm</td>
                            <td>Skill Development</td>
                        </tr>
                        <tr>
                            <td>3.30 pm to 4 pm</td>
                            <td>Travel Time (College to City)</td>
                        </tr>
                        <tr>
                            <td>8.30 pm to 9 pm</td>
                            <td>Dinner</td>
                        </tr>
                        <tr>
                            <td>9 pm to 12 am</td>
                            <td>Studies in 24-hour open Library Reading Hall</td>
                        </tr>
                     
                     </table>
                 
                    </div>

                   
                    
                   
          
    
        
            </div>

            
            </div>
            <Footer/>
        </div>
            
    )
}

export default Hostel
