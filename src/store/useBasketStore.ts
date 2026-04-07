import { create } from "zustand";
import type { IBasket, IBasketState } from "../types";

interface BasketStore {
    basket: IBasketState,
    updateBasket: (newBasket: IBasketState) => void
}

export const useBasketStore = create<BasketStore>((set) => ({
    basket: {
      items: [],
      totalCount: 0,
      totalPrice: 0
    },
    updateBasket: (newBasket) => set({basket: newBasket})
}))