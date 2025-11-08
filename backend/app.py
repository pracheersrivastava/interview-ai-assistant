import io
import numpy as np
from faster_whisper import WhisperModel
from fastapi import FastAPI, UploadFile, File
from fastapi.responses import JSONResponse
import requests
import soundfile as sf

app = FastAPI()
model = WhisperModel("small")
OLLAMA_URL = "http://localhost:11434/api/generate"
MODEL_NAME = "llama3"  # change if needed


@app.post("/transcribe")
async def transcribe(file: UploadFile = File(...)):
    audio_bytes = await file.read()
    audio_data, samplerate = sf.read(io.BytesIO(audio_bytes), dtype="float32")

    segments, _ = model.transcribe(audio_data, language="en")
    text = " ".join([seg.text for seg in segments])
    print(f"🗣️ Question: {text}")

    payload = {
        "model": MODEL_NAME,
        "prompt": (
            "You are an interview assistant. "
            "Answer this question concisely and professionally:\n{text}"
        ).format(text=text),
    }
    response = requests.post(OLLAMA_URL, json=payload)
    data = response.json()
    answer = data.get("response", "").strip()

    print(f"💬 Answer: {answer}")
    return JSONResponse({"question": text, "answer": answer})
