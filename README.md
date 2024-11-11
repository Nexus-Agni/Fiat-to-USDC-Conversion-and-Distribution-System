
# Fiat to USDC Conversion and Distribution System

This project is a complete solution to facilitate fiat-to-USDC conversion and distribution. The system consists of a backend with Node.js and Express, a frontend built using React (with Vite and Tailwind CSS), and a smart contract for blockchain integration. It involves a secure treasury wallet system, transaction monitoring, and a reconciliation mechanism to ensure accurate and reliable operations.

## Table of Contents

- [Architecture Overview](#architecture-overview)
- [Backend Setup](#backend-setup)
- [Frontend Setup](#frontend-setup)
- [Smart Contract Setup](#smart-contract-setup)
- [Environment Variables](#environment-variables)
- [Running the Project](#running-the-project)
- [Folder Structure](#folder-structure)
- [API Documentation](#api-documentation)
- [Contributing](#contributing)
- [License](#license)

---

## Architecture Overview

The system architecture involves several key components:

1. **Backend (Node.js & Express)**: Handles API requests, processes fiat-to-USDC conversion, manages treasury wallet, and integrates with the smart contract.
2. **Frontend (React with Vite)**: Provides a user interface for users to initiate fiat-to-USDC conversion and view transaction history.
3. **Smart Contract (Solidity)**: Facilitates the secure transfer of USDC to user wallets via blockchain transactions.
4. **Bank API (Fiat Onramp)**: Used to monitor fiat deposits in a designated bank account and trigger the corresponding fiat-to-USDC transaction.
5. **Transaction Monitoring**: Ensures transactions are successful and reconciled in the system.
6. **Reconciliation System**: Compares fiat deposits with USDC transactions to detect and resolve discrepancies.

---

## Backend Setup

### Prerequisites

- Node.js (version 18 or higher)
- MongoDB (locally or via cloud services like MongoDB Atlas)
- API for fiat deposit notifications (Webhook/Batch)
- Ethereum wallet and liquidity pool for USDC handling

### Install Dependencies

1. Clone the repository:

   ```bash
   git clone https://github.com/your-repo/fiat-usdc-conversion.git
   cd fiat-usdc-conversion/backend
   ```

2. Install the backend dependencies:

   ```bash
   npm install
   ```

### Environment Variables

You need to set up the following environment variables in the `.env` file:

```bash
PORT=5000
MONGO_URI=your-mongo-uri
FIAT_API_URL=your-fiat-api-url
USDC_CONTRACT_ADDRESS=your-usdc-contract-address
USDC_WALLET_PRIVATE_KEY=your-usdc-wallet-private-key
```

### Start the Backend

Run the backend server:

```bash
npm run dev
```

The server will start on `http://localhost:5000`.

---

## Frontend Setup

### Prerequisites

- Node.js (version 18 or higher)

### Install Dependencies

1. Clone the repository and navigate to the frontend folder:

   ```bash
   git clone https://github.com/your-repo/fiat-usdc-conversion.git
   cd fiat-usdc-conversion/frontend
   ```

2. Install the frontend dependencies:

   ```bash
   npm install
   ```

### Environment Variables

Create a `.env` file in the root of the frontend directory and add the following:

```bash
VITE_API_BASE_URL=http://localhost:5000
```

### Start the Frontend

To start the frontend in development mode:

```bash
npm run dev
```

The frontend will be accessible at `http://localhost:3000`.

---

## Smart Contract Setup

### Prerequisites

- Hardhat (for compiling and deploying Solidity contracts)
- MetaMask or other Ethereum wallet
- USDC Token Contract Address on Sepolia or Mainnet

### Install Dependencies

1. Navigate to the `smart-contract` directory:

   ```bash
   cd smart-contract
   ```

2. Install the required dependencies:

   ```bash
   npm install
   ```

### Deploy the Smart Contract

1. Set up the `.env` file with your private key and Infura/Alchemy API key:

   ```bash
   PRIVATE_KEY=your-private-key
   INFURA_API_KEY=your-infura-api-key
   ```

2. Deploy the smart contract to the Sepolia network (or mainnet) using Hardhat:

   ```bash
   npx hardhat run scripts/deploy.js --network sepolia
   ```

---

## Running the Project

### Start the Backend

1. Ensure that MongoDB is running (either locally or using MongoDB Atlas).
2. Run the backend API:

   ```bash
   npm run dev
   ```

3. The backend will be accessible at `http://localhost:5000`.

### Start the Frontend

1. Run the frontend:

   ```bash
   npm run dev
   ```

2. The frontend will be accessible at `http://localhost:3000`.

---

## Folder Structure

### Backend

```
backend/
│
├── controllers/
│   └── transactionController.js  # Handles transactions
│
├── models/
│   └── transactionModel.js       # MongoDB schema for transactions
│
├── routes/
│   └── transactionRoutes.js      # Routes for transaction-related operations
│
├── services/
│   └── usdcService.js            # Interacts with USDC smart contract
│
├── .env                          # Environment variables
├── app.js                        # Main server setup
├── package.json                  # Backend dependencies
└── server.js                     # Start the server
```

### Frontend

```
frontend/
│
├── src/
│   ├── components/
│   │   ├── TransactionForm.jsx   # Form to handle user transactions
│   │   └── TransactionList.jsx   # Displays transaction history
│   ├── pages/
│   │   └── Home.jsx              # Home page for conversion
│   ├── App.jsx                   # Main React app component
│   ├── index.css                 # Tailwind CSS configuration
│   ├── main.jsx                  # React entry point
│   └── vite.config.js            # Vite configuration file
├── .env                          # Environment variables for frontend
├── package.json                  # Frontend dependencies
└── tailwind.config.js            # Tailwind configuration
```

---

## API Documentation

### Transaction Routes

#### POST `/transaction`
- **Description**: Initiates a fiat-to-USDC conversion.
- **Request Body**:

  ```json
  {
    "fiatAmount": "100.00"
  }
  ```

- **Response**:

  ```json
  {
    "status": "success",
    "transactionId": "12345"
  }
  ```

#### GET `/transactions`
- **Description**: Retrieves a list of all transactions.
- **Response**:

  ```json
  [
    {
      "_id": "12345",
      "fiatAmount": "100.00",
      "status": "completed"
    },
    ...
  ]
  ```

---

## Contributing

We welcome contributions to this project! To get started:

1. Fork the repository.
2. Clone your fork locally.
3. Create a new branch (`git checkout -b feature/your-feature`).
4. Make your changes.
5. Commit your changes (`git commit -am 'Add new feature'`).
6. Push to your fork (`git push origin feature/your-feature`).
7. Create a pull request.

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.


