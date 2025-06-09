

  const insertionSharedComplexity = {
    best: 'O(n)',
    worst: 'O(n²)'
  };
  
  export const INSERTION = {
    JAVA: {
      code: `
  public class InsertionSort {
    public static void insertionSort(int[] arr) {
      int n = arr.length;
      for (int i = 1; i < n; i++) {
        int key = arr[i];
        int j = i - 1;
        while (j >= 0 && arr[j] > key) {
          arr[j + 1] = arr[j];
          j--;
        }
        arr[j + 1] = key;
      }
    }
  }
      `.trim(),
      complexity: insertionSharedComplexity
    },
  
    PYTHON: {
      code: `
  def insertion_sort(arr):
      n = len(arr)
      for i in range(1, n):
          key = arr[i]
          j = i - 1
          while j >= 0 and arr[j] > key:
              arr[j + 1] = arr[j]
              j -= 1
          arr[j + 1] = key
      `.trim(),
      complexity: insertionSharedComplexity
    },
  
    JAVASCRIPT: {
      code: `
  function insertionSort(arr) {
    let n = arr.length;
    for (let i = 1; i < n; i++) {
      let key = arr[i];
      let j = i - 1;
      while (j >= 0 && arr[j] > key) {
        arr[j + 1] = arr[j];
        j--;
      }
      arr[j + 1] = key;
    }
  }
      `.trim(),
      complexity: insertionSharedComplexity
    }
  };