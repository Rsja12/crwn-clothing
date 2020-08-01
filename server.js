const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const path = require('path');

if (process.env.NODE_ENV !== 'production') require('dotenv').config();

const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

if (process.env.NODE_ENV === 'production') {
  app.use(express.static(path.join(__dirname, 'client/build')));

  app.get('*', function(req, res) {
    res.sendFile(path.join(__dirname, 'client/build', 'index.html'));
  });
}

app.listen(port, error => {
  if (error) throw error;
  console.log('Server running on port ' + port);
});

app.post('/create-checkout-session', async (req, res) => {
  const { cart } = req.body;

  const lineItems = cart.map(item => {
    return {
      name: item.name,
      amount: item.price * 100,
      quantity: item.quantity,
      images: [item.imageUrl],
      currency: 'usd'
    }
  })

  const session = await stripe.checkout.sessions.create({
    payment_method_types: ['card'],
    shipping_address_collection: {
      allowed_countries: ['US'],
    },
    line_items: lineItems,
    success_url: 'http://localhost:3000',
    cancel_url: 'http://localhost:3000/checkout'
  });

  res.json({ sessionId: session.id });
});


