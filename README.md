# findwifi

> 日本語のREADMEはこちらです: [README.ja.md](README.ja.md)

A web application that finds and displays nearby free public WiFi locations on a map.

**Demo:** https://code4fukui.github.io/find/findwifi.html

CC BY Code for Fukui

## Features

- **Find WiFi Hotspots:** Locates and plots free public WiFi spots near your current location.
- **Detailed Information:** Displays details for each spot, including open hours, WiFi coverage, and power outlet availability. Spots with power outlets are marked with a distinct red icon.
- **Route to Nearest Spot:** Calculates and displays the route to the closest WiFi location with a single click.
- **Multi-language Support:** The interface is available in English, Japanese, Spanish, Chinese, Korean, German, Catalan, Portuguese, Tagalog, and Persian.

## Getting Started

To run this project locally, you will need a Google Maps API key.

1.  **Get an API Key:** Obtain a Google Maps API key from the [Google Cloud Platform Console](https://console.developers.google.com/projectselector/apis/credentials).
2.  **Set the API Key:** Open the `lib/gmap.js` file and replace the placeholder value of the `API_KEY` variable with your key.
3.  **Run:** Open `index.html` in your web browser. The application will request your location to find nearby WiFi spots.

## Data / API

This project uses the SPARQL endpoint at `https://sparql.odp.jig.jp/` to query an open dataset of public WiFi locations. The connection logic is in `lib/odp.js`.

## License

MIT License — see [LICENSE](LICENSE).