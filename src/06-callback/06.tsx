import React, {MouseEvent} from "react";

export const User=()=>{

    const deleteUser=(e:MouseEvent<HTMLButtonElement>)=>{
        console.log(e.currentTarget.name)
    }

    const saveUser=()=>{
        alert('save');
    }

    const focusLost=()=>{
        console.log('focus is lost')
    }
    return <div>Anatoli
        <textarea onBlur={focusLost}></textarea>
        <button name={'delete'} onClick={deleteUser}>x</button>
        <button name={"save"} onClick={deleteUser}>x</button>
    </div>
}