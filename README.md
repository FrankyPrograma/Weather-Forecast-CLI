# Weather Forecast CLI

This is a command line project that provides weather forecasts for a specific location.

## Requirements

- Node.js
- npm

## Setup

1. Clone this repository on your local machine.
2. Navigate to the project directory.
3. Run `npm install` to install the project dependencies.
4. Create a `.env` file at the root of the project and add your OpenWeatherMap API key as `API_KEY`.

   Example:

   ```env
   API_KEY=your_api_key
   ```

## Use cases

index.js

- node index.js current Madrid,ES
- node index.js current Madrid,ES --units=imperial

index2.js

- node index2.js forecast Santander,ES --days=2 --units=imperial
- node index2.js forecast Santander,ES --days=3
