# Ameena Fashion Website

An ecommerce website created using:

-   React
-   Redux
-   React Router
-   Firebase for authentication
-   and Stripe for payments.

## Errors

It's possible you may encounter a google Authorization error that says:

```
 403:restricted_client.
```

If you do, here are the instructions to fix it!

There should be a **Learn More link** in the popup, clicking that should take you to the Google APIs console that has three tabs under the header named

-   Credentials,
-   OAuth Consent Screen, and
-   Domain Verification.

Go to the **OAuth Consent Screen** tab and update the Application Name to "ameenas fashion". Click on save at the bottom, then try logging into your verified Google account thereafter.
