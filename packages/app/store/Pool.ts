import { makeAutoObservable } from "mobx";
import cloneDeep from "lodash/cloneDeep";
import remove from "lodash/remove";

import { Asset } from "@chain-registry/types/types/assets";
import { PoolsData } from "../@types/pool";

export class PoolS {
  poolsData: PoolsData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addPool = (asset1: Asset, asset2: Asset) => {
    const poolCard: PoolsData = {
      // id: string;
      // token1: { name: string; imgSrc: string };
      // token2: { name: string; imgSrc: string };
      // poolLiquidity: number;
      // apr: number;
      // myLiquidity: number;
      // myBoundedAmount: number;
      // longestDaysUnbonding: boolean;
    }
  };
}
export type PoolStore = typeof PoolS;
