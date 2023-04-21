import { makeAutoObservable } from "mobx";
import cloneDeep from "lodash/cloneDeep";
import uniqueId from "lodash/uniqueId";

import { Asset } from "@chain-registry/types/types/assets";
import { PoolsData } from "../@types/pool";
import {
  getRandomPoolLiquidity,
  getRandomMyLiquidity,
  getRandomAPR,
} from "../utils";

export class PoolS {
  poolsData: PoolsData[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addPool = (asset1: Asset, asset2: Asset) => {
    const poolCard: PoolsData = {
      id: uniqueId("pool_"),
      token1: {
        name: asset1.name,
        imgSrc: asset1.logo_URIs.png ?? asset1.logo_URIs.svg,
      },
      token2: {
        name: asset2.name,
        imgSrc: asset2.logo_URIs.png ?? asset2.logo_URIs.svg,
      },
      poolLiquidity: getRandomPoolLiquidity(),
      apr: getRandomAPR(),
      myLiquidity: getRandomMyLiquidity(),
      myBoundedAmount: getRandomMyLiquidity(),
      longestDaysUnbonding: Math.random() < 0.5,
    };
    this.poolsData = this.poolsData.concat(poolCard);
  };
}
export type PoolStore = typeof PoolS;
