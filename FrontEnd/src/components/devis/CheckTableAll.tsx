import {
  Flex,
  Alert,
  AlertIcon,
  Box,
  Table,
  Spinner,
  Checkbox,
  Tbody,
  Td,
  Text,
  Th,
  Heading,
  Thead,
  Tr,
  useColorModeValue,
  Button,
} from "@chakra-ui/react";
import * as React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";

import { createColumnHelper, SortingState } from "@tanstack/react-table";

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import { useEffect, useState } from "react";
import { Console } from "console";
import { useHistory } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "state/user/Users_Slice";
import { AllDevis, DeleteDevis, ModifierDevis } from "state/devis/devis_Slice";

type RowObj = {
  name: [string, boolean];
  Domaine: string;
  id: number;
};


const columnHelper = createColumnHelper<RowObj>();

// const columns = columnsDataCheck;
export default function CheckTable() {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const textColor = useColorModeValue("secondaryGray.900", "white");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.100");
  let history = useHistory();

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(AllDevis() as any);
  }, [dispatch]);
  const { status, record } = useSelector((state: any) => state.AllDevisExport);
  console.log(record, status);

  const DeleteDevisF = async (id: string) => {
    const confirmation = window.confirm("Êtes-vous sûr de vouloir supprimer ce devis ?");
  
    if (confirmation) {
      console.log(id);
      dispatch(DeleteDevis(id) as any)
        .unwrap()
        .then((res: any) => {
          console.log(res);
          window.location.reload();
        });
    }
  };

  const renderData = () => {
    if (status === "loading")
      return (
        <Tr>
          <Td></Td>
          <Td>
            <Flex
              justifyContent="space-between"
              align="center"
              fontSize={{ sm: "10px", lg: "12px" }}
              color="gray.400"></Flex>
            <Spinner size="md" />
          </Td>
        </Tr>
      );
    if (status === "failed")
      return (
        <Tr>
          <Td></Td>
          <Td>
            <Flex
              justifyContent="space-between"
              align="center"
              fontSize={{ sm: "10px", lg: "12px" }}
              color="gray.400"></Flex>
            <Alert status="error">
              <AlertIcon />
              Erreur Serveur
            </Alert>
          </Td>
          <Td></Td>
        </Tr>
      );

    if (status === "succeeded") {
      return record.map((e: any) => {
        return (
          <Tr key={e.idUser}>
            <Td>
              <Flex
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"></Flex>
              <Text
                justifyContent="space-between"
                align="center"
                color={textColor}
                fontSize="sm"
                fontWeight="700">
                {e.dateDevis}
              </Text>
            </Td>

            <Td>
              <Flex
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"></Flex>
              <Text
                justifyContent="space-between"
                align="center"
                color={textColor}
                fontSize="sm"
                fontWeight="700">
                {e.typeDevis}
              </Text>
            </Td>
            <Td>
              <Flex
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"></Flex>
              <Button
onClick={async () => {
  history.push("/me/devis-detail?id=" + e.idDevis);
}}
                marginLeft="40%"
                color="white"
                variant="brand"
                fontSize="sm"
                fontWeight="700">
                Plus de Details
              </Button>
            </Td>
            <Td>
  <Flex
    justifyContent="space-between"
    align="center"
    fontSize={{ sm: "10px", lg: "12px" }}
    color="gray.400"
  ></Flex>
  <Flex
  onClick={() => DeleteDevisF(e.idDevis)}
    marginLeft="40%"
    color="limegreen" // Couleur verte
    cursor="pointer"
    alignItems="center"
  >
    <FaTrash size={20} /> {/* Taille de l'icône */}
  </Flex>
</Td>

<Td>
  <Flex
    justifyContent="space-between"
    align="center"
    fontSize={{ sm: "10px", lg: "12px" }}
    color="gray.400"
  ></Flex>
  <Flex
    onClick={async () => {
      history.push("/me/modifier-devis?id=" + e.idDevis);
    }}
    marginLeft="40%"
    color="yellow" // Couleur jaune
    cursor="pointer"
    alignItems="center"
  >
    <FaEdit size={20} /> {/* Taille de l'icône */}
  </Flex>
</Td>
          
          </Tr>
        );
      });
    }
  };

  return (
    <Card
      flexDirection="column"
      w="100%"
      px="0px"
      overflowX={{ sm: "scroll", lg: "hidden" }}>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text
          color={textColor}
          fontSize="22px"
          mb="4px"
          fontWeight="700"
          lineHeight="100%">
        </Text>
        <Menu />
      </Flex>
      <Box>
        <Table variant="simple" color="gray.500" mb="24px" mt="12px">
          <Thead>
            <Th pe="10px" borderColor={borderColor} cursor="pointer">
              <Flex
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"></Flex>
              <Text
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400">
                Date Devis
              </Text>
            </Th>
            <Th pe="10px" borderColor={borderColor} cursor="pointer">
              <Flex
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400"></Flex>
              <Text
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400">
               Type Devis
              </Text>
            </Th>
            <Th pe="10px" borderColor={borderColor} cursor="pointer">
              <Text
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400">
                Details
              </Text>
            </Th>
            <Th pe="10px" borderColor={borderColor} cursor="pointer">
              <Text
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400">
               Action
              </Text>
            </Th>
            <Th pe="10px" borderColor={borderColor} cursor="pointer">
              <Text
                justifyContent="space-between"
                align="center"
                fontSize={{ sm: "10px", lg: "12px" }}
                color="gray.400">
               Action
              </Text>
            </Th>
          </Thead>
          <Tbody>{renderData()}</Tbody>
        </Table>
      </Box>
    </Card>
  );
}
