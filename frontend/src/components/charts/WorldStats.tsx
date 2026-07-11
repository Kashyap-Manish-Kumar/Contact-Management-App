import { useEffect, useState } from "react";
import { getWorldwideData } from "../../services/covidService";

interface WorldData {
  cases: number;
  active: number;
  recovered: number;
  deaths: number;
}

function WorldStats() {
  const [stats, setStats] = useState<WorldData | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadStats();
  }, []);

  const loadStats = async () => {
    try {
      const data = await getWorldwideData();
      setStats(data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="text-center py-5">
        <div className="spinner-border text-light"></div>
      </div>
    );
  }

  if (!stats) {
    return (
      <div className="alert alert-danger">
        Failed to load worldwide statistics.
      </div>
    );
  }

  return (
    <div className="d-flex flex-column gap-3">

      {/* Total Cases */}
      <div
        className="card border-0 shadow"
        style={{
          backgroundColor: "#1f2937",
          color: "#fff",
          borderRadius: "16px",
        }}
      >
        <div
          className="card-body d-flex align-items-center"
          style={{ height: "100px" }}
        >
          <i className="bi bi-virus fs-1 text-primary me-4"></i>

          <div>
            <h6 className="text-secondary mb-1">
              Total Cases
            </h6>

            <h4 className="fw-bold mb-0">
              {stats.cases.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>

      {/* Active */}
      <div
        className="card border-0 shadow"
        style={{
          backgroundColor: "#1f2937",
          color: "#fff",
          borderRadius: "16px",
        }}
      >
        <div
          className="card-body d-flex align-items-center"
          style={{ height: "100px" }}
        >
          <i className="bi bi-activity fs-1 text-warning me-4"></i>

          <div>
            <h6 className="text-secondary mb-1">
              Active
            </h6>

            <h4 className="fw-bold mb-0">
              {stats.active.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>

      {/* Recovered */}
      <div
        className="card border-0 shadow"
        style={{
          backgroundColor: "#1f2937",
          color: "#fff",
          borderRadius: "16px",
        }}
      >
        <div
          className="card-body d-flex align-items-center"
          style={{ height: "100px" }}
        >
          <i className="bi bi-heart-pulse fs-1 text-success me-4"></i>

          <div>
            <h6 className="text-secondary mb-1">
              Recovered
            </h6>

            <h4 className="fw-bold mb-0">
              {stats.recovered.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>

      {/* Deaths */}
      <div
        className="card border-0 shadow"
        style={{
          backgroundColor: "#1f2937",
          color: "#fff",
          borderRadius: "16px",
        }}
      >
        <div
          className="card-body d-flex align-items-center"
          style={{ height: "100px" }}
        >
          <i className="bi bi-x-circle fs-1 text-danger me-4"></i>

          <div>
            <h6 className="text-secondary mb-1">
              Deaths
            </h6>

            <h4 className="fw-bold mb-0">
              {stats.deaths.toLocaleString()}
            </h4>
          </div>
        </div>
      </div>

    </div>
  );
}

export default WorldStats;