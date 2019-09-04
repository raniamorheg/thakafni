import React, { Component } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import clsx from 'clsx';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import Avatar from '@material-ui/core/Avatar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import FavoriteIcon from '@material-ui/icons/Favorite';
import ShareIcon from '@material-ui/icons/Share';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Grid from '@material-ui/core/Grid';
import Icon from '@material-ui/core/Icon';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Toolbar from '@material-ui/core/Toolbar';
import InputBase from '@material-ui/core/InputBase';
import { fade } from '@material-ui/core/styles/colorManipulator';
import SearchIcon from '@material-ui/icons/Search';
import ButtonBase from '@material-ui/core/ButtonBase';
import event1 from '../../../assets/img/events/event1.jpg';
import event2 from '../../../assets/img/events/event2.jpg';
import event3 from '../../../assets/img/events/event3.jpg';
import event4 from '../../../assets/img/events/event4.jpg';
import TextField from '@material-ui/core/TextField';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import DialogTitle from '@material-ui/core/DialogTitle';
import Button from '@material-ui/core/Button';
import Ajouter from './Ajouter';




const useStyles = makeStyles(theme => ({
  img: {
    margin: 'auto',
    display: 'block',
    maxWidth: 250,
  },
  title: {
    flexGrow: 1,
    display: 'none',
    [theme.breakpoints.up('sm')]: {
      display: 'block',
    },
  },
  search: {
    marginTop: 30,
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
      width: 400,
      '&:focus': {
        width: 200,
      },
    },
  },

  root: {
    flexGrow: 0,


  },

  card: {
    maxWidth: 380,
    marginTop: 30,
    marginLeft: 20,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  extendedIcon: {
    marginLeft: "auto",

    color: "secondary",
  },
}));

export default function RecipeReviewCard() {
  const classes = useStyles();
  const [open, setOpen, expanded, setExpanded] = React.useState(false);


  function handleExpandClick() {
    setExpanded(!expanded);

  }


  function handleClickOpen() {
    setOpen(true);
  }



  function handleClose() {
    setOpen(false);
  }

  return (

    <div className={classes.root}>
      <Grid container spacing={4} >

        <Toolbar style={{ top: '20px' }}>
          <div className={classes.search}>
            <div className={classes.searchIcon}>
              <SearchIcon />
            </div>
            <InputBase
              placeholder="Search…"
              classes={{
                root: classes.inputRoot,
                input: classes.inputInput,
              }}
              inputProps={{ 'aria-label': 'Search' }}
            />
          </div>

          <Fab onClick={handleClickOpen} style={{ top: '17px', width: "24%", hight: ' 10', height: '57%' }} color="secondary" variant="extended" aria-label="Delete" className={classes.fab}>
            <AddIcon marginTop="0" className={classes.extendedIcon} />
            Ajouter un événement
      </Fab>
          <Dialog open={open} onClose={handleClose} aria-labelledby="form-dialog-title">
            <DialogTitle id="form-dialog-title">Entrez Vos Informations</DialogTitle>
            <DialogContent>
              <Ajouter />

            </DialogContent>
         
          </Dialog>


        </Toolbar>

      </Grid>

      <Grid container spacing={4} >
        <Grid item xs='auto'>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
          </Avatar>
              }

              title="‎Ciné asile"
              subheader="13 juin de 17:00 à 20:00"
            />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
              className={classes.img} alt="complex" src={event1}

            />
            <CardContent >

              <img className={classes.img} alt="complex" src={event1} />


              <Typography variant="body2" color="textSecondary" component="p">
                Le Lac Des Cygnes à Tunis
        </Typography>
            </CardContent>
            <CardActions disableSpacing>

              <Fab
                variant="outlined"
                size="small"
                color="secondary"
                aria-label="Add"
                className={classes.fab}>
                <FavoriteIcon className={classes.extendedIcon} />
                Intersser
      </Fab>

              <Fab
                variant="outlined"
                size="small"
                color="primary"
                aria-label="Add"
                className={classes.fab}>
                <AddIcon className={classes.extendedIcon} />
                Participer
      </Fab>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                h
          <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
          </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
          </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
              </CardContent>
            </Collapse>
          </Card>

        </Grid>
        <Grid item xs='auto'>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  S
          </Avatar>
              }

              title="‎Sidi thaher"
              subheader="19 juin de 17:00 à 20:00"
            />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
              className={classes.img} alt="complex" src={event2}

            />
            <CardContent >

              <img className={classes.img} alt="complex" src={event2} />


              <Typography variant="body2" color="textSecondary" component="p">
                Le Lac Des Cygnes à Tunis
        </Typography>
            </CardContent>
            <CardActions disableSpacing>

              <Fab
                variant="outlined"
                size="small"
                color="secondary"
                aria-label="Add"
                className={classes.fab}>
                <FavoriteIcon className={classes.extendedIcon} />
                Intersser
      </Fab>

              <Fab
                variant="outlined"
                size="small"
                color="primary"
                aria-label="Add"
                className={classes.fab}>
                <AddIcon className={classes.extendedIcon} />
                Participer
      </Fab>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                h
          <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
          </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
          </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
              </CardContent>
            </Collapse>
          </Card>

        </Grid>
        <Grid item xs='auto'>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  C
          </Avatar>
              }

              title="‎Cinéma la palace"
              subheader="13 juin de 17:00 à 20:00"
            />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
              className={classes.img} alt="complex" src={event3}

            />
            <CardContent >

              <img className={classes.img} alt="complex" src={event3} />


              <Typography variant="body2" color="textSecondary" component="p">
                Le Lac Des Cygnes à Tunis
        </Typography>
            </CardContent>
            <CardActions disableSpacing>

              <Fab
                variant="outlined"
                size="small"
                color="secondary"
                aria-label="Add"
                className={classes.fab}>
                <FavoriteIcon className={classes.extendedIcon} />
                Intersser
      </Fab>

              <Fab
                variant="outlined"
                size="small"
                color="primary"
                aria-label="Add"
                className={classes.fab}>
                <AddIcon className={classes.extendedIcon} />
                Participer
      </Fab>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                h
          <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
          </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
          </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
              </CardContent>
            </Collapse>
          </Card>

        </Grid>
        <Grid item xs='auto'>

<Card className={classes.card}>
  <CardHeader
    avatar={
      <Avatar aria-label="Recipe" className={classes.avatar}>
        R
</Avatar>
    }

    title="‎Ciné asile"
    subheader="13 juin de 17:00 à 20:00"
  />
  <CardMedia
    className={classes.media}
    image="/static/images/cards/paella.jpg"
    title="Paella dish"
    className={classes.img} alt="complex" src={event1}

  />
  <CardContent >

    <img className={classes.img} alt="complex" src={event1} />


    <Typography variant="body2" color="textSecondary" component="p">
      Le Lac Des Cygnes à Tunis
</Typography>
  </CardContent>
  <CardActions disableSpacing>

    <Fab
      variant="outlined"
      size="small"
      color="secondary"
      aria-label="Add"
      className={classes.fab}>
      <FavoriteIcon className={classes.extendedIcon} />
      Intersser
</Fab>

    <Fab
      variant="outlined"
      size="small"
      color="primary"
      aria-label="Add"
      className={classes.fab}>
      <AddIcon className={classes.extendedIcon} />
      Participer
</Fab>
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="Show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      h
<Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
        minutes.
</Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
</Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
        again without stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
</Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
</Typography>
    </CardContent>
  </Collapse>
</Card>

</Grid>
<Grid item xs='auto'>

<Card className={classes.card}>
  <CardHeader
    avatar={
      <Avatar aria-label="Recipe" className={classes.avatar}>
        S
</Avatar>
    }

    title="‎Sidi thaher"
    subheader="19 juin de 17:00 à 20:00"
  />
  <CardMedia
    className={classes.media}
    image="/static/images/cards/paella.jpg"
    title="Paella dish"
    className={classes.img} alt="complex" src={event2}

  />
  <CardContent >

    <img className={classes.img} alt="complex" src={event2} />


    <Typography variant="body2" color="textSecondary" component="p">
      Le Lac Des Cygnes à Tunis
</Typography>
  </CardContent>
  <CardActions disableSpacing>

    <Fab
      variant="outlined"
      size="small"
      color="secondary"
      aria-label="Add"
      className={classes.fab}>
      <FavoriteIcon className={classes.extendedIcon} />
      Intersser
</Fab>

    <Fab
      variant="outlined"
      size="small"
      color="primary"
      aria-label="Add"
      className={classes.fab}>
      <AddIcon className={classes.extendedIcon} />
      Participer
</Fab>
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="Show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      h
<Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
        minutes.
</Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
</Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
        again without stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
</Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
</Typography>
    </CardContent>
  </Collapse>
</Card>

</Grid>
<Grid item xs='auto'>

<Card className={classes.card}>
  <CardHeader
    avatar={
      <Avatar aria-label="Recipe" className={classes.avatar}>
        C
</Avatar>
    }

    title="‎Cinéma la palace"
    subheader="13 juin de 17:00 à 20:00"
  />
  <CardMedia
    className={classes.media}
    image="/static/images/cards/paella.jpg"
    title="Paella dish"
    className={classes.img} alt="complex" src={event3}

  />
  <CardContent >

    <img className={classes.img} alt="complex" src={event3} />


    <Typography variant="body2" color="textSecondary" component="p">
      Le Lac Des Cygnes à Tunis
