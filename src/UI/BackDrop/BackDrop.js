import classes from './BackDrop.module.css'
import React from 'react'

const Backdrop =props=> <div className={classes.Backdrop}>{props.onClick}</div>
export default Backdrop