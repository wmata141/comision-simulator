import React, { useState } from 'react';
import SimulatorForm from './components/SimulatorForm';
import ResultTable from './components/ResultTable';
import QRModal from './components/QRModal';
import PaymentModal from './components/PaymentModal';

export const exportCSV = (result) => {
  const headers = ['Mes,Ganancia,Total'];
  const rows = result.table.map(row => `${row.mes},${row.ganancia},${row.total}`);
  rows.push(`,,`);
  rows.push(`,,Total: ${result.total}`);
  rows.push(`,,Fee: ${result.fee}`);
  rows.push(`,,Neto: ${result.neto}`);

  const blob = new Blob([headers.concat(rows).join('\n')], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = 'resultado_simulacion.csv';
  link.click();
};

const App = () => {
  const [result, setResult] = useState(null);
  const [qrData, setQrData] = useState(null);
  const [paymentStatus, setPaymentStatus] = useState(null);
  console.log("qrData ==>",qrData);
  
  return (
    <div className="p-6 max-w-4xl mx-auto" >
      <h1 className="text-2xl font-bold mb-4">Simulador de Comisiones</h1>
      <SimulatorForm onSimulate={setResult} setQrData={setQrData} />
      {result && <ResultTable result={result} />}
      {result && <button onClick={() => exportCSV(result)}>Exportar CSV</button>}
      {qrData && <QRModal data={qrData} />}
      {qrData && <PaymentModal qrData={qrData} setPaymentStatus={setPaymentStatus} />}
      <button onClick={() => window.location.reload()}>RESET/NEW</button>
    </div>
  );
};

export default App;