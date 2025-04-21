import { QRCodeSVG } from 'qrcode.react';

const QRModal = ({ data }) => {
  return (
    <div>
      <h3>Escanea para pagar</h3>
      <QRCodeSVG value={data.address} size={200} />
      <p>Monto: ${data.fundsGoal}</p>
    </div>
  )
};

export default QRModal