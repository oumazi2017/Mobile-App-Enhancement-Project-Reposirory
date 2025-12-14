# Site & API Configuration

This repository includes a static demo site (`index.html` + `site/`) and a `gh-pages` branch used to publish the site via GitHub Pages.

## Configure API endpoints

The demo buttons are wired to a client-side `API` object. To connect real backend services:

1. Open `site/script.js` and set the `API` object to your endpoints. Example:

```js
const API = {
  passwordReset: 'https://api.yourdomain.com/auth/reset',
  orderTracking: 'https://api.yourdomain.com/orders/track',
  notifications: 'https://api.yourdomain.com/notify/subscribe'
}
```

2. Ensure your endpoints support CORS from `https://<your-username>.github.io` (or the custom domain you use).

3. For authenticated endpoints, avoid hard-coding secrets in the client. Use a server-side proxy or short-lived tokens.

## Notes
- If you don't configure endpoints, the buttons will show demo alerts.
- After setting endpoints, test flows in staging before exposing production keys.

---

*Instructions added by project maintainer tooling.*
