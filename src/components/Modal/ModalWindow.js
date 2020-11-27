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
    <div className={classes.Pic} onClick={OpenModal}>
        
    </div>
        <div className={classes.exit} onClick={OpenModal}>X</div>
    </div>
    </> 
    )
}
export default ModalWindow;