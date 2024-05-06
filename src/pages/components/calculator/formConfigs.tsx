export interface iFormConfig {
  id: number;
  title: string;
  inputTitle: string;
  units: string;
  keyword: string;
  calcNum: number | number[][];
  key: string;
  types?: string[];
}

const transportTypes = {
  휘발유: [16.04, 2.097],
  경유: [15.35, 2.582],
  LPG: [11.06, 1.868],
  "승용차 없음": [0],
};

const garbageTypes = {
  kg: [1, 0.5573],
  L: [1, 0.095],
};

export const formConfigs = [
  {
    id: 0,
    title: "전기 CO₂ 발생량",
    inputTitle: "전기 사용량",
    units: "kwh",
    calcNum: 0.4781,
    keyword: "전기",
  },
  {
    id: 1,
    title: "가스 CO₂ 발생량",
    inputTitle: "가스 사용량",
    units: "m³",
    calcNum: 2.176,
    keyword: "가스",
  },
  {
    id: 2,
    title: "수도 CO₂ 발생량",
    inputTitle: "수도 사용량",
    units: "m³",
    calcNum: 0.237,
    keyword: "수도",
  },
  {
    id: 3,
    title: "교통 CO₂ 발생량",
    inputTitle: "교통 사용량",
    units: "km",
    types: Object.keys(transportTypes),
    calcNum: Object.values(transportTypes),
    keyword: "교통",
  },
  {
    id: 4,
    title: "생활 폐기물 CO₂ 발생량",
    inputTitle: "폐기물 배출량",
    units: "kg",
    types: Object.keys(garbageTypes),
    calcNum: Object.values(garbageTypes),
    keyword: "폐기물",
  },
];
