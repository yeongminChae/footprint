import { atom, RecoilEnv } from "recoil";

export const co2Atom = atom({
  key: "co2",
  default: "",
});

export const co2DataAtom = atom({
  key: "co2Data",
  default: {},
});

export const axisCartegory = atom({
  key: "cartegory",
  default: { key: "", myValue: 0, aveValue: 0 },
});

RecoilEnv.RECOIL_DUPLICATE_ATOM_KEY_CHECKING_ENABLED = false;
