export type LanguageKey = "JAVA" | "PYTHON" | "JAVASCRIPT";
export type AlgorithmKey = "BUBBLE" | "INSERTION" | "SELECTION" | "QUICK";
export type SpeedKey = "0.5x" | "1.0x" | "1.5x" | "2.0x";

export type MessageKey = {
  title: string;
  description: string;
}

export type SidebarSettingsProps = {
    rangeValue: number;
    setRangeValue: (value: number) => void;
    randomNumberItems: () => void;

    codeAlgorithm: AlgorithmKey;
    setCodeAlgorithm: (value: AlgorithmKey) => void;

    algSpeed: SpeedKey;
    setAlgSpeed: (value: SpeedKey) => void;

    algOrder: OrderKey;
    setAlgOrder: (value: OrderKey) => void;
  };

export interface SortStep {
  type: 'compare' | 'swap' | 'message' | 'complete'
  indices: number[];
  message?: MessageKey;
}

export type OrderKey = "ASCENDING" | "DESCENDING"

export type AnimationState = "IDLE" | "RUNNING" | "PAUSED" | "COMPLETED";