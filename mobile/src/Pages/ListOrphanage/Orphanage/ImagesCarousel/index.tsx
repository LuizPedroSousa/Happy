import { useRoute } from '@react-navigation/native';
import React, { useEffect, useState } from 'react';
import { Dimensions } from 'react-native';
import Carousel from 'react-native-snap-carousel';
import { api } from '../../../../Services/api';
import ImageItem from './ImageItem';
import { Container } from './styles';


interface IParams {
  id: number;
}

interface IOrphanage {
  url: string;
}

const ImagesCarousel: React.FC = () => {
  const route = useRoute();
  const params = route.params as IParams;
  const [orphanage, setOrphanage] = useState<IOrphanage[]>([]);

  const ItemWidth = Dimensions.get('window').width;
  useEffect(() => {
    const { id } = params;
    api.get(`orphanages/show/${id}`)
      .then(res => {
        setOrphanage(res.data.orphanage.images);
      });
  }, [params.id])
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
