import { TableCell, TableRow } from "@mui/material";
import React from "react";
import { coinFormat } from "../Interfaces";
import '../App.css'

type Props = {
  values: coinFormat;
};

const Coin = ({ values }: Props) => {
  //   const   { name,  price,  symbol, marketcap, volume,  image,  price_change_percentage_24h }=values;
  const priceChange = values.price_change_percentage_24h;
  return (
    <TableRow
      key={values.id}
      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
    >
      <TableCell >
       <img src={values.image} alt="crypto" />
      </TableCell>
      <TableCell>
        <h3> {values.name}</h3>
      </TableCell>
      <TableCell>{values.symbol}</TableCell>
      <TableCell align="center">${values.current_price}</TableCell>
      <TableCell align="center">${values.market_cap}</TableCell>
      {priceChange < 0 ? (
        <TableCell align="center"><p className='coin-percent-red '>{priceChange.toFixed(2)}</p></TableCell>
      ) : (
        <TableCell align="center"><p className='coin-percent-green '>{priceChange.toFixed(2)}</p></TableCell>
      )}
      <TableCell align="center">
        {values.total_volume.toLocaleString()}
      </TableCell>
    </TableRow>
  );
};

export default Coin;
