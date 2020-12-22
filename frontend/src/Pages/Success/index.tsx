import React from 'react';
import { useHistory } from 'react-router-dom';

import {
    Container,
    Content,
} from './styles';
import successImg from '../../Assets/Images/success.svg';

interface ISuccess{
    title: string;
    description: string;
    buttonName: string;
    ContainerRender?: any;
    buttonClickAction?: () => void;
    img: typeof successImg;
}

const Success: React.FC<ISuccess> = ({
    title,
    description,
    buttonName,
    ContainerRender,
    buttonClickAction,
    img,
    ...rest
}) => {
    // Others Hoocks
    const history = useHistory();

    // Handles && Toggles
    const handlePushToMap = () => history.push('/map');
    return (
        <Container
            as={ContainerRender && ContainerRender}
        >
            <Content>
                <h1>
                    {title || 'Ebaaa'}
!
                </h1>
                <p>
                    {
                        description || 'O cadastro deu certo e foi enviado ao administrador para ser aprovado. Agora é só esperar :)'
                    }
                </p>
                <button
                    {...rest}
                    onClick={buttonClickAction || handlePushToMap}
                    type="button"
                >
                    {buttonName || 'Voltar ao mapa'}
                </button>
            </Content>
            <img src={img || successImg} alt="hero kid" />
        </Container>
    );
};

export default Success;
