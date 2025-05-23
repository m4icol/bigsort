import { useState } from "react";

type SwitchOptionProps = {
    option1: string;
    option2: string;
}

export default function SwitchOption({option1, option2}: SwitchOptionProps){
    const [option, setOption] = useState(option1);
    const toggleOption = (selected: string)=> setOption(selected);
    return(
        <div className="border-1 rounded-lg border-BM-border px-1.5 py-1.5 flex flex-row justify-between text-sm">
            <button onClick={()=>{toggleOption(option1)}}
                    className={`py-1.5 rounded-md w-full
                    ${option1 === option ? 'text-BM-text bg-BM-active' : 
                    'text-BM-subtext cursor-pointer'}`}>{option1}</button>
            
            <button onClick={()=>{toggleOption(option2)}}
                    className={`py-1.5 rounded-md w-full
                    ${option2 === option ? 'text-BM-text bg-BM-active' : 
                    'text-BM-subtext cursor-pointer'}`}>{option2}</button>
        </div>
    )
}