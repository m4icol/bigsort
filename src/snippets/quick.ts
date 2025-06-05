const quickSharedSteps = [
    { step: 1, action: 'Choose a pivot element from the array.' },
    { step: 2, action: 'Partition array around pivot.' },
    { step: 3, action: 'Recursively sort left and right subarrays.' },
    { step: 4, action: 'Combine results (no merge needed).' }
  ];
  
  const quickSharedComplexity = {
    best: 'O(n log n)',
    average: 'O(n log n)',
    worst: 'O(n²)'
  };
  
  export const quick = {
    java: {
      code: `
  public class QuickSort {
    public static void quickSort(int[] arr, int low, int high) {
      if (low < high) {
        int pi = partition(arr, low, high);
        quickSort(arr, low, pi - 1);
        quickSort(arr, pi + 1, high);
      }
    }
    
    private static int partition(int[] arr, int low, int high) {
      int pivot = arr[high];
      int i = low - 1;
      for (int j = low; j < high; j++) {
        if (arr[j] <= pivot) {
          i++;
          int temp = arr[i];
          arr[i] = arr[j];
          arr[j] = temp;
        }
      }
      int temp = arr[i + 1];
      arr[i + 1] = arr[high];
      arr[high] = temp;
      return i + 1;
    }
  }
      `.trim(),
      steps: quickSharedSteps,
      complexity: quickSharedComplexity
    },
  
    python: {
      code: `
  def quick_sort(arr, low, high):
      if low < high:
          pi = partition(arr, low, high)
          quick_sort(arr, low, pi - 1)
          quick_sort(arr, pi + 1, high)
  
  def partition(arr, low, high):
      pivot = arr[high]
      i = low - 1
      for j in range(low, high):
          if arr[j] <= pivot:
              i += 1
              arr[i], arr[j] = arr[j], arr[i]
      arr[i + 1], arr[high] = arr[high], arr[i + 1]
      return i + 1
      `.trim(),
      steps: quickSharedSteps,
      complexity: quickSharedComplexity
    },
  
    javascript: {
      code: `
  function quickSort(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSort(arr, low, pi - 1);
      quickSort(arr, pi + 1, high);
    }
  }
  
  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;
    for (let j = low; j < high; j++) {
      if (arr[j] <= pivot) {
        i++;
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }
      `.trim(),
      steps: quickSharedSteps,
      complexity: quickSharedComplexity
    }
  };