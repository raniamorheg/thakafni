import React from 'react';
import DefaultLayout from './containers/DefaultLayout';


const Ariana = React.lazy(() => import('./views/Statistiques/Ariana'));
const Béja = React.lazy(() => import('./views/Statistiques/Béja'));
const BenArous = React.lazy(() => import('./views/Statistiques/BenArous'));
const Bizerte = React.lazy(() => import('./views/Statistiques/Bizerte'));
const Gabès = React.lazy(() => import('./views/Statistiques/Gabès'));

const Jendouba = React.lazy(() => import('./views/Statistiques/Jendouba'));
const Kairouan = React.lazy(() => import('./views/Statistiques/Kairouan'));
const Kasserine = React.lazy(() => import('./views/Statistiques/Kasserine'));
const Kébili = React.lazy(() => import('./views/Statistiques/Kébili/Kébili'));
const Kef = React.lazy(() => import('./views/Statistiques/Kef'));
const Mahdia = React.lazy(() => import('./views/Statistiques/Mahdia'));
const Manouba = React.lazy(() => import('./views/Statistiques/Manouba'));
const Medenine = React.lazy(() => import('./views/Statistiques/Medenine'));
const Monastir = React.lazy(() => import('./views/Statistiques/Monastir'));
const Nabeul = React.lazy(() => import('./views/Statistiques/Nabeul'));
const Sousse = React.lazy(() => import('./views/Statistiques/Sousse/Sousse'));

 const Myevent = React.lazy(() => import('./views/Pages/Evenements/Myevent'));
const Evenements = React.lazy(() => import('./views/Pages/Evenements/Evenements'));
const Favoris = React.lazy(() => import('./views/Pages/Evenements/Favoris'));
const Ajouter = React.lazy(() => import('./views/Pages/Evenements/Ajouter'));
const Accueil = React.lazy(() => import('./views/Accueil/Accueil'));
const Profil = React.lazy(() => import('./views/Profil/Profil'));
const GererComptes = React.lazy(() => import('./views/GererComptes/GererComptes'));
const Dashboard  = React.lazy(() =>import ('./views/Pages/Dashbord/Dashbord'));
/*const CoreUIIcons = React.lazy(() => import('./views/Icons/CoreUIIcons'));

const Users = React.lazy(() => import('./views/Users/Users'));
const User = React.lazy(() => import('./views/Users/User'));
const GererComptes = React.lazy(() => import('./views/Theme/GererComptes'));
*/
// https://github.com/ReactTraining/react-router/tree/master/packages/react-router-config
const routes = [
  { path: '/', exact: true, name: 'Accueil', component: DefaultLayout },
  { path: '/Accueil', name: '', component: Accueil },
 /*{ path: '/theme', exact: true, name: 'Theme', component: GererComptes },

  { path: '/Statistiques', exact: true, name: 'Statistiques', component: Ariana },
  */
 { path: '/Dashbord', name: 'Dashbord', component: Dashboard},
  { path: '/Statistiques/Gabès', name: 'Gabès', component: Gabès },
  { path: '/Statistiques/Manouba', name: 'Manouba', component: Manouba},
  { path: '/Statistiques/Medenine', name: 'Medenine', component: Medenine },
  { path: '/Statistiques/Monastir', name: 'Monastir', component: Monastir },
  
  { path: '/Statistiques/Béja', name: 'Carousel', component: Béja },
  { path: '/Statistiques/BenArous', name: 'Collapse', component: BenArous },
  { path: '/Statistiques/Bizerte', name: 'Bizerte', component: Bizerte },
 
  { path: '/Statistiques/list-groups', name: 'List Groups', component: Jendouba },
  { path: '/Statistiques/Kairouan', name: 'Kairouan', component: Kairouan },
  { path: '/Statistiques/Kasserine', name: 'Kasserine', component: Kasserine },
  { path: '/Statistiques/Kébili', name: 'Kébili', component: Kébili },
  { path: '/Statistiques/Kef', name: 'Kef', component: Kef },
  { path: '/Statistiques/Mahdia', name: 'Mahdia', component: Mahdia },
  { path: '/Statistiques/Nabeul', name: 'Nabeul', component: Nabeul },
  { path: '/Statistiques/Sousse', name: 'Sousse', component: Sousse },
  /*{ path: '/buttons', exact: true, name: 'Buttons', component: Buttons },
 */ // { path: '/Evenements/Reservation', name: 'Reservation', component: Reservation },
  { path: '/Evenements', name: 'Evénement', component: Evenements },
  { path: '/Favoris', name: 'Evénement favoris', component: Favoris },
  { path: '/MesEvenements', name: 'Mes Evénements', component: Myevent },
  { path: '/Evenements/Ajouter', name: 'Ajouter un événement', component: Ajouter },
  { path: '/Profil', name: 'Profil', component: Profil },
  { path: '/GererComptes',  name:'Gérer Comptes', component: GererComptes },
 /* { path: '/users', exact: true,  name: 'Users', component: Users },
  { path: '/users/:id', exact: true, name: 'User Details', component: User },*/
];

export default routes;