</Typography>
  </CardContent>
  <CardActions disableSpacing>

    <Fab
      variant="outlined"
      size="small"
      color="secondary"
      aria-label="Add"
      className={classes.fab}>
      <FavoriteIcon className={classes.extendedIcon} />
      Intersser
</Fab>

    <Fab
      variant="outlined"
      size="small"
      color="primary"
      aria-label="Add"
      className={classes.fab}>
      <AddIcon className={classes.extendedIcon} />
      Participer
</Fab>
    <IconButton
      className={clsx(classes.expand, {
        [classes.expandOpen]: expanded,
      })}
      onClick={handleExpandClick}
      aria-expanded={expanded}
      aria-label="Show more"
    >
      <ExpandMoreIcon />
    </IconButton>
  </CardActions>
  <Collapse in={expanded} timeout="auto" unmountOnExit>
    <CardContent>
      h
<Typography paragraph>
        Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
        minutes.
</Typography>
      <Typography paragraph>
        Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
        heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
        browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
        and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
        pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
        saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
</Typography>
      <Typography paragraph>
        Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
        without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
        medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
        again without stirring, until mussels have opened and rice is just tender, 5 to 7
        minutes more. (Discard any mussels that don’t open.)
</Typography>
      <Typography>
        Set aside off of the heat to let rest for 10 minutes, and then serve.
</Typography>
    </CardContent>
  </Collapse>
</Card>

</Grid>

        <Grid item xs='auto'>

          <Card className={classes.card}>
            <CardHeader
              avatar={
                <Avatar aria-label="Recipe" className={classes.avatar}>
                  R
          </Avatar>
              }

              title="‎Ciné asile"
              subheader="13 juin de 17:00 à 20:00"
            />
            <CardMedia
              className={classes.media}
              image="/static/images/cards/paella.jpg"
              title="Paella dish"
              className={classes.img} alt="complex" src={event4}

            />
            <CardContent >

              <img className={classes.img} alt="complex" src={event4} />


              <Typography variant="body2" color="textSecondary" component="p">
                Le Lac Des Cygnes à Tunis
        </Typography>
            </CardContent>
            <CardActions disableSpacing>

              <Fab
                variant="outlined"
                size="small"
                color="secondary"
                aria-label="Add"
                className={classes.fab}>
                <FavoriteIcon className={classes.extendedIcon} />
                Intersser
      </Fab>

              <Fab
                variant="outlined"
                size="small"
                color="primary"
                aria-label="Add"
                className={classes.fab}>
                <AddIcon className={classes.extendedIcon} />
                Participer
      </Fab>
              <IconButton
                className={clsx(classes.expand, {
                  [classes.expandOpen]: expanded,
                })}
                onClick={handleExpandClick}
                aria-expanded={expanded}
                aria-label="Show more"
              >
                <ExpandMoreIcon />
              </IconButton>
            </CardActions>
            <Collapse in={expanded} timeout="auto" unmountOnExit>
              <CardContent>
                h
          <Typography paragraph>
                  Heat 1/2 cup of the broth in a pot until simmering, add saffron and set aside for 10
                  minutes.
          </Typography>
                <Typography paragraph>
                  Heat oil in a (14- to 16-inch) paella pan or a large, deep skillet over medium-high
                  heat. Add chicken, shrimp and chorizo, and cook, stirring occasionally until lightly
                  browned, 6 to 8 minutes. Transfer shrimp to a large plate and set aside, leaving chicken
                  and chorizo in the pan. Add pimentón, bay leaves, garlic, tomatoes, onion, salt and
                  pepper, and cook, stirring often until thickened and fragrant, about 10 minutes. Add
                  saffron broth and remaining 4 1/2 cups chicken broth; bring to a boil.
          </Typography>
                <Typography paragraph>
                  Add rice and stir very gently to distribute. Top with artichokes and peppers, and cook
                  without stirring, until most of the liquid is absorbed, 15 to 18 minutes. Reduce heat to
                  medium-low, add reserved shrimp and mussels, tucking them down into the rice, and cook
                  again without stirring, until mussels have opened and rice is just tender, 5 to 7
                  minutes more. (Discard any mussels that don’t open.)
          </Typography>
                <Typography>
                  Set aside off of the heat to let rest for 10 minutes, and then serve.
          </Typography>
              </CardContent>
            </Collapse>
          </Card>

        </Grid>

      </Grid>

      <Grid container spacing={3}>



      </Grid>
    </div>

  );
}
