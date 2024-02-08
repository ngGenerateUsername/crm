import { Icon } from '@chakra-ui/react';
import {ImTicket} from 'react-icons/im';
import ListeDevis from 'pages/devis/listeDevis';

const routesListeDevis = [
	
	
	{
		name: 'Liste Devis',layout: '/ajout',path: '/liste-devis',
		icon: <Icon as={ImTicket} width='20px' height='20px' color='inherit' />,
		component: ListeDevis
	}

	
];

export default routesListeDevis;
