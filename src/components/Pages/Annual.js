import React from 'react'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'
import '../PagesCss/Annual.css'
import { Link } from 'react-router-dom'

function Annual() {
    return (
   <div className="annual-main-container">
            <Navigationbar/>
            <div className="annual-sub-nav">
            <Link className="annual-sub-nav-item" to="/events">Events</Link>
                <Link className="annual-sub-nav-item" to="/workshop">Workshops</Link>
                <Link className="annual-sub-nav-item" to="/studycase">Study tours & Case Studies</Link>
                <Link className="annual-sub-nav-item" to="/guestlecture">Guest Lectures</Link>
                <Link className="annual-sub-nav-item" to="/competition">Competitions</Link>
                <Link className="annual-sub-nav-item" to="/annual">Annual College Exhibition</Link>
            
            </div>
            <div className="annual-container">
                <div className="annual-container-header">
                    <div>
                    Annual College Exhibition
                    </div>
                    <div className="annual-container-border">
    
                    </div>
                </div>
                <div className="annual-container-paragraph">
                ANNUAL COLLEGE EXHIBITION (1st March- 4th March 2020)<br/><br/> We, the Florians just completed 3 years in 2020. Yet, we successfully managed to hold an Annual Exhibition at Yashwantrao Chavan Art Gallery. This was our very first exhibition and we received a great response from all the visitors, so much that many people requested us to extend the initially planned 3-day exhibition for another day. It was a 4-day event and we all put our best efforts to showcase our student's academic work as well as other creative art forms like photos, sketches and paintings. The event also included various workshops like canvas painting, sketching puzzle corner and many more, as well as presentations for all the visitors and the visitors, were excited to participate. All in all, the exhibition was a huge success and we look forward to our next exhibition which will happen in 2021!
               </div>
            <div class="annual-ICT-card-container">
                        <div class="annual-ICT-card">
    
                        </div>
                        <div class="annual-ICT-card">
    
                        </div>
                        <div class="annual-ICT-card">
    
                        </div>
                        <div class="annual-ICT-card">
    
                        </div>
              </div>
            </div>
            <Footer/>
        </div>


        )
}

export default Annual
