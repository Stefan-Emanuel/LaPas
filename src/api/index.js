import axios from "axios";

// Functie care ia date (restaurante, hoteluri, atractii) in functie de tip si coordonate
export const getPlacesData = async (type, sw, ne) => {
  try {
    // Endpoint-ul corect in functie de tipul cerut
    const endpointMap = {
      restaurants: "restaurants/list-by-latlng",
      hotels: "hotels/list-by-latlng",
      attractions: "attractions/list-by-latlng",
    };

    // Daca nu e trimis un tip valid, se ia default restaurante
    const endpoint = endpointMap[type] || "restaurants/list-by-latlng";

    // Calculez centrul dintre coltul de sud-vest si nord-est
    const centerLat = (sw.lat + ne.lat) / 2;
    const centerLng = (sw.lng + ne.lng) / 2;

    // Trimit request catre API folosind axios
    const { data } = await axios.get(
      `https://${process.env.REACT_APP_RAPIDAPI_HOST}/${endpoint}`,
      {
        params: {
          latitude: centerLat,
          longitude: centerLng,
        },
        headers: {
          "X-RapidAPI-Key": process.env.REACT_APP_RAPIDAPI_KEY,
          "X-RapidAPI-Host": process.env.REACT_APP_RAPIDAPI_HOST,
        },
      }
    );

    // Daca exista date, le returnez; altfel, returnez lista goala
    return data?.data || [];
  } catch (error) {
    // Daca apare eroare, o afisez in consola si returnez lista goala
    console.error("❌ Eroare la getPlacesData:", error.response?.data || error.message);
    return [];
  }
};
