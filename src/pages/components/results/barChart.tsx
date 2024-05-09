import dynamic from "next/dynamic";

import { averageDataArr, formConfigs } from "../calculator/formConfigs";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = ({ myDataArr }: { myDataArr: number[] }) => {
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
      fontSize: "14px",
      fontWeight: "bold",
      colors: ["#d0f6eb", "#008B8B"],
    },
    dropShadow: {
      enabled: true,
      top: 0,
      left: 0,
      blur: 1.25,
      color: "#008B8B",
      opacity: 0.5,
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
