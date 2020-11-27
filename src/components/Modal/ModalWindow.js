import React, {useContext} from 'react';
import classes from './ModalWindow.module.css'
import { Context } from '../../Context'




   

function ModalWindow() {
   
    const { Modal, OpenModal, Data, IdModel,Model} = useContext(Context);
   
        
    

    {console.log('модальное окно')}
    {console.log(Model)}
    return (
    <>
    <div className={classes.Modal_back} onClick={OpenModal}></div>    
    <div className={classes.Modal}>{Model.model}
    {Object.keys(Model.info).map((item, index) => {
                        return (
                            <div className={classes.Stroka} key={index}>
                            <div className={classes.tag}>{Model.info[item][0]}</div>
                            <div className={classes.Centre}>..................................................................</div>
                            <div className={classes.info}>{Model.info[item][1]}</div>
                            </div>
                        )
                    })}
    <div className={classes.Pic} onClick={OpenModal}></div>
        <div className={classes.exit} onClick={OpenModal}>закрыть</div>
    </div>
    </> 
    )
}
export default ModalWindow;