import { useEffect, useState } from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
} from "react-leaflet";
import L from "leaflet";

import { getCountriesData } from "../../services/covidService";

import "leaflet/dist/leaflet.css";

delete (L.Icon.Default.prototype as any)._getIconUrl;

L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png",
  iconUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png",
  shadowUrl:
    "https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png",
});

interface Country {
  country: string;
  cases: number;
  active: number;
  recovered: number;
  deaths: number;

  countryInfo: {
    lat: number;
    long: number;
    flag: string;
  };
}

function WorldMap() {
  const [countries, setCountries] = useState<Country[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadCountries();
  }, []);

  const loadCountries = async () => {
    try {
      const data = await getCountriesData();
      setCountries(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div
  className="card border-0 shadow rounded-4 overflow-hidden"
  style={{
    height: "540px",
    borderRadius: "18px",
  }}
>
        <div className="spinner-border text-primary"></div>
      </div>
    );
  }

  return (
    <div
      className="card border-0 shadow rounded-4 overflow-hidden"
      style={{ height: "450px" }}
    >
      <MapContainer
        center={[22, 0]}
        zoom={2}
        minZoom={3}
        maxZoom={6}
        maxBounds={[
          [-90, -180],
          [90, 180],
        ]}
        maxBoundsViscosity={1}
        worldCopyJump={false}
        scrollWheelZoom={true}
        style={{
          width: "100%",
          height: "100%",
        }}
      >
        <TileLayer
          attribution="&copy; OpenStreetMap contributors"
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          noWrap={true}
        />

        {countries.map((country) => (
          <Marker
            key={country.country}
            position={[
              country.countryInfo.lat,
              country.countryInfo.long,
            ]}
          >
            <Popup>
              <div style={{ minWidth: "220px" }}>
                <div className="text-center mb-3">
                  <img
                    src={country.countryInfo.flag}
                    alt={country.country}
                    width={70}
                    className="rounded shadow-sm"
                  />

                  <h5 className="fw-bold mt-3 mb-0">
                    {country.country}
                  </h5>
                </div>

                <hr />

                <div className="d-flex justify-content-between mb-2">
                  <strong>Total Cases</strong>
                  <span>{country.cases.toLocaleString()}</span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <strong>Active</strong>
                  <span className="text-warning fw-semibold">
                    {country.active.toLocaleString()}
                  </span>
                </div>

                <div className="d-flex justify-content-between mb-2">
                  <strong>Recovered</strong>
                  <span className="text-success fw-semibold">
                    {country.recovered.toLocaleString()}
                  </span>
                </div>

                <div className="d-flex justify-content-between">
                  <strong>Deaths</strong>
                  <span className="text-danger fw-semibold">
                    {country.deaths.toLocaleString()}
                  </span>
                </div>
              </div>
            </Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
}

export default WorldMap;