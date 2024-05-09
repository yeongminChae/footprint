import dynamic from "next/dynamic";

import { formConfigs } from "../calculator/formConfigs";

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

const DonutChart = ({ myDataArr }: { myDataArr: number[] }) => {
  return (
    <div id="chart" className="col-start-1 col-span-1 pt-5">
      <ApexChart
        type="donut"
        options={options}
        series={myDataArr}
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
    textAnchor: "middle" as "middle" | "start" | "end",
    style: {
      fontSize: "12px",
      fontWeight: "bold",
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
  colors: ["#9fdad9", "#73d5bd", "#4eb9ae", "#20B2AA", "#008B8B"],
};

export default DonutChart;
