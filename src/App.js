import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Home from './components/Pages/Home'
import About from './components/Pages/About'
import Notefromdirector from './components/Pages/Notefromdirector'
import Principlemessage from './components/Pages/Principlemessage'
import Governingcounsil from './components/Pages/Governingcounsil'
import Vision from './components/Pages/Vision'
import Mission from './components/Pages/Mission'
import Faculty from './components/Pages/Faculty'
import Barch from './components/Pages/Barch'
import Overview from './components/Pages/Overview'
import Student_Corner from './components/Pages/Student_Corner'
import ICT from './components/Pages/ICT'
import Hostel from './components/Pages/Hostel'
import Library from './components/Pages/Library'
import Paragraph from './components/Pages/Paragraph'
import Transport from './components/Pages/Transport'
import ComputerLab from './components/Pages/ComputerLab'
import MaterialLibrary from './components/Pages/MaterialLibrary'
import AntiRaggingCommitee from './components/Pages/AntiRaggingCommitee'
import VishakaCommitee from './components/Pages/VishakaCommitee'
import InternalCommitee from './components/Pages/InternalCommitee'
import ScStCommitee from './components/Pages/ScStCommitee'
import Grivance from './components/Pages/Grivance'
import Events from './components/Pages/Events'
import Workshop from './components/Pages/Workshop'
import StudyCase from './components/Pages/StudyCase'
import GuestLecture from './components/Pages/GuestLecture'
import Competition from './components/Pages/Competition'
import Annual from './components/Pages/Annual'
import StaffActivity from './components/Pages/StaffActivity'
const App = () => {
  return (
    <BrowserRouter>
      <Switch>
       <Route exact path="/" component={Home} />
       <Route  path="/about" component={About} />
       <Route  path="/notefromdirector" component={Notefromdirector} />
       <Route  path="/principlemessage" component={Principlemessage} />
       <Route  path="/governingcounsil" component={Governingcounsil} />
       <Route  path="/vision" component={Vision} />
       <Route  path="/mission" component={Mission} />
       <Route  path="/faculty" component={Faculty} />
       <Route  path="/barch" component={Barch} />
       <Route  path="/overview" component={Overview} />
       <Route  path="/studentcorner" component={Student_Corner} />
       <Route  path="/ict" component={ICT} />
       <Route  path="/hostel" component={Hostel} />
       <Route  path="/library" component={Library} />
       <Route  path="/sport" component={Paragraph} />
       <Route  path="/transport" component={Transport} />
       <Route  path="/computerlab" component={ComputerLab} />
       <Route  path="/materiallibrary" component={MaterialLibrary} />
       <Route  path="/antiraggingcomitee" component={AntiRaggingCommitee} />
       <Route  path="/vishakacommitee" component={VishakaCommitee} />
       <Route  path="/internalcommitee" component={InternalCommitee} />
       <Route  path="/scstcommitee" component={ScStCommitee} />
       <Route path="/grivance" component={Grivance}/>           
       <Route path="/events" component={Events}/>           
       <Route path="/workshop" component={Workshop}/>           
       <Route path="/studycase" component={StudyCase}/>           
       <Route path="/guestlecture" component={GuestLecture}/>           
       <Route path="/competition" component={Competition}/>           
       <Route path="/annual" component={Annual}/>           
       <Route path="/staffactivity" component={StaffActivity}/>           
       
       </Switch>
  </BrowserRouter>
  )
}

export default App
