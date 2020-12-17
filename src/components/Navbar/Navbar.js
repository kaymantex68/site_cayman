import React, { useContext } from 'react';
import classes from './Navbar.module.css';
import logo from '../../Logo/logo.svg'
import { Context } from '../../Context'
import { BrowserRouter, Switch, Route, Link } from 'react-router-dom'
function Navbar() {
    const { Modal, OpenModal, Data, IdModel, Model, getNav, Nav } = useContext(Context);
    function handleClick(param) {
        getNav(param);
    }
    return (

        <div className={classes.Main}>

            <div className={classes.Container}>
                <input type="checkbox" name="" className={classes.check}></input>
                <div className={classes.Logo}>
                    <Link to="/"><img src={logo} /></Link>
                </div>
                <div className={classes.Nav_btn}>
                    <div className={classes.Nav_Links}>
                        <ul>
                            <li className={classes.Links}>
                                <Link to="/">Главная</Link>
                            </li>
                            <li className={classes.Links}>
                                <Link to="/catalog/all">Каталог</Link>
                                <div className={classes.Dropdown}>
                                    <ul>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/ip">IP камеры</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/ip/outdoor">Уличные</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/IMOU">IMOU</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/HiWatch">HiWatch</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/Dahua">Dahua</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/EzViz">EzViz</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/SVN">SVN</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/Matrix">Matrix</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/Atis">Atis</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/ip/indoor">Внутренние</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/indoor/IMOU">IMOU</Link>
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
                                        {/* <li className={classes.Dropdown_Links}>
                                            <a href="#">IP регистраторы</a>
                                        </li> */}
                                        {/* <li className={classes.Dropdown_Links}>
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
                                        </li> */}
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/apc">Источники питания</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/apc/open">Открытого типа</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/open/IEK">IEK</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/apc/close">Закрытого типа</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/close/IEK">IEK</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/apc/avtonomnuy">Автономный</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/avtonomnuy/ST">ST</Link>
                                                                </li>


                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/apc/accumulate">Аккумуляторы</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/accumulate/Delta">Delta</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/accumulate/Security force">Security force</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/accumulate/Rexant">Rexant</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className={classes.Dropdown_Links}>
                                            <a href="#">Домофония</a>
                                        </li> */}
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/security">Охранно-пожарное оборудование</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/security/head_unit">Головные приборы</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/security/head_unit/TEKO">ТЕКО</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/security/head_unit/Syberian_arsenal">Сибирский арсенал</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/security/iz_opt_electr">Извещатели оптико-электронные</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/security/iz_opt_electr/TEKO">ТЕКО</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/security/iz_opt_electr/Syberian_arsenal">Сибирский арсенал</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/security/iz_fire">Извещатели пожарные</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/security/iz_fire/TEKO">ТЕКО</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/security/iz_fire/Syberian_arsenal">Сибирский арсенал</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                   
                                                </ul>
                                            </div>
                                        </li>
                                        {/* <li className={classes.Dropdown_Links}>
                                            <a href="#">Пожарная сигнализация</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Монтажные материалы</a>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <a href="#">Кабельная продукция</a>
                                        </li> */}
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/net">Сетевое оборудование</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/net/switch">Сетевые коммутаторы</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/switch/D-Link">D-Link</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/switch/Dahua">Dahua</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/ST">Zyxel</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/net/poe">POE коммутаторы</Link>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/net/wi_fi">Wi-Fi оборудование</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/wi_fi/Ubiquiti">Ubiquiti</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
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
                                <Link to="/contacts/adress">Контакты</Link>
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