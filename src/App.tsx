import {
  Paper,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  TextField,
} from "@mui/material";
import { ChangeEvent, useState } from "react";
import "./App.css";
import Coin from "./Components/Coin";
import useFetch from "./useFetch";

function App() {
  const [search, setSearch] = useState<string>("");

  const { coins, isLoading, error } = useFetch(
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
  );
  // console.log(coins);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    setSearch(event.target.value);
  };

  const filteredCoins = coins.filter((coin) =>
    coin.name.toLowerCase().includes(search.toLowerCase())
  );

  if (isLoading) return <h1>Loading...</h1>;

  if (error) console.log(error);

  return (
    <div className='coin-app'>
      <div className="coin-search">
        <h1 className="coin-text">Search a currency</h1>
        <TextField label="Search" variant="outlined" onChange={handleChange}  className='coin-input' />
      </div>
      <div className="data">
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell>Currency</TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center"></TableCell>
                <TableCell align="center">Current Price</TableCell>
                <TableCell align="center">Mkt Cap</TableCell>
                <TableCell align="center">Change in last 24h</TableCell>
                <TableCell align="center">Volume</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {filteredCoins.map((coin) => (
                <Coin values={coin} />
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default App;
