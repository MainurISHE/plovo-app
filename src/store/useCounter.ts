import { useState } from "react";
import { create } from "zustand";

interface CounterState {
    count: number
    icrement: () => void
    decrement: () => void
}

// const [counts, steCounts] = useState<number>(0)

export const useCounter = create<CounterState>((set) => ({
    count: 0,
    icrement: () => set((state) => ({count: state.count + 1})),
    decrement: () => set((state) => ({count: state.count - 1}))
}))