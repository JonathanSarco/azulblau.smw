import React from 'react';
import './about.scss';
import {
    TITLE,
    SUBTITLE,
    DESCRIPTION,
    NF_NAME,
    NF_JOB,
    JS_NAME,
    JS_JOB,
    NF_LINKEDIN,
    JS_LINKEDIN
} from './constants';
import JS_AVATAR from '../../assets/avatar_js.png';
import NF_AVATAR from '../../assets/avatar_nf.png';
import Profile from './profile/profile';

function About() {

    const newText = DESCRIPTION.split('\n').map(str => <p className="about-description__text">{str}</p>);

    return (
        <div className="about-container">
            <div className="about-info">
                <Profile key={NF_NAME} name={NF_NAME} job={NF_JOB} imageUrl={NF_AVATAR} imageAlt={NF_NAME} linkedInUrl={NF_LINKEDIN} />
                <Profile key={JS_NAME} name={JS_NAME} job={JS_JOB} imageUrl={JS_AVATAR} imageAlt={JS_NAME} linkedInUrl={JS_LINKEDIN} />
            </div>

            <div className="about-description">
                <h1 className="about-description__title">{TITLE}</h1>
                <h1 className="about-description__subtitle">{SUBTITLE}</h1>
                <hr />
                {newText}
            </div>

        </div>
    );
}

export default About;
