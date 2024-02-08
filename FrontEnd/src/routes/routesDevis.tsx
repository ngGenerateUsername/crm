import { Icon } from '@chakra-ui/react';
import {ImTicket} from 'react-icons/im';
import AddDevis from 'pages/devis/addDevis';
import DetailDevis from 'pages/devis/detailDevis';
import ModifierDevis from 'pages/devis/modifierDevis';

const routesDevis = [
	
	{
		name: 'Creer Devis',layout: '/ajout',path: '/ajout-devis',
		icon: <Icon as={ImTicket} width='20px' height='20px' color='inherit' />,
		component: AddDevis
	},
	{
		name: 'Details',layout: '/me',path: '/devis-detail',
		icon: <Icon as={ImTicket} width='20px' height='20px' color='inherit' />,
		component: DetailDevis
	}
	,
	{
		name: 'Modification',layout: '/me',path: '/modifier-devis',
		icon: <Icon as={ImTicket} width='20px' height='20px' color='inherit' />,
		component: ModifierDevis
	}

	
];

export default routesDevis;
