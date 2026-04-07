import { Box, Container, Typography } from "@mui/material";
import type { IBasketState } from "../../types";
import { Link } from "react-router";

interface Props {
    basketState: IBasketState
}

export const Basket = ({ basketState }: Props) => {
    const { items, totalCount, totalPrice } = basketState

  if (items.length === 0) {
    return (
      <Container>
        <Typography variant="h5" textAlign="center">
          Корзина пустая
        </Typography>

        <Link to="/">
          <Typography>На главную</Typography>
        </Link>
      </Container>
    );
  }

  return (
    <Container>
      <Box display="flex" gap={4}>
        {/* <BasketItems
          items={items}
          onIncrease={onIncrease}
          onDecrease={onDecrease}
        />

        <OrderForm
          totalPrice={totalPrice}
          onSubmit={onOrder}
        /> */}
      </Box>
    </Container>
  );
};