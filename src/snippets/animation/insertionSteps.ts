import type { SortStep } from "./sortSteps";

export function getInsertionSortSteps(array: number[]): SortStep[] {
    const steps: SortStep[] = [];
    const arr = [...array];
  
    for (let i = 1; i < arr.length; i++) {
      let j = i;
      while (j > 0 && arr[j - 1] > arr[j]) {
        steps.push({ type: 'compare', indices: [j - 1, j] });
        steps.push({ type: 'swap', indices: [j - 1, j] });
  
        [arr[j], arr[j - 1]] = [arr[j - 1], arr[j]];
        j--;
      }
      if (j > 0) {
        steps.push({ type: 'compare', indices: [j - 1, j] });
      }
    }
  
    return steps;
  }
  