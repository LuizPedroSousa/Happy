import React, { useContext, useEffect, useState } from 'react';
import Input from './Input';
import Legend from '../../../../Components/Legend';
import TextArea from './TextArea';

import { Content } from './styles';
import OpenOnWeekends from './OpenOnWeekends';
import { ThemeContext } from 'styled-components';
import NextPage from '../../../../Components/NextPage';
import { StyleProp, ViewStyle, TextStyle, Platform } from 'react-native';
import InputImagePicker from './ImagePicker';
import * as ImagePicker from 'expo-image-picker';
import OrphanageImage from './OrphanageImage';
import { useNavigation, useRoute } from '@react-navigation/native';
import { api } from '../../../../Services/api';

interface OrphanageParams {
  position: {
    latitude: number;
    longitude: number;
  }
}

const Form: React.FC = () => {
  //Utils
  const navigation = useNavigation();
  const route = useRoute();
  const params = route.params as OrphanageParams;

  //Contexts
  const { colors } = useContext(ThemeContext);

  //States
  const [requiredFields, setRequiredFiels] = useState(false);
  const [images, setImages] = useState<string[]>([]);
  const [openOnWeekends, setOpenOnWeekends] = useState(false);
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [openingHours, setOpeningHours] = useState('');
  const [whatsapp, setWhatsapp] = useState('');
  const [instructions, setInstructions] = useState('');

  //Toggles
  const toggleOpenOnWeekends = () => {
    setOpenOnWeekends(!openOnWeekends ? true : false);
  }
  const handleImagePicker = async () => {
    const result = await ImagePicker.launchImageLibraryAsync({
      mediaTypes: ImagePicker.MediaTypeOptions.Images,
      allowsEditing: true,
      aspect: [4, 3],
      quality: 1,
    });

    if (!result.cancelled)
      setImages([...images, result.uri])
  }
  const handleCreateOrphanage = async () => {
    const { position } = params;
    const data = new FormData;
    data.append('name', name);
    data.append('latitude', String(position.latitude));
    data.append('longitude', String(position.longitude));
    data.append('about', about);
    data.append('whatsapp', whatsapp);
    data.append('instructions', instructions);
    data.append('opening_hours', openingHours);
    data.append('open_on_weekends', String(openOnWeekends));
    images.forEach((img, index) => {
      data.append('images', {
        name: `image_${index}.png`,
        type: 'image/png',
        uri: img,
      } as any)
    })

    try {
      await api.post('orphanages/create', data);
      alert('Orfanato criado com sucesso');
      return navigation.navigate('OrphanageMap');
    } catch (err) {
      return alert(`Falha ao criar orfanato${err}`);
    }
  }

  //InlineStyles
  const buttonStyle: StyleProp<ViewStyle> = {
    position: 'relative',
    right: 0,
    bottom: 0,
    width: '100%',
    height: 60,
    marginBottom: 20,
    marginTop: 30,
    elevation: requiredFields ? 3 : -1,
    opacity: requiredFields ? 1 : .2,
  }
  const nameStyle: StyleProp<TextStyle> = [
    name.length >= 1 && { borderColor: colors.alert },
    name.length >= 5 && { borderColor: colors.buttonPrimary },
  ]
  const aboutStyle: StyleProp<TextStyle> = [
    about.length >= 1 && { borderColor: colors.alert },
    about.length >= 5 && { borderColor: colors.buttonPrimary },
  ]
  const instructionsStyle: StyleProp<TextStyle> = [
    instructions.length >= 1 && { borderColor: colors.alert },
    instructions.length >= 5 && { borderColor: colors.buttonPrimary },
  ]
  const openingHoursStyle: StyleProp<TextStyle> = [
    openingHours.length >= 1 && { borderColor: colors.alert },
    openingHours.length >= 5 && { borderColor: colors.buttonPrimary },
  ]
  const whatsappStyle: StyleProp<TextStyle> = [
    whatsapp.length >= 1 && { borderColor: colors.alert },
    whatsapp.length >= 5 && { borderColor: colors.buttonPrimary },
  ]

  //Effects
  useEffect(() => {
    (async () => {
      if (Platform.OS !== 'web') {
        const { status } = await ImagePicker.requestCameraRollPermissionsAsync();
        if (status !== 'granted')
          return alert('Desculpe, mas parece que precisamos de acesso a sua galeria');
      }
    })();
  }, []);

  useEffect(() => {
    if (name && about && whatsapp && openingHours && instructions !== '')
      setRequiredFiels(true);
    else
      setRequiredFiels(false);
  }, [name, about, whatsapp, openingHours, instructions])

  return (
    <Content>
      <Legend
        title='Dados'
      />
      <Input
        label='Nome'
        onChangeText={text => setName(text)}
        InputStyle={nameStyle}
      />
      <TextArea
        label='Sobre'
        description='Máximo de 300 catacteres'
        onChangeText={text => setAbout(text)}
        TextAreaStyle={aboutStyle}
      />
      <Input
        label='Número de Whatsapp'
        onChangeText={text => setWhatsapp(text)}
        InputStyle={whatsappStyle}
      />
      {
        images.map((img, index) =>
          <OrphanageImage
            key={img}
            name={img.split('-')[4]}
            image={img}
          />
        )

      }
      <InputImagePicker
        label='Fotos'
        pressEvent={handleImagePicker}
      />
      <Legend
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
        thumbColor={openOnWeekends ? colors.white : colors.textComplement}
        value={openOnWeekends}
        onValueChange={toggleOpenOnWeekends}
      />
      <NextPage
        title={'Confirmar'}
        onPress={handleCreateOrphanage}
        style={{ ...buttonStyle }}
      />
    </Content>
  );
};

export default Form;
