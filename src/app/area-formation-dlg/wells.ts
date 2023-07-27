const getRandomFloat = (min: number, max: number) => {
  return Math.random() * (max - min) + min;
};

const wellsData = {
  "wells": [
    {
      "tts": "TTS-123",
      "WellName": "Well A",
      "evaluation": 564.32,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-456",
      "WellName": "Well B",
      "evaluation": 238.78,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-789",
      "WellName": "Well C",
      "evaluation": 104.95,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-987",
      "WellName": "Well D",
      "evaluation": 771.01,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-654",
      "WellName": "Well E",
      "evaluation": 623.15,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-321",
      "WellName": "Well F",
      "evaluation": 328.87,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-147",
      "WellName": "Well G",
      "evaluation": 412.20,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-258",
      "WellName": "Well H",
      "evaluation": 736.59,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-963",
      "WellName": "Well I",
      "evaluation": 87.44,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    },
    {
      "tts": "TTS-852",
      "WellName": "Well J",
      "evaluation": 651.78,
      "Lat": getRandomFloat(38.519232, 39.813881),
      "Long": getRandomFloat(-113.715016, -111.076075)
    }
  ]
};

export default wellsData;
