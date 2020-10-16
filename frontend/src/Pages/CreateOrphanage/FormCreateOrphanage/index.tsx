import React, { FormEvent, useContext, useRef, useState } from 'react';
import Fieldset from '../../../Components/HTMLElements/Fieldset';
import Form from '../../../Components/HTMLElements/Form';
import Input from '../../../Components/HTMLElements/Input';
import MapMarker from '../../../Components/MapMarker';
import InputImage from './InputImage';
import TextArea from './TextArea';

import Switch from 'react-switch'

import {
    Label,
    ImagesContent,
    ImgSelected,
    OpenOnweekends,
} from './styles';
import { lighten, shade } from 'polished';
import { ThemeContext } from 'styled-components';

const FormCreateOrphanage: React.FC = () => {
    //Contexts
    const { colors } = useContext(ThemeContext);

    //States
    const [images, setImages] = useState([{ src: '' }]);
    const [openOnWeekends, setOpenOnWeekends] = useState(false);

    //Refs
    const Name = useRef<HTMLInputElement>(null);


    //Toggles
    const toggleOpenOnWeekends = () => {
        return setOpenOnWeekends(!openOnWeekends ? true : false);
    }

    //Others Functions
    function setImagesValue(position: number, field: string, value: string) {
        const updatedImagesValue = images.map((img, index) => {
            if (position === index)
                return { ...img, [field]: value };
            return img;
        });
        setImages(updatedImagesValue);
    }


    const createOrphanage = (e: FormEvent) => {
        e.preventDefault();
        console.log(Name.current?.value, openOnWeekends, images)
    }
    return (
        <Form
            buttonName="Confirmar"
            onSubmit={createOrphanage}
        >
            <Fieldset
                legend="Dados"
            />
            <MapMarker />
            <Input
                ref={Name}
                label="Nome"
                type="name"
            />
            <TextArea
                label="Sobre"
                description="Máximo de 300 catacteres"
            />
            <Input
                ref={Name}
                label="Número do whatsapp"
            />
            <Label htmlFor='images'>Fotos</Label>
            <ImagesContent>
                {images.map((img, index) => {
                    return (
                        <>
                            {
                                img.src
                                &&
                                <ImgSelected
                                    key={img.src}
                                >
                                    <img
                                        src={`http://127.0.0.1:8887/${img.src.split('fakepath')[1]}`}
                                    />
                                </ImgSelected>
                            }
                            <InputImage
                                key={img.src}
                                name={'images'}
                                label="foto"
                                onChange={e => setImagesValue(index, 'src', e.target.value)}
                            />
                        </>
                    );
                })
                }
            </ImagesContent>
            <Fieldset
                legend="Visitação"
            />
            <TextArea
                label="Instruçôes"
            />
            <Input
                label="Horário das visitas"
            />
            <OpenOnweekends>
                <p>
                    Atende fim de semana?
                </p>
                <Switch
                    checkedIcon={false}
                    uncheckedIcon={false}
                    width={64}
                    height={24}
                    onColor={lighten(0.1, colors.buttonForm)}
                    offHandleColor={shade(0.2, colors.input)}
                    handleDiameter={20}
                    offColor={colors.input}
                    checked={openOnWeekends}
                    onChange={toggleOpenOnWeekends}
                />
            </OpenOnweekends>
        </Form>
    );
};

export default FormCreateOrphanage;
