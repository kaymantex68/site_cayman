import React from 'react';
import classes from './Navbar.module.css';
import logo from '../../Logo/logo.svg'
function Navbar() {
    return (
        <div className={classes.Main}>

            <div className={classes.Container}>
                <div className={classes.Logo}>
                    <img src={logo} />
                </div>
                <div className={classes.Nav_btn}>
                    <div className={classes.Nav_Links}>
                        <ul>
                            <li className={classes.Links}>
                                <a href="#">Главная</a>
                            </li>
                            <li className={classes.Links}>
                                <a href="#">Каталог</a>
                                <div className={classes.Dropdown}>
                                    <ul>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">IP камеры</a>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <a href="#">Уличные</a>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">ST</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">HiWatch</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">Dahua</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">EzViz</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">SVN</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">Matrix</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">Atis</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <a href="#">Купольные</a>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">ST</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">HiWatch</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">Dahua</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">EzViz</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">SVN</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">Matrix</a>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <a href="#">Atis</a>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <a href="#">Поворотные</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">IP регистраторы</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">AHD камеры</a>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <a href="#">Уличные</a>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <a href="#">Купольные</a>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <a href="#">Поворотные</a>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">AHD  регистраторы</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Блоки питания</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Домофония</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Охранная сигнализация</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Пожарная сигнализация</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Монтажные материалы</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Кабельная продукция</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={classes.Links}>
                                <a href="#">Монтаж</a>
                            </li>
                            <li className={classes.Links}>
                                <a href="#">Автоматика</a>
                            </li>
                            <li className={classes.Links}>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className={classes.Log_Sign}></div> */}
                </div>
            </div>
        </div>

    );
};
export default Navbar;