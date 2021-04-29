import React from 'react';
import './spinner.scss';

const svg = {
    animation: 'spin 1s linear infinite',
    justifySelf: 'center'
}

const Spinner = ({ size = '7rem', style = svg, outCircle = "rgb(189, 189, 189)", insCircle = "rgb(34, 34, 34)" }) =>
    <div className='spinner-container'>
        <svg style={style} width={size} height={size} viewBox='0 0 24 24' strokeWidth='3' strokeLinecap='round'>
            <style>{`
			@keyframes spin {
  				0% { transform: rotate(0deg) }
  				100% { transform: rotate(359.99deg) }
			}
		`}</style>
            <circle cx='12' cy='12' r='5.5' fill='none' stroke={outCircle}></circle>
            <circle cx='12' cy='12' r='5.5' fill='none' stroke={insCircle} strokeDasharray='12 32'></circle>
        </svg>
    </div>

export default Spinner