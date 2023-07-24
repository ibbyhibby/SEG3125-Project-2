import React from 'react'
import {Navbar} from './Navbar';

export const WrongPage = () => {
  return (
    <div className="home">
            <div className = "pageheaderbackground">
                <p className = "hometext">Sorry, but this page does not exist!</p>

            </div>

            <div className = "redirectPageRectangle">
                <br></br>
                <div className = "buttonsection">  
                    <button className = "redirectButton">
                        <a  href="/" className = "redirectLink">Click Here to go back to the Home Page!</a>
                    </button>
                </div>
            </div>

    </div>
  )
}

export default WrongPage;