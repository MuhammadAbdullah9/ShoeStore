import React from 'react'
import { Outlet, Link } from 'react-router-dom';
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
import store from '../components/Store'

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


function ProductIndex(props) {

    const { addToCart } = props
    const { products } = store
    const classes = useStyles();

    return (
        <div>
            {/* <h1 style={{ textAlign: "center", color: "white", backgroundColor: "navy" }}>Products</h1> */}
            {products.map((shoe, i) => {

                return <Card key={i} className={classes.root} variant="outlined">
                    <CardActionArea className={"mb"}>
                        <CardContent>
                            <Typography gutterBottom variant="h6" component="h2">
                                {shoe.name}
                            </Typography>
                        </CardContent>
                        <CardMedia
                            className={classes.media}
                            image={shoe.img}
                            title="Shoe"
                        />
                        <CardContent>
                            <Typography gutterBottom variant="h5" component="h2">
                                ${shoe.price}
                            </Typography>
                        </CardContent>
                    </CardActionArea>
                    <CardActions>
                        <ButtonGroup style={{ float: "right" }} className={"btnGroup"} variant="text" color="primary" aria-label="text primary button group">
                            <Link to={shoe.id}><Button><b> See Details</b></Button></Link>
                            <Button onClick={() => addToCart(shoe)}><b>Add to Cart</b></Button>
                        </ButtonGroup>
                    </CardActions>
                </Card>
            }
            )}

            <Outlet />

        </div>
    );
}

export default ProductIndex;
