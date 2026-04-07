import { Box, Button, TextField, Typography } from "@mui/material";
import { useState } from "react";

interface Props {
  totalPrice: number;
  onSubmit: (data: any) => void;
}

export const OrderForm = ({ totalPrice, onSubmit }: Props) => {
  const [form, setForm] = useState({
    name: "",
    address: "",
    phone: ""
  });

  const change = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm(prev => ({
      ...prev,
      [e.target.name]: e.target.value
    }));
  };

  return (
    <Box>
      <Typography variant="h6">
        Доставка
      </Typography>

      <TextField
        name="name"
        label="Имя"
        fullWidth
        margin="normal"
        value={form.name}
        onChange={change}
      />

      <TextField
        name="address"
        label="Адрес"
        fullWidth
        margin="normal"
        value={form.address}
        onChange={change}
      />

      <TextField
        name="phone"
        label="Телефон"
        fullWidth
        margin="normal"
        value={form.phone}
        onChange={change}
      />

      <Typography>Итого: {totalPrice}</Typography>

      <Button
        variant="contained"
        fullWidth
        onClick={() => onSubmit(form)}
      >
        Оформить заказ
      </Button>
    </Box>
  );
};