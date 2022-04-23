import React, { useState, useEffect } from 'react';
import StripeCheckout from 'react-stripe-checkout';
import axios from 'axios';

const KEY = "pk_test_51KHIRyKVo14rgkYkfkueK5pUg8E9tMvpCumWiZ04FpapRuH9QL3HkxARCFS7MC9Sm6hpslnueAFYxfQZTFoVdToJ00aFSJ6c6j"

const stripe = () => {
    const [stripeToken, setStripeToken] = useState(null);

    const onToken = (token) => {
        setStripeToken(token);
    };

    useEffect(() => {
        const makePaymentReq = async () => {
            try {
                const response = axios.post(
                    "http://localhost:5001/api/checkout/payment", {
                    tokenId: stripeToken.id,
                    amount: 2000,
                }
                )
            } catch (err) {
                console.log(err);
            }
        }

        if(stripeToken) makePaymentReq();
    }, [stripeToken])

    return (
        <div>
            <StripeCheckout
                name="Exclusive Ideas Shop"
                image="image-link"
                billingAddress
                shippingAddress
                description="your description"
                amount={2000}
                token={onToken}
                stripeKey={KEY}
            >

            </StripeCheckout>
        </div>
    )
}

export default stripe