import dynamic from "next/dynamic";

import { formConfigs } from "../calculator/formConfigs";
import { color } from "framer-motion";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

export interface IFormatterOptions {
  seriesIndex: number;
  dataPointIndex: number;
  w: {
    config: {
      series: number[];
    };
  };
}

const DonutChart = () => {
  const series = [44, 55, 38, 43, 22];
  return (
    <div id="chart" className="col-start-1 col-span-1 pt-3">
      <ApexChart
        type="donut"
        options={options}
        series={series}
        width={500}
        height={300}
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
      blur: 5,
      color: "#008B8B",
      opacity: 0.2,
    },
  },
  plotOptions: {
    pie: {
      expandOnClick: false,
    },
  },
  states: {
    active: {
      filter: {
        type: "none",
      },
    },
  },
  stroke: {
    show: true,
    width: 1.5,
  },
  labels: formConfigs.map((config) => config.keyword),
  dataLabels: {
    enabled: true,
    formatter: function (val: number, opts: IFormatterOptions) {
      return opts.w.config.series[opts.seriesIndex] + " kg";
    },
    style: {
      colors: ["#fff"],
    },
  },
  legend: {
    show: true,
    position: "bottom" as "right" | "top" | "bottom" | "left" | undefined,
    onItemClick: {
      toggleDataSeries: false,
    },
    style: {
      colors: ["#fff"],
    },
  },
  colors: ["#9fdad9", "#5edbce", "#73d5bd", "#20B2AA", "#008B8B"],
};

export default DonutChart;
