
import classes from './Drawer.module.css'
import Backdrop from '../../../UI/BackDrop/BackDrop'
import React, { Component } from 'react'
import { Link } from 'react-router-dom'

const links = [
        {to: "/", label:"Список", element:true},
        {to: "/auth", label:"Авторизация", element:false},
        {to: '/quiz-creator', label:"Сосздать текст", element:false},
]

class Drawer extends Component {

    clickHandler=()=>{
        this.props.onClose()
    }

    renderLinks = () => {
        return links.map((link, index) => {
            return (
                <li key={index}>
                    <Link
                    to={link.to}
                    exact={link.exact}
                    onClick={this.clickHandler}
                    className={({isActive})=> isActive ? classes.active :null}
                  
                
                    >
                    {link.label}
                    </Link>
                </li>
            )
        })
    }
    render() {

        const cls = [classes.Drawer]

        if(!this.props.isOpen){
            cls.push(classes.close)
        }

        return (
            <React.Fragment>
            <nav className={cls.join(' ')}>
                <ul>
                    { this.renderLinks()}
                </ul>
            </nav>
            { this.props.isOpen ? <Backdrop onClick={this.props.onClose} /> : null }
            </React.Fragment>
        )
    }
}
export default Drawer