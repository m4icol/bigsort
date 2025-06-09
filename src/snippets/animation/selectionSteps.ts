import type { SortStep } from "../../types";

export function getSelectionSortSteps(array: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    steps.push({ 
      type: 'message', 
      indices: [i], 
      message: `Pass ${i + 1}: Searching for the minimum element from index ${i} onward`
    });

    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      steps.push({ 
        type: 'message', 
        indices: [minIndex, j], 
        message: `Comparing ${arr[minIndex]} and ${arr[j]}`
      });

      steps.push({ type: 'compare', indices: [minIndex, j] });
      
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        steps.push({ 
          type: 'message', 
          indices: [minIndex], 
          message: `New minimum found: ${arr[minIndex]} at index ${minIndex}`
        });
      }
    }

    if (minIndex !== i) {
      steps.push({ 
        type: 'message', 
        indices: [i, minIndex], 
        message: `Swapping ${arr[i]} and ${arr[minIndex]}`
      });
      
      steps.push({ type: 'swap', indices: [i, minIndex] });
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
    }
  }

  steps.push({ 
    type: 'message', 
    indices: [], 
    message: `Sorting complete! Final array: [${arr.join(', ')}]`
  });

  return steps;
}
