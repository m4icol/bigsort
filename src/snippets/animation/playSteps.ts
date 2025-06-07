import type { SortStep } from "./sortSteps";

export async function playSteps(
    steps: SortStep[],
    array: number[],
    setArray: React.Dispatch<React.SetStateAction<number[]>>
){
    const arr = [...array];

    for (const step of steps) {
        if(step.type === 'swap'){
            const [i, j] = step.indices;
            [arr[i], arr[j]] = [arr[j], arr[i]]
            setArray([...arr]);
        }

        await new Promise((res) => setTimeout(res, 100))
    }
}