import React, { useState, useEffect, useRef, useCallback } from "react";
import {
  Table,
  Thead,
  Tbody,
  Tfoot,
  Tr,
  Th,
  Td,
  TableCaption,
  TableContainer,
  Editable,
  EditableInput,
  EditableTextarea,
  EditablePreview,
  Image,
  useColorModeValue,
  Box,
  Button,
  Stack,
  HStack,
  Divider,
  Text,
} from "@chakra-ui/react";

import { chain, asset_list } from "@chain-registry/osmosis";
import { Asset } from "@chain-registry/types/types/assets";
import { observer } from "mobx-react-lite";
import cloneDeep from "lodash/cloneDeep";
import set from "lodash/set";

import { useStore } from "../store";

const ListAssets = observer(() => {
  const { assetStore } = useStore();
  const { addAsset, updateAsset, removeAsset, assets } = assetStore;
  console.log("assets updated=====", assets);
  const assetsRef = useRef<Asset[]>([]);
  const [assetIndex, setAssetIndex] = useState<number>(0);

  const editCell = (item: Asset, key: string, nextValue: string) => {
    console.log("nextValue", nextValue);
    const newItem: Asset = set(item, key, nextValue);
    updateAsset(newItem);
  };

  const removeItem = (item: Asset) => {
    console.log(item);
    removeAsset(item);
  };

  const addItem = useCallback(() => {
    addAsset(assetsRef.current[assetIndex]);
    setAssetIndex((i) => ++i);
  }, [assetIndex]);

  useEffect(() => {
    const assetsList: Asset[] = asset_list.assets;
    assetsRef.current = assetsList;
    addItem();
  }, []);

  const TableContent = () => {
    return (
      <Tbody>
        {assets.map((item) => {
          return (
            <Tr key={item.symbol}>
              <Td>
                <Box
                  w={{ base: 12 }}
                  h={{ base: 12 }}
                  bg="whiteAlpha.900"
                  borderRadius="full"
                  border="1px solid"
                  borderColor={useColorModeValue("primary.100", "primary.900")}
                  overflow="hidden"
                  p={0.5}
                >
                  <Image src={item.logo_URIs.png || item.logo_URIs.svg} />
                </Box>
              </Td>
              <Td>
                <Box>
                  <Editable
                    defaultValue={item.name}
                    onSubmit={(v) => editCell(item, "name", v)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Box>
              </Td>
              <Td>
                <Box>
                  <Editable
                    defaultValue={item.base}
                    onSubmit={(v) => editCell(item, "base", v)}
                  >
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Box>
              </Td>
              <Td>
                <HStack spacing="24px">
                  <Box>denom_units[0].exponent</Box>
                  <Box>
                    <Editable
                      defaultValue={item.denom_units[0].exponent?.toString()}
                      onSubmit={(v) =>
                        editCell(item, "denom_units[0].exponent", v)
                      }
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Box>
                </HStack>
                <HStack spacing="24px">
                  <Box>denom_units[1].exponent</Box>
                  <Box>
                    <Editable
                      defaultValue={item.denom_units[1].exponent?.toString()}
                      onSubmit={(v) =>
                        editCell(item, "denom_units[1].exponent", v)
                      }
                    >
                      <EditablePreview />
                      <EditableInput />
                    </Editable>
                  </Box>
                </HStack>
              </Td>
              {/* <Td>
                <Box>
                  <Editable defaultValue={item.description} onChange={editCell}>
                    <EditablePreview />
                    <EditableInput />
                  </Editable>
                </Box>
              </Td> */}
              <Td>
                <Button colorScheme="red" onClick={() => removeItem(item)}>
                  Remove
                </Button>
              </Td>
            </Tr>
          );
        })}
      </Tbody>
    );
  };

  return (
    <TableContainer>
      <Stack spacing={4} direction="row" align="center" style={{ margin: 20 }}>
        <Button colorScheme="teal" size="md" onClick={addItem}>
          Add asset item
        </Button>
        {/* <Divider orientation="vertical" /> */}
        <Text>This click event will insert the asset item into the front of table.</Text>
      </Stack>
      <Table variant="simple">
        <TableCaption>Imperial to metric conversion factors</TableCaption>
        <Thead>
          <Tr>
            <Th>Logo</Th>
            <Th>Name</Th>
            <Th>Base</Th>
            <Th>Exponent</Th>
            {/* <Th>Description</Th> */}
            <Th>Action</Th>
          </Tr>
        </Thead>
        <TableContent />
        {/* <Tfoot>
          <Tr>
            <Th>Logo</Th>
            <Th>Name</Th>
            <Th>Base</Th>
            <Th>Action</Th>
          </Tr>
        </Tfoot> */}
      </Table>
    </TableContainer>
  );
});

export default ListAssets;
