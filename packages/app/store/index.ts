import { createContext, useContext } from "react";
import { AssetS } from "./Asset";
import { PoolS } from "./Pool";

export const rootStore = {
  assetStore: new AssetS(),
  poolStore: new PoolS(),
};

export type TRootStore = typeof rootStore;
const RootStoreContext = createContext<null | TRootStore>(null);

export const Provider = RootStoreContext.Provider;

export function useStore() {
  const store = useContext(RootStoreContext);
  if (store === null) {
    throw new Error("Store cannot be null, please add a context provider");
  }
  return store;
}
