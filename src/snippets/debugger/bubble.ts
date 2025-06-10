
  const sharedComplexity = {
    best: 'O(n)',
    worst: 'O(n²)'
  };
  
  export const BUBBLE = {
    JAVA: {
      code: `
  public class BubbleSort {
    public static void bubbleSort(int[] arr) {
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
      complexity: sharedComplexity
    },
  
    PYTHON: {
      code: `
  def bubble_sort(arr):
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
      complexity: sharedComplexity
    },
  
    JAVASCRIPT: {
      code: `
  function bubbleSort(arr) {
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
      complexity: sharedComplexity
    }
  };
  