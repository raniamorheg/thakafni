
    
import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import event1 from '../../../assets/img/events/event1.jpg';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';

import FavoriteIcon from '@material-ui/icons/Favorite';




const useStyles = makeStyles(theme => ({
 
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    position: 'relative',
    borderRadius: theme.shape.borderRadius,
    backgroundColor: fade(theme.palette.common.white, 0.15),
    '&:hover': {
      backgroundColor: fade(theme.palette.common.white, 0.25),
    },
    marginLeft: 0,
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      marginLeft: theme.spacing(40),
      width: 'auto',
    },
  },
  searchIcon: {
    width: theme.spacing(7),
    height: '100%',
    position: 'absolute',
    pointerEvents: 'none',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputRoot: {
    color: 'inherit',
  },
  inputInput: {
    padding: theme.spacing(1, 1, 1, 7),
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width:400,
      '&:focus': {
        width: 200,
      },
    },
  },

 

  root: {
    flexGrow: 1,
  },
  paper: {
    marginTop: 40,
    padding: theme.spacing(2),
    margin:'auto',
    maxWidth: 900,
  },
  image: {
    width: 128,
    height: 128,
  },
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: '100%',
    maxHeight: '100%',
  },
}));

function ComplexGrid() {
  const classes = useStyles();

  return (
    <div className={classes.root}>
          <Grid container spacing={-20} >
      
      <Toolbar>
  <div className={classes.search}>
          <div className={classes.searchIcon}>
            <SearchIcon />
          </div>
          <InputBase
            placeholder="Recherche...."
            classes={{
              root: classes.inputRoot,
              input: classes.inputInput,
            }}
            inputProps={{ 'aria-label': 'Search' }}
          />
        </div>
      </Toolbar>
   
    </Grid>
      <Paper className={classes.paper}>
     <Grid container spacing={2}>
          <Grid item>
            <ButtonBase className={classes.image}>
              <img className={classes.img} alt="complex" src={event1} />
            </ButtonBase>
          </Grid>
          <Grid item xs={12} sm container>
            <Grid item xs container direction="column" spacing={2}>
              <Grid item xs>
                <Typography gutterBottom variant="subtitle1">
                Le Lac Des Cygnes à Tunis
                </Typography>
                <Typography variant="body2" gutterBottom>
                Public · Organisé par ‎Institut français de Tunisie et ‎Carthage Dance - أيام قرطاج الكوريغرافية‎‎
                </Typography>
                <Typography variant="body2" color="textSecondary">
                🗓  Jeudi 20 juin 2019 de 21:00 à 22:30
                
                </Typography>
                <Typography variant="body2" color="textSecondary">
                📍 Cité de la Culture
                
                </Typography>
              </Grid>
              <Grid item>
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
                L’Institut français de Tunisie est enchanté de s’associer à la venue du Lac des cygnes à Tunis dans le cadre de Carthage Dance - أيام قرطاج الكوريغرافية.
                <Typography variant="body2" style={{ cursor: 'pointer' }}>
🗓 Jeudi 20 juin à 21h
</Typography>
<Typography variant="body2" style={{ cursor: 'pointer' }}>
📍 Cité de la Culture
</Typography>
<Typography variant="body2" style={{ cursor: 'pointer' }}>
⏳ Durée : 1h30
</Typography>

Radhouane El Meddeb crée une nouvelle version contemporaine d’une des pièces maîtresses du répertoire classique. Le chorégraphe d’origine tunisienne, qui fut d’abord un acteur reconnu avant de se tourner vers la danse, entend en effet creuser les ressorts intimes du chef-d’œuvre créé sur la trame de légendes nordiques par Tchaïkovski, Ivanov et Petipa. S’il souhaite en déconstruire l’écriture classique, c’est pour la rendre plus romantique encore, « en agissant sur le corps dans sa partie charnelle et émotive ». Séduit par sa théâtralité et ses qualités narratives, le chorégraphe a choisi de s’appuyer sur la vision freudienne qu’en donna en 1984 Rudolf Noureev. 

Ce spectacle fera la clôture de la deuxième édition de Carthage Dance - أيام قرطاج الكوريغرافية, qui se tiendra du 14 au 20 juin à la مدينة الثقافة تونس Cité de la Culture Tunis et dans différents lieux à Tunis, sous le thème « Pas de danse sans dignité des corps ».

Le Lac des cygnes, Radhouane El Meddeb – Ballet de l’Opéra national du Rhin © Agathe Poupeney , une Production BOnR/Compagnie de SOI, avec Jesse Lyon, Céline Nunigé, Céline Nunigé, Riku Ota, Brett Fukuda, Maria-Sara Richter, Ana-Karina Enriquez Gonzalez, Dongting Xing, Monica Barbotte, Eureka Fukuoka, Alice Pernão, Hénoc Waysenson, et Pierre Doncq.

                </Typography>
              </Grid>
            </Grid>
            <Grid item>
              <Typography variant="subtitle1">
              <IconButton aria-label="Add to favorites" color='secondary'>
          <FavoriteIcon />
        </IconButton>
              </Typography>
            </Grid>
          </Grid>
        </Grid>
      
      </Paper>
    </div>
  );
}

export default ComplexGrid;
