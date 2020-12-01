import React, {useContext} from 'react';
import classes from './Navbar.module.css';
import logo from '../../Logo/logo.svg'
import { Context } from '../../Context'
import { BrowserRouter, Switch, Route, Link, NavLink } from 'react-router-dom'
function Navbar() {
    const { Modal, OpenModal, Data, IdModel, Model,getNav, Nav } = useContext(Context);
    function handleClick(param){
        getNav(param);
    }
    return (
        
        <div className={classes.Main}>

            <div className={classes.Container}>
                <input type="checkbox" name="" className={classes.check}></input>
                <div className={classes.Logo}>
                    <img src={logo} />
                </div>
                <div className={classes.Nav_btn}>
                    <div className={classes.Nav_Links}>
                        <ul>
                            <li className={classes.Links}>
                                <NavLink to="/" onClick={(e) => {handleClick(['main','main'])}}>Главная</NavLink>
                            </li>
                            <li className={classes.Links}>
                                <NavLink to="/catalog" onClick={(e) => {handleClick(['catalog','catalog'])}}>Каталог</NavLink>
                                <div className={classes.Dropdown}>
                                    <ul>
                                        <li className={classes.Dropdown_Links}>
                                        <NavLink to="/catalog" onClick={(e) => {handleClick(['IP','catalog'])}}>IP камеры</NavLink>
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
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Сетевое оборудование</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={classes.Links}>
                                <a href="#">Монтаж</a>
                            </li>
                            <li className={classes.Links}>
                                <a href="#">Автоматика</a>
                                <div className={classes.Dropdown}>
                                    <ul>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Вентиляция</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Автоматический ввод резерва</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Модульные котельные</a>
                                        </li>
                                    </ul>
                                </div>
                            </li>
                            <li className={classes.Links}>
                                <a href="#">Контакты</a>
                            </li>
                        </ul>
                    </div>
                    {/* <div className={classes.Log_Sign}></div> */}
                </div>
                <div className={classes.Hanburger_menu_container}>
                    <div className={classes.Hamburger_menu}>
                        <div></div>
                    </div>
                </div>
            </div>
        </div>

    );
};
export default Navbar;