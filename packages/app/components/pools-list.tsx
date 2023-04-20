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
  const { removeAsset, assets } = assetStore;
  const { addPool, poolsData } = poolStore;
  // const [poolsData, setPoolsData] = useState<PoolsData[]>([]);
  const [showAlert, setShowAlert] = useState<boolean>(false);

  // useEffect(() => {
  //   const getShuffledArr = (arr: any[]) => {
  //     for (let i = arr.length - 1; i > 0; i--) {
  //       const rand = Math.floor(Math.random() * (i + 1));
  //       [arr[i], arr[rand]] = [arr[rand], arr[i]];
  //     }
  //     return arr;
  //   };
  //   const allTokens = asset_list.assets.map(({ name, logo_URIs }) => ({
  //     name: name,
  //     imgSrc: logo_URIs.png,
  //   }));
  //   const poolOptionToken1 = getShuffledArr([...allTokens]);
  //   const poolOptionToken2 = getShuffledArr([...allTokens]).filter(
  //     (v, i) => v !== poolOptionToken1[i]
  //   );
  //   const getRandomId = getShuffledArr(
  //     [...Array(500)].map((v, i) => (v = i + 1))
  //   ).slice(0, 4);
  //   const getRandomPoolLiquidity = [...Array(4)].fill(undefined).map((_) => {
  //     return parseInt(
  //       getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  //         .toString()
  //         .replaceAll(",", "")
  //     );
  //   });
  //   const getRandomMyLiquidity = [...Array(4)].fill(undefined).map((_) => {
  //     return parseInt(
  //       getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  //         .toString()
  //         .slice(0, 5)
  //         .replaceAll(",", "")
  //     );
  //   });
  //   const getRandomAPR = [...Array(4)].fill(undefined).map((_) => {
  //     return (
  //       parseInt(
  //         getShuffledArr([0, 1, 2, 3, 4, 5, 6, 7, 8, 9])
  //           .toString()
  //           .slice(0, 7)
  //           .replaceAll(",", "")
  //       ) / 100
  //     );
  //   });
  //   const getDefaultData = [...Array(4)].fill(undefined).map((_, i) => ({
  //     id: getRandomId[i],
  //     token1: poolOptionToken1[i],
  //     token2: poolOptionToken2[i],
  //     poolLiquidity: getRandomPoolLiquidity[i],
  //     apr: getRandomAPR[i],
  //     myLiquidity: getRandomMyLiquidity[i],
  //     myBoundedAmount: getRandomMyLiquidity[i],
  //     longestDaysUnbonding: Math.random() < 0.5,
  //   }));
  //   // console.log("getRandomAPR", getDefaultData);
  //   setPoolsData(getDefaultData);
  // }, []);

  const addPoolCard = () => {
    if(assets.length < 2) {
      setShowAlert(true);
      setTimeout(() => {
        setShowAlert(false);
      }, 3000);
      return;
    }
    const asset1: Asset = assets[assets.length - 2];
    const asset2: Asset = assets[assets.length - 1];
    addPool(asset1, asset2);
    removeAsset(asset1);
    removeAsset(asset2);
  };

  return (
    <Box p={4}>
      <Flex align="center" mb={6}>
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
      </SimpleGrid>
         {showAlert &&  <Alert status="error">
            <AlertIcon />
            <AlertTitle>Make sure assets.length >= 2</AlertTitle>
            <AlertDescription>
              You can add asset firstly
            </AlertDescription>
          </Alert>}
        <Stack
          spacing={4}
          direction="row"
          align="center"
          style={{ margin: 20 }}
        >
          <Button colorScheme="teal" size="md" onClick={addPoolCard}>
            Add pool
          </Button>
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
})
