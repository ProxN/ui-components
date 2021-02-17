import { forwardRef } from 'react';
import styled, { css } from 'styled-components';
import { Size } from '../types/commonTypes';
import { lighten } from '../utils/color';

interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  inputSize?: Size;
  id?: string;
  iconLeft?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

const Sizes = {
  small: '.4rem 1rem',
  middle: '0.6rem 1.2rem',
  large: '.8rem 1.6rem',
};

const BaseInput = styled.input<InputProps>`
  ${({ theme, inputSize }) => css`
    border: 1px solid ${theme.colors.borderColor};
    background-color: ${theme.colors.bg.main};
    border-radius: ${theme.borderRadius}rem;
    color: ${theme.colors.text};
    font-size: ${inputSize === 'large' ? '1.5rem' : theme.fontSizeBase};
    line-height: ${theme.lineHeight};
    transition: ${theme.transition};
    padding: ${inputSize && Sizes[inputSize]};

    ::placeholder {
      color: ${theme.colors.textSecondary};
    }
    :hover {
      border-color: ${theme.colors.primary.main};
    }
    :focus {
      border-color: ${theme.colors.primary.main};
      box-shadow: 0 0 0.3rem ${lighten(theme.colors.primary.main, 0.45)};
    }
  `};

  display: inline-block;
  width: 100%;
  outline: none;
`;

const IconBox = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  display: inline-block;
  color: inherit;
  position: absolute;
  text-align: center;
  svg {
    stroke: currentColor;
    width: 100%;
    height: 100%;
  }
`;

const InputBox = styled.div<{ left?: boolean; right?: boolean }>`
  position: relative;
  display: flex;
  align-items: center;
  & ${BaseInput} {
    ${({ left }) =>
      left &&
      css`
        padding-left: 3rem;
      `}

    ${({ right }) =>
      right &&
      css`
        padding-right: 3rem;
      `};
  }

  & ${IconBox} {
    ${({ left }) =>
      left &&
      css`
        left: 1rem;
      `}

    ${({ right }) =>
      right &&
      css`
        right: 1rem;
      `}
  }
`;

type Ref = HTMLInputElement;

const Input = forwardRef<Ref, InputProps>((props, ref) => {
  const { inputSize = 'middle', iconLeft, rightIcon, ...rest } = props;

  const input = <BaseInput inputSize={inputSize} ref={ref} {...rest} />;

  if (iconLeft || rightIcon) {
    return (
      <InputBox left={!!iconLeft} right={!!rightIcon}>
        <IconBox>{iconLeft || rightIcon}</IconBox>
        {input}
      </InputBox>
    );
  }

  return input;
});

export default Input;
