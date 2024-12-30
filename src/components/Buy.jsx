import React from 'react'
// @ts-ignore
 
const chapa = new ChapaCheckout({
    publicKey: 'CHAPUBK_TEST-5Liyx3G1occ8WzKPMIQIBVoGHDHd6p8i',
    amount: '100',
    currency: 'ETB',
    availablePaymentMethods: ['telebirr', 'cbebirr', 'ebirr', 'mpesa', 'chapa'],
    customizations: {
        buttonText: 'Pay Now',
        styles: `
            .chapa-pay-button { 
                background-color: #4CAF50; 
                color: white;
            }
        `
    },
    callbackUrl: 'https://yourdomain.com/callback',
    returnUrl: 'http://localhost:5173/',
});
chapa.initialize('chapa-inline-form');
document.getElementById('chapa-wrapper').style.width = '100%';
document.getElementById('chapa-wrapper').style.position = 'fixed';
document.getElementById('chapa-wrapper').style.zIndex = '9999';
document.getElementById('chapa-wrapper').style.top = '0px';
document.getElementById('chapa-wrapper').style.backgroundColor='transparent';
document.getElementById('chapa-wrapper').style.display = 'none';


const chapaIntegration = () => {
    document.getElementById('chapa-wrapper').style.display = 'flex';
}

const Buy = () => {
  return (
<div class="max-w-[85rem] mx-auto px-4 sm:px-6 lg:px-8">
  <div class="grid lg:grid-cols-7 lg:gap-x-8 xl:gap-x-12 lg:items-center">
    <div class="lg:col-span-3">
      <h1 class="block text-3xl font-bold text-gray-800 sm:text-4xl md:text-5xl lg:text-6xl">Build Better Products</h1>
      <p class="mt-3 text-lg text-gray-800">Introducing a new way for your brand to reach the creative community.</p>

      <div class="mt-5 lg:mt-8 flex flex-col items-center gap-2 sm:flex-row sm:gap-3">
        <div class="w-full sm:w-auto">
          <label for="hero-input" class="sr-only">Search</label>
          <input type="text" id="hero-input" name="hero-input" class="py-3 px-4 block w-full min-w-80 border-gray-200 rounded-md text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none" placeholder="Enter work email"/>
        </div>
        <button onClick={chapaIntegration} class="w-full sm:w-auto py-3 px-4 inline-flex justify-center items-center gap-x-2 text-sm font-medium rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 focus:outline-none focus:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none" href="#">
          Buy
        </button>
      </div>
    </div>

    <div class="lg:col-span-4 mt-10 lg:mt-0">
      <img class="w-full rounded-xl" src="https://images.unsplash.com/photo-1665686376173-ada7a0031a85?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=900&h=700&q=80" alt="Hero Image"/>
    </div>
  </div>
</div>
  )
}

export default Buy