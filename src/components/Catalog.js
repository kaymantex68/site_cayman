import React, { useContext } from 'react';
import classes from './Catalog.module.css'
import {Context} from '../Context'


function Catalog() {
    const {Data,Nav} = useContext(Context);

    let DataBase = [];
    {
        Data.map((item, index) => {
            return (
                DataBase.push(item)
            )
        })
    }

    console.log(Nav);
    console.log(DataBase);


    return(
       
        <div className={classes.Main}>
         
              {DataBase.map((item, index) => {
                  if (item.type[1]==Nav[0]) {
                return (
                <p>{item.model}</p>
                )}
            })}
           
            
        </div>
        );
    };

export default Catalog ;