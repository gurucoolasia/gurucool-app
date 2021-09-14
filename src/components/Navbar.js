import React from 'react'
import './navbar.css'



function Navbar() {
    window.onload=function(){
        const toggleCollapse = document.getElementById('toggle-collapse')
        const nav = document.getElementById('nav-list')
    
        toggleCollapse.addEventListener('click',()=>{
            nav.classList.toggle('show')
        })
    }


    return (
        <>
           <div className = 'main'>
               <div className = 'logo-space'>
                   logo
               </div>

               <div className = 'nav-list' id = 'nav-list'>
                   <ul className = "nav-item-list">
                       <li><a href="#">Learn More</a></li>
                       <li><a href="#">Blog</a></li>
                       <li><a href="#">Support</a></li>
                       <li><a href="#">Getting Started</a></li>
                   </ul>
               </div>
               <div className = "toggle-collapse" id = 'toggle-collapse'>
                  <span className = 'hamburger'><i class="fa fa-bars"></i> </span>
                </div>
               <div className = 'logout-space'>
                    logout
               </div>
            </div> 
        </>
    )
}

export default Navbar