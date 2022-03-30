import React from 'react'
import ErrorGif from '../../images/T8kd.gif';
import style from './Error.module.css';

function Error() {
  return (
    <div className={style.error}>
      <div>
        <img src={ErrorGif} alt="Error" />  
      </div>
    </div>
  )
}

export default Error;