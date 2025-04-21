# 💸 Simulador de Comisiones - Web App

Simulador técnico de inversión con opciones de beneficio simple o compuesto. Permite calcular beneficios, exportar resultados en CSV, generar un QR para pagos en criptomonedas y revisar el estado del pago.

---

## 🧰 Stack Tecnológico

- **Frontend:** React, JavaScript, HTML, TailwindCSS
- **Backend:** Node.js, Express
- **API de pagos:** [Disruptive Payments](https://my.disruptivepayments.io/api/docs/)

---

## 🚀 Características

- Simulación de beneficios simples y compuestos.
- Elección de plazos: **3, 6, 9, 12 meses**.
- Porcentaje de beneficios mensuales escalonados.
- Cobro automático de fee según el monto invertido.
- Exportación de resultados en formato **CSV**.
- Generación de **QR de pago** para inversión en criptomoneda.
- Consulta en tiempo real del estado del pago.
- Sistema completo con frontend + backend.

---

## 📦 Instalación

### 1. Clonar el repositorio

```bash
git clone https://github.com/tu-usuario/simulador-comisiones.git
cd simulador-comisiones
2. Instalar dependencias del backend
bash
Copiar
Editar
cd backend
npm install
3. Levantar backend
bash
Copiar
Editar
npm run dev  # si usás nodemon
# o
node index.js
El backend corre en http://localhost:3001

4. Instalar dependencias del frontend
bash
Copiar
Editar
cd ../frontend
npm install
5. Levantar frontend
bash
Copiar
Editar
npm run dev
El frontend corre en http://localhost:5173 (si usás Vite)

🧪 Testing
Tests Unitarios (Jest)
bash
Copiar
Editar
cd backend
npm test
Asegurate de tener jest y la configuración en babel.config.js si estás usando ES Modules.

🔐 API Externa: Disruptive Payments
Crear QR de pago
Endpoint: POST /api/payment

Documentación: Crear pago único

Verificar estado del pago
Endpoint: GET /api/payment/status?address=...

Documentación: Estado de pago

API Key utilizada:

text
Copiar
Editar
Client-API: o0z8y85rjdx28iqef32f4mrl6e56b71742437588342
