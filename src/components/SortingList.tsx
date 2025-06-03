import { useState } from "react";
import PanelItem from "./Item";
import ButtonRandom from "./ButtonRandom";

type SortingListProps = {
    items: number
}

export default function SortingList({items = 0}: SortingListProps){
    const [currentList, setCurrentList] = useState<number[]>([5, 2, 7, 11, 9, 8, 13, 15, 7, 1, 13, 4]);
    const createList = (items: number) => {
        const newList = []
        for(let i = 0; i < items; i++){
            const randomValue = Math.floor(Math.random() * 15) + 1;
            newList.push(randomValue);
        }
        return newList;
    }

    const handleCreateList = () => {
        const newList = createList(items);
        setCurrentList(newList)
    }

    return(
        <div className="flex flex-row gap-3">
            <ButtonRandom onClick={handleCreateList} />

            <PanelItem className="cursor-not-allowed flex flex-row gap-2 text-base">
                <span className="text-BM-text text-base ">SORTING LIST: </span>
                {currentList.join(", ")}
            </PanelItem>
        </div>
    )
}