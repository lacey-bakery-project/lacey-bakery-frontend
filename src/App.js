// import React, { useState } from 'react';
import React from 'react';
import StripeCheckout from 'react-stripe-checkout';

function App() {
  // const [product, setProduct] = useState({
  //   name: ""
  // })
  return (
    <div className="App">
      <StripeCheckout stripeKey="" token="" name="" amount="" />

    </div>

  );
}

export default App;
