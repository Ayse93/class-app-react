/* eslint-disable no-unused-vars */
import React from 'react'
import Header from './Header'
import '../App.css'




function Left() {
    return (
        <React.Fragment>
            <div className='leftBlock'>
                <Header />
                <div className='my-infos'>
                    <div>
                        <p className='name'>Ayse Insan</p>
                        <span className='title'>Front End Developer</span>
                    </div>
                    <div>
                        <p><span>Phone:</span>+90 000 000 000</p>
                        <p><span>Email:</span>ayse@insan.com</p>
                        <p><span>Address:</span>10, Yildiz St, Iskele</p>
                    </div>
                </div>
            </div>



        </React.Fragment >
    )
}

export default Left