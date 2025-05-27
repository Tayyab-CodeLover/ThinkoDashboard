import { Chart } from "react-google-charts";
import { styled, useTheme } from '@mui/material/styles';


function PieChart() {
  const theme = useTheme();
    const data = [
      ["Task", "Hours per Day"],
      ["Work", 9],
      ["Eat", 2],
      ["Commute", 2],
      ["Watch TV", 2],
      ["Sleep", 7],
    ];
  
    const options = {
      title: "My Daily Activities",
      backgroundColor: theme.palette.background.default,
      titleTextStyle: {
        color: theme.palette.text.primary,
        fontSize: 14,
        bold: true,
      },
      legend: {
        textStyle: {
          color: theme.palette.text.primary,
          fontSize: 10,
        },
      },

    };
    return (
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width={"100%"}
        height={"400px"}
      />
    );
  }

  export default PieChart;