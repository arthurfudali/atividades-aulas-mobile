import * as Location from "expo-location";

export class LocationService {
  static async getCurrentLocation(): Promise<string | null> {
    const { status } = await Location.requestForegroundPermissionsAsync();

    if (status !== "granted") {
      return null;
    }

    const location = await Location.getCurrentPositionAsync({
      accuracy: Location.Accuracy.High,
    });

    const addresses = await Location.reverseGeocodeAsync({
      latitude: location.coords.latitude,
      longitude: location.coords.longitude,
    });

    if (addresses.length > 0) {
      const address = addresses[0];

      const city = address.city || address.subregion || "";
      const region = address.region || address.subregion || "";
      const country = address.country || "";

      const locationString = `${city}, ${region}, ${country}`
        .replace(/^, |, $/, "") // Remove vírgulas no início/fim
        .replace(/, , /g, ", "); // Remove vírgulas duplas

      return locationString.trim();
    }

    return null;
  }
}
