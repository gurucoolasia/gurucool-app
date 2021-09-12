import React from 'react'
import './navbar.css'



function Navbar() {


    return (
        <>
           <div className = 'main'>
               <div className = 'logo-space'>
                   logo
               </div>

               <div className = 'nav-list'>
                   <ul className = "nav-item-list">
                       <li><a href="#">Learn More</a></li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Support</a></li>
                       <li><a href="#">Getting Started</a></li>
                   </ul>
               </div>
               <div className = "toggle-collapse">
                   <span><i class="fa fa-bars"></i></span>
                </div>
               <div className = 'logout-space'>
                    logout
               </div>
            </div> 
        </>
    )
}

export default Navbar