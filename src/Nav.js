import React, {useState,useEffect} from 'react';
import './Nav.css';


function Nav(){

    const [show,handleShow]= useState(false);

    useEffect(()=>{
        window.addEventListener("scroll",()=>{
            if(window.scrollY>100){
                handleShow(true);

            }else handleShow(false);
        });
        return () =>{
            window.removeEventListener("scroll");
        };
    },[]);

    return(
        <div className={`nav ${show && 'nav__black'}`}>
            <img className='nav__logo'
            src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.svg"
            alt="Netflix Logo"
            />
            <img className='nav__avatar'
            src="https://mir-s3-cdn-cf.behance.net/project_modules/disp/366be133850498.56ba69ac36858.png"
            />

        </div>
    )
}

export default Nav;