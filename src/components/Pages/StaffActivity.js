import React from 'react'
import '../PagesCss/StaffActivity.css'
import Navigationbar from '../ReusableComponents/Navigation_bar'
import Footer from '../ReusableComponents/Footer'

function StaffActivity() {
    return (
        <div className="staff-main-container">
            <Navigationbar/>
            <div className="staff-sub-nav">
                <a className="staff-sub-nav-item" href="#1">Faculty</a>
                <a className="staff-sub-nav-item" href="#2">Admin Staff</a>
                <a className="staff-sub-nav-item" href="#3">Previous Faculty</a>
                <a className="staff-sub-nav-item" href="#4">Staff Activity</a>
                
            </div>
            <div className="staff-container">
                <div className="staff-container-header">
                Staff Activity
                <div className="staff-container-border">

                </div>
                </div>
                <div className="staff-paragraph">
            The Faculty team at FCOA comprises experts and practising professional architects with expertise in various avenues of architecture like Urban Design, Urban Planning, Landscape Design, Digital Architecture and many more.
            </div><br/>
            <div className="staff-paragraph">
            All the faculty members are thoroughly involved in regular day to day teaching as well as arranging various academic workshops, site visits and case studies.
            </div><br/>
            <div className="staff-paragraph">
            1. Computer Lab: FCOA has a fully equipped computer lab with state of the art facilities like super-fast wifi, printers, scanners as well as plotting machines which makes it a one-stop-shop for students any printing and scanning requirements. Also, Computers are equipped with all the latest software like AutoCAD, Google Sketchup, Revit, Adobe Suite and many more.
            </div><br/>
            <div className="staff-paragraph">
            2. Construction Yard: FCOAs Construction Yard is equipped with all types of standard construction materials as well as working equipment which allows students to get hands-on experience on the actual construction process.
            </div><br/>
            <div className="staff-paragraph">
            3. STUDY ABROAD COUNSELLING CELL: Interested in pursuing your Masters/ PhDs abroad?<br/><br/> We, at FCOA, are setting up a Counselling Cell for guidance towards studying abroad and all the related information.
            </div><br/>
            <div className="staff-paragraph">
            Why a dedicated counselling Cell for architecture master’s programs?<br/><br/> There are already several establishments which provide counselling for studying abroad, but those are all focused on either engineering or medical fields.<br/><br/> After B. Arch there are a lot of avenues open to you like urban planning/ urban design/ landscape design and students are usually not aware of the details of these programs and how they differ from Indian Master’s programs.<br/><br/> We, at FCOA, aim to guide you into these different avenues of architecture with a thorough understanding of your academic inclination and interests. This is a new venture dedicated to guiding aspiring students who wish to go abroad for further studies. This counselling group will include Ar. Shriram Lele along with few other faculty members have been through the process of studying abroad and successfully achieving their goals.
            </div>
        
            </div>
            <Footer/>
         </div>
    )
}

export default StaffActivity
