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

  Preview:

  <img width="928" height="619" alt="image" src="https://github.com/user-attachments/assets/f0f8f6d7-d58f-42f2-ae13-99cc9df0c443" />


  <img width="1920" height="923" alt="image" src="https://github.com/user-attachments/assets/4b5f6397-bcb7-4465-89a0-145d3ccebe21" />

  ![image](https://github.com/user-attachments/assets/1cd307ec-1cd8-43fc-9276-ed9978531792)

  <img width="1904" height="906" alt="image" src="https://github.com/user-attachments/assets/3b1cf757-c535-4b47-984c-515b516117da" />

Responsive Design Test:

The design was created to be responsive, using Material-UI and the Grid System. The components automatically readjust depending on the screen size: the list and the map take up the full width on mobile devices and are organized into sections on desktop.

The tests were carried out in the following browsers:
- Google Chrome
- Mozilla Firefox
- Microsoft Edge

  1366x768 resolution:
  <img width="1309" height="816" alt="image" src="https://github.com/user-attachments/assets/cb2a30e0-2684-4c0f-9566-3599cc522583" />

  768x1024 (1)
  <img width="598" height="861" alt="image" src="https://github.com/user-attachments/assets/9a5817f7-7972-4503-8a14-c867995848c7" />

  768x1024 (2)
  <img width="572" height="855" alt="image" src="https://github.com/user-attachments/assets/8265a657-d924-413f-9771-a9353ad8d63e" />

  375x667 (1)
  <img width="476" height="772" alt="image" src="https://github.com/user-attachments/assets/0e83b3d8-53e6-4d62-97fe-161c0bf03814" />

  375x667 (2)
  <img width="400" height="700" alt="image" src="https://github.com/user-attachments/assets/a6a2a14d-1936-4fd0-9421-39153dfa0068" />

375x667 (3)
<img width="495" height="778" alt="image" src="https://github.com/user-attachments/assets/e2bbd1f3-aaec-43de-a63b-21e53260555f" />





  



