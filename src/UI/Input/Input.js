import React from "react";
import classes from './Input.module.css'


const Input = props => {

   function isInvalid ({valid, touched, shoudValidate}){
    return !valid && shoudValidate && touched
    }
 
    const inputType = props.type || 'text'
    const cls =[classes.Input]
    const htmlFor=`${inputType}=${Math.random()}`

    if(isInvalid(props)){
        cls.push(classes.invalid)
    }

    return (
        <div className={cls.join(' ')} >
            <label htmlFor={htmlFor}>{props.label}</label>
            <input
             type={inputType}
             id={htmlFor}
             value={props.value}
             onChange={props.onChange}
            
            />
            {isInvalid(props)?           <span>{props.errorMessage || 'Enter valid value'}</span> : null}
       
        </div>  
    )
}
export default Input