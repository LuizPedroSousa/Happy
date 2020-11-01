import React, { useContext, useEffect, useState } from 'react';
import { useRoute } from '@react-navigation/native';
import { View, Text } from 'react-native';
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
import { shade } from 'polished';
import VisitCard from './VisitCard';

interface IOrphanage {
  name: string;
  about: string;
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

  console.log(orphanage);

  useEffect(() => {
    const { id } = params;
    api.get(`orphanages/show/${id}`)
      .then(res => {
        setOrphanage(res.data.orphanage);
      });
  }, [params]);
  if (!orphanage)
    return (
      <View>
        <Text>Carregando dados...</Text>
      </View>
    );
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
          <Contact>
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
