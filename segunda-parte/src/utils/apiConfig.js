require("dotenv").config();

class ApiConfig {
  constructor() {
    if (ApiConfig.instance) {
      return ApiConfig.instance;
    }
    this.apiKey = process.env.API_KEY;
    ApiConfig.instance = this;
  }

  getApiKey() {
    return this.apiKey;
  }
}

module.exports = new ApiConfig();
