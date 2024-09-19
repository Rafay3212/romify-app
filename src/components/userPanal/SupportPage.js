import React, { useState } from 'react';
import pixQrCode from './QR.png';

const paymentMethods = [
  { name: 'PayPal', id: 'paypal' },
  { name: 'Stripe (Credit card)', id: 'stripe' },
  { name: 'Pix (Brasil)', id: 'pix' },
  { name: 'PicPay (Brasil)', id: 'picpay' },
];

function SupportPage() {
  const [selectedMethod, setSelectedMethod] = useState(null);
  const [donationAmount, setDonationAmount] = useState(1); // Default donation amount

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col items-center justify-center p-5">
      
      {/* Donate Heading */}
      <h1 className="text-4xl font-bold text-center">Donate</h1>
      
      {/* Description */}
      <p className="mt-4 text-center text-lg text-gray-700">
        We depend on donations to keep our infrastructure running, show your support by donating!
      </p>

      {/* Payment Method Buttons */}
      <div className="flex gap-4 mt-8">
        {paymentMethods.map((method) => (
          <button
            key={method.id}
            className={`px-6 py-2 rounded-full font-semibold 
              ${selectedMethod === method.id ? 'bg-blue-500 text-white' : 'bg-gray-200 text-gray-600'}`}
            onClick={() => setSelectedMethod(method.id)}
          >
            {method.name}
          </button>
        ))}
      </div>

      {/* Donation Amount Input */}
      {selectedMethod && (
        <div className="mt-8 flex flex-col items-center">
          <label className="text-lg mb-2" htmlFor="donationAmount">
            Donation amount <span className="text-red-500">*</span>
          </label>
          <div className="flex items-center">
            <span className="text-2xl mr-2">$</span>
            <input
              id="donationAmount"
              type="number"
              value={donationAmount}
              onChange={(e) => setDonationAmount(e.target.value)}
              className="border rounded-lg p-2 w-20 text-lg"
              min="1"
            />
          </div>

          {/* Pay Now Button */}
          <button
            className="mt-4 px-6 py-2 bg-blue-500 text-white rounded-full font-semibold"
            onClick={() => alert(`You have selected ${selectedMethod} to donate $${donationAmount}`)}
          >
            Pay now
          </button>
        </div>
      )}

      {/* Div Containers for each Payment Method */}
      <div className="mt-12 w-full max-w-xl">
        {selectedMethod === 'paypal' && (
          <div className="p-6 bg-white shadow-lg  h-[20vh] text-center m-auto rounded-lg">
          <button
        
        className={`px-6 py-2 h-[10vh] rounded-10 font-semibold text-white 
         bg-blue-500`}>
        Donate using Paypal
      </button>
      </div>
        )}
        {selectedMethod === 'stripe' && (
          <div className="p-6 bg-white shadow-lg rounded-lg">
            <h2 className="text-2xl font-semibold mb-4">Stripe (Credit Card)</h2>
            <p>Donate using your Credit Card securely via Stripe.</p>
          </div>
        )}
        {selectedMethod === 'pix' && (
             <div className="p-6 bg-white shadow-lg rounded-lg text-center">
             <h2 className="text-2xl font-semibold mb-4">Pix (Brasil)</h2>
             <p>
               <strong>Chave pix (email):</strong> pix@pixelexperience.org<br />
               <strong>Nome:</strong> José Henrique
             </p>
             <img src={pixQrCode} alt="Pix QR Code" className="mx-auto mt-4 w-40 h-40" />
           </div>

        //   <div className="p-6 bg-white shadow-lg rounded-lg">
        //     <h2 className="text-2xl font-semibold mb-4">Pix (Brasil)</h2>
        //     <p>Donate using Pix, a fast and secure payment method in Brazil.</p>
        //   </div>
        )}
        {selectedMethod === 'picpay' && (
          <div className="p-6 bg-white shadow-lg  h-[20vh] text-center m-auto rounded-lg">
          <button
        
        className={`px-6 py-2 h-[10vh] rounded-10 font-semibold text-white 
         bg-blue-500`}>
        Donate using Picpay
      </button>
      </div>
        )}
      </div>
    </div>
  );
}

export default SupportPage;
