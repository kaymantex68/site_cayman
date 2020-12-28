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
                                                                    <Link to="/catalog/ip/outdoor/Dahua">Dahua</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/Atis">Atis</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/outdoor/ST">ST</Link>
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
                                                                    <Link to="/catalog/ip/indoor/Dahua">Dahua</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/indoor/EzViz">EzViz</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/indoor/EZ-IP">EZ-IP</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/indoor/ST">ST</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/ip/rotate">Поворотные</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ip/rotate/Atis">Atis</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/ahd">AHD камеры</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/ahd/outdoor">Уличные</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ahd/outdoor/ST">ST</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/ahd/indoor">Внутренние</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/ahd/indoor/ST">ST</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>

                                                </ul>
                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/micro">Микрофоны</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/micro/analog">Аналоговые</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/micro/analog/ST">ST</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>


                                                </ul>
                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/reg">Регистраторы</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/reg/nvr">NVR</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/reg/nvr/ST">ST</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/reg/nvr/HiWatch">HiWatch</Link>
                                                                </li>

                                                            </ul>
                                                        </div>

                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/reg/xvr">XVR</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/reg/xvr/ST">ST</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/reg/xvr/HiWatch">HiWatch</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/storage">Хранение данных</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/storage/hdd">Жесткие диски</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/storage/hdd/TOSHIBA">TOSHIBA</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/storage/sd">SD карты</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/storage/sd/SAMSUNG">SAMSUNG</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/storage/sd/SanDisk">SanDisk</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>
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
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/open/Navigator">Navigator</Link>
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
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/close/ST">ST</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/apc/din">На DIN-рейку</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/din/ST">ST</Link>
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
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/apc/accumulate/Optimus">Optimus</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>
                                            </div>
                                        </li>


                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/domofon">Домофония</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/domofon/videodomofon">Видеодомофоны</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/domofon/videodomofon/Atis">Atis</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/domofon/doorring">Дверные звонки</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/domofon/doorring/IMOU">IMOU</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/domofon/complect">Комплекты</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/domofon/complect/HiWatch">HiWatch</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/domofon/domofon">Домофоны</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/domofon/domofon/Schneider-Electric">Schneider-Electric</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/domofon/panel">Вызывные панели</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/domofon/panel/Atis">Atis</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/skud">Контроль доступа</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/skud/controller">Контроллеры</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/controller/IronLogic">IronLogic</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/controller/Sprut">Sprut</Link>
                                                                </li>
                                                               
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/skud/schit">Считыватели</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/schit/TEKO">ТЕКО</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/schit/Sprut">Sprut</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/schit/Atis">Atis</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/schit/Сибирский Арсенал">Сибирский Арсенал</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/schit/Tantos">Tantos</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/schit/IronLogic">IronLogic</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/schit/Noname">Noname</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/skud/key">Ключи</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/key/Noname">Noname</Link>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/skud/exit">Кнопки "Выход"</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/exit/Sprut">Sprut</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/exit/Slinex">Slinex</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/skud/exit/Noname">Noname</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/zamki">Замки</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/zamki/electromex">Замки электромеханические</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/zamki/electromex/Slinex">Slinex</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/zamki/elmagzamok">Замки электромагнитные</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/zamki/elmagzamok/Sprut">Sprut</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/zamki/krep">Крепления для замков</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/zamki/krep/Sprut">Sprut</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/zamki/dovod">Доводчики</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/zamki/dovod/Sprut">Sprut</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/zamki/komplekt">Комплектующие</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/zamki/komplekt/Atis">Atis</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>
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
                                                        <Link to="/catalog/security/gsm"> GSM сигнализации</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>

                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/security/gsm/Сибирский Арсенал">Сибирский арсенал</Link>
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
                                                        <Link to="/catalog/net/router">Роутеры</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/router/D-Link">D-Link</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/router/ZTE">ZTE</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/router/TP-LINK">TP-LINK</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/router/Zyxel">Zyxel</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
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
                                                                    <Link to="/catalog/net/switch/EZ-IP">EZ-IP</Link>
                                                                </li>
                                                                
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/net/poe">POE коммутаторы</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/poe/ST">ST</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/poe/EZ-IP">EZ-IP</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/poe/Utepo">Utepo</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
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
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/net/power3g">Усилители 3G сигнала</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/power3g/Триколор">Триколор</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/net/splitter">Сплиттеры</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/net/splitter/ST">ST</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/montaj">Монтажные материалы</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/montaj/bbox">Шкафы монтажные</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/bbox/IEK">IEK</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/montaj/rbox">Распределительные коробки</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/rbox/RuVinil">RuVinil</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/rbox/Промрукав">Промрукав</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/rbox/IEK">IEK</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/montaj/mbox">Монтажные коробки</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/mbox/Atis">Atis</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/mbox/Hikvision">Hikvision</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/mbox/KadrON">KadrON</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/mbox/SLT">SLT</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/mbox/Dahua">Dahua</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/montaj/homut">Хомуты/Стяжки</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/homut/IEK">IEK</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/homut/Rexant">Rexant</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/montaj/krep">Крепеж</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/krep/Промрукав">Промрукав</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/montaj/krep/IEK">IEK</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/electro">Электроматериалы</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/electro/sfilter">Сетевые фильтры</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/electro/sfilter/Buro">Buro</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/cabel">Кабельная продукция</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/cabel/utp">UTP Витая пара</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/cabel/UTP/ITK">ITK</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/cabel/UTP/Generica">Generica</Link>
                                                                </li>
                                                            </ul>
                                                        </div>
                                                    </li>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/cabel/kvk">Комбинированный кабель</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/cabel/kvk/Paritet">Paritet</Link>
                                                                </li>

                                                            </ul>
                                                        </div>
                                                    </li>
                                                </ul>

                                            </div>
                                        </li>
                                        <li className={classes.Dropdown_Links}>
                                            <Link to="/catalog/komplekt">Комплектующие</Link>
                                            <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                <ul>
                                                    <li className={classes.Dropdown_Links}>
                                                        <Link to="/catalog/komplekt/raz">Разъемы</Link>
                                                        <div className={`${classes.Dropdown} ${classes.Second}`} >
                                                            <ul>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/komplekt/raz/Rexant">Rexant</Link>
                                                                </li>
                                                                <li className={classes.Dropdown_Links}>
                                                                    <Link to="/catalog/komplekt/raz/ITK">ITK</Link>
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
                            {/* <li className={classes.Links}>
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
                            </li> */}
                            <li className={classes.Links}>
                                <Link to="/contacts/adress">Контакты</Link>
                            </li>
                        </ul>
                    </div>
                    {/* <div className={classes.Log_Sign}></div> */}
                </div>
                <div className={classes.Kol_tovar}><span className={classes.Kol_tovar_span}>{`Прямо сейчас ${Data.length} позиций в наличии`}</span></div>
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