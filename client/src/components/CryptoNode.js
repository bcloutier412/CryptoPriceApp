import React, { useState } from "react";
import ChartComponent from './ChartComponent'
import './styles.css'

const CryptoNode = ({ name, symbol, image }) => {
    const [showChart, setShowChart] = useState(false)

  return (
    <div className="container">
      <h2 className="header" onClick={() => setShowChart(!showChart)}>
        <img src={image} alt="Logo" width="50px" />
        <span style={{marginLeft: '10px'}}>{name}</span>
      </h2>
      {showChart ? <ChartComponent symbol={symbol}/> : null}
    </div>
  );
};

export default CryptoNode;
