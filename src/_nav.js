export default {
  items: [
 
    {
      title: true,
      name: 'Gérer',
    },  
    {
      name: 'Gérer Comptes',
      url: '/GererComptes',
      icon: 'icon-people',
    },
    {
      name: 'Profil',
      url: '/Profil',
      icon: 'icon-user',
    },
    {
      name: 'Événements',
      url: '/Evenements',
      icon: 'icon-calendar',
      children: [
      {
        name: 'Reservations',
        url: 'Evenements/Reservation',
        icon: 'icon-calendar',
      },
      {
        name: 'Ajouter un événement',
        url: 'Evenements/Ajouter',
        icon: 'icon-pencil',
      },

    ]
    },

    {
      title: true,
      name: 'Parcourir',
     
    },
    
    {
      name: 'Statistiques',
      url: '/Statistiques',
      icon: 'icon-pie-chart',
      children: [
      
        {
          name: 'Ariana',
          url: '/Statistiques/Ariana',
          icon: 'icon-cursor',
        },
        {
          name: 'Béja',
          url: '/Statistiques/Béja',
          icon: 'icon-cursor',
        },
        {
          name: 'BenArous',
          url: '/Statistiques/BenArous',
          icon: 'icon-cursor',
        },
        {
          name: 'Bizerte',
          url: '/Statistiques/Bizerte',
          icon: 'icon-cursor',
        },
        {
          name: 'Gabès',
          url: '/Statistiques/Gabès',
          icon: 'icon-cursor',
        },
        {
          name: 'Gafsa',
          url: '/Statistiques/Gafsa',
          icon: 'icon-cursor',
        },
        {
          name: 'Jandouba',
          url: '/Statistiques/Jandouba',
          icon: 'icon-cursor',
        },
        {
          name: 'Kairouan',
          url: '/Statistiques/Kairouan',
          icon: 'icon-cursor',
        },
        {
          name: 'Kasserine',
          url: '/Statistiques/Kasserine',
          icon: 'icon-cursor',
        },
        {
          name: 'Kébili',
          url: '/Statistiques/Kébili',
          icon: 'icon-cursor',
        },
        {
          name: 'Kef',
          url: '/Statistiques/Kef',
          icon: 'icon-cursor',
        },
        {
          name: 'Mahdia',
          url: '/Statistiques/Mahdia',
          icon: 'icon-cursor',
        },
        {
          name: 'Manouba',
          url: '/Statistiques/Manouba',
          icon: 'icon-cursor',
        },
        {
          name: 'Medenine',
          url: '/Statistiques/Medenine',
          icon: 'icon-cursor',
        },
        {
          name: 'Monastir',
          url: '/Statistiques/Monastir',
          icon: 'icon-cursor',
        },
        {
          name: 'Nabeul',
          url: '/Statistiques/Nabeul',
          icon: 'icon-cursor',
        },
        {
          name: 'Sfax',
          url: '/Statistiques/Sfax',
          icon: 'icon-cursor',
        },
        {
          name: 'Sidi Bouzid',
          url: '/Statistiques/SidiBouzid',
          icon: 'icon-cursor',
        },
        {
          name: 'Siliana',
          url: '/Statistiques/Siliana',
          icon: 'icon-cursor',
        },
        {
          name: 'Sousse',
          url: '/Statistiques/Sousse',
          icon: 'icon-cursor',
        },
        {
          name: 'Tataouine',
          url: '/Statistiques/Tataouine',
          icon: 'icon-cursor',
        },
        {
          name: 'Tozeur',
          url: '/Statistiques/Tozeur',
          icon: 'icon-cursor',
        },
        {
          name: 'Tunis',
          url: '/Statistiques/Tunis',
          icon: 'icon-cursor',
        },
        {
          name: 'Zaghouan',
          url: '/Statistiques/Zaghouan',
          icon: 'icon-cursor',
        },
      
      ],

    },
  
  
  
   
   
  ],
};
