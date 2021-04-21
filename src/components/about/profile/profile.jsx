import React from 'react';
import './profile.scss';
import { FaLinkedin } from 'react-icons/fa';

function Profile({imageUrl, imageAlt, name, job, linkedInUrl}) {

    return (
        <div className="person">
            <div className="person__image">
                <img src={imageUrl} alt={imageAlt} />
            </div>
            <div className="person__data">
                <h2 className="person__data__name">{name}</h2>
                <span className="person__data__description">{job}</span>
                <div className="person__data__icon">
                    <a href={linkedInUrl} rel='noopener noreferrer' target='_blank'>
                        <FaLinkedin key="linkedin" fontSize="1.5rem" color="black" />
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Profile;