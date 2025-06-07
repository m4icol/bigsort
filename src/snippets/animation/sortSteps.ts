export type SortStep = 
  | { type: 'compare'; indices: [number, number] }
  | { type: 'swap'; indices: [number, number] };
