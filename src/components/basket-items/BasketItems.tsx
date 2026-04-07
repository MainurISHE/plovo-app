import type { IBasket } from "../../types";
import { Box, Button, Typography } from "@mui/material";

interface Props {
  items: IBasket[];
  onIncrease: (id: string) => void;
  onDecrease: (id: string) => void;
}

export const BasketItems = ({ items, onIncrease, onDecrease }: Props) => {

  return (
    <Box>
      {items.map((item, index) => (
        <Box
          key={item.dish.id}
          display="flex"
          justifyContent="space-between"
          alignItems="center"
          mb={2}
        >
          <Typography>
            {index + 1}. {item.dish.name}
          </Typography>

          <Typography>кол-во: {item.count}</Typography>

          <Box>
            <Button onClick={() => onDecrease(item.dish.id)}>-</Button>
            <Button onClick={() => onIncrease(item.dish.id)}>+</Button>
          </Box>
        </Box>
      ))}
    </Box>
  );
};