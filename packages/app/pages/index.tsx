import React, { useState, useEffect } from "react";

import Assets from "../components/assets-list";
import Pools from "../components/pools-list";
import { Provider, rootStore } from "../store";

export default function Index() {
  return (
    <Provider value={rootStore}>
      <Assets />
      <Pools />
    </Provider>
  );
}
