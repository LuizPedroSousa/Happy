import React, { useContext, useEffect, useState } from 'react';
import Input from '../../../../Components/Input';
import Legend from '../../../../Components/Legend';
import TextArea from '../../../../Components/TextArea';

import { Content } from './styles';
import { ThemeContext } from 'styled-components';
import NextPage from '../../../../Components/NextPage';
import { StyleProp, ViewStyle, TextStyle, Platform } from 'react-native';
import InputImagePicker from './ImagePicker';
import * as ImagePicker from 'expo-image-picker';
import OrphanageImage from './OrphanageImage';
import { useNavigation, useRoute } from '@react-navigation/native';

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
  const [name, setName] = useState('');
  const [about, setAbout] = useState('');
  const [whatsapp, setWhatsapp] = useState('');

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
  const handleNextStep = async () => {
    const { position } = params;
    requiredFields && navigation.navigate('CreateOrphanage/Visit', {
      position,
      name,
      about,
      whatsapp,
      images,
    })
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
    name.length >= 3 && { borderColor: colors.buttonPrimary },
  ]
  const aboutStyle: StyleProp<TextStyle> = [
    about.length >= 1 && { borderColor: colors.alert },
    about.length >= 3 && { borderColor: colors.buttonPrimary },
  ]
  const whatsappStyle: StyleProp<TextStyle> = [
    whatsapp.length >= 1 && { borderColor: colors.alert },
    whatsapp.length >= 3 && { borderColor: colors.buttonPrimary },
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
    if (name && about && whatsapp !== '')
      setRequiredFiels(true);
    else
      setRequiredFiels(false);
  }, [name, about, whatsapp])

  return (
    <Content>
      <Legend
        title='Dados'
        index={1}
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
      <NextPage
        onPress={handleNextStep}
        style={{ ...buttonStyle }}
      />
    </Content>
  );
};

export default Form;
