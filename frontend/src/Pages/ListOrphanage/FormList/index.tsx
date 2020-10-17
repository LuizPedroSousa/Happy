import React, { useState } from 'react';
import Form from '../../../Components/HTMLElements/Form';

import { FaWhatsapp } from 'react-icons/fa';

import Map from '../../../Components/MapMarker';
import Fieldset from '../../../Components/HTMLElements/Fieldset';

import {
  Content,
  OphanageBackground,
  ImagesGroup,
  CardsContainer,
} from './styles';
import VisitCard from './VisitCard';
import WeekendsCard from './WeekendsCard';
import NoWeekendsCard from './NoWeekendsCard';


const FormList: React.FC = () => {
  //States
  const imagesPreview = [
    { src: 'http://127.0.0.1:8887/me.jpg', key: '1' },
    { src: 'http://127.0.0.1:8887/heart-icon-y1k.png', key: '2' },
    { src: 'http://127.0.0.1:8887/zenvia.webp', key: '3' },
    { src: 'http://127.0.0.1:8887/dev.webp', key: '4' },
    { src: 'http://127.0.0.1:8887/X.gif', key: '5' },
  ]

  const [viewImage, setViewImage] = useState([{ src: imagesPreview[0].src }]);

  return (
    <Form
      buttonName="Entrar em contato"
      icon={<FaWhatsapp />}
    >
      <OphanageBackground>
        <img
          src={viewImage[0].src}
          alt="cat"
        />
      </OphanageBackground>
      <Content>
        <ImagesGroup>
          {
            imagesPreview.map(img =>
              <img
                key={img.key}
                src={img.src}
                onClick={() => setViewImage([{ src: img.src }])}
              />
            )
          }
        </ImagesGroup>
        <Fieldset
          legend="Orf. Eliza Maria"
          className="FirstFieldset"
        >
          <p>
            Presta assistência a crianças de 06 a 15 anos que se encontre em situação de risco e/ou vulnerabilidade social.
          </p>
          <Map
            Title="Ver rotas no Google Maps"
          />
        </Fieldset>
        <Fieldset
          legend="Instruções para visita"
          className="LastFieldset"
        >
          <p>
            Venha como se sentir a vontade e traga muito amor e paciência para dar.
          </p>
        </Fieldset>
        <CardsContainer>
          <VisitCard
            info="Horário de visitas
          Das 18h até 8h"
          />
          <WeekendsCard />
          <NoWeekendsCard />
        </CardsContainer>
      </Content>
    </Form>
  );
};

export default FormList;
