import React, { useState, useContext, useEffect } from 'react';
import classes from './Catalog.module.css'
import CatalogContainer from './CatalogContainer'
import { Link } from 'react-router-dom'
import { Context } from '../../Context'

function Catalog({ match }) {
    // const { Unics, setUnics } = useContext(Context);
    const [Nalichie, setNalichie] = useState(false);
    const [Brand, setBrand] = useState('All');
    const [Sort, setSort] = useState('Остортировать по');


    useEffect(() => {
        //  setNalichie(false);
        setSort('Остортировать по');
        setBrand('All');
    }, [match.url]);
    //    console.log(match)

    const { Data } = useContext(Context);
    let DataCatalog = [];

    Data.map((item) => {
        return (
            DataCatalog.push(item)
        )
    })

    let unic = [];

    DataCatalog.map((item, index) => {
        if (match.params.cat == item.type[1]) {
            unic.push(item.brand);
            unic = [...new Set(unic)];
        }
    })




    return (

        <>
            <div className={classes.Main}>
                <div className={classes.Manual}>
                    <div className={classes.Direct}>
                        <span className={classes.FastDirect}>каталог</span>
                        {/* {console.log(match)} */}
                        {Object.keys(match.params).map((item, index) => {





                            return (
                                <>
                                    <span className={classes.FastDirectDot}> ᐅ </span>
                                    <Link to={`/catalog/${Object.keys(match.params).map((item, index) => {
                                        return (`${match.params[item]}/`);
                                    })
                                        }`} key={`cat-nav-${index}`}><span key={`cat-sp-${index}`} className={classes.FastDirect}>{match.params[item]}</span></Link>


                                </>
                            )
                        })}
                    </div>
                    <div className={classes.FilterContainer}>
                        {/* <span className={classes.FilterText}>отсортировать </span> */}
                        <div className={classes.ContainerNalichie}>
                            <label className={classes.LabelNalichie}>В наличии</label>
                            <input className={classes.CheckboxNalichie} type="checkbox" value={Nalichie} onChange={(e) => { setNalichie(e.target.checked) }} ></input>
                        </div>
                        <div className={classes.ContainerBrand}>
                            <select className={classes.SelectBrand} value={Brand} onChange={(e) => { setBrand(e.target.value) }}>
                                <option value="All">Все</option>
                                {
                                    unic.map((item, index) => {
                                        return (
                                            <option value={item}>{item}</option>
                                        )
                                    })}

                            </select>
                        </div>
                        <div className={classes.ContainerBrand}>

                            <select className={classes.SelectBrand} value={Sort} onChange={(e) => { setSort(e.target.value) }}>
                                <option>Отсортировать по</option>
                                <option value="UP_COAST">- по возрастанию цены</option>
                                <option value="DOWN_COAST">- по убыванию цены</option>

                            </select>
                        </div>
                    </div>
                </div>

                <div className={classes.Container}>
                    <div className={classes.Romb1}></div>
                    <div className={classes.Romb2}></div>
                    <CatalogContainer match={match} nalichie={Nalichie} brand={Brand} sort={Sort} />
                    {/* {console.log(Brand)} */}
                </div>
            </div>
        </>
    )
}

export default Catalog;