import { Routes, Route } from "react-router"
import { Header } from "./components/header/Header"
import { Home } from "./pages/home/Home"
import { Dish } from "./pages/dish/Dish"
import { AddDish } from "./pages/add-dish/AddDish"
import { Container } from "@mui/material"
import { EditDish } from "./pages/edit-dish/EditDish"
import { useState } from "react"
import type { IBasketState, IDish } from "./types"
import { addDishToBasket } from "./utils/basketHelpers"
import { Basket } from "./pages/basket/Basket"
import { useCounter } from "./store/useCounter"

function App() {
  const [basket, setBasket] = useState<IBasketState>({
    items: [],
    totalCount: 0,
    totalPrice: 0,
  });

  const recalc = (items: IBasketState["items"]) => {
    const totalCount = items.reduce((sum, i) => sum + i.count, 0);

    const totalPrice = items.reduce((sum, i) => {
      return sum + i.count * i.dish.price;
    }, 0);

    return { totalCount, totalPrice };
  };

  const handleAddDish = (dish: IDish) => {
    setBasket((prev) => {
      const existing = prev.items.find((i) => i.dish.id === dish.id);

      let items;

      if (existing) {
        items = prev.items.map((i) =>
          i.dish.id === dish.id ? { ...i, count: i.count + 1 } : i,
        );
      } else {
        items = [...prev.items, { dish, count: 1 }];
      }

      const { totalCount, totalPrice } = recalc(items);

      return {
        items,
        totalCount,
        totalPrice,
      };
    });
  };

  const onIncrease = (id: string) => {
    setBasket((prev) => {
      const items = prev.items.map((item) =>
        item.dish.id === id ? { ...item, count: item.count + 1 } : item,
      );

      return {
        items,
        ...recalc(items),
      };
    });
  };

  const onDecrease = (id: string) => {
    setBasket((prev) => {
      const items = prev.items
        .map((item) =>
          item.dish.id === id ? { ...item, count: item.count - 1 } : item,
        )
        .filter((item) => item.count > 0);

      return {
        items,
        ...recalc(items),
      };
    });
  };

  const clearBasket = () => {
    setBasket({
      items: [],
      totalCount: 0,
      totalPrice: 0,
    }
  );

  const handleAddDish = (dish: IDish) => {
    const updatedBasket = addDishToBasket(basket, dish)
    setBasket(updatedBasket)
  }

  const counterState = useCounter()

  return (
    <>
      <Header />
      <Container style={{
        padding: '20px'
      }}>

        <div>
          <h5>Current count: {counterState.count}</h5>
            <button onClick={counterState.icrement}>Increment</button>
            <button onClick={counterState.decrement}>Decrement</button>
        </div>

        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/dish/:id" element={<Dish />} />
          <Route path="/dish/create" element={<AddDish />} />
          <Route path="/dish/edit/:id" element={<EditDish />}/>
          <Route path="/basket" element={<Basket/>} />
        </Routes>
      </Container>
    </>
  );
}

export default App;
