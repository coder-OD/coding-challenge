import { makeAutoObservable } from "mobx";
import cloneDeep from "lodash/cloneDeep";
import remove from "lodash/remove";

import { Asset } from "@chain-registry/types/types/assets";

export type TItemTodo = {
  title: string;
  checked: boolean;
};

export class AssetS {
  assets: Asset[] = [];

  constructor() {
    makeAutoObservable(this);
  }

  addAsset = (asset: Asset) => {
    const newAssets: Asset[] = cloneDeep(this.assets);
    newAssets.unshift(asset);
    this.assets = newAssets;
  };

  removeAsset = (asset: Asset) => {
    const newAssets: Asset[] = cloneDeep(this.assets);
    remove(newAssets, (item) => item.symbol === asset.symbol);
    this.assets = newAssets;
  };

  updateAsset = (asset: Asset) => {
    const newAssets: Asset[] = cloneDeep(this.assets);
    const index: number = newAssets.findIndex(
      (item) => item.symbol === asset.symbol
    );
    newAssets.splice(index, 1, asset);
    this.assets = newAssets;
  };

  removeAssetsForPool = () => {
    // Remove last 2 asset items for adding pool
    if(this.assets.length < 2) return;
    const newAssets: Asset[] = cloneDeep(this.assets);
    newAssets.splice(newAssets.length - 2, 2);
    this.assets = newAssets;
  }
}
export type AssetStore = typeof AssetS;
