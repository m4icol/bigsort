import PanelItem from "./Item";
import ButtonRandom from "./ButtonRandom";

type SortingListProps = {
    handleCreateList: () => void;
    currentList: number[]
}

export default function SortingList({handleCreateList ,currentList}: SortingListProps){

    return(
        <div className="flex flex-row gap-3">
            <ButtonRandom onClick={handleCreateList} />

            <PanelItem className="cursor-not-allowed flex flex-row gap-2 text-xs lg:text-base">
                {currentList.join(", ")}
            </PanelItem>
        </div>
    )
}