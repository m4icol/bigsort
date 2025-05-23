import { useState } from "react";

type DropdownProps = {
    options: string[];
    onSelected?: (option: string)=> void;
}

export default function Dropdown({options, onSelected}: DropdownProps) {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const [selected, setSelected] = useState(options[0]); 
    const handleSelected = (option: string)=>{
        setSelected(option);
        onSelected?.(option);
        setIsOpen(false);
    }

    return (
        <div className="relative">
            <button 
                onClick={toggleDropdown}
                className="w-full cursor-pointer text-BM-subtext font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between border-1" 
                type="button">{selected}
            
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
                <div className="w-full absolute z-10 mt-2 rounded-lg shadow-sm cursor-pointer bg-BM-sidebar text-BM-subtext border-1">
                    <ul className="py-2 text-sm">
                        {options.map((option, index) => (
                        <li key={index}>
                            <a
                            href="#"
                            onClick={() => handleSelected(option)}
                            className="block px-4 py-2 hover:bg-BM-background hover:text-BM-text"
                            >
                            {option}
                            </a>
                        </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    )
}