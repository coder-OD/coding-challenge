import { makeAutoObservable } from "mobx";
import cloneDeep from "lodash/cloneDeep";
import remove from "lodash/remove";

import { Asset } from "@chain-registry/types/types/assets";

// type denomUnits0 = {
//   aliases: string[],
//   denmo: string,
//   exponent: number,
// }

// type denomUnits1 = {
//   denom: string,
//   exponent: number,
// }

// type traceItem = {
//   chanin: {
//     channel: string,
//   }
//   counterparty: {
//     chain_name: string,
//     channel: string,
//     denom: string,
//   },
//   type: string,
// }

// export type Asset = {
//   base: string,
//   coingecko_id: string,
//   denom_units: any [],
//   description: string,
//   display: string,
//   logo_URIs: {
//     png: string
//   },
//   name: string,
//   symbol: string,
//   traces: traceItem [],
// }

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

  updateAsset = (asset: Asset) => {
    const newAssets: Asset[] = cloneDeep(this.assets);
    remove(newAssets, (item) => item.symbol === asset.symbol);
    this.assets = newAssets;
  };

  removeAsset = (asset: Asset) => {
    const newAssets: Asset[] = cloneDeep(this.assets);
    const index: number = newAssets.findIndex(
      (item) => item.symbol === asset.symbol
    );
    remove(newAssets, (item) => item.symbol === asset.symbol);
    newAssets.splice(index, 1, asset);
    this.assets = newAssets;
  };
}
export type AssetStore = typeof AssetS;

// export class Todo {
//   @observable todos: TItemTodo[] = [
//     {
//       title: "Do homework",
//       checked: false,
//     },
//     {
//       title: "learn Mobx",
//       checked: false,
//     },
//   ];

//   constructor() {
//     /** Chay khi ma title thay doi (hoac length cua array) */
//     reaction(
//       () => this.todos.map((todo) => todo.title),
//       (titles) => console.log("reaction 2:", titles.join(", "))
//     );
//     /** Chay khi ma length thay doi */
//     reaction(
//       () => this.todos.length,
//       (length) =>
//         console.log(
//           "reaction 1:",
//           this.todos.map((todo) => todo.title).join(", ")
//         )
//     );
//   }

//   @action
//   onCheck = (index: number, checked: boolean) => {
//     this.todos[index].checked = checked;
//   };

//   @action
//   onEdit = (index: number, value: string) => {
//     this.todos[index].title = value;
//   };

//   @action
//   onAdd = () => {
//     this.todos = this.todos.concat({
//       title: `todo ${this.todos.length}`,
//       checked: false,
//     });
//   };
// }

// export type TTodoStore = typeof Todo;
