import React from 'react';

import { RectButtonProperties } from 'react-native-gesture-handler';

import {
  NextPageButton,
  Title,
} from './styles';

interface NextPageProps extends RectButtonProperties {
  title?: string;
}

const NextPage: React.FC<NextPageProps> = ({ title, ...rest }) => {
  return (
    <NextPageButton {...rest}>
      <Title>
        {title ? title : 'Proximo'}
      </Title>
    </NextPageButton>
  );
};

export default NextPage;
