import React from 'react'
import logo from '../../assets/logo.png'
import '../ReusableComponentCss/Navigation_bar.css'
import down from '../../assets/back.svg'
import { Link } from 'react-router-dom'


const Navigation_bar = () => {
    return (
        <div className="navigationbar" style={{ height: 120 }}>
            <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
                <img className="logo" src={logo} alt="logo" />
                <div>
                    <span className="title">FLORA COLLEGE OF ARCHITECTURE</span>
                    <div className="sub-title">Architecture is an art we live in</div>
                </div>
            </div>
            <div className="navbar">
                <Link to="/">HOME</Link>
                <div className="dropdown">
                    <button className="dropbtn">ABOUT
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/about">About us</Link>
                        <Link to="/vision">Vision</Link>
                        <Link to="/mission">Mission</Link>
                        <Link to="/notefromdirector">Note from Director</Link>
                        <Link to="/principlemessage">Principals Message</Link>
                        <Link to="/governingcounsil">Governing Council</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">FACULTY
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/faculty">Faculty</Link>
                        <Link to="/staffactivity">Staff Activity</Link>
                        <Link to="/adminstaff">Admin Staff</Link>
                        <Link to="/previousstaff">Previous Staff</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">COURSES
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/barch">B.Arch</Link>
                        <Link to="/prospecting">Prospecting Students</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">ADMISSION
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/overview">Overview</Link>
                        <Link to="/grants">Grants & Scholarships</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">ACTIVITIES
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/events">Events</Link>
                        <Link to="/workshop">Workshops</Link>
                        <Link to="/studycase">Study tours & Case Studies</Link>
                        <Link to="/guestlecture">Guest Lectures</Link>
                        <Link to="/competition">Competitions</Link>
                        <a href="/annual">Annual College Exhibition</a>
                        
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">STUDENT CORNER
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                    <Link to="/studentcorner">Student Corner</Link>
                    <Link to="/ict">ICT</Link>
                    <Link to="/hostel">Hostel</Link>
                    <Link to="/library">Library</Link>
                    <Link to="/sport">Sport</Link>
                    <Link to="/transport">Transport</Link>
                        
                        <Link to="/computerlab">Computer Lab</Link>
                        <Link to="/materiallibrary">Material Library</Link>
                    </div>
                </div>
                <div className="dropdown">
                    <button className="dropbtn">COMITTEE
                      <img src={down} alt="down" />
                    </button>
                    <div className="dropdown-content">
                        <Link to="/antiraggingcomitee">Anti-Ragging Committee</Link>
                       
                        <Link to="/vishakacommitee">Vishaka Committee</Link>
                        <Link to="/internalcommitee">Internal Compliance Committee</Link>
                        <Link to="/scstcommitee">SC/ST Committee</Link>
                        <Link to="/grivance">Student Affair Comitee</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Navigation_bar
