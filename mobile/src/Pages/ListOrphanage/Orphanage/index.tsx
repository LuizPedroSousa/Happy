import React, { useContext, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { Linking } from 'react-native';
import Legend from '../../../Components/Legend';
import { api } from '../../../Services/api';
import ImagesCarousel from './ImagesCarousel';
import ListMap from './ListMap';

import { FontAwesome } from '@expo/vector-icons';

import {
  Container,
  OrphanageContent,
  Description,
  Contact,
  Title,
} from './styles';
import { ThemeContext } from 'styled-components';
import VisitCard from './VisitCard';
import ShimmerEffect from './ShimmerEffect';


interface IOrphanage {
  name: string;
  about: string;
  whatsapp: string;
  opening_hours: string;
  instructions: string;
  open_on_weekends: boolean;
}

export interface IParams {
  id: number;
}

const Orphanage: React.FC = () => {
  //Contexts
  const { colors } = useContext(ThemeContext);

  //States
  const [orphanage, setOrphanage] = useState<IOrphanage>();

  //Utils
  const route = useRoute();
  const params = route.params as IParams;

  //Handles
  const handleContactInWhatsapp = () => {
    Linking.openURL(`https://wa.me/55${orphanage?.whatsapp}/?text=Olá%20gostária%20de%20visistar%20as%20crianças%20seu%20orfanato`)
  }

  //Effects
  useEffect(() => {
    const { id } = params;
    api.get(`orphanages/show/${id}`)
      .then(res => {
        setOrphanage(res.data.orphanage);
      });
  }, [params]);

  if (!orphanage)
    return <ShimmerEffect />
  return (
    <Container>
      <ImagesCarousel />
      <OrphanageContent>
        <Legend title={orphanage.name}>
          <Description>
            {orphanage.about}
          </Description>
          <ListMap />
        </Legend>
        <Legend
          blockStyle={{ borderBottomWidth: 0 }}
          title='Instruções para visita'
        >
          <Description>
            {orphanage.instructions}
          </Description>
          <VisitCard
            title={orphanage.opening_hours}
            openOnWeeekends={orphanage.open_on_weekends}
          />
          <Contact
            onPress={handleContactInWhatsapp}
          >
            <FontAwesome
              name='whatsapp'
              size={30}
              color={colors.white}
            />
            <Title>
              Entrar em contato
            </Title>
          </Contact>
        </Legend>
      </OrphanageContent>
    </Container>
  );
};

export default Orphanage;
