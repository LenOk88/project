import React from 'react';
import { Container, Card, Box, Typography, List, ListItem, ListItemText, Divider } from '@mui/material';
import Js from "../assets/js.png";
import Html from "../assets/html_css_js.png";
import Book from "../assets/120.1.jpg";
import Skills from "../assets/soft_skills.webp";

export default function Blog() {

  return (
    <Container>
      <Box display="flex" flexDirection="row" flexWrap="wrap" justifyContent="space-between">
        <Box display="flex" flexDirection="column" width="70%"> 
          <Box display="flex" flexDirection="column" mb={2}>
            <Box display="flex" alignItems="center" mb={2} mt={2}>
              <img className='img-blog' src={Js} alt="js" width={150} height={100} />
              <Box ml={2}>
                <Typography variant="h6">Мой выбор</Typography>
                <Typography variant="body1">
                  Я выбрала для себя Front-End разработку, потому что между кодированием и красотой, которая предстает перед вашими глазами, есть лишь тонкая грань, и это то, что я люблю больше всего.
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" mb={2}> 
              <img className='img-blog' src={Html} alt="html" width={150} height={100} />
              <Box ml={2}>
                <Typography variant="h6">Что должен знать Frontend-разработчик</Typography>
                <Typography variant="body1">
                  Основные технические навыки, которые нужно знать: – HTML, CSS и JavaScript: эти три языка работают вместе, они определяют внешний вид и функциональность страницы сайта.
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <img className='img-blog' src={Book} alt="book" width={150} height={100} />
              <Box ml={2}>
                <Typography variant="h6">С чего начать?</Typography>
                <Typography variant="body1">
                  Начало пути - изучение документации. В категориях справа вы найдёте подробную информацию о языках программирования, с помощью которых можно создать сайт.
                </Typography>
              </Box>
            </Box>

            <Box display="flex" alignItems="center" mb={2}>
              <img className='img-blog' src={Skills} alt="skills" width={150} height={100} />
              <Box ml={2}>
                <Typography variant="h6">Soft skills</Typography>
                <Typography variant="body1">
                  Дополнительные качества разработчика - самообучение, гибкость, работа в команде, уверенность, решение проблем, коммуникация, творчество, креативное мышление, целеустремлённость и умение доводить начатое до конца.
                </Typography>
              </Box>
            </Box>
          </Box>
        </Box>

        <Box width="25%" mt={3}>
          <Typography className='h' variant="h6" align="center" gutterBottom>
            Categories
          </Typography>
          <Card className='box-blog' variant="outlined">
            <List>
              <ListItem className='sidebar' button component="a" href="https://developer.mozilla.org/en-US/docs/Web/HTML">
                <ListItemText primary="HTML/CSS" />
              </ListItem>
              <hr className="divider" />
              <ListItem className='sidebar' button component="a" href="https://developer.mozilla.org/en-US/docs/Web/JavaScript">
                <ListItemText primary="JavaScript" />
              </ListItem>
              <hr className="divider" />
              <ListItem className='sidebar' button component="a" href="https://reactjs.org/">
                <ListItemText primary="React" />
              </ListItem>
              <hr className="divider" />
              <ListItem className='sidebar' button component="a" href="https://getbootstrap.com/">
                <ListItemText primary="Bootstrap" />
              </ListItem>
            </List>
          </Card>

          <Card className='widget' variant="outlined" sx={{ mt: 3, backgroundColor: '#f0f0f0' }}>
            <Box p={2}>
              <Typography variant="h6">Side widget</Typography>
              <Typography variant="body2">
                Данные категории позволяют работать вместе, чтобы создать динамичные и красивые веб-страницы
              </Typography>
            </Box>
          </Card>
        </Box>
      </Box>
    </Container>
  )
}

