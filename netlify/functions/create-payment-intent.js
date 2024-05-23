/* eslint-disable no-undef */
require('dotenv').config();

// const apiKey = Netlify.env.get("VITE_STRIPE_SECRET_KEY");
// const stripe = require('stripe')(import.meta.env.VITE_STRIPE_SECRET_KEY);
const stripe = require('stripe')(process.env.VITE_STRIPE_SECRET_KEY);

exports.handler = async (event) => {
    // console.log(event);
    try {
        const { amount } = JSON.parse(event.body);
        console.log(event.body);
        const paymentIntent = await stripe.paymentIntents.create({
            amount,
            currency: 'gbp',
            // In the latest version of the API, specifying the `automatic_payment_methods` parameter is optional because Stripe enables its functionality by default.
            // payment_method_types:["card"],
            // automatic_payment_methods: {
            //     enabled: true,
            // },
            payment_method_types: ['card'],
        });

        return {
            statusCode: 200,
            body: JSON.stringify({ paymentIntent }),
        };
    } catch (error) {
        console.log({ error });

        return {
            statusCode: 400,
            body: JSON.stringify({ error }),
        };
    }
};
