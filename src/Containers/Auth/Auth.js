import React, { Component } from "react";
import classes from './Auth.module.css'
import Button from "../../UI/Button/Button";
import Input from "../../UI/Input/Input";

export default class Auth extends Component {

    state ={
        formControls: {
            email:{
                value:'',
                type:'email',
                label:'Email',
                errorMessage:'Enter right email',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    email:true
                }
            },
            password:{
                value:'',
                type:'password',
                label:'Password',
                errorMessage:'Enter valid password',
                valid:false,
                touched:false,
                validation:{
                    required:true,
                    minLenght:6
                }
            }
        }
    }

    SubmitHandler = (event) => {
        event.preventDefault()
    }

    loginHandler = () => {

    }

    registerHandler = () => {

    }

    render() {
        return (
            <div className={classes.Auth}>
                <div>
                    <h1>Авторизация</h1>
                    <form onSubmit={this.SubmitHandler}>
                        <Input label="Email" />
                        <Input 
                        label="Password"
                        errorMessage={'error'}
                        />
                        <Button type="success" onClick={this.loginHandler}>Войти</Button>
                        <Button type="primary" onClick={this.registerHandler}>Зарегестрироваться</Button>
                    </form>
                </div>
            </div>
        )
    }
}