import AppsIcon from '@mui/icons-material/Apps'
import HomeIcon from '@mui/icons-material/Home'

import RouterIcon from '@mui/icons-material/Router'
import UsersIcon from '@mui/icons-material/PeopleAlt'
import BillingIcon from '@mui/icons-material/CreditCard'
const menu = [
  { id: 1, label: 'Acceuil' },
  { id: 1, label: 'Achetez Suluhisho' },
  { id: 1, label: 'Appropos de Suluhiso' },
  { id: 1, label: 'Nos Contact' },
]
const DRAWER_WIDTH = 250
const SIDEBAR_MENU2 = [
  { id: '5', title: 'Integrations', Icon: AppsIcon, route: '/store' },
]
const SIDEBAR_MENU1 = [
  { id: '1', title: 'Acceuil', Icon: HomeIcon, route: '/' },
  { id: '2', title: 'Gestion de taches', Icon: RouterIcon, route: '/nodes' },
  { id: '3', title: `Gestion d'annonces`, Icon: UsersIcon, route: '/users' },
  { id: '4', title: 'Gestion de paie', Icon: BillingIcon, route: '/billing' },
]
export { menu, SIDEBAR_MENU1, SIDEBAR_MENU2, DRAWER_WIDTH }
