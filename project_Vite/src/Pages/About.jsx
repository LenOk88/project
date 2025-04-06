import React from 'react';
import { Container, Grid, Box, Tab, Tabs, Typography } from '@mui/material';
import lifeImg from '../assets/I_am.jpg';
import lifeImg2 from '../assets/mountain1.jpg';
import lifeImg3 from '../assets/mountain2.jpg';
import DreamsImg1 from '../assets/Barcelona.jpeg';
import DreamsImg2 from '../assets/Madrid.jpg';
import DreamsImg3 from '../assets/Paris.jpg';
import OlenaImg from "../assets/Olena.jpg";
import Job from "../assets/job.jpg";
import Krakov from "../assets/Krakov.jpg";
import Puzzle from "../assets/5-team-signs.jpg";
import Teamwork from "../assets/teamwork.jpg";
import Team from "../assets/team.jpg";
import Code from "../assets/code.jpg";
import Komp from "../assets/komp.jpeg";
import FrontEnd from "../assets/front-end.jpg";

export default function About() {
  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Container className='padding-box'>
      <Grid container spacing={3}>
        {/* Колонка с Tabs слева */}
        <Grid item xs={3}>
          <Box
            sx={{
              backgroundColor: 'black',
              color: 'white',
              height: '100vh', // Высота на всю страницу
              paddingTop: 2,
              paddingBottom: 2,
              position: 'fixed', // Фиксируем слева
              width: '200px', // Ширина колонки
              top: 64,
            }}
          >
            <Tabs
              value={value}
              onChange={handleChange}
              orientation="vertical"
              sx={{ borderRight: 1, borderColor: 'divider' }}
            >
              <Tab className='tab' label="I am" />
              <Tab className='tab' label="Team" />
              <Tab className='tab' label="Programming" />
              <Tab className='tab' label="Life" />
              <Tab className='tab' label="Dreams" />
            </Tabs>
          </Box>
        </Grid>

        {/* Контент с изображениями */}
        <Grid item xs={9} sx={{ marginLeft: '250px' }}> {/* Отступ, чтобы контент не перекрывал колонку */}
          <Box sx={{ mt: 3 }}>
            {value === 0 && (
              <div>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img src={OlenaImg} style={{ width: "300px", height: "300px" }} alt="Olena" />
                  <img src={Job} style={{ width: "300px", height: "300px" }} alt="Job" />
                  <img src={Krakov} style={{ width: "300px", height: "300px" }} alt="Krakov" />
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Привет! Меня зовут Лена. И я начинающий программист. Моя цель - не только высокооплачиваемая работа в IT, а и достижения уважения и значимости своими знаниями и целеустремленностью. Я могу быть разной и выполняла любую работу, но стремлюсь к тому, чтобы выполнять любимую.
                </Typography>
              </div>
            )}
            {value === 1 && (
              <div>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img src={Puzzle} style={{ width: "300px", height: "300px" }} alt="Team Puzzle" />
                  <img src={Teamwork} style={{ width: "300px", height: "300px", border: "1px solid" }} alt="Teamwork" />
                  <img src={Team} style={{ width: "300px", height: "300px" }} alt="Team" />
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Мечтаю о работе, где каждый член команды - это пазл и механизм, без которого не получится полной картинки и где каждый это понимает и ценит. Стремлюсь попасть в команду, где буду учиться и отдаваться работе на 100%.
                </Typography>
              </div>
            )}
            {value === 2 && (
              <div>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img src={Code} style={{ width: "300px", height: "300px" }} alt="Code" />
                  <img src={Komp} style={{ width: "300px", height: "300px", border: "1px solid" }} alt="Komp" />
                  <img src={FrontEnd} style={{ width: "300px", height: "300px" }} alt="Front-End" />
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Программирование это работа моей мечты, к которой я иду малыми, но уверенными шагами.
                </Typography>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Front-End Basic, Front-End Pro - это курсы, которые я закончила. HTML, CSS, JS, React, Bootstrap, Node.js...
                </Typography>
              </div>
            )}
            {value === 3 && (
              <div>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img src={lifeImg3} style={{ width: "300px", height: "300px" }} alt="Life Image 1" />
                  <img src={lifeImg} style={{ width: "300px", height: "300px" }} alt="Life Image 2" />
                  <img src={lifeImg2} style={{ width: "300px", height: "300px" }} alt="Life Image 3" />
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Совсем недавно узнала, что я очень люблю горы. Это красота, которую не передают фотографии. Приятная усталость, необыкновенная красота, цель и покорение вершины.
                </Typography>
              </div>
            )}
            {value === 4 && (
              <div>
                <Box sx={{ display: 'flex', gap: 2 }}>
                  <img src={DreamsImg2} style={{ width: "300px", height: "300px" }} alt="Dreams Image 2" />
                  <img src={DreamsImg1} style={{ width: "300px", height: "300px" }} alt="Dreams Image 1" />
                  <img src={DreamsImg3} style={{ width: "300px", height: "300px" }} alt="Dreams Image 3" />
                </Box>
                <Typography variant="body1" sx={{ mt: 2 }}>
                  Это те места, о которых я мечтаю, но ещё не побывала. Мадрид - это город мечты, увидеть который загадала себе ещё в детстве. О Барселоне мечтает сын, а Париж это то о чем мечтает почти каждая девочка.
                </Typography>
              </div>
            )}
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
}
