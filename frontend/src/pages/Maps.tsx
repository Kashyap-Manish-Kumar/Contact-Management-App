import MainLayout from "../components/layout/MainLayout";
import WorldMap from "../components/maps/WorldMap";

function Maps() {
  return (
    <MainLayout>
      <div className="container-fluid px-4 py-4">

        <div className="mb-4">
          <h2 className="fw-bold">
            Monitor live COVID-19 statistics across 231 countries.
          </h2>

          <p className="text-muted">
           Click any marker to explore country-wise information.
          </p>
        </div>

        <WorldMap />

      </div>
    </MainLayout>
  );
}

export default Maps;