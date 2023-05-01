function getApiKey() {
      const apiKeyPath = 'config/api_key.json';
      const apiKeyData = fs.readFileSync(apiKeyPath);
      const apiKey = JSON.parse(apiKeyData).API_KEY;
      return apiKey;
    }
    