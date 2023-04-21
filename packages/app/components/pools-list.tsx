import React, { useState, useEffect } from "react";
import {
  Box,
  Heading,
  Text,
  Flex,
  Button,
  useColorModeValue,
  SimpleGrid,
  Image,
  Grid,
  GridItem,
  Divider,
  Stack,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from "@chakra-ui/react";

import { chain, assets, asset_list } from "@chain-registry/osmosis";
import { observer } from "mobx-react-lite";
import { Asset } from "@chain-registry/types/types/assets";

import { PoolsData } from "../@types/pool";
import PoolsCard from "../components/pools-card";
import { useStore } from "../store";

const ListPools = observer(() => {
  const { assetStore, poolStore } = useStore();
  const { removeAssetsForPool, assets } = assetStore;
  const { addPool, poolsData } = poolStore;
  // const [poolsData, setPoolsData] = useState<PoolsData[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  const addPoolCard = () => {
    if (assets.length < 2) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    const asset1: Asset = assets[assets.length - 2];
    const asset2: Asset = assets[assets.length - 1];
    addPool(asset1, asset2);
    removeAssetsForPool();
  };

  return (
    <Box p={4}>
      {/* <Flex align="center" mb={6}>
        <Heading as="h2" fontSize="2xl" mr={4}>
          Active Pools
        </Heading>
        <Button display={{ base: "none", sm: "block" }}>Create New Pool</Button>
      </Flex>
      <SimpleGrid columns={{ sm: 2 }} gap={4} maxW={{ sm: "md" }} mb={8}>
        <Box>
          <Text
            fontWeight="semibold"
            color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}
            mb={1}
          >
            OSMO Price
          </Text>
          <Text fontSize="3xl" fontWeight="bold" py={2}>
            $4.41
          </Text>
        </Box>
        <Box>
          <Text
            fontWeight="semibold"
            color={useColorModeValue("blackAlpha.600", "whiteAlpha.600")}
            mb={2}
          >
            Reward distribution on
          </Text>
          <Flex align="center">
            <Text fontSize="3xl" fontWeight="bold">
              12
            </Text>
            <Box
              borderRadius="lg"
              bg={useColorModeValue("blackAlpha.50", "whiteAlpha.50")}
              px={3}
              mx={1}
            >
              <Text fontSize="2xl" fontWeight="bold">
                H
              </Text>
            </Box>
            <Text fontSize="3xl" fontWeight="bold">
              19
            </Text>
            <Box
              borderRadius="lg"
              bg={useColorModeValue("blackAlpha.50", "whiteAlpha.50")}
              px={3}
              mx={1}
            >
              <Text fontSize="2xl" fontWeight="bold">
                M
              </Text>
            </Box>
          </Flex>
        </Box>
      </SimpleGrid> */}
      {showAlert && (
        <Alert status="error">
          <AlertIcon />
          <AlertTitle>Make sure assets length greater than 2.</AlertTitle>
          <AlertDescription>You can add asset firstly.</AlertDescription>
        </Alert>
      )}
      <Stack spacing={4} direction="row" align="center" style={{ margin: '30px 0' }}>
        <Button colorScheme="teal" size="md" onClick={addPoolCard}>
          Add pool
        </Button>

        <Divider orientation="vertical" />
        <Text>This click event will make the last 2 items of the table above to be pools data as below.</Text>
      </Stack>
      <Box
        bg={useColorModeValue("blackAlpha.50", "whiteAlpha.50")}
        m={-4}
        px={4}
        py={6}
      >
        <Text fontSize="2xl" fontWeight="bold" mb={4}>
          My Pools
        </Text>
        <PoolsCard poolsData={poolsData} />
      </Box>
    </Box>
  );
});

export default ListPools;
