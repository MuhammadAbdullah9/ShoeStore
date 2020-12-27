import React from 'react'
import { useParams } from 'react-router-dom';
import store from '../components/Store';
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import CardMedia from '@material-ui/core/CardMedia';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';

const useStyles = makeStyles({
    root: {
        maxWidth: 900,
        maxHeight: 900,
        marginBottom: 15,
        color: "darkgray",
        textAlign: "center",
        margin: "auto"
    },
    media: {
        height: 500,
    },
});


function ProductDetails(props) {

    const { addToCart } = props
    const classes = useStyles();
    const { productID } = useParams()
    const { products } = store
    const { name, price, img, details } = products[productID]

    return (
        <div>
            <h1 style={{ textAlign: "center", color: "white", backgroundColor: "navy" }}>ProductDetails</h1>

            <Card className={classes.root} variant="outlined">
                <CardActionArea>
                    <CardContent>
                        <Typography gutterBottom variant="h5" component="h3">
                            {name}
                        </Typography>
                        <Typography variant="body2" color="textSecondary" component="p">{details}</Typography>
                    </CardContent>
                    <hr style={{ color: "gray" }} />
                    <CardMedia
                        className={classes.media}
                        image={img}
                        title="Shoe"
                    />
                    <CardContent style={{ float: "left" }}>
                        <Typography gutterBottom variant="h4" component="h2">
                            ${price}
                        </Typography>
                    </CardContent>

                </CardActionArea>
                <CardActions>
                    <Button onClick={() => addToCart(products[productID])} className={'btn1'} variant="outlined" color="textSecondary">
                        Add to Cart
                    </Button>
                </CardActions>
            </Card>

        </div>
    );
}

export default ProductDetails;
