const selectionSharedSteps = [
    { step: 1, action: 'Find minimum element in unsorted portion.' },
    { step: 2, action: 'Swap minimum with first unsorted element.' },
    { step: 3, action: 'Move boundary of sorted portion one position.' },
    { step: 4, action: 'Repeat until entire array is sorted.' }
  ];
  
  const selectionSharedComplexity = {
    best: 'O(n²)',
    worst: 'O(n²)'
  };
  
  export const selection = {
    java: {
      code: `
  public class SelectionSort {
    public static void selectionSort(int[] arr) {
      int n = arr.length;
      for (int i = 0; i < n - 1; i++) {
        int minIdx = i;
        for (int j = i + 1; j < n; j++) {
          if (arr[j] < arr[minIdx]) {
            minIdx = j;
          }
        }
        int temp = arr[minIdx];
        arr[minIdx] = arr[i];
        arr[i] = temp;
      }
    }
  }
      `.trim(),
      steps: selectionSharedSteps,
      complexity: selectionSharedComplexity
    },
  
    python: {
      code: `
  def selection_sort(arr):
      n = len(arr)
      for i in range(n - 1):
          min_idx = i
          for j in range(i + 1, n):
              if arr[j] < arr[min_idx]:
                  min_idx = j
          arr[min_idx], arr[i] = arr[i], arr[min_idx]
      `.trim(),
      steps: selectionSharedSteps,
      complexity: selectionSharedComplexity
    },
  
    javascript: {
      code: `
  function selectionSort(arr) {
    let n = arr.length;
    for (let i = 0; i < n - 1; i++) {
      let minIdx = i;
      for (let j = i + 1; j < n; j++) {
        if (arr[j] < arr[minIdx]) {
          minIdx = j;
        }
      }
      [arr[minIdx], arr[i]] = [arr[i], arr[minIdx]];
    }
  }
      `.trim(),
      steps: selectionSharedSteps,
      complexity: selectionSharedComplexity
    }
  };