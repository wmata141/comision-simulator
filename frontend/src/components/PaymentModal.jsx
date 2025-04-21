import React, { useState } from 'react';

const PaymentModal = ({ qrData }) => {
  const [status, setStatus] = useState(null);

  const checkPayment = async () => {
    const res = await fetch('http://localhost:3001/check-payment', {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify({ address: qrData.address })
    });

    const data = await res.json();
    setStatus(data.data);
  };

  console.log("status ==>",status);  

  return (
    <div>
      <button onClick={checkPayment}>Revisar Pago</button>
      {status && (
        <div>
          <p>Status: {status.status}</p>
          <p>Capturado: {status.amountCaptured}</p>
          {status.amountCaptured > 0 && <strong>✅ Pago recibido</strong>}
        </div>
      )}
    </div>
  );
};

export default PaymentModal;