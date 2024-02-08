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
  FormControl,
FormLabel,
Input,
Select
} from "@chakra-ui/react";
import * as React from "react";
import { FaTrash } from "react-icons/fa";
import { FaEdit } from "react-icons/fa";
import { createColumnHelper, SortingState } from "@tanstack/react-table";
import { ChangeEvent } from 'react';

// Custom components
import Card from "components/card/Card";
import Menu from "components/menu/MainMenu";
import { useEffect, useState } from "react";
import { Console } from "console";
import { useHistory, useLocation } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { fetchUsers } from "state/user/Users_Slice";
import { ModifierDevis } from "state/devis/devis_Slice";

type RowObj = {
  name: [string, boolean];
  Domaine: string;
  id: number;
};

const CheckTable = () => {
  const textColor = useColorModeValue('secondaryGray.900', 'white');
  const borderColor = useColorModeValue('gray.200', 'whiteAlpha.100');
  const dispatch = useDispatch();
  const history = useHistory();

  const location = useLocation();
  const params = new URLSearchParams(location.search);

  useEffect(() => {
    dispatch(ModifierDevis(params.get('id')) as any);
  }, [dispatch, params]);

  const { status, record } = useSelector((state: any) => state.ModifierDevisExport);

  const [formData, setFormData] = useState({
    typeDevis: '',
    produitDevis: '',
  });

  useEffect(() => {
    if (record && record.name && record.name.length > 0) {
      setFormData((prevFormData) => ({
        ...prevFormData,
        name: record.name[0],
      }));
    }
    setFormData((prevFormData) => ({
      ...prevFormData,
      typeDevis: record.typeDevis || '',
      produitDevis: record.produitDevis || '',
    }));
  }, [record]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    // Logique pour soumettre le formulaire de modification
    // Utilisez les valeurs de formData pour effectuer les modifications nécessaires
  };

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  const handleSelectChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({
      ...prevFormData,
      [name]: value,
    }));
  };

  return (
    <Card flexDirection="column" w="100%" px="0px" overflowX={{ sm: 'scroll', lg: 'hidden' }}>
      <Flex px="25px" mb="8px" justifyContent="space-between" align="center">
        <Text color={textColor} fontSize="22px" mb="4px" fontWeight="700" lineHeight="100%"></Text>
        <Menu />
      </Flex>
      <Box p="20px">
        <form onSubmit={handleFormSubmit}>
          <FormControl mb="16px">
            <FormLabel fontSize="18px" fontWeight="600">Type Devis:</FormLabel>
            <Select
              name="typeDevis"
              value={formData.typeDevis}
              onChange={handleSelectChange}
            >
              {record && record.name && record.name.length > 0 && (
                <option value={record.name[0]}>test</option>
              )}
                <option value="autre"> </option>
              <option value="autre">Accepté</option>
<option value="autre">DemandeDesModifications</option>
<option value="autre">Refusé</option>
            </Select>
          </FormControl>
          <FormControl mb="16px">
            <FormLabel fontSize="18px" fontWeight="600">Produits:</FormLabel>
              <Select
              name="produitDevis"
              value={formData.produitDevis}
              onChange={handleSelectChange}
            >
              {record && record.produitDevis && record.produitDevis.length > 0 && (
                <option value={record.name[0]}>test</option>
              )}
               <option value="autre"> </option>
              <option value="autre">Produit 1</option>
<option value="autre">Produit 2</option>
<option value="autre">Produit 3</option>
            </Select>
          </FormControl>
          
          <Button type="submit" colorScheme="blue" mr="8px">Enregistrer</Button>
          <Button type="button" onClick={() => history.goBack()}>Annuler</Button>
        </form>
      </Box>
    </Card>
  );
};

export default CheckTable;