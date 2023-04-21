# coding challenge

## deliverables

1. mobx `Asset` store
  - addAsset
  - updateAsset
  - removeAsset
2. mobx `Pool` store
  - addPool
3. UI to add data (optional)
  - assets table
  - error handling when addPool with assets length less than 2

## screen capture

Code changes

<img width="396" alt="image" src="https://user-images.githubusercontent.com/32189106/233562556-c2983f45-44ac-4fe0-ba7d-866d3c9be938.png">

Initial page

<img width="1677" alt="image" src="https://user-images.githubusercontent.com/32189106/233556215-26cdfcf2-164d-4fce-b185-75cfc5c88bc2.png">

Error handling

<img width="1223" alt="image" src="https://user-images.githubusercontent.com/32189106/233557485-8faeccd5-aeaf-46bb-96d6-f635b6da3309.png">

Follow below steps for testing updateAsset & addPool case:
1. Click the "name" cell and update it
2. Then click the "Add pool"
3. Assets table will remove last 2 items and put them into pools data, and the "name" has been updated.

<img width="1111" alt="image" src="https://user-images.githubusercontent.com/32189106/233557171-69aa80db-72c7-44e0-ac33-f3b598c602b1.png">


<img width="1137" alt="image" src="https://user-images.githubusercontent.com/32189106/233557110-71304ac9-fa10-4a27-a489-0e70b07f98dd.png">





## instructions

You'll be working in `./packages/app`. The goal is to use mobx stores and display the data in a user interface.
## Data

We'll be using https://mobx.js.org/, and [chain-registry](https://github.com/cosmology-tech/chain-registry), which will help us create the genesis state for a mobx store. 

In this example, we'll be using the chain-regitsry's [Osmosis Asset list](https://github.com/cosmology-tech/chain-registry/tree/main/packages/osmosis#chain-registryosmosis)

### mobx `Asset` store methods

* `addAsset(asset: Asset)`

this should add an asset, e.g. `ATOM` or `OSMO` tokens

* `updateAsset(asset: Asset)`

this should update an asset, `denom_units`, `base`, `logo_URIs`, etc.

* `removeAsset(asset: Asset)`

### mobx `Pool` store methods

* `addPool(asset1: Asset, asset2: Asset)` 

This should add a pool of two assets. 

## User Interface

A react next.js page exists at [packages/app/pages/index.tsx](packages/app/pages/index.tsx)

Components are already built using https://chakra-ui.com/ — it's optional if you want to add new UI.

```
cd ./packages/app/
yarn dev
```

A pool list UI is already ready, but is hard-coded to use `asset-list`. It should be hooked up to the mobx store instead.


Update `ListPools` to take react `props` to connect to the mobx store. When you call `addPool`, it should add pools to the UI. 

The pools component is here: [packages/app/components/pools-list.tsx](packages/app/components/pools-list.tsx)

## Note on data input

you can optionally make a form, or, you can use code to seed the mobx store and manually call `addPool`.

# setup

```
yarn
yarn bootstrap
```

## next

```
cd ./packages/app
yarn dev
```
