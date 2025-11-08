# 📱 Mobile App — React Native + Expo

## ⚙️ Setup
```bash
npm install -g expo-cli
npm install
npx expo start
```

Install Expo Go on your phone → scan the QR → run the app.

🔗 Configure Backend URL

Edit `App.js` and replace:

```
const res = await axios.post("https://<YOUR_TUNNEL_URL>/transcribe", formData)
```

with your own ngrok/Cloudflare tunnel URL.
