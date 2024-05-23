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

# Sign-in options

### **Sign in using a redirect.**

```javascript
const provider = new GoogleAuthProvider();
// Start a sign in process for an unauthenticated user.
provider.addScope('profile');
provider.addScope('email');
await signInWithRedirect(auth, provider);
// This will trigger a full page redirect away from your app

// After returning from the redirect when your app initializes you can obtain the result
const result = await getRedirectResult(auth);
if (result) {
    // This is the signed-in user
    const user = result.user;
    // This gives you a Google Access Token.
    const credential = GoogleAuthProvider.credentialFromResult(result);
    const token = credential.accessToken;
}
```

### **Sign in using a popup.**

```javascript
const provider = new GoogleAuthProvider();
provider.addScope('profile');
provider.addScope('email');
const result = await signInWithPopup(auth, provider);

// The signed-in user info.
const user = result.user;
// This gives you a Google Access Token.
const credential = GoogleAuthProvider.credentialFromResult(result);
const token = credential.accessToken;
```

# Misc.

## Environment Requirements for Netlify

Precede environment variable names with "VITE\_" to ensure it to be recognisd by Netlify CLI.

## Authentication Provider

Public-facing name for project: project-299031638173
