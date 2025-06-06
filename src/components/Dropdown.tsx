import { useState } from "react";

type DropdownProps<T extends React.ReactNode> = {
    values: T[];
    selectedValue: T;
    setSelectedValue: (value: T) => void;

    dropdownPositionClass?: string;
    onSelected?: (option: T)=> void;
}

export default function Dropdown<T extends React.ReactNode>({
        values,
        selectedValue,
        setSelectedValue,

        dropdownPositionClass,
        onSelected
    }: DropdownProps<T>) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDropdown = () => setIsOpen(!isOpen);

    const handleSelected = (value: T)=>{
        setSelectedValue(value); 
        onSelected?.(value);
        setIsOpen(false);
    }

    return (
        <div className="relative ">
            <button 
                onClick={toggleDropdown}
                className="w-full cursor-pointer text-BM-subtext font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between border-1" 
                type="button">{selectedValue}
            
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
                        {values.map((option, index) => {
                            const value = values[index];
                            return(
                                <li key={String(value)}>
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