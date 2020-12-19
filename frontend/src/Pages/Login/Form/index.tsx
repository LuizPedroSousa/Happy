import React, {
    FormEvent,
    useContext,
    useEffect,
    useState,
} from 'react';
import {
    AiOutlineCheck,
    AiFillHeart,
    AiFillEye,
    AiOutlineEye,
} from 'react-icons/ai';
import { Link, useHistory } from 'react-router-dom';
import FormUsers from '../../../Components/HTMLElements/FormUsers';
import Input from '../../../Components/HTMLElements/Input';

import {
    SpanPassword,
    Options,
    Checkbox,
    CheckboxContainer,
    Footer,
} from './styles';
import api from '../../../Services/api';
import LoginContext from '../../../Store/ContextApi/Login/context';

const Form: React.FC = () => {
    // Others Hoocks
    const history = useHistory();

    // States
    const [checkbox, setCheckbox] = useState(false);
    const [viewPassword, setViewPassword] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [emailErrors, setEmailErrors] = useState<string>();
    const [passwordErros, setPasswordErrors] = useState<string>();

    // Contexts
    const { status, setStatus } = useContext(LoginContext);

    // Toggles && Handles
    const toggleCheckbox = () => setCheckbox(!checkbox);
    const toggleViewPassword = () => setViewPassword(!viewPassword);

    useEffect(() => {
        // Email Validation
        const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (email) {
            if (!emailRegex.test(email)) {
                setEmailErrors('Email invalido');
                return setEmailValidation(false);
            }
        }
        setEmailErrors('');
        return setEmailValidation(true);
    }, [email]);

    useEffect(() => {
        // Password Validation
        if (password) {
            if (!/[\D\d]{3}/g.test(password)) {
                setPasswordValidation(false);
                return setPasswordErrors('A senha deve conter pelo menos 3 caracteres.');
            }
            if (/[\D\d]{13}/g.test(password)) {
                setPasswordValidation(false);
                return setPasswordErrors('A senha deve conter no máximo 12 caracteres.');
            }
            if (!/.*[A-Z]{1}/g.test(password)) {
                setPasswordValidation(false);
                return setPasswordErrors('A senha deve conter pelo menos 1 carácter maiúsculo.');
            }
            if (/.*[!@#$%¨&*<>()=+{}[\]:;.,/?^~`´|]/g.test(password)) {
                setPasswordValidation(false);
                return setPasswordErrors('A senha não pode conter caracteres especiais.');
            }
            if (/.*[\s]/g.test(password)) {
                setPasswordErrors('A senha não pode conter espaços.');
                return setPasswordValidation(false);
            }
        }
        setPasswordErrors('');
        return setPasswordValidation(true);
    }, [password]);

    const handleLoginSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            const res = await api.post('/users/auth', {
                email,
                password,
            });

            if (checkbox) {
                localStorage.setItem('token', JSON.stringify(res.data.token));
            }
            return history.push('/users/admin/dashboard');
        } catch (err) {
            // return false
            return setStatus(!!Number(String(err).replace(/\D/gim, '')));
        }
    };
    return (
        <FormUsers
            title="Fazer login"
            buttonName="Entrar"
            onSubmit={handleLoginSubmit}
            footer={() => (
                <Footer>
                    <div>
                        <p>Não tem conta?</p>
                        <Link to="/register">
                            Cadastre-se
                        </Link>
                    </div>
                    <p>
                        É de graça
                        <span>
                            <AiFillHeart />
                        </span>
                    </p>
                </Footer>
            )}
        >
            <Input
                onChange={text => setEmail(text.target.value)}
                name="email"
                label="Email"
                inputValue={email}
                isValid={emailValidation}
                status={status}
                errors={emailErrors}
            />
            <Input
                onChange={text => setPassword(text.target.value)}
                name="password"
                label="Senha"
                isValid={passwordValidation}
                inputValue={password}
                type={viewPassword ? 'text' : 'password'}
                errors={passwordErros}
                status={status}
            >
                <SpanPassword
                    onClick={toggleViewPassword}
                >
                    {
                        viewPassword
                            ? <AiFillEye />
                            : <AiOutlineEye />
                    }
                </SpanPassword>
            </Input>
            <Options>
                <CheckboxContainer
                    onClick={toggleCheckbox}
                >
                    <Checkbox
                        htmlFor="checkbox"
                        hasChecked={checkbox}
                    >
                        <span>
                            <AiOutlineCheck />
                        </span>
                    </Checkbox>
                    <p id="checkbox">Lembrar-me</p>
                </CheckboxContainer>

                <Link to="/user/remember-password">
                    Esqueci minha senha
                </Link>
            </Options>
        </FormUsers>

    );
};

export default Form;
