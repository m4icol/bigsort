import type { SortStep } from "../../types";

export function getSelectionSortSteps(array: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...array];

  for (let i = 0; i < arr.length; i++) {
    steps.push({ 
      type: 'message', 
      indices: [i], 
      message: {
        title: "SELECTION INIT",
        description: `Pass ${i + 1}: Searching for the minimum element from index ${i} onward`
      }
    });

    let minIndex = i;

    for (let j = i + 1; j < arr.length; j++) {
      steps.push({ 
        type: 'message', 
        indices: [minIndex, j], 
        message: {
          title: "COMPARING",
          description: `Checking if  ${arr[j]} (index ${j}) < ${arr[minIndex]} (index${minIndex})`
        }
      });

      steps.push({ type: 'compare', indices: [minIndex, j] });
      
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
        steps.push({ 
          type: 'message', 
          indices: [minIndex], 
          message: {
            title: "NEW MINIMUM FOUND",
            description: `New minimum: ${arr[minIndex]} at index ${minIndex}`
          }
        });
      }
    }

    if (minIndex !== i) {
      steps.push({ 
        type: 'message', 
        indices: [i, minIndex], 
        message: {
          title: "SWAPPING",
          description: `${arr[i]}(index ${i}) and ${arr[minIndex]} (index ${minIndex})`
        }
      });
      
      steps.push({ type: 'swap', indices: [i, minIndex] });
      [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
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
