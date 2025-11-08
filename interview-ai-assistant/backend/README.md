# 🧠 Backend — FastAPI + Whisper + Ollama

## 🚀 Setup
```bash
# 1️⃣ Create virtual environment
python -m venv venv
venv\Scripts\activate    # Windows

# 2️⃣ Install deps
pip install -r requirements.txt

# 3️⃣ Run server
uvicorn app:app --reload
```

Default endpoint:

POST /transcribe

with multipart form field file (audio/wav).

🌐 Remote Access (optional)
```
ngrok http 8000
```

You’ll get a URL like:

https://abc123.ngrok.io/transcribe

Use that in your mobile app.
