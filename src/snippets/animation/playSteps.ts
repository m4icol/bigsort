import type { MessageKey, SortStep } from "../../types";

export async function playSteps(
    steps: SortStep[],
    arr: number[],
    delayMs: number,
    countSteps: number,
    countSwaps: number,
    setArray: (arr: number[]) => void,
    setActive: (indices: number[]) => void,
    setAction: (type: "compare" | "swap" | null) => void,
    setMessage: (message: MessageKey) => void,
    setCountSteps: (countSteps: number) => void,
    setCountSwaps: (countSwaps: number) => void,
){
    for (const step of steps) {

        const {type, indices, message} = step;

        if(step.type === 'compare' || step.type === 'swap'){
            setCountSteps(++countSteps);
        }

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

                setCountSwaps(++countSwaps);
            }
        }

        await new Promise((res) => setTimeout(res, delayMs))

        setActive([]);
        if (type !== 'message') {
            setAction(null)
        }
    }
}