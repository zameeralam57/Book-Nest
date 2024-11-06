import React from 'react';
import { useState } from 'react';
function Payment(props) {
  const [amount, setamount] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!amount == ''){
      let newData = 'fgdfgfd';
    }
    else
      var options = {
        key: "",
        key_secret: "",
        amount: props.money*100,
        currency: 'INR',
        name: 'BookNest',
        description: 'Thanks for choosing BookNest',
        handler: function (response) {
        },
        prefill: {
          name: "Pappu Kumar",
          email: "pappukumarme9999@gmail.com",
          contact: "9504860538"
        },
        notes: {
          address: 'Razorpay Corporate office'
        },
        theme: {
          color: '#F07c29'
        }
      };
    var pay = new window.Razorpay(options);
    pay.open();
  }
  return (
    <div className="App">
      <button className='btn-dark mb-2 razorpaybutton' onClick={handleSubmit}>PAY</button>
    </div>
  );
}

export default Payment;
