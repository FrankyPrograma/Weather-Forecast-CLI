require("dotenv").config();

class ApiConfig {
  constructor() {
    if (ApiConfig.instance) {
      return ApiConfig.instance;
    }
    this.apiKey = process.env.API_KEY;
    ApiConfig.instance = this;
    console.log("API_KEY from .env:", process.env.API_KEY);
  }

  getApiKey() {
    return this.apiKey;
  }
}

module.exports = new ApiConfig();
