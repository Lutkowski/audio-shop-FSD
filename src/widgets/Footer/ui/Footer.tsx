import React from 'react';
import Logo from "../../../shared/ui/Logo/Logo.tsx";
import Navbar from "../../../shared/ui/Navbar/Navbar.tsx";
import Icon from "../../../shared/ui/Icon/Icon.tsx";
import {LangIcon, TelegramIcon, VKIcon, WhatsappIcon} from "../../../shared/assets";
import classes from "./Footer.module.scss"
import {Link} from "react-router-dom";

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <Logo/>
            <nav>
                <ul>
                    <li>Избранное</li>
                    <Link to={'/cart'}>
                        <li>Корзина</li>
                    </Link>
                    <li>Контакты</li>
                </ul>
            </nav>
            <div>
                <p>Условия сервиса</p>
                <div className={classes.Footer__Languages}>
                    <LangIcon/>
                    <ul>
                        <li>Рус</li>
                        <li>Eng</li>
                    </ul>
                </div>
            </div>
            <Navbar className={classes.Footer__Navbar}>
                <Icon iconImage={<VKIcon/>}></Icon>
                <Icon iconImage={<TelegramIcon/>}></Icon>
                <Icon iconImage={<WhatsappIcon/>}></Icon>
            </Navbar>
        </footer>
    );
};

export default Footer;
