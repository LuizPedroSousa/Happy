import React, {
    useContext, useEffect, useRef, useState,
} from 'react';

import { BsX } from 'react-icons/bs';

import lottie from 'lottie-web';
import errorAnim from '../../Assets/LottieAnimations/401.json';
import prancheta from '../../Assets/Icons/pranchetas.svg';
import senhaIncorreta from '../../Assets/Icons/senha-incorreta.svg';
import teclado from '../../Assets/Icons/teclado.svg';
import {
    Container,
    LottieGif,
    Content,
    Title,
    Exit,
} from './styles';
import Tip from './Tip';
import LoginContext from '../../Store/ContextApi/Login/context';

interface ICardMessage{
  status: boolean;
}

const CardMessage: React.FC<ICardMessage> = ({ status }) => {
    // States
    const [viewExit, setViewExit] = useState(false);

    // Contexts
    const { setStatus } = useContext(LoginContext);

    // Refs
    const illustration = useRef<HTMLDivElement>(null);

    // Effects
    useEffect(() => {
        if (illustration.current) {
            lottie.loadAnimation({
                container: illustration.current,
                loop: true,
                animationData: errorAnim,
            });
        }
        const timeToViewExit = setTimeout(() => {
            setViewExit(true);
        }, 3200);
        if (!status) {
            clearTimeout(timeToViewExit);
        }
    }, [status]);

    // Handles && Toggles
    const handleExit = () => {
        setViewExit(false);
        setStatus(false);
    };

    if (!status) {
        return null;
    }

    return (
        <Container
            hasStatus={status}
        >
            {viewExit
        && (
            <Exit
                hasExit={viewExit}
                onClick={handleExit}
            >
                <span>
                    <BsX />
                </span>
            </Exit>
        )}
            <LottieGif ref={illustration} />
            <Content>
                <Title>
                    <strong>{status && 'Ops...'}</strong>
                    <p>
                        {
                            status
                            && 'Me parece que seus dados estão invalidos'
                        }
                    </p>
                </Title>
                <Tip
                    img={prancheta}
                    tip="Tente preencher todos os campos"
                />
                <Tip
                    img={teclado}
                    tip="Não se esqueça de desativar o caps-lock"
                />
                <Tip
                    img={senhaIncorreta}
                    tip="Caso não se lembre se sua senha basta troca-la!!"
                />
            </Content>
        </Container>
    );
};

export default CardMessage;
