import { Box, SimpleGrid } from '@chakra-ui/react';
import ATTENTETable from 'components/ticket/ATTENTETableRespTicket';
import FERMETable from 'components/ticket/FERMETableRespTicket';
import IDENTIFICATIONTable from 'components/ticket/IDENTIFICATIONTableRespTicket';


import tableDataComplex from 'components/ticket/tableDataComplex';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { AllticketsPerContact, AllticketsPerRespTicket } from 'state/user/ticket_Slice';

export default function Settings() {
	const dispatch = useDispatch();
	useEffect(() => {
		dispatch(AllticketsPerRespTicket(localStorage.getItem("user")) as any)
		  .unwrap()
		  .then((res: any) => {
			console.log(res);
		  })
		  .catch((error: Error) => console.log(error));
	  }, [dispatch]);
	
	  const { status, record } = useSelector(
		(state: any) => state.AllticketsPerRespTicketExport
	  );
	  console.log(
		"liste tickets",
		record,
		status
	  );
		console.log(
			record.filter(
			(a: any) => a.statusTicket === "IDENTIFICATION"
		  ))
		  
	return (
		<Box pt={{ base: '130px', md: '80px', xl: '80px' }}>
			<SimpleGrid mb='20px' columns={{ sm: 1, md: 3 }} spacing={{ base: '20px', xl: '20px' }}>
				<ATTENTETable tableData={record.filter((a: any) => a.statusTicket === "ATTENTE")} />
				<IDENTIFICATIONTable tableData={record.filter((a: any) => a.statusTicket === "IDENTIFICATION")} />
				<FERMETable tableData={record.filter((a: any) => a.statusTicket === "FERME_ECHEC" )} />
			</SimpleGrid>
		</Box>
	);
}
