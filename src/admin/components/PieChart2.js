import React, { useState, useEffect, useContext } from "react";
import { useLocation, useNavigate, Navigate } from "react-router-dom";
import { PieChart, Pie, Legend, Tooltip, ResponsiveContainer } from 'recharts';

function PieCharte2() {

    const [getYearUsers, setGetYearUsers] = useState([]);

  useEffect(() => {
    fetch(`api/api/getYearUsers`)
      .then((response) => {
        if (!response.ok) {
          throw new Error("Network response was not ok");
        }
        return response.json();
      })
      .then((data) => {
        const transformedData = data.map(item => ({
          name: item.year, // Function to get month name from year
          value: item.total_users
        }));
        setGetYearUsers(transformedData);
      })
      .catch((error) => console.error(error));
  }, []);
    
  return (
    <ResponsiveContainer width="80%" height="60%">
        <PieChart >
          <Pie
            dataKey="value"
            isAnimationActive={false}
            data={getYearUsers}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>

  );
}

export default PieCharte2;
