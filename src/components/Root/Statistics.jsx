
import { useLoaderData } from "react-router-dom";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";

const Statistics = () => {
    const donations = useLoaderData();
    const myDonations = JSON.parse(localStorage.getItem("myDonations")) || [];

    const data = [
        { name: "All Donations", value: donations.length - myDonations.length },
        { name: "My Donations", value: myDonations.length },
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
        <section
            className=" content-box mx-auto mt-5 "
        >
            <div style={{ width: "100%", height: "400px" }}>
                <ResponsiveContainer>
                    <PieChart width={400} height={400}>
                        <Pie
                            data={data}
                            cx="50%"
                            cy="50%"
                            labelLine={false}
                            label={renderCustomizedLabel}
                            outerRadius={200}
                            fill="#8884d8"
                            dataKey="value"
                        >
                            {data.map((entry, index) => (
                                <Cell
                                    key={`cell-${index}`}
                                    fill={COLORS[index % COLORS.length]}
                                />
                            ))}
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className="flex justify-center font-bold text-xl items-center gap-10 mt-8">
                <h1 className="bg-[#00C49F] px-20 text-white rounded-lg">Your Donation</h1>               
                <h1 className="bg-[#FF444A] px-20 text-white rounded-lg">Total donation</h1>
                <hr />
            </div>
        </section>
    );
};

export default Statistics;