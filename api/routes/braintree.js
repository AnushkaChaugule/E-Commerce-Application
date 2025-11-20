import Router from "express";
import braintree from "braintree";
import { config } from "dotenv";

config()
const router = Router();

const gateway = new braintree.BraintreeGateway({
  environment: braintree.Environment.Sandbox, // Change to Production for live environment
  merchantId: process.env.BRAINTREE_MERCHANT_ID,
  publicKey: process.env.BRAINTREE_PUBLIC_KEY,
  privateKey: process.env.BRAINTREE_PRIVATE_KEY,
});

// Route to get a Braintree client token

router.get("/token", (req, res) => {
  gateway.clientToken.generate({}, (err, response) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json({ clientToken: response.clientToken });
    }
  });
});

// Route to handle a transaction

router.post("/checkout", (req, res) => {
  const { paymentMethodNonce, amount } = req.body;

  gateway.transaction.sale(
    {
      amount,
      paymentMethodNonce,
    },
    (err, result) => {
      if (err) {
        res.status(500).json({ error: err.message });
      } else {
        if (result.success) {
          res.json({ success: true, transaction: result.transaction });
        } else {
          res.status(500).json({ error: result.message });
        }
      }
    }
  );
});

export default router;
