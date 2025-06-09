import type { SortStep } from "../../types";

export function getQuickSortSteps(array: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...array];

  function quickSort(start: number, end: number) {
    if (start >= end) return;

    steps.push({ 
      type: 'message', 
      indices: Array.from({ length: end - start + 1 }, (_, i) => start + i), 
      message: `Sorting subarray [${start}..${end}] using pivot ${arr[end]}`
    });

    const pivotIndex = partition(start, end);
    quickSort(start, pivotIndex - 1);
    quickSort(pivotIndex + 1, end);
  }

  function partition(start: number, end: number): number {
    const pivot = arr[end];
    let i = start;

    for (let j = start; j < end; j++) {
      steps.push({ 
        type: 'message', 
        indices: [j, end], 
        message: `Comparing ${arr[j]} with pivot ${pivot}`
      });

      steps.push({ type: 'compare', indices: [j, end] });

      if (arr[j] < pivot) {
        steps.push({ 
          type: 'message', 
          indices: [i, j], 
          message: `${arr[j]} < ${pivot} → move to left partition`
        });

        steps.push({ type: 'swap', indices: [i, j] });
        [arr[i], arr[j]] = [arr[j], arr[i]];
        i++;
      }
    }

    steps.push({ 
      type: 'message', 
      indices: [i, end], 
      message: `Placing pivot ${pivot} at index ${i}`
    });

    steps.push({ type: 'swap', indices: [i, end] });
    [arr[i], arr[end]] = [arr[end], arr[i]];
    return i;
  }

  quickSort(0, arr.length - 1);

  steps.push({ 
    type: 'message', 
    indices: [], 
    message: `Sorting complete! Final array: [${arr.join(', ')}]`
  });

  return steps;
}
