/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { PieChart, Pie, Cell, Tooltip } from "recharts";

const Statistic = () => {
  const [totalItem, setTotalItem] = useState([]);
  const [donations, setDonations] = useState([]);

  useEffect(() => {
    const donationItems = JSON.parse(localStorage.getItem("donations"));

    if (donationItems) {
      setDonations(donationItems);
    }
  }, []);

  useEffect(() => {
    fetch("/data.json")
      .then((res) => res.json())
      .then((data) => setTotalItem(data));
  }, []);
  const datas = [
    { name: "Total Donations", value: totalItem.length },
    { name: "Your Donations", value: donations.length },
  ];
  const COLORS = ["#FF444A", "#00C49F"];

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? "start" : "end"}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };
  return (
    <div>
      <p>Total Donation ={totalItem.length}</p>
      <p>Your Donation ={donations.length}</p>

      <div className="flex justify-center items-center">
        <PieChart width={400} height={400}>
          <Pie
            data={datas}
            cx="50%"
            cy="50%"
            labelLine={false}
            label={renderCustomizedLabel}
            outerRadius={200}
            fill="#8884d8"
            dataKey="value"
          >
            {datas.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip></Tooltip>
        </PieChart>
      </div>
      <div className="flex items-center justify-center gap-14 mt-16">
        <div className="flex items-center justify-center gap-4">
          <div>
            <p>Total Donation</p>
          </div>
          <div>
            <div className="w-[100px] h-3 bg-[#FF444A] rounded-sm"></div>
          </div>
        </div>
        <div className="flex items-center justify-center gap-4">
          <div>
            <p>Your Donation</p>
          </div>
          <div>
            <div className="w-[100px] h-3 bg-[#00C49F] rounded-sm"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Statistic;
