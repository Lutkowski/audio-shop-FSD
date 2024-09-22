import React from 'react';
import Logo from "../../../shared/ui/Logo/Logo.tsx";
import Navbar from "../../../shared/ui/Navbar/Navbar.tsx";
import Icon from "../../../shared/ui/Icon/Icon.tsx";
import {LangIcon, TelegramIcon, VKIcon, WhatsappIcon} from "../../../shared/assets";
import classes from "./Footer.module.scss"
import MyLink from "../../../shared/ui/MyLink/MyLink.tsx";

const Footer = () => {
    return (
        <footer className={classes.Footer}>
            <Logo/>
            <nav>
                <ul>
                    <li>Избранное</li>
                    <MyLink to={'/cart'}>
                        <li>Корзина</li>
                    </MyLink>
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
                <Icon to={'https://vk.com/'} iconImage={<VKIcon className='hoverable'/>}></Icon>
                <Icon to={'https://web.telegram.org/'} iconImage={<TelegramIcon className='hoverable'/>}></Icon>
                <Icon to={'https://web.whatsapp.com/'} iconImage={<WhatsappIcon className='hoverable'/>}></Icon>
            </Navbar>
        </footer>
    );
};

export default Footer;
