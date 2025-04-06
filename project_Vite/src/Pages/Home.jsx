import React from 'react';
import HelloImg from "../assets/Hello.jpg";
import { Button, Card, Container, CardMedia, CardContent, Grid, Typography } from '@mui/material';

export default function Home() {
  return (
    <div className="home-bg">
      <div className="backgrund">
        <div className="dark-screen">
          <div className="before">
            <h3 className="dark-screen-text">Hello!</h3>
            <h4 className="dark-screen-text">My name is Olena Shevchenko.</h4>
            <p className="dark-screen-text">I am a Front-End developer</p>
          </div>
        </div>
        <img className="img-home" src={HelloImg} alt="Hello" />
      </div>

      <Container className="home-box">
        <Typography variant="h4" align="center" gutterBottom>
          My support
        </Typography>

        <Grid display='flex' justifyContent="center" gap={2}>
          {}
          <Grid className="card" item xs={12} md={3}>
            <Card sx={{ padding: 0, maxWidth: 320 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://images.pexels.com/photos/39691/family-pier-man-woman-39691.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Family"
              />
              <CardContent>
                <Typography variant="h6">Family</Typography>
                <Typography variant="body2" className="card-text">
                  В первую очередь моя поддержка в жизни — это моя семья: мои дети и любимый мужчина.
                  Благодаря им я вижу смысл, цель и радость в жизни.
                </Typography>
                <Button className='button'
                  variant="contained"
                  color="primary"
                  href="https://zn.ua/SOCIUM/skromnoe_obayanie_ukrainskoy_semi.html"
                  target="_blank"
                  sx={{ marginTop: 1 }}
                >
                  About this
                </Button>
              </CardContent>
            </Card>
          </Grid>

          {}
          <Grid className="card" item xs={12} md={3}>
            <Card sx={{ padding: 0, maxWidth: 320 }}>
              <CardContent>
                <Typography variant="h6">Work</Typography>
                <Typography variant="body2" className="card-text">
                  Ну и конечно же работа! Работа — это важная финансовая поддержка. Но если это работа мечты — это подарок судьбы.
                </Typography>
                <Button className='button'
                  variant="contained"
                  color="primary"
                  href="https://www.facebook.com/story.php?story_fbid=577904227660922&id=100063240489560"
                  target="_blank"
                  sx={{ marginTop: 1 }}
                >
                  About this
                </Button>
              </CardContent>
              <CardMedia
                component="img"
                height="200"
                image="https://images.pexels.com/photos/1586973/pexels-photo-1586973.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Work"
              />
            </Card>
          </Grid>

          {}
          <Grid className="card" item xs={12} md={3}>
            <Card sx={{ padding: 0, maxWidth: 320 }}>
              <CardMedia
                component="img"
                height="200"
                image="https://images.pexels.com/photos/1371360/pexels-photo-1371360.jpeg?auto=compress&cs=tinysrgb&w=600"
                alt="Travel"
              />
              <CardContent>
                <Typography variant="h6">Travel</Typography>
                <Typography variant="body2" className="card-text">
                  Путешествия — это поддержка, которая вдохновляет меня и даёт понять, что я живу.
                </Typography>
                <Button className='button'
                  variant="contained"
                  color="primary"
                  href="https://www.ef.com/kz/blog/language/50-luchshih-citat-o-puteshestvijah/"
                  target="_blank"
                  sx={{ marginTop: 1 }}
                >
                  About this
                </Button>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
      </Container>
    </div>
  );
}
