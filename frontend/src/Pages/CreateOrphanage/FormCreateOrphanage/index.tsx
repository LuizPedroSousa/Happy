import React, { ChangeEvent, FormEvent, useContext, useRef, useState } from 'react';
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
import { Marker } from 'react-leaflet';
import Leaflet, { LeafletMouseEvent } from 'leaflet';

import { useHistory } from 'react-router-dom';

import markerLightIcon from '../../../Assets/Images/mark_down_map.svg';
import markerDarkIcon from '../../../Assets/Images/mark_down_map_dark.svg';
import api from '../../../Services/api';

interface PositionProps {
    lat: number;
    lng: number;
}


const FormCreateOrphanage: React.FC = () => {

    //Contexts
    const { colors, title } = useContext(ThemeContext);

    //States
    const [images, setImages] = useState<File[]>([]);
    const [imagesPreview, setImagesPreview] = useState<string[]>([]);
    const [openOnWeekends, setOpenOnWeekends] = useState(false);
    const [markerPosition, setMarkerPosition] = useState<PositionProps>();

    //Refs
    const Name = useRef<HTMLInputElement>(null);
    const About = useRef<HTMLTextAreaElement>(null);
    const Whatasapp = useRef<HTMLInputElement>(null);
    const Opening_in_hours = useRef<HTMLInputElement>(null);
    const Instructions = useRef<HTMLTextAreaElement>(null);

    //Others Hooks
    const history = useHistory();

    //Toggles
    const toggleOpenOnWeekends = () => {
        return setOpenOnWeekends(!openOnWeekends ? true : false);
    }

    //Others Functions
    const createOrphanage = async (e: FormEvent) => {
        e.preventDefault();
        const data = new FormData();
        data.append('name', Name.current?.value as string);
        data.append('latitude', String(markerPosition?.lat));
        data.append('longitude', String(markerPosition?.lng));
        data.append('about', About.current?.value as string);
        data.append('instructions', Instructions.current?.value as string);
        data.append('opening_hours', Opening_in_hours.current?.value as string);
        data.append('open_on_weekends', String(openOnWeekends));
        images.forEach(img => data.append('images', img));
        try {
            await api.post('/orphanages/create', data);
            return history.push('/map');
        } catch (err) {
            console.log(err);
            return alert('Falha ao enviar dados');
        }

    }

    const handleMapMarker = (e: LeafletMouseEvent) => {
        const { lat, lng } = e.latlng;
        setMarkerPosition({ lat, lng });
    }

    const handleImages = (e: ChangeEvent<HTMLInputElement>) => {
        if (!e.target.files)
            return;
        const selectedImages = Array.from(e.target.files)
        const selectedImagesPreview = selectedImages.map(img => URL.createObjectURL(img));
        setImages(selectedImages);
        setImagesPreview(selectedImagesPreview);
    }

    //Utils
    const iconMarker = Leaflet.icon({
        iconUrl: title === 'light' ? markerLightIcon : markerDarkIcon,
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [130, 2],
    });

    return (
        <Form
            buttonName="Confirmar"
            onSubmit={createOrphanage}
        >
            <Fieldset
                legend="Dados"
            />
            <MapMarker
                clickEvent={handleMapMarker}
                MarkDown={
                    <Marker
                        icon={iconMarker}
                        position={[markerPosition?.lat || 0, markerPosition?.lng || 0]}
                        interactive={true}
                    ></Marker>
                }
            />
            <Input
                ref={Name}
                label="Nome"
                type="name"
            />
            <TextArea
                ref={About}
                label="Sobre"
                description="Máximo de 300 catacteres"
            />
            <Input
                ref={Whatasapp}
                label="Número do whatsapp"
            />
            <Label htmlFor='images'>Fotos</Label>
            <ImagesContent>
                {
                    imagesPreview.map(img => {
                        return (
                            <ImgSelected>
                                <img key={img} src={img} alt={img} />
                            </ImgSelected>
                        )
                    })
                }
                <InputImage
                    name={'images'}
                    label="foto"
                    onChange={handleImages}
                />
            </ImagesContent>
            <Fieldset
                legend="Visitação"
            />
            <TextArea
                ref={Instructions}
                label="Instruçôes"
            />
            <Input
                ref={Opening_in_hours}
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
        </Form >

    );
};

export default FormCreateOrphanage;
