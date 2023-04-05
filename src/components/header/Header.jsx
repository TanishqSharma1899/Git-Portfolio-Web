import React from 'react'
import './header.css'
import CTA from './CTA'
import ME from '../../Assets/me.png'
import HeaderSocial from './HeaderSocial'

export default function Header() {
    return (
        <header>
            <div className="container header__container">
                <h5>Hello I'm</h5>
                <h1>Tanishq Sharma</h1>
                <h5 className="text-light">MERN STACK DEVELOPER</h5>
                <CTA />
                <HeaderSocial />

                <div className="me">
                    <img src={ME} alt="me" />
                </div>
                <a href="#contact" className='scroll__down'>Scroll Down</a>
            </div>
        </header>
    )
}
