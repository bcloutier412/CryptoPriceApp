const quotesRouter = require("express").Router();
const axios = require("axios");

const symbolApiIndex = {
  BTC: "BITSTAMP_SPOT_BTC_USD",
  ETH: "BITSTAMP_SPOT_ETH_USD",
  XRP: "BITSTAMP_SPOT_XRP_USD",
};
const timeScaleIndex = {
  "7D": 168,
  "1M": 730,
  "3M": 2190,
};
quotesRouter.get("/:cryptoSymbol/:timeScale", (request, response, error) => {
  const cryptoSymbol = symbolApiIndex[request.params.cryptoSymbol];
  const numOfTickers = timeScaleIndex[request.params.timeScale];
  axios
    .get(
      `https://rest.coinapi.io/v1/ohlcv/${cryptoSymbol}/latest?period_id=1HRS&limit=${numOfTickers}`,
      { headers: { "X-CoinAPI-Key": `${process.env.COINAPI_KEY}` } }
    )
    .then((response) => response.data)
    .then((data) => {
      response.send(data);
    })
    .catch((error) => {
      console.log(error);
      response.status(404).send({ message: "requested symbol doesnt exist " });
    });
});

module.exports = quotesRouter;
