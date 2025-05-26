import axios from "axios";

export const getPlacesData = async (type, sw, ne) => {
  try {
    const endpointMap = {
      restaurants: "restaurants/list-by-latlng",
      hotels: "hotels/list-by-latlng",
      attractions: "attractions/list-by-latlng",
    };

    const endpoint = endpointMap[type] || "restaurants/list-by-latlng";

    const centerLat = (sw.lat + ne.lat) / 2;
    const centerLng = (sw.lng + ne.lng) / 2;

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

    return data?.data || [];
  } catch (error) {
    console.error("❌ Eroare la getPlacesData:", error.response?.data || error.message);
    return [];
  }
};
