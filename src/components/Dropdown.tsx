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
                className="w-full cursor-pointer text-WM-subtext dark:text-BM-subtext font-medium rounded-lg text-sm px-4 py-2.5 text-center inline-flex items-center justify-between border-1 border-WM-border dark:border-BM-border" 
                type="button">{selectedValue}
            
                <svg
                    className="w-3 h-3 mr-1"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 10 6"
                >
                    <path
                        stroke="currentColor"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="1.5"
                        d="m1 1 4 4 4-4"
                    />
                </svg>
            </button>

            {isOpen && (
                <div className={`w-full absolute z-10 rounded-lg shadow-sm cursor-pointer bg-WM-sidebar text-WM-subtext dark:bg-BM-sidebar dark:text-BM-subtext border-1 border-WM-border dark:border-BM-border ${dropdownPositionClass || 'mt-2'}`}>
                    <ul className="py-2 text-sm">
                        {values.map((option, index) => {
                            const value = values[index];
                            return(
                                <li key={String(value)}>
                                    <button
                                    onClick={() => handleSelected(value)}
                                    className="w-full text-start block px-4 py-2 hover:bg-WM-background hover:text-WM-text dark:hover:bg-BM-background dark:hover:text-BM-text"
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