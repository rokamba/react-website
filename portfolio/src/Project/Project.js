import React from 'react'
import './Project.css'
import Project1 from '../img/Project1.PNG'
import Project2 from '../img/Project2.PNG'
import Project3 from '../img/Project3.PNG'


export default function Project() {
  return (
    <div className="project component__space" id="Portfolio">
      <div className="heading">
        <h1 className="heading">My Latest Project</h1>
        <p className="heading p__color">
          Here are some of the projects i have worked on.
        </p>
        
      </div>
       <div className="container">
           <div className="row">
             
             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project1} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Run Buddy</h5>
                     
                     <a href="https://rokamba.github.io/run-buddy/" className="project__btn">Click me</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project2} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Food Locator</h5>
                     
                     <a href="https://ncp9988.github.io/Eat-Eat-Eat/" className="project__btn">Click me</a>
                     </div>
                 </div>
             </div>


             <div className="col__3">
                 <div className="project__box pointer relative">
                     <div className="project__box__img pointer relative">
                         <div className="project__img__box">
                             <img src={Project3} alt="" className="project__img" />
                         </div>
                         <div className="mask__effect"></div>
                     </div>
                     <div className="project__meta absolute">
                     <h5 className="project__text">Memegram</h5>
                     
                     <a href="https://memegram2022.herokuapp.com/login" className="project__btn">Click me</a>
                     </div>
                 </div>
             </div>

           </div>
       </div>
    </div>
  )
}
