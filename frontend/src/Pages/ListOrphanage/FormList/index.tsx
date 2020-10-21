import React, { useEffect, useState } from 'react';
import Form from '../../../Components/HTMLElements/Form';

import { FaWhatsapp } from 'react-icons/fa';

import { Marker } from 'react-leaflet';

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


import { useParams } from 'react-router-dom';
import markerIcon from '../../../Assets/Images/mark_down_map.svg';
import Leaflet from 'leaflet';
import api from '../../../Services/api';

const iconMarker = Leaflet.icon({
  iconUrl: markerIcon,
  iconSize: [58, 68],
  iconAnchor: [29, 68],
  popupAnchor: [130, 2],
});

interface OrphanageProps {
  images: Array<{
    url: string;
  }>;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

interface OrphanageParams {
  id: string;
}

const FormList: React.FC = () => {
  //States
  const [orphanages, setOrphanages] = useState<OrphanageProps>();
  const params = useParams<OrphanageParams>();

  const [viewImage, setViewImage] = useState('');



  useEffect(() => {
    api.get(`/orphanages/show/${params.id}`)
      .then(res => {
        console.log(res.data);
        setOrphanages(res.data.orphanage)
        const img = res.data.orphanage.images[0].url;
        setViewImage(img);
      });
  }, [params.id]);

  useEffect(() => {
    console.log(viewImage);
  }, [viewImage])

  return (
    <Form
      buttonName="Entrar em contato"
      icon={<FaWhatsapp />}
    >
      <OphanageBackground>
        <img
          src={`${viewImage}`}
          alt="cat"
        />
      </OphanageBackground>
      <Content>
        <ImagesGroup>
          {
            orphanages?.images.map(img =>
              <img
                key={img.url}
                src={img.url}
                alt={img.url}
                style={viewImage === img.url ? {} : { opacity: '60%' }}
                onClick={() => setViewImage(img.url)}
              />
            )
          }
        </ImagesGroup>
        <Fieldset
          legend={`${orphanages?.name}`}
          className="FirstFieldset"
        >
          <p>
            {`${orphanages?.about}`}
          </p>
          <Map
            Title="Ver rotas no Google Maps"
            MarkDown={
              <Marker
                position={[orphanages?.latitude || 0, orphanages?.longitude || 0]}
                icon={iconMarker} >
              </Marker>
            }
          >
          </Map>
        </Fieldset>
        <Fieldset
          legend="Instruções para visita"
          className="LastFieldset"
        >
          <p>
            {`${orphanages?.instructions}`}
          </p>
        </Fieldset>
        <CardsContainer>
          <VisitCard
            info={`${orphanages?.opening_hours}`}
          />
          {
            orphanages?.open_on_weekends
              ?
              <WeekendsCard />
              :
              <NoWeekendsCard />
          }
        </CardsContainer>
      </Content>
    </Form>
  );
};

export default FormList;
