 LaPas – Web Application for Exploring Tourist Locations
 
LaPas is an interactive web application that enables users to discover restaurants, hotels, and tourist attractions within a selected geographic area using an interactive Google Map and smart filtering based on type and rating.

 Academic Context
 
This project was developed as part of my Master’s Degree Dissertation.
The main objective of the application is to integrate modern technologies from the JavaScript ecosystem in order to deliver an intuitive, scalable, and user-friendly experience tailored to digital tourism needs.

Features

- Interactive Google Map integration
- Dynamic filtering by category (restaurants, hotels, attractions)
- Rating-based filtering
- Real-time API data fetching
- Responsive and modern UI
- Optimized API calls using debouncing

 Tech Stack
The project was built using the following technologies:

- React.js – Front-end framework
- Google Maps JavaScript API – Interactive map integration
- RapidAPI – Travel Advisor API – Tourist data provider
- Material-UI (MUI) – UI component styling
- Axios – Asynchronous HTTP requests
- Lodash.debounce – API call optimization
- HTML5, CSS3, JavaScript (ES6+)
  
 Installation & Local Setup
1 . Clone the repository
git clone https://github.com/Stefan-Emanuel/LaPas
cd LaPas

2. Install dependencies
npm install

3. Environment Configuration
Create a .env file in the root directory of the project and add the following variables (you must generate your own API keys from Google Cloud and RapidAPI):
REACT_APP_GOOGLE_MAPS_API_KEY=your_google_api_key
REACT_APP_RAPIDAPI_KEY=your_rapidapi_key
REACT_APP_RAPIDAPI_HOST=travel-advisor.p.rapidapi.com

5. Run the application
npm start
The application will be available at:
http://localhost:3000

System Requirements
- Node.js ≥ 14.x
- Internet connection (for API requests)
- Valid Google Maps API Key
- Valid RapidAPI Key
  
 Project Purpose
This application demonstrates:
- Integration of third-party APIs
- Geolocation-based filtering
- Modern React state management
- UI scalability
- Real-world application architecture
