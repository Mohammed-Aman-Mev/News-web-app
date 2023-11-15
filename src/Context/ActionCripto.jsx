var option = {
  method: "GET",
  headers: { "X-CoinAPI-Key": "E2A4FAA2-D560-4558-8D66-91E77FDE5145" },
};

const fetchcripto = async () => {
  const cripto = await fetch(
    `https://rest.coinapi.io/v1/exchangerate/BTC/USD`,
    option
  );
  const jsoncripto = await cripto.json();

  return jsoncripto;
};

export default fetchcripto;
