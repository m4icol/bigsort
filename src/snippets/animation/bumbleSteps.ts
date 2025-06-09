import type { SortStep } from "../../types";

export function getBubbleSortSteps(array: number[]): SortStep[] {
  const steps: SortStep[] = [];
  const arr = [...array];

  steps.push({
    type: 'message',
    indices: [],
    message: `Iniciando Bumble Sort con la lista: [${array.join(', ')}]`
  })

  for (let i = 0; i < arr.length; i++) {
    steps.push({ 
      type: 'message', 
      indices: [], 
      message: `Pasada ${i + 1}: Buscando el elemento más grande en las primeras ${arr.length - i} posiciones` 
    });
    for (let j = 0; j < arr.length - i - 1; j++) {
      steps.push({ 
        type: 'message', 
        indices: [j, j + 1], 
        message: `Comparando ${arr[j]} con ${arr[j + 1]}` 
      });

      steps.push({ type: 'compare', indices: [j, j + 1] });

      if (arr[j] > arr[j + 1]) {
        steps.push({ 
          type: 'message', 
          indices: [j, j + 1], 
          message: `${arr[j]} > ${arr[j + 1]}, intercambiando posiciones` 
        });

        steps.push({ type: 'swap', indices: [j, j + 1] });
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];

      } else {
        steps.push({ 
          type: 'message', 
          indices: [], 
          message: `${arr[j]} ≤ ${arr[j + 1]}, no hay intercambio` 
        });
      }
    }
  }

  steps.push({ 
    type: 'message', 
    indices: [], 
    message: `¡Ordenamiento completado! Array final: [${arr.join(', ')}]` 
  });

  return steps;
}
