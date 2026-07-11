import MainLayout from "../components/layout/MainLayout";
import WorldStats from "../components/charts/WorldStats";
import CasesChart from "../components/charts/CasesChart";

function Charts() {
  return (
    <MainLayout>
      <div className="container-fluid   py-4" 
      style={{
    backgroundColor: "#eef4ff",
    minHeight: "100vh",
  }}>

        <div className="row g-4 align-items-start">

          {/* Left Side */}
          <div className="col-lg-3">

            <div className="mb-4">
              <h1 className="fw-bold">
                COVID-19 Graph
              </h1>

              <p className="text-muted mb-0">
                Worldwide COVID-19 statistics and case trends.
              </p>
            </div>

            <WorldStats />

          </div>

          {/* Right Side */}
          <div className="col-lg-9">
            <CasesChart />
          </div>

        </div>

      </div>
    </MainLayout>
  );
}

export default Charts;