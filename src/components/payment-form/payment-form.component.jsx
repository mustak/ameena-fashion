import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';

import Button, {
    BUTTON_TYPE_CLASSES,
} from '@/components/button/button.component';

import { PaymentContainer, FormContainer } from './payment-form.styles';

const PaymentForm = () => {
    const stripe = useStripe();
    const elements = useElements();

    const paymentHandler = async (e) => {
        e.preventDefault();

        if (!stripe || !elements) {
            // Stripe.js hasn't yet loaded.
            // Make sure to disable form submission until Stripe.js has loaded.
            return;
        }

        const response = await fetch(
            '/.netlify/functions/create-payment-intent',
            {
                method: 'post',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    amount: 1000,
                }),
            }
        ).then((res) => {
            // console.log(res);
            return res.json();
        });
        console.log(response);
        const { client_secret } = response.paymentIntent;
        console.log(client_secret);
    };

    return (
        <PaymentContainer>
            <FormContainer onSubmit={paymentHandler}>
                <h2>Credit Card Payment:</h2>
                <CardElement />
                <Button
                    buttonType={BUTTON_TYPE_CLASSES.inverted}
                    disabled={!stripe}
                >
                    Pay Now
                </Button>
            </FormContainer>
        </PaymentContainer>
    );
};
export default PaymentForm;
