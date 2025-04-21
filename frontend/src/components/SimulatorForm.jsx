import React, { useState } from 'react';
import { simulate } from '../utils/simulation';

const SimulatorForm = ({ onSimulate, setQrData }) => {
  const [capital, setCapital] = useState('');
  const [period, setPeriod] = useState(3);
  const [type, setType] = useState('simple');

  const handleSimulate = async () => {
    const result = simulate(Number(capital), Number(period), type);
    onSimulate(result);

    const res = await fetch('http://localhost:3001/create-payment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ amount: Number(capital) })
    });

    const data = await res.json();
    setQrData(data.data);
  };

  return (
    <div className="mb-4">
      <input type="number" placeholder="Capital inicial" onChange={(e) => setCapital(e.target.value)} />
      <select onChange={(e) => setPeriod(e.target.value)}>
        <option value="3">3 meses</option>
        <option value="6">6 meses</option>
        <option value="9">9 meses</option>
        <option value="12">12 meses</option>
      </select>
      <select onChange={(e) => setType(e.target.value)}>
        <option value="simple">Beneficio Simple</option>
        <option value="compuesto">Interés Compuesto</option>
      </select>
      <button onClick={handleSimulate}>SIMULAR</button>
    </div>
  );
};

export default SimulatorForm;