import type { SortStep } from "./sortSteps";

export function getSelectionSortSteps(array: number[]): SortStep[] {
    const steps: SortStep[] = [];
    const arr = [...array];
  
    for (let i = 0; i < arr.length; i++) {
      let minIndex = i;
  
      for (let j = i + 1; j < arr.length; j++) {
        steps.push({ type: 'compare', indices: [minIndex, j] });
        if (arr[j] < arr[minIndex]) {
          minIndex = j;
        }
      }
  
      if (minIndex !== i) {
        steps.push({ type: 'swap', indices: [i, minIndex] });
        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]];
      }
    }
  
    return steps;
  }
  