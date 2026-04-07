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
  const [basket, setBasket] = useState<IBasketState>(
    {
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
  )
}

export default App
