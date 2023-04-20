type denomUnits0 = {
  aliases: string[],
  denmo: string,
  exponent: number,
}

type denomUnits1 = {
  denom: string,
  exponent: number,
}

type traceItem = {
  chanin: {
    channel: string,
  }
  counterparty: {
    chain_name: string,
    channel: string,
    denom: string,
  },
  type: string,
}

export type Asset = {
  base: string,
  coingecko_id: string,
  denom_units: any [],
  description: string,
  display: string,
  logo_URIs: {
    png: string
  },
  name: string,
  symbol: string,
  traces: traceItem [],
}