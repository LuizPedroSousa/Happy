import React, { useMemo } from 'react';
import { FlatList } from 'react-native';
import HeaderNavigation from '../../Components/HeaderNavigation';
import Orphanage from './Orphanage';

import { Container } from './styles';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const ListOrphanage: React.FC = () => {
  const { data, indexes } = useMemo(() => {
    const Items: Item[] = [
      {
        key: 'Page_Heading',
        render: () => <HeaderNavigation title='Dados do orfanato' />,
        isTitle: true,
      },
      {
        key: 'Orphanage',
        render: () => <Orphanage />,
      }
    ]
    const indexes: number[] = []
    Items.forEach((item, index) => item.isTitle && indexes.push(index));
    return {
      data: Items,
      indexes,
    };
  }, []);
  return (
    <Container>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        stickyHeaderIndices={indexes}
        renderItem={(({ item }) => item.render())}
        keyExtractor={(item) => item.key}
      />
    </Container>
  );
};

export default ListOrphanage;
