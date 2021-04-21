import React from 'react';
import './about.scss';
import {
    TITLE,
    SUBTITLE,
    DESCRIPTION,
    NF_NAME,
    NF_JOB,
    JS_NAME,
    JS_JOB
} from './constants';

import { FaLinkedin } from 'react-icons/fa';

import JS from '../../assets/avatar_js.png';
import NF from '../../assets/avatar_nf.png';

function About() {

    return (
        <div className="about-container">
            <div className="about-info">
                <div className="person">
                    <div className="person__image">
                        <img src={NF} alt="Natacha Ferenc" />
                    </div>
                    <div className="person__data">
                        <h2 className="person__data__name">{NF_NAME}</h2>
                        <span className="person__data__description">{NF_JOB}</span>
                        <div className="person__data__icon">
                            <a href="https://www.linkedin.com/in/natachaferenc/" rel='noopener noreferrer' target='_blank'>
                                <FaLinkedin fontSize="1.5rem" color="black"/>
                            </a>
                        </div>

                    </div>
                </div>
                
                <div className="person">
                    <div className="person__image">
                        <img src={JS} alt="Jonathan Sarco" />
                    </div>
                    <div className="person__data">
                        <h2 className="person__data__name">{JS_NAME}</h2>
                        <span className="person__data__description">{JS_JOB}</span>
                        <div className="person__data__icon">
                        <a href="https://www.linkedin.com/in/jonathan-sarco/" rel='noopener noreferrer' target='_blank'>
                                <FaLinkedin fontSize="1.5rem" color="black"/>
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className="about-container__description">
                <h1 className="description__title">{TITLE}</h1>
                <h1 className="description__subtitle">{SUBTITLE}</h1>
                <br />
                <p>{DESCRIPTION}</p>
            </div> */}

        </div>
    );
}

export default About;
