import React, { useContext } from 'react';
import { Switch, SwitchProps } from 'react-native';
import { Text } from 'react-native';
import { ThemeContext } from 'styled-components';
import { Content, Title } from './styles';


const OpenOnWeekends: React.FC<SwitchProps> = ({ ...rest }) => {
  const { colors } = useContext(ThemeContext);
  return (
    <Content>
      <Title>
        Atende final de semana?
      </Title>
      <Switch
        trackColor={{ true: colors.buttonPrimary, false: colors.white }}
        {...rest}
      />
    </Content>
  );
};

export default OpenOnWeekends;
