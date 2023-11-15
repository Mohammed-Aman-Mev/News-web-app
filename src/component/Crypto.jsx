import React, { useEffect, useState } from "react";
import fetchcripto from "../Context/ActionCripto";

const Crypto = () => {
  const [cryptodata, setcryptodata] = useState({
    asset_id_base: "RRR",
    rate: 0,
  });

  const callcrypto = async () => {
    const data = await fetchcripto();
    setcryptodata(data);
    // console.log(data);
  };

  useEffect(() => {
    callcrypto();
  }, []);
  return (
    <div
      className="card "
      style={{
        top: "350px",
        position: "sticky",
        padding: "10px",
        background: "#053B50",
      }}
    >
      <h1 className="text-center" style={{ color: "#64CCC5" }}>
        Crypto Center
      </h1>
      <h2 style={{ color: "#176B87" }}> {cryptodata.asset_id_base}</h2>
      <h3 style={{ color: "#176B87" }}> Rate in USD={cryptodata.rate}$</h3>
      <h3 style={{ color: "#176B87" }}>
        {" "}
        Rate in INR={cryptodata.rate * 82.73}₹
      </h3>
    </div>
  );
};

export default Crypto;
