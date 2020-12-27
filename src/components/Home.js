import React from 'react'
import '../App.css';
import { makeStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { useNavigate } from 'react-router';

const useStyles = makeStyles((theme) => ({
    root: {
        flexGrow: 1,
        textAlign: "center",
        marginTop: 10

    },
    paper: {
        padding: theme.spacing(2),
        textAlign: 'center',
    },
    paper1: {
        padding: theme.spacing(2),
        textAlign: 'center',
        color: 'white',
        backgroundColor: "navy"
    },
}));


function Home() {
    const classes = useStyles();
    const navigate = useNavigate()

    return (
        <div className={classes.root}>
            <Grid direction="row" justify="center" alignItems="center" container spacing={10}>
                <Grid className={"para"} item xs={12} sm={12} md={4}>
                    <Paper className={classes.paper1}>
                        <p>Russell Westbrook backs up his brashness with a fast, aggressive playing style and numbers that place him among the league's best. His all-new Jordan One Take II embodies his edginess and speed. Colours, textures and design lines speak to Russ' persona both on and off the court. This PF version uses an extra-durable outsole that's ideal for outdoor courts. More Benefits Extra-durable rubber outsole is designed to hold up on outdoor surfaces.Product Details Lightweight, mixed-material upper Breathable mesh tongue</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Paper className={classes.paper}>
                        {<img className={"img"} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/ab511e51-d6ce-475d-8301-03ca48ed3ff5/jordan-one-take-ii-pf-basketball-shoe-m666jq.jpg" alt={"Shoe"}></img>}
                    </Paper>
                </Grid>
            </Grid>
            <Grid direction="row" justify="center" alignItems="center" container spacing={10}>
                <Grid item xs={12} sm={12} md={8}>
                    <Paper className={classes.paper}>
                        {<img className={"img"} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/i1-36648f37-4065-4cca-bb54-4c0e73b2a8c5/air-zoom-wio-7-running-shoe-v3Tv0C.jpg" alt={"Shoe"}></img>}
                    </Paper>
                </Grid>
                <Grid className={"para"} item xs={12} sm={12} md={4}>
                    <Paper className={classes.paper1}>
                        <p>The Nike Air Zoom Winflo 7 keeps you running with an updated mesh design and increased foam. Designed with everyday runs in mind, its cushioned feel helps you stay focused on the path ahead. Responsive and Durable More foam offers a springier feel and is responsive and durable. More Benefits Heel counter helps your foot feel secure.Product Details Full rubber outsole</p>
                    </Paper>
                </Grid>
            </Grid>
            <Grid direction="row" justify="center" alignItems="center" container spacing={10}>
                <Grid className={"para"} item xs={12} sm={12} md={4}>
                    <Paper className={classes.paper1}>
                        <p>The Nike Renew In-Season TR 10 has a deep, comfortable footbed with foam to give you superior cushioning and energy return for cardio-heavy classes. The midfoot strap integrates with the laces to hold down your foot during high-paced moves.Benefits
                        Lightweight, breathable material helps keep your foot cool.
                        Dual-density foam provides responsive cushioning for lasting comfort for continuous cardio.
                        Durable overlays around the midfoot integrate with the laces to hold down your foot during high-paced moves.
Rubber tread in high-wear areas provides durable traction.</p>
                    </Paper>
                </Grid>
                <Grid item xs={12} sm={12} md={8}>
                    <Paper className={classes.paper}>
                        {<img className={"img"} src="https://static.nike.com/a/images/t_PDP_864_v1/f_auto,b_rgb:f5f5f5,q_80/4957f367-d95a-4e0c-9516-4c1f61e13040/renew-in-season-tr-10-training-shoe-pPpLH9.jpg" alt={"Shoe"}></img>}
                    </Paper>
                </Grid>
            </Grid>
            <Button onClick={() => navigate('product')} className={'btn'} variant="contained" color="secondary">
                See More
      </Button>
        </div>
    );
}

export default Home;


