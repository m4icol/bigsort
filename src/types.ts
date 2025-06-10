export type LanguageKey = "JAVA" | "PYTHON" | "JAVASCRIPT";
export type AlgorithmKey = "BUBBLE" | "INSERTION" | "SELECTION" | "QUICK";
export type SpeedKey = "0.5x" | "1.0x" | "1.5x" | "2.0x";

export type MessageKey = {
  title: string;
  description: string;
}

export interface SortStep {
  type: 'compare' | 'swap' | 'message'
  indices: number[];
  message?: MessageKey;
}