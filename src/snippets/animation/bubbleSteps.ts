import type { SortStep } from "../../types";

export function getBubbleSortSteps(array: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {

    steps.push({ 
      type: 'message', 
      indices: [], 
      message: {
        title: "BUBBLE INIT",
        description: `Pass ${i + 1}: Bubble up the largest element among the first ${arr.length - i} elements`
      }
    });

    

    for (let j = 0; j < arr.length - i - 1; j++) {

      steps.push({ 
        type: 'message', 
        indices: [j, j + 1], 
        message: {
          title: "COMPARING",
          description: `Checking if ${arr[j]} (index[${j}]) > ${arr[j + 1]} (index[${j + 1}])`
        }
      });

      steps.push({ type: 'compare', indices: [j, j + 1] });

      if (arr[j] > arr[j + 1]) {
        
        steps.push({ 
          type: 'message', 
          indices: [j, j + 1], 
          message: {
            title: "SWAPPING",
            description: `Swapping ${arr[j]} (index[${j}]) and ${arr[j + 1]} (index[${j + 1}])`
          }
        });

        steps.push({ type: 'swap', indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      } else {
        steps.push({ 
          type: 'message', 
          indices: [j, j + 1], 
          message: {
            title: "NO SWAP NEEDED",
            description: `${arr[j]} ≤ ${arr[j + 1]}, elements are in correct order`
          }
        });
      }
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
