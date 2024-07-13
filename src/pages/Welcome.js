import React from 'react';
import style from "../style/welcome.module.css";
import {Link} from 'react-router-dom';

function Welcome(){
    return(
        <div className={style.WelcomeContainer}>
            <h2>Welcome!</h2>
            <div className={style.WelcomeInfo}>
                <p>We're working hard to get clubhouse reday for everyone! While we wrap up the finishing touches, we're adding people gradually to make sure nothing breaks</p>
                <p>Anyone can join with an invite from an existing user - or reserve your username and we'll text you if you have a friend on the app who can let you in. We are so grateful you're here and can't wait to have you join!</p>
                <p>Abhishek, Biswa & the Clubhouse team</p>
            </div>
            <div className={style.actionBtn}>
                <Link exact to="/invite" className="primaryBtn d-flex align-items-center mb-3">Get Your Username {" "}</Link>
                <Link to="/invite">Have an invite? Sign In</Link>
            </div>
        </div>
    )
};

export default Welcome;