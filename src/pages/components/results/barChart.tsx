import dynamic from "next/dynamic";

import { useSetRecoilState } from "recoil";

import { averageDataArr, formConfigs } from "../calculator/formConfigs";
import { axisCartegory } from "@/libs/atoms";

const ApexChart = dynamic(() => import("react-apexcharts"), { ssr: false });

const BarChart = ({ myDataArr }: { myDataArr: number[] }) => {
  const setCategory = useSetRecoilState(axisCartegory);

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

  const options = getOptions((eventType: boolean, dataPointIndex?: number) => {
    if (eventType) {
      setCategory({
        key: formConfigs[dataPointIndex ? dataPointIndex : 0].inputTitle,
        myValue: myDataArr[dataPointIndex ? dataPointIndex : 0],
        aveValue: averageDataArr[dataPointIndex ? dataPointIndex : 0],
      });
    } else {
      setCategory({ key: "", myValue: 0, aveValue: 0 });
    }
  });

  return (
    <div
      id="chart"
      className="flex justify-center items-center col-span-2 pb-6"
    >
      <ApexChart
        type="bar"
        options={options}
        series={series}
        width={1000}
        height={300}
      />
    </div>
  );
};

const getOptions = (
  onEvent: (eventType: boolean, dataPointIndex?: number) => void
) => ({
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
    events: {
      dataPointMouseEnter: (
        event: MouseEvent,
        chartContext: any,
        {
          dataPointIndex,
          seriesIndex,
        }: { dataPointIndex: number; seriesIndex: number }
      ) => {
        onEvent(true, dataPointIndex);
      },
      dataPointMouseLeave: (
        event: MouseEvent,
        chartContext: any,
        {
          dataPointIndex,
          seriesIndex,
        }: { dataPointIndex: number; seriesIndex: number }
      ) => {
        onEvent(false);
      },
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
      blur: 1.5,
      color: "#008B8B",
      opacity: 0.45,
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
});

export default BarChart;
