import type { SortStep } from "../../types";

export async function playSteps(
    steps: SortStep[],
    arr: number[],
    delayMs: number,
    setArray: (arr: number[]) => void,
    setActive: (indices: number[]) => void,
    setAction: (type: "compare" | "swap" | null) => void,
    setMessage: (message: string | null) => void
){
    for (const step of steps) {

        const {type, indices, message} = step;

        if (type === 'message') {
            if (setMessage && message) {
                setMessage(message);
                setActive(indices)
            }
        } else {
            setActive(indices);
            setAction(type);
            if (step.type === 'swap') {
                const [i, j] = step.indices;
                [arr[i], arr[j]] = [arr[j], arr[i]];
                setArray([...arr]);
            }
        }

        await new Promise((res) => setTimeout(res, delayMs))

        setActive([]);
        if (type !== 'message') {
            setAction(null)
        }
    }
}