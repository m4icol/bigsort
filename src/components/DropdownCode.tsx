import { useState } from "react";
import type { AlgorithmKey } from "../types";

type DropdownProps = {
    codeAlgorithm: AlgorithmKey;
    setCodeAlgorithm: (value: AlgorithmKey) => void;

    options: string[];
    values: AlgorithmKey[];
    dropdownPositionClass?: string;
    onSelected?: (value: AlgorithmKey)=> void;
}

export default function Dropdown({codeAlgorithm, setCodeAlgorithm, values, options, dropdownPositionClass ,onSelected}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelected = (value: AlgorithmKey)=>{
        setCodeAlgorithm(value);
        onSelected?.(value);
        setIsOpen(false);
    }

    return (
        <div className="relative ">
            <button 
                onClick={toggleDropdown}
                className="w-full cursor-pointer text-BM-subtext font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between border-1" 
                type="button">{codeAlgorithm}
            
                <svg
                    className="w-2.5 h-2.5 ml-3"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className={`w-full absolute z-10 rounded-lg shadow-sm cursor-pointer bg-BM-sidebar text-BM-subtext border-1 ${dropdownPositionClass || 'mt-2'}`}>
                    <ul className="py-2 text-sm">
                        {options.map((option, index) => {
                            const value = values[index];
                            return(
                                <li key={value}>
                                    <button
                                    onClick={() => handleSelected(value)}
                                    className="w-full text-start block px-4 py-2 hover:bg-BM-background hover:text-BM-text"
                                    >
                                    {option}
                                    </button>
                                </li>
                            )
                        })}
                    </ul>
                </div>
            )}
        </div>
    )
}