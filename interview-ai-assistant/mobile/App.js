import React, { useState } from 'react';
import { View, Text, Button, StyleSheet, ScrollView } from 'react-native';
import axios from 'axios';
import { Audio } from 'expo-av';

export default function App() {
  const [response, setResponse] = useState('');

  const handleRecord = async () => {
    try {
      const { status } = await Audio.requestPermissionsAsync();
      if (status !== 'granted') {
        alert('Microphone permission required!');
        return;
      }

      setResponse('🎙️ Recording...');
      const recording = new Audio.Recording();
      await recording.prepareToRecordAsync(Audio.RecordingOptionsPresets.HIGH_QUALITY);
      await recording.startAsync();
      await new Promise(resolve => setTimeout(resolve, 3000));
      await recording.stopAndUnloadAsync();

      const uri = recording.getURI();
      setResponse('⏳ Processing...');

      const formData = new FormData();
      formData.append('file', { uri, name: 'audio.wav', type: 'audio/wav' });

      // Replace with ngrok or tunnel URL
      const res = await axios.post('https://<YOUR_TUNNEL_URL>/transcribe', formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      setResponse(`🗣️ Q: ${res.data.question}\n\n💬 A: ${res.data.answer}`);
    } catch (err) {
      console.error(err);
      setResponse('❌ Error: ' + err.message);
    }
  };

  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>Interview AI Assistant</Text>
      <Button title="🎤 Record & Ask" onPress={handleRecord} />
      <Text style={styles.text}>{response}</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: { padding: 20, marginTop: 60 },
  header: { fontSize: 24, fontWeight: 'bold', marginBottom: 20 },
  text: { fontSize: 18, marginTop: 20 },
});
