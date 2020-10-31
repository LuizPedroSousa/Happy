import React, { useMemo } from 'react';
import HeaderNavigation from '../../../Components/HeaderNavigation';

import { Container } from './styles';

import Form from './Form';
import { FlatList } from 'react-native';

interface Item {
  key: string;
  render: () => JSX.Element;
  isTitle?: boolean;
}

const OrphanageData: React.FC = () => {
  const { data, indexes } = useMemo(() => {
    const Items: Item[] = [
      {
        key: 'Page_Heading',
        render: () => <HeaderNavigation
          title={'Preencha os dados abaixo'}
          exit={true}
        />,
        isTitle: true,
      },
      {
        key: 'Form',
        render: () => <Form />,
      },
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
      <FlatList<Item>
        data={data}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={(({ item }) => item.render())}
        keyExtractor={(item) => item.key}
        stickyHeaderIndices={indexes}
      />
    </Container>
  );
};

export default OrphanageData;
