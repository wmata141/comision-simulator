const ResultTable = ({ result }) => (
    <div>
        <table>
            <thead>
                <tr>
                    <th>Mes</th>
                    <th>Ganancia</th>
                    <th>Total</th>
                </tr>
            </thead>
            <tbody>
                {result.table.map((row) => (
                    <tr key={row.mes}>
                        <td>{row.mes}</td>
                        <td>${row.ganancia}</td>
                        <td>${row.total}</td>
                    </tr>
                ))}
            </tbody>
        </table>
        <p><strong>Total:</strong> ${result.total}</p>
        <p><strong>Fee:</strong> ${result.fee}</p>
        <p><strong>Recibirás Neto:</strong> ${result.neto}</p>
    </div>
);

export default ResultTable