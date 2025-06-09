import type { SortStep } from "../../types";

export function getInsertionSortSteps(array: number[]): SortStep[] {
    const steps: SortStep[] = [];
    const arr = [...array];
  
    for (let i = 1; i < arr.length; i++) {

      steps.push({
        type: 'message',
        indices: [i],
        message: `Current value: ${arr[i]}. Searching correct position in the sorted part`
      });
       
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {

        steps.push({
          type: 'message',
          indices: [j - 1, j],
          message: `${arr[j - 1]} > ${arr[j]} → shift ${arr[j - 1]} to the right`
        });

        steps.push({ type: 'compare', indices: [j - 1, j] });
        steps.push({ type: 'swap', indices: [j - 1, j] });
  
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }

      if (j > 0) {
        steps.push({ 
          type: 'compare', 
          indices: [j - 1, j] 
        });
      }

      steps.push({
        type: 'message',
        indices: [j],
        message: `${arr[j]} placed at correct position`
      });
    }

    steps.push({
      type: 'message',
      indices: [],
      message: `Sorting complete! [${arr.join(', ')}]`
    });
  
    return steps;
}
