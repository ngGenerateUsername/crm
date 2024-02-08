// Chakra imports
import { Box, SimpleGrid } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import CheckTable from "components/devis/CheckTableAll";
import { useDispatch, useSelector } from "react-redux";
import { AllDevis } from "state/devis/devis_Slice";
export default function Settings() {
  // Chakra Color Mode

  return (
    <Box pt={{ base: "130px", md: "80px", xl: "80px" }}>
      <SimpleGrid
        mb="20px"
        columns={{ sm: 1, md: 1 }}
        spacing={{ base: "20px", xl: "20px" }}>
        <CheckTable />
      </SimpleGrid>
    </Box>
  );
}
