import React from 'react';
import * as S from './styles';

interface IInput {
    label: string;
}

const Input = function ({ label, ...rest }: IInput) {
    return (
        <S.InputContainer>
            <S.InputLabel>{label}</S.InputLabel>
        </S.InputContainer>
    );
};

export default Input;
