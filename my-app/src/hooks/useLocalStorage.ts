import { useState, useEffect } from "react";

const useLocalStorage = (key:string,defaultValue: boolean = false) => {
    const [checked,setChecked] = useState(()=>{
        const savedValue=localStorage.getItem(key)

        return savedValue ? JSON.parse(savedValue) : defaultValue
    })


    const toggleCheck =(val:boolean)=>{
        setChecked(val)
        localStorage.setItem(key,JSON.stringify(val))
    }

    return [checked,toggleCheck] as const
 
};

export default useLocalStorage;