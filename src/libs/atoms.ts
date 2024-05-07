import { atom } from "recoil";

export const co2Atom = atom({
  key: "co2",
  default: "",
});

export const co2DataAtom = atom({
  key: "co2Data",
  default: {},
});
