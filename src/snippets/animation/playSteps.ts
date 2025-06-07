import type { SortStep } from "../../types";

export async function playSteps(
    steps: SortStep[],
    arr: number[],
    delayMs: number,
    setArray: (arr: number[]) => void,
    setActive: (indices: number[]) => void,
    setAction: (type: "compare" | "swap" | null) => void,
){
    for (const step of steps) {

        const {type, indices} = step;

        setActive(indices);
        setAction(type);

        await new Promise((res) => setTimeout(res, delayMs))

        if(step.type === 'swap'){
            const [i, j] = step.indices;
            [arr[i], arr[j]] = [arr[j], arr[i]]
            setArray([...arr]);
        }

        setActive([]);
        setAction(null);
    }
}