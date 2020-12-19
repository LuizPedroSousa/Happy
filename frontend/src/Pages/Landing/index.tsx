import React from 'react';
import { Provider, Consumer } from '../../Store/ContextApi/Modals/Landing/provider';
import LandingContent from './LandingContent';
import Modal from './Modal';

const Landing: React.FC = () => (
    <Provider>
        <Consumer>
            {() => (
                <>
                    <LandingContent />
                    <Modal />
                </>
            )}
        </Consumer>
    </Provider>
);

export default Landing;
