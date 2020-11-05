import { useFocusEffect, useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { api } from '../../../../Services/api';
import ImageItem from './ImageItem';
import {
  Container,
  ImageDontExists,
  Image,
  Title,
  Description,
} from './styles';

import markerSad from '../../../../Assets/Images/mark_down_sad.png';


interface IParams {
  id: number;
}

interface IOrphanage {
  url: string
}

interface IVerify {
  imagesExist: boolean;
}


const ImagesCarousel: React.FC = () => {
  //Utils
  const route = useRoute();
  const params = route.params as IParams;
  const ItemWidth = Dimensions.get('window').width;

  //States
  const [orphanage, setOrphanage] = useState<IOrphanage[]>([]);
  const [verifyImages, setVerifyImages] = useState<IVerify>();

  //Effects
  useEffect(() => {
    const { id } = params;
    api.get(`orphanages/show/${id}`)
      .then(res => {
        if (!res.data.orphanage.images[0])
          return setVerifyImages({ imagesExist: false });
        setVerifyImages({ imagesExist: true });
        setOrphanage(res.data.orphanage.images);
      });
  }, [params.id])

  if (verifyImages?.imagesExist === false)
    return (
      <ImageDontExists>
        <Image source={markerSad} resizeMode='contain' />
        <Title>
          Que pena!
          </Title>
        <Description>
          Me parece que esse orfanato não tem imagens por enquanto.
          </Description>
      </ImageDontExists>
    );
  return (
    <Container>
      <Carousel
        data={orphanage}
        itemWidth={ItemWidth}
        sliderWidth={600}
        layout='default'
        bounces={true}
        renderItem={ImageItem}
        keyExtractor={(item) => item.url}
      />
    </Container>
  );
};

export default ImagesCarousel;
