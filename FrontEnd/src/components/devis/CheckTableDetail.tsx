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
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "state/user/Users_Slice";
import { DetailDevis } from "state/devis/devis_Slice";
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
  let result: JSX.Element[] | null = null;

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    dispatch(DetailDevis(params.get("id")) as any);
  }, [dispatch]);
  const { status, record } = useSelector((state: any) => state.DetailDevisExport);
 
  return (
    <Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: "scroll", lg: "hidden" }}>
    <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
      <Text
        color={textColor}
        fontSize="22px"
        mb="4px"
        fontWeight="700"
        lineHeight="100%"
      ></Text>
      <Menu />
    </Flex>
    <Box p="20px"> {/* Ajoutez du padding pour espacer le contenu */}
      <Text fontSize="18px" fontWeight="600" mb="8px">
        Date du devis:
      </Text>
      <Text fontSize="14px" mb="16px">
        {record.dateDevis}
      </Text>
      <Text fontSize="18px" fontWeight="600" mb="8px">
        Type de devis:
      </Text>
      <Text fontSize="14px">
        {record.typeDevis}
      </Text>
    </Box>
  </Card>
  
  );
}
