import { useEffect, useState } from "react";
import { getHistoricalData } from "../../services/covidService";

import {
  ResponsiveContainer,
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
} from "recharts";

interface ChartData {
  date: string;
  cases: number;
}

function CasesChart() {
  const [data, setData] = useState<ChartData[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    loadChart();
  }, []);

  const loadChart = async () => {
    try {
      const history = await getHistoricalData();

      // Convert cumulative cases into daily new cases
      const entries = Object.entries(history.cases).slice(-31);

      const chartData: ChartData[] = entries
        .slice(1)
        .map(([date, value], index) => ({
          date,
          cases: Number(value) - Number(entries[index][1]),
        }));

      setData(chartData);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="card border-0 shadow-sm h-100">
        <div
          className="card-body d-flex justify-content-center align-items-center"
          style={{ height: "550px" }}
        >
          <div className="spinner-border text-dark"></div>
        </div>
      </div>
    );
  }

  return (
    <div className="card border-0 shadow-sm h-100">

      <div className="card-header bg-white py-2">
        <h5 className="fw-bold mb-0">
          COVID Cases Trend (Last 30 Days)
        </h5>
      </div>

      <div
        className="card-body"
        style={{ height: "510px" }}
      >

        <ResponsiveContainer
          width="100%"
          height="100%"
        >
          <LineChart
            data={data}
            margin={{
              top: 20,
              right: 20,
              left: 10,
              bottom: 10,
            }}
          >

            <CartesianGrid strokeDasharray="3 3" />

            <XAxis
              dataKey="date"
              interval={4}
              tick={{ fontSize: 12 }}
            />

            <YAxis
              tickFormatter={(value) =>
                `${(value / 1000000).toFixed(1)}M`
              }
            />

            <Tooltip
              formatter={(value: number) => [
                value.toLocaleString(),
                "New Cases",
              ]}
            />

            <Line
              type="monotone"
              dataKey="cases"
              stroke="#495057"
              strokeWidth={3}
              dot={false}
              activeDot={{ r: 6 }}
              animationDuration={1500}
            />

          </LineChart>
        </ResponsiveContainer>

      </div>

    </div>
  );
}

export default CasesChart;