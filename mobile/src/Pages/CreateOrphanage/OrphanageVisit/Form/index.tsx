import { useNavigation, useRoute } from '@react-navigation/native';
import React, { useContext, useEffect, useState } from 'react';
import { StyleProp, TextStyle, ViewStyle } from 'react-native';
import { ThemeContext } from 'styled-components';
import Legend from '../../../../Components/Legend';
import NextPage from '../../../../Components/NextPage';
import { api } from '../../../../Services/api';
import Input from '../../../../Components/Input';
import TextArea from '../../../../Components/TextArea';
import OpenOnWeekends from './OpenOnWeekends';

import { Content } from './styles';

interface IParams {
  name: string;
  about: string;
  whatsapp: string;
  images: string[];
  position: {
    latitude: number;
    longitude: number;
  };
}

const Form: React.FC = () => {
  //Contexts
  const { colors } = useContext(ThemeContext);

  //Utils
  const route = useRoute();
  const params = route.params as IParams;
  const navigation = useNavigation();

  //States
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [requiredFields, setRequiredFields] = useState(false);
  const [instructions, setInstructions] = useState('');
  const [openingHours, setOpeningHours] = useState('');

  const handleCreateOrphanage = async () => {
    const {
      name,
      about,
      images,
      position,
      whatsapp,
    } = params;
    const data = new FormData;
    
    data.append('name', name);
    data.append('latitude', String(position.latitude));
    data.append('longitude', String(position.longitude));
    data.append('about', about);
    data.append('whatsapp', whatsapp);
    data.append('instructions', instructions);
    data.append('opening_hours', openingHours);
    data.append('open_on_weekends', String(openOnWeekends));
    images.forEach((img, index) => data.append('images', {
      name: `ìmage_${index}.png`,
      type: 'image/png',
      uri: img
    } as any));

    if (!requiredFields)
      return;

    try {
      await api.post('orphanages/create', data);
      navigation.navigate('CreateOrphanage/Registered');
    } catch (err) {
      return alert(`falha ao criar orfanato: ${err}`);
    };
  };

  //Inline Styles
  const instructionsStyle: StyleProp<TextStyle> = [
    instructions.length >= 1 && { borderColor: colors.alert },
    instructions.length >= 3 && { borderColor: colors.buttonPrimary },
  ]
  const openingHoursStyle: StyleProp<TextStyle> = [
    openingHours.length >= 1 && { borderColor: colors.alert },
    openingHours.length >= 3 && { borderColor: colors.buttonPrimary },
  ]
  const buttonStyle: StyleProp<ViewStyle> = {
    position: 'relative',
    right: 0,
    bottom: 0,
    width: '100%',
    backgroundColor: colors.buttonPrimary,
    marginTop: 40,
    elevation: requiredFields ? 3 : -1,
    opacity: requiredFields ? 1 : .2,
  }

  useEffect(() => {
    setRequiredFields(instructions && openingHours !== '' ? true : false);
  }, [instructions, openingHours]);

  return (
    <Content>
      <Legend
        index={2}
        blockStyle={{ marginTop: 0 }}
        title='Visitação'
      />
      <TextArea
        label='Instruçôes'
        onChangeText={text => setInstructions(text)}
        TextAreaStyle={instructionsStyle}
      />
      <Input
        label='Horário de visitas'
        onChangeText={text => setOpeningHours(text)}
        InputStyle={openingHoursStyle}
      />
      <OpenOnWeekends
        isOpen={openOnWeekends}
        OpenEvent={() => setOpenOnWeekends(true)}
        DontOpenEvent={() => setOpenOnWeekends(false)}
      />
      <NextPage
        onPress={handleCreateOrphanage}
        title='Confirmar'
        style={buttonStyle}
      />
    </Content>
  );
};

export default Form;