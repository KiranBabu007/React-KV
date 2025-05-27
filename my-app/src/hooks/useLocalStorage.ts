import { useState, useEffect } from "react";

const useLocalStorage = (key:string,defaultValue: boolean = false) => {
    const [checked,setChecked] = useState(defaultValue)

    useEffect(()=>{
        const savedValue=JSON.stringify(localStorage.getItem(key))
        if(savedValue!=null){
            setChecked(JSON.parse(savedValue))
        }
    },[key])

    const toggleCheck =(val:boolean)=>{
        setChecked(val)
        localStorage.setItem(key,JSON.stringify(val))
    }

    return [checked,toggleCheck] as const
 
};

export default useLocalStorage;