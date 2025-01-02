# TransitSense

**Real-time bus schedule app for anyone tired of unreliable transit apps.**

TransitSense is a lightweight, open-source web application designed to deliver accurate bus arrival times based on your real-time location. Inspired by frustration with existing apps, this project improves on their shortcomings by integrating reliable reconnection, manual refresh options, and an intuitive interface.

## Features

- **Reliable Reconnection**: Automatically reinitiates data flow when the connection is restored.
- **Refresh Button**: Manually refresh the flow whenever you want.
- **Real-Time Location Tracking**: Utilizes the browser API to find your nearest bus station.
- **Interactive Map**: Query bus schedules from a pin on a draggable map (default: your location).
- **Cross-Platform Compatibility**: Works on both desktop and mobile browsers.

## Technology Stack

- **Frontend**: SvelteKit
- **Tools**: Android Studio (for monitoring API calls)
- **APIs**: Browser API for location tracking

## Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/yourusername/transitsense.git
   ```

2. Navigate to the project directory:

   ```bash
   cd transitsense
   ```

3. Install dependencies:

   ```
   npm install
   ```

4. Start the development server:
   ```
   npm run dev
   ```
5. Open the app in your browser at http://localhost:5173.

## Usage

1. Allow location access to let the app find your nearest bus station.
2. Use the map to view and adjust your query location.
3. Get real-time updates on bus arrival times.
4. Use the refresh button to update information manually.

## Challenges

- Reverse engineering the API for authentication and data flow.
- Seamlessly integrating real-time location with the map.

## Contributing

Contributions are welcome! Fork the repository and submit a pull request with your improvements.
