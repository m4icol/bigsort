import type { SortStep } from "../../types";

export function getInsertionSortSteps(array: number[]): SortStep[] {
    const steps: SortStep[] = [];
    const arr = [...array];
  
    for (let i = 1; i < arr.length; i++) {

      steps.push({
        type: 'message',
        indices: [i],
        message: {
          title: "INSERTION INIT",
          description: `Current value: ${arr[i]}. Searching correct position in the sorted part`
        }
      });
       
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {

        steps.push({
          type: 'message',
          indices: [j - 1, j],
          message: {
            title: "INSERTING",
            description: `${arr[j - 1]} > ${arr[j]} = true, shifting ${arr[j]} left to find its correct position`
          }
        });

        steps.push({ type: 'compare', indices: [j - 1, j] });
        steps.push({ type: 'swap', indices: [j - 1, j] });
  
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }

      if (j > 0) {
        steps.push({
          type: 'message',
          indices: [j - 1, j],
          message: {
            title: "NO SWAP NEEDED",
            description: `Comparing ${arr[j - 1]} with ${arr[j]}`
          }
        });
        steps.push({ type: 'compare', indices: [j - 1, j] });
      }
    }

    steps.push({
      type: 'message',
      indices: [],
      message: {
        title: "SORTING COMPLETE",
        description: `Final array: [${arr.join(', ')}]` 
      }
    });
  
    return steps;
}
