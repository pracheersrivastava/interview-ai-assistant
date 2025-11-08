# 🎙️ Interview AI Assistant (Local + Free)

A two-part open-source system that listens to an interviewer’s voice on mobile,
transcribes it with Whisper on a laptop, and answers instantly using Ollama — all 100% offline and free.

## 🧩 Architecture
- **Mobile App (React Native + Expo)** — records audio via the mobile mic and sends it to the backend.
- **Backend (FastAPI + Whisper + Ollama)** — runs locally on a laptop/desktop, handles transcription and AI response.
- Optional: `ngrok` or `Cloudflare Tunnel` for remote connection when devices are on different networks.

## 🛠️ Quick Setup
See `/backend/README.md` and `/mobile/README.md` for instructions.

## ⚙️ Tech Stack
- Python (FastAPI, Faster-Whisper)
- Ollama (Llama3 / Phi3)
- React Native (Expo)
- Axios for HTTP
- Optional: ngrok (for remote tunnel)

## 💡 License
MIT — free to use, improve, and share.
