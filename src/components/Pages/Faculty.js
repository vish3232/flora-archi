import React from 'react'
import '../PagesCss/Faculty.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'

const Faculty = () => {
    return (
        <div>
            <Navigationbar />
            <div className="staff-sub-nav">
                <a className="staff-sub-nav-item" href="#1">Faculty</a>
                <a className="staff-sub-nav-item" href="#2">Admin Staff</a>
                <a className="staff-sub-nav-item" href="#3">Previous Faculty</a>
                <a className="staff-sub-nav-item" href="#4">Staff Activity</a>

            </div>

            <div className="principle-grid">
                <div className="principle">
                    <div className="principle-title">
                        <strong>Principal</strong>
                        <div className="principle-line"></div>
                    </div>
                    <div className="image-container">
                        <img width={450} height={344} src={require('../../assets/Rahuldev Patil.jpg')} />
                        <div className="principle-name">
                            Ar. Rahuldev Patil
                        </div>
                        <div className="faculty-designation">
                            Principal
                        </div>
                        <div className="faculty-qualification">
                            B. Arch. | Master’s in Landscape Architecture | Post Graduate in Environmental Management
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>
                    </div>
                </div>
                <div className="vice-principle">
                    <div className="vice-principle-title">
                        <strong>Vice Principal</strong>
                        <div className="principle-line"></div>
                    </div>
                    <div className="image-container">
                        <img width={450} height={344} src={require('../../assets/Shahid Rahmat.jpg')} />
                        <div className="principle-name">
                            Dr. Shahid Rahmat
                        </div>
                        <div className="faculty-designation">
                            Vice Principal
                        </div>
                        <div className="faculty-qualification">
                            Associate professor - B. Arch. | Master’s in City Planning | Doctorate in Infrastructure  Planning
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>
                    </div>
                </div>
            </div>

            <div className="faculty">
                <div className="faculty-title">
                    <strong>Faculty</strong>
                    <div className="principle-line"></div>
                </div>
                <div className="faculty-grid">
                    <div className="image">
                        <img width={250} src={require('../../assets/Rahul Padalkar.jpg')} alt="" />
                        <div className="principle-name">
                            Rahul Padalkar
                        </div>
                        <div className="faculty-designation">
                            Assitant professor
                        </div>
                        <div className="faculty-qualification">
                            BE Civil | Master’s in Transportation Infrastructure and Systems Engineering
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>

                    </div>
                    <div className="image">
                        <img width={250} src={require('../../assets/Sagar Shinde.jpg')} alt="" />
                        <div className="principle-name">
                            Sagar Shinde
                        </div>
                        <div className="faculty-designation">
                            Assitant professor
                        </div>
                        <div className="faculty-qualification">
                            B. Arch. | Master's in Urban Design
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>


                    </div>
                    <div className="image">hi</div>
                </div>



            </div>

            <div className="visiting-faculty">
                <div className="visiting-faculty-title">
                    <strong>Visiting Faculty</strong>
                    <div className="principle-line"></div>
                </div>
                <div className="visiting-faculty-grid">
                    <div className="visiting-faculty-grid-image">
                        <img width={230} height={230} src={require('../../assets/Shalaka Gotkhindikar.jpg')} alt=""/>
                        <div className="principle-name">
                        Ar. Shalaka Gotkhindikar
                        </div>
                        <div className="faculty-designation">
                        Visiting Faculty
                        </div>
                        <div className="faculty-qualification">
                        B. Arch. | Master’s in Indology
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>

                    </div>
                    <div className="visiting-faculty-grid-image">
                    <img width={230} height={230} src={require('../../assets/Prashant Joshi.jpg')} alt=""/>
                        <div className="principle-name">
                        Ar. Prashant Josh
                        </div>
                        <div className="faculty-designation">
                        Visiting Faculty
                        </div>
                        <div className="faculty-qualification">
                        B. Arch. | M. Arch
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>

                    </div>
                    <div className="visiting-faculty-grid-image">
                    <img width={230} height={230} src={require('../../assets/Supriya Dhamale.jpg')} alt=""/>
                        <div className="principle-name">
                        Ar. Supriya Dhamale
                        </div>
                        <div className="faculty-designation">
                        Visiting Faculty
                        </div>
                        <div className="faculty-qualification">
                        B. Arch. |Master’s in Digital Architecture
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>

                    </div>
                    <div className="visiting-faculty-grid-image">
                    <img width={230} height={230} src={require('../../assets/Prashant Gadre.jpg')} alt=""/>
                        <div className="principle-name">
                        Ar. Prashant Gadre
                        </div>
                        <div className="faculty-designation">
                        Visiting Faculty
                        </div>
                        <div className="faculty-qualification">
                        G.D. Arch
                        </div>
                        <div className="faculty-full-profile-button">
                            <a className="faculty-full-profile-button-header" href="">Full Profile</a>
                        </div>

                    </div>

                </div>
            </div>



            <Footer />
        </div>
    )
}

export default Faculty
