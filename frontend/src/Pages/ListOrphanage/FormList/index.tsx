/* eslint-disable jsx-a11y/click-events-have-key-events */
/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
import React, { useContext, useEffect, useState } from 'react';
import { FaWhatsapp } from 'react-icons/fa';
import { Marker } from 'react-leaflet';
import { useParams } from 'react-router-dom';
import Leaflet from 'leaflet';
import { ThemeContext } from 'styled-components';
import Form from '../../../Components/HTMLElements/FormOrphanages';

import Map from '../../../Components/MapMarker';
import Fieldset from '../../../Components/HTMLElements/Fieldset';

import {
    Content,
    OphanageBackground,
    ImagesGroup,
    CardsContainer,
} from './styles';
import VisitCard from './VisitCard';
import WeekendsCard from './WeekendsCard';
import NoWeekendsCard from './NoWeekendsCard';

import markerLightIcon from '../../../Assets/Images/mark_down_map.svg';
import markerDarkIcon from '../../../Assets/Images/mark_down_map_dark.svg';
import api from '../../../Services/api';

interface OrphanageProps {
  images: Array<{
    url: string;
  }>;
  latitude: number;
  longitude: number;
  name: string;
  about: string;
  instructions: string;
  opening_hours: string;
  open_on_weekends: boolean;
}

interface OrphanageParams {
  id: string;
}

const FormList: React.FC = () => {
    // Contexts
    const { title } = useContext(ThemeContext);

    // States
    const [orphanages, setOrphanages] = useState<OrphanageProps>();
    const [viewImage, setViewImage] = useState('');

    // Others Hocks
    const params = useParams<OrphanageParams>();

    // Effects
    useEffect(() => {
        api.get(`/orphanages/show/${params.id}`)
            .then(res => {
                console.log(res.data);
                setOrphanages(res.data.orphanage);
                const img = res.data.orphanage.images[0].url;
                setViewImage(img);
            });
    }, [params.id]);

    // Utils
    const iconMarker = Leaflet.icon({
        iconUrl: title === 'light' ? markerLightIcon : markerDarkIcon,
        iconSize: [58, 68],
        iconAnchor: [29, 68],
        popupAnchor: [130, 2],
    });
    return (
        <Form
            buttonName="Entrar em contato"
            icon={<FaWhatsapp />}
        >
            <OphanageBackground>
                <img
                    src={`${viewImage}`}
                    alt="cat"
                />
            </OphanageBackground>
            <Content>
                <ImagesGroup>
                    {
            orphanages?.images.map(img => (
                <img
                    key={img.url}
                    src={img.url}
                    alt={img.url}
                    style={viewImage === img.url ? {} : { opacity: '20%' }}
                    onClick={() => setViewImage(img.url)}
                />
            )
            )
                    }
                </ImagesGroup>
                <Fieldset
                    legend={`${orphanages?.name}`}
                    className="FirstFieldset"
                >
                    <p>
                        {`${orphanages?.about}`}
                    </p>
                    <Map
                        Title="Ver rotas no Google Maps"
                        MarkDown={(
                            <Marker
                                position={[orphanages?.latitude || 0, orphanages?.longitude || 0]}
                                icon={iconMarker}
                            />
                        )}
                    />
                </Fieldset>
                <Fieldset
                    legend="Instruções para visita"
                    className="LastFieldset"
                >
                    <p>
                        {`${orphanages?.instructions}`}
                    </p>
                </Fieldset>
                <CardsContainer>
                    <VisitCard
                        info={`${orphanages?.opening_hours}`}
                    />
                    {
            orphanages?.open_on_weekends
                ? <WeekendsCard />
                : <NoWeekendsCard />
                    }
                </CardsContainer>
            </Content>
        </Form>
    );
};

export default FormList;
