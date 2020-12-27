import React from 'react'
import { useNavigate } from 'react-router-dom';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import ButtonGroup from '@material-ui/core/ButtonGroup';

const useStyles = makeStyles({
  root: {
    maxWidth: 350,
    marginBottom: 15,
    color: "darkgray",
    textAlign: "center",
    margin: "auto"
  },
  media: {
    height: 250,
  },
});

function Cart(props) {

  const { CartItems, removeFromCart } = props
  const classes = useStyles();
  const navigate = useNavigate()

  if (CartItems.length === 0) {
    return <div><h1>Cart is Empty</h1></div>
  }

  else {
    return (
      <div>
        <div>
          {
            CartItems.map(v => {

              return <Card className={classes.root} variant="outlined">
                <CardActionArea className={"mb"}>
                  <CardContent>
                    <Typography gutterBottom variant="h6" component="h2">
                      {v.name}
                    </Typography>
                  </CardContent>
                  <CardMedia
                    className={classes.media}
                    image={v.img}
                    title="Shoe"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="h2">
                      {v.price}
                    </Typography>
                  </CardContent>
                </CardActionArea>
                <CardActions>
                  <ButtonGroup style={{ float: "right" }} className={"btnGroup"} variant="text" color="primary" aria-label="text primary button group">
                    <Button onClick={() => removeFromCart(v)}><b>Remove</b></Button>
                  </ButtonGroup>
                </CardActions>
              </Card>
            }
            )
          }
        </div>
        <hr />
        <div>
          <Button onClick={() => navigate('/')} className={'btn'} variant="contained" color="secondary">
            Check-OUT ->
      </Button>
        </div>
      </div>
    );
  }
}

export default Cart;
