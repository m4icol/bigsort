import type { SortStep } from "../../types";

export function getBubbleSortSteps(array: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {

    steps.push({ 
      type: 'message', 
      indices: [], 
      message: `Pass ${i + 1}: Looking for the largest element in the first ${arr.length - i} positions` 
    });

    for (let j = 0; j < arr.length - i - 1; j++) {

      steps.push({ 
        type: 'message', 
        indices: [j, j + 1], 
        message: `Comparing ${arr[j]} with ${arr[j + 1]}` 
      });

      steps.push({ type: 'compare', indices: [j, j + 1] });

      if (arr[j] > arr[j + 1]) {
        
        steps.push({ 
          type: 'message', 
          indices: [j, j + 1], 
          message: `${arr[j]} > ${arr[j + 1]}, swapping positions` 
        });

        steps.push({ type: 'swap', indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

      }
    }
  }

  steps.push({ 
    type: 'message', 
    indices: [], 
    message: `Done! Final array: [${arr.join(', ')}]` 
  });

  return steps;
}
