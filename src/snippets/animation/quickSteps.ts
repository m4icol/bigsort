import type { SortStep } from "./sortSteps";

export function getQuickSortSteps(array: number[]): SortStep[] {
    const steps: SortStep[] = [];
    const arr = [...array];
  
    function quickSort(start: number, end: number) {
      if (start >= end) return;
  
      const pivotIndex = partition(start, end);
      quickSort(start, pivotIndex - 1);
      quickSort(pivotIndex + 1, end);
    }
  
    function partition(start: number, end: number): number {
      const pivot = arr[end];
      let i = start;
  
      for (let j = start; j < end; j++) {
        steps.push({ type: 'compare', indices: [j, end] });
  
        if (arr[j] < pivot) {
          steps.push({ type: 'swap', indices: [i, j] });
          [arr[i], arr[j]] = [arr[j], arr[i]];
          i++;
        }
      }
  
      steps.push({ type: 'swap', indices: [i, end] });
      [arr[i], arr[end]] = [arr[end], arr[i]];
      return i;
    }
  
    quickSort(0, arr.length - 1);
    return steps;
  }
  