import { lighten } from 'polished';
import React, { useContext } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { ThemeContext } from 'styled-components';

import {
  WeekendsContent,
  Label,
  ButtonContainer,
  PrimaryButtonContent,
  SecondaryButtonContent,
  ButtonWeekends,
  ButtonText,
} from './styles';

interface WeekendsProps {
  OpenEvent: () => void;
  isOpen: boolean;
  DontOpenEvent: () => void;
}

const OpenOnWeekends: React.FC<WeekendsProps> = ({ OpenEvent, DontOpenEvent, isOpen }) => {
  const { colors } = useContext(ThemeContext);

  //Inline Styles
  const primaryButtonStyle = {
    borderColor: colors.buttonPrimary,
    backgroundColor: lighten(0.45, colors.buttonPrimary),
  }

  const secondaryButtonStyle = {
    borderColor: colors.alert,
    backgroundColor: lighten(0.28, colors.alert),
  }

  return (
    <WeekendsContent>
      <Label>
        Atende fim de semana?
      </Label>

      <ButtonContainer>

        <PrimaryButtonContent
          style={isOpen && primaryButtonStyle}
        >
          <ButtonWeekends
            onPress={OpenEvent}
          >
            <ButtonText
              style={isOpen && { color: colors.buttonPrimary }}
            >
              Sim
            </ButtonText>

          </ButtonWeekends>
        </PrimaryButtonContent>

        <SecondaryButtonContent
          style={!isOpen && secondaryButtonStyle}
        >
          <ButtonWeekends
            onPress={DontOpenEvent}
          >
            <ButtonText
              style={!isOpen && { color: colors.alert }}
            >
              Não
            </ButtonText>
          </ButtonWeekends>
        </SecondaryButtonContent>
      </ButtonContainer>
    </WeekendsContent>
  );
};

export default OpenOnWeekends;
