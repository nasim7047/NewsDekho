
import React, { Component } from 'react'
import Navbar from './component/Navbar'
import News from './component/News'
import Sports from './component/Sports';
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Business from './component/Business';
import Science from './component/Science';
import Entertainment from './component/Entertainment';
import Technology from './component/Technology';

export default class App extends Component {
  render() {
    return (
      <div>
       
        <BrowserRouter>
        <Navbar/>
        <News/>
      <Routes>
          <Route path="/" element={<News/>}/>
          <Route path="/NewsDekho" element={<News/>}/>
          <Route path="/sports" element={<Sports/>}/>
          <Route path="/business" element={<Business/>}/>
          <Route path="/science" element={<Science/>}/>
          <Route path="/entertainment" element={<Entertainment/>}/>
          <Route path="/technology" element={<Technology/>}/>
         
      </Routes>
      </BrowserRouter>

      </div>
    )
  }
}
