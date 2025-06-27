// frontend/src/components/DefenseDashboard.tsx
import {
    ResponsiveContainer,
    ComposedChart,
    Bar,
    Line,
    XAxis,
    YAxis,
    CartesianGrid,
    Tooltip,
  } from "recharts";
  
  const DATA = [
    { year: 2014, capital: 5, deals: 200 },
    { year: 2015, capital: 7, deals: 250 },
    { year: 2016, capital: 8, deals: 300 },
    { year: 2017, capital: 9, deals: 350 },
    { year: 2018, capital: 14, deals: 400 },
    { year: 2019, capital: 17, deals: 550 },
    { year: 2020, capital: 23, deals: 650 },
    { year: 2021, capital: 47, deals: 1650 },
    { year: 2022, capital: 33, deals: 1300 },
    { year: 2023, capital: 25, deals: 900 },
    { year: 2024, capital: 32, deals: 700 },
    { year: 2025, capital: 35.6, deals: 400 },
  ];
  
  export default function DefenseDashboard() {
    return (
      <div className="min-h-screen bg-[#0B0E11] text-white p-8">
        <header className="mb-10">
          <h1 className="text-xl font-semibold">Defense Tech Index</h1>
        </header>
  
        <section className="mx-auto w-full max-w-7xl bg-[#161A1E] rounded-3xl p-8">
          <h2 className="text-lg font-medium mb-4">
            Venture Capital Invested vs. Deal Count
          </h2>
  
          <div className="h-[450px]">
            <ResponsiveContainer width="100%" height="100%">
              <ComposedChart data={DATA}>
                <CartesianGrid stroke="#2B2F36" strokeDasharray="3 3" />
                <XAxis dataKey="year" stroke="#A1A1AA" />
                <YAxis
                  yAxisId="capital"
                  stroke="#60A5FA"
                  tickFormatter={(v) => `$${v}B`}
                />
                <YAxis
                  yAxisId="deals"
                  orientation="right"
                  stroke="#34D399"
                />
                <Tooltip
                  contentStyle={{ background: "#1F2937", border: "none" }}
                  formatter={(val, name) =>
                    name === "capital"
                      ? [`$${val}B`, "Capital"]
                      : [val, "Deals"]
                  }
                />
                <Bar
                  yAxisId="capital"
                  dataKey="capital"
                  fill="#60A5FA"
                  barSize={32}
                />
                <Line
                  yAxisId="deals"
                  type="monotone"
                  dataKey="deals"
                  stroke="#34D399"
                  strokeWidth={3}
                />
              </ComposedChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    );
  }
  