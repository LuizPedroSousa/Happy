import React, { FormEvent, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import FormUsers from '../../../Components/HTMLElements/FormUsers';
import Input from '../../../Components/HTMLElements/Input';
import api from '../../../Services/api';

const Form: React.FC = () => {
    // Others Hoocks
    const history = useHistory();

    // States
    const [name, setName] = useState<string>();
    const [surname, setSurname] = useState<string>();
    const [email, setEmail] = useState<string>();
    const [password, setPassword] = useState<string>();
    const [nameValidation, setNameValidation] = useState(false);
    const [surnameValidation, setSurnameValidation] = useState(false);
    const [emailValidation, setEmailValidation] = useState(false);
    const [passwordValidation, setPasswordValidation] = useState(false);
    const [nameErrors, setNameErrors] = useState<string>();
    const [surnameErrors, setSurnameErrors] = useState<string>();
    const [emailErrors, setEmailErrors] = useState<string>();
    const [passwordErrors, setPasswordErrors] = useState<string>();
    const [validation, setValidation] = useState(false);

    // Validations
    useEffect(() => {
        if (name) {
            if (!/[\D\d]{4}/g.test(name)) {
                setNameErrors('O nome deve conter no mínimo 4 caracteres');
                return setNameValidation(false);
            }
            if (/\s+$|^[\s]+$/g.test(name)) {
                setNameErrors('O nome não deve ter espaços sobrando');
                return setNameValidation(false);
            }
            if (/[\D\d]{15}/.test(name)) {
                setNameErrors('O nome deve conter no máximo 14 caracteres');
                return setNameValidation(false);
            }

            if (/.*[\s]{2}/g.test(name)) {
                setNameErrors('O nome não pode conter duplo espaço');
                return setNameValidation(false);
            }
            setNameErrors('');
            return setNameValidation(true);
        }
        return setNameValidation(false);
    }, [name]);

    useEffect(() => {
        if (surname) {
            if (!/[\D\d]{4}/g.test(surname)) {
                setSurnameErrors('O sobrenome deve conter no mínimo 4 caracteres');
                return setSurnameValidation(false);
            }
            if (/\s+$|^[\s]+$/g.test(surname)) {
                setSurnameErrors('O sobrenome não deve conter espaços sobrando');
                return setSurnameValidation(false);
            }
            if (/[\D\d]{15}/.test(surname)) {
                setSurnameErrors('O sobrenome deve conter no máximo 14 caracteres');
                return setSurnameValidation(false);
            }

            if (/.*[\s]{2}/g.test(surname)) {
                setSurnameErrors('O sobrenome não pode conter duplo espaço');
                return setSurnameValidation(false);
            }
            setSurnameErrors('');
            return setSurnameValidation(true);
        }
        return setSurnameValidation(false);
    }, [surname]);

    useEffect(() => {
        if (email) {
            const emailRegex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
            if (!emailRegex.test(email)) {
                setEmailErrors('Email invalido');
                return setEmailValidation(false);
            }
            setEmailErrors('');
            return setEmailValidation(true);
        }
        return setEmailValidation(false);
    }, [email]);

    useEffect(() => {
        if (password) {
            if (!/[\D\d]{3}/g.test(password)) {
                setPasswordValidation(false);
                return setPasswordErrors('A senha deve conter no mínimo 3 caracteres.');
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
            setPasswordErrors('');
            return setPasswordValidation(true);
        }
        return setPasswordValidation(false);
    }, [password]);

    useEffect(() => {
        if (nameValidation && surnameValidation && emailValidation && passwordValidation) {
            return setValidation(true);
        }
        return setValidation(false);
    }, [
        nameValidation,
        surnameValidation,
        emailValidation,
        passwordValidation,
    ]);

    // Handles && Toggles
    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        try {
            await api.post('/users/create', {
                name,
                surname,
                email,
                password,
            });
            return history.push('/register/success');
        } catch (err) {
            return history.push('/register/fail');
        }
    };

    return (
        <FormUsers
            title="Cadastro"
            buttonName="Criar conta"
            exitPath="/login"
            onSubmit={handleSubmit}
            isValid={validation}
        >
            <Input
                name="name"
                label="Nome"
                inputValue={name}
                isValid={nameValidation}
                onChange={txt => setName(txt.target.value)}
                errors={nameErrors}

            />
            <Input
                name="surname"
                label="Sobrenome"
                inputValue={surname}
                isValid={surnameValidation}
                onChange={txt => setSurname(txt.target.value)}
                errors={surnameErrors}

            />
            <Input
                name="email"
                label="Email"
                inputValue={email}
                isValid={emailValidation}
                onChange={txt => setEmail(txt.target.value)}
                errors={emailErrors}

            />
            <Input
                name="password"
                label="Senha"
                inputValue={password}
                isValid={passwordValidation}
                onChange={txt => setPassword(txt.target.value)}
                errors={passwordErrors}
            />
        </FormUsers>
    );
};

export default Form;
