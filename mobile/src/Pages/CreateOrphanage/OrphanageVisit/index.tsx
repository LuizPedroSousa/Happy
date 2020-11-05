import React, { useMemo } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import HeaderNavigation from '../../../Components/HeaderNavigation';
import Form from './Form';

import { Container } from './styles';

interface Item {
  key: string;
  isTitle?: boolean;
  render: () => JSX.Element;
}

const OrphanageVisit: React.FC = () => {

  const { data, indexes } = useMemo(() => {
    const Items: Item[] = [
      {
        key: 'Page_Heading',
        render: () => <HeaderNavigation exit={true} title='Quase Lá' />,
        isTitle: true,
      },
      {
        key: 'Form',
        render: () => <Form />,
      }
    ]

    const indexes: number[] = [];
    Items.forEach((item, index) => item.isTitle && indexes.push(index));
    return {
      data: Items,
      indexes,
    }
  }, []);


  return (
    <Container>
      <FlatList
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={({ item }) => item.render()}
        keyExtractor={(item) => item.key}
        stickyHeaderIndices={indexes}
      />
    </Container>
  );
};

export default OrphanageVisit;
