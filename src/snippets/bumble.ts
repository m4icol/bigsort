const sharedSteps = [
    { step: 1, action: 'Start with swapped = true to enter the loop.' }
  ];
  const sharedComplexity = {
    best: 'O(n)',
    worst: 'O(n²)'
  };
  
  export const BUMBLE = {
    JAVA: {
      code: `
  public class BumbleSort {
    public static void bumbleSort(int[] arr) {
      int n = arr.length;
      boolean swapped = true;
      while (swapped) {
        swapped = false;
        for (int i = 1; i < n; i++) {
          if (arr[i - 1] > arr[i]) {
            int temp = arr[i];
            arr[i] = arr[i - 1];
            arr[i - 1] = temp;
            swapped = true;
          }
        }
        n--;
      }
    }
  }
      `.trim(),
      steps: sharedSteps,
      complexity: sharedComplexity
    },
  
    PYTHON: {
      code: `
  def bumble_sort(arr):
      n = len(arr)
      swapped = True
      while swapped:
          swapped = False
          for i in range(1, n):
              if arr[i - 1] > arr[i]:
                  arr[i], arr[i - 1] = arr[i - 1], arr[i]
                  swapped = True
          n -= 1
      `.trim(),
      steps: sharedSteps,
      complexity: sharedComplexity
    },
  
    JAVASCRIPT: {
      code: `
  function bumbleSort(arr) {
    let n = arr.length;
    let swapped = true;
    while (swapped) {
      swapped = false;
      for (let i = 1; i < n; i++) {
        if (arr[i - 1] > arr[i]) {
          [arr[i - 1], arr[i]] = [arr[i], arr[i - 1]];
          swapped = true;
        }
      }
      n--;
    }
  }
      `.trim(),
      steps: sharedSteps,
      complexity: sharedComplexity
    }
  };
  