import dynamic from "next/dynamic";

import { formConfigs } from "../calculator/formConfigs";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = () => {
  const averageDataArr = [32.5, 38.9, 1.6, 270.8, 0.6];
  const myDataArr = [50, 60, 30, 40, 20];

  const series = [
    {
      name: "나의 배출량",
      data: myDataArr,
    },
    {
      name: "평균 배출량",
      data: averageDataArr,
    },
  ];
  return (
    <div
      id="chart"
      className="flex justify-center items-center col-span-2 pb-12"
    >
      <ApexChart
        type="bar"
        options={options}
        series={series}
        width={1000}
        height={325}
      />
    </div>
  );
};

const options = {
  chart: {
    toolbar: {
      show: false,
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 1,
      color: "#008B8B",
      opacity: 0.5,
    },
  },
  states: {
    hover: {
      filter: {
        type: "lighten",
        value: 0.001,
      },
    },
  },
  xaxis: {
    categories: formConfigs.map((config) => config.inputTitle),
    labels: {
      style: {
        colors: "#008B8B",
        fontWeight: "bold",
      },
    },
    crosshairs: {
      show: false,
    },
  },
  yaxis: {
    show: false,
  },
  dataLabels: {
    enabled: true,
    formatter: (val: number) => {
      return val + " kg";
    },
    style: {
      colors: ["#fff", "#008B8B"],
    },
  },
  plotOptions: {
    bar: {
      columnWidth: "67.5%",
      rangeBarOverlap: false,
    },
  },
  stroke: {
    show: true,
    width: 4,
    colors: ["transparent"],
  },
  grid: {
    show: false,
  },
  tooltip: {
    y: {
      formatter: (val: number) => val + " kg",
    },
  },
  legend: {
    labels: {
      colors: "#008B8B",
    },
  },
  colors: ["#008B8B", "#E9F7F3"],
};

export default BarChart;
