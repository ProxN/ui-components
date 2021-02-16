import styled, { css } from 'styled-components';
import Loader from '../Loader';
import { Status, Size } from '../types/commonTypes';
import { getColor, isLight } from '../utils/color';

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLElement> {
  color?: Status;
  size?: Size;
  shape?: 'circle' | 'round';
  icon?: React.ReactNode;
  outline?: boolean;
  link?: boolean;
  block?: boolean;
  loading?: boolean;
  onClick?: () => void;
}

const Sizes = {
  small: '.4rem 1rem',
  middle: '0.6rem 1.2rem',
  large: '1.2rem 1.6rem',
};

const BaseButton = styled.button<ButtonProps>`
  ${({ theme, size }) => css`
    font-size: ${theme.fontSizeBase};
    border-radius: ${theme.borderRadius}rem;
    transition: ${theme.transition};
    color: ${theme.colors.text};
    padding: ${Sizes[size as keyof typeof Sizes]};
  `};
  background: transparent;
  border: 1px solid transparent;
  letter-spacing: 0.01em;
  font-weight: 400;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  user-select: none;
  outline: none;
  font-family: inherit;
  white-space: nowrap;
  text-transform: none;
  box-shadow: 0 2.1px 0 rgb(0 0 0 / 2.5%);

  ${({ shape }) =>
    shape &&
    css`
      border-radius: ${shape === 'round' ? '30rem' : '50%'};
      width: ${shape === 'circle' && ' 3.4rem'};
      height: ${shape === 'circle' && ' 3.4rem'};
      padding: ${shape === 'circle' && '.4rem 0'};
    `};

  ${({ block }) =>
    block &&
    css`
      width: 100%;
      display: block;
    `};

  :disabled {
    cursor: not-allowed;
  }
`;

const IconBox = styled.span`
  width: 1.6rem;
  height: 1.6rem;
  display: inline-block;
  color: inherit;
  text-align: center;
  svg {
    width: 100%;
    height: 100%;
  }
`;

const ColorButton = styled(BaseButton)`
  ${({ theme, color }) => {
    const col = getColor(theme.colors, color as string, 'main');
    return css`
      background: ${col};
      color: ${isLight(col) ? theme.colors.text : '#fff'};
      border-color: ${col};
      :hover {
        background: ${getColor(theme.colors, color as string, 'dark')};
      }
      :disabled {
        background: ${getColor(theme.colors, color as string, 'light')};
      }
    `;
  }}
`;

const OutlineButton = styled(BaseButton)`
  ${({ theme, color }) => {
    const col = getColor(theme.colors, color as string, 'main');
    return css`
      background: transparent;
      color: ${theme.colors.text};
      border-color: ${col};
      :hover {
        color: ${isLight(col) ? theme.colors.text : '#fff'};
        background: ${col};
      }
      :disabled {
        background: transparent;
        color: ${theme.colors.text};
      }
    `;
  }}
`;

const LinkButton = styled(BaseButton)`
  ${({ theme, color }) =>
    css`
      background: transparent;
      border-color: transparent;
      color: ${getColor(theme.colors, color as string, 'main')};
      box-shadow: unset;
      :hover {
        color: ${getColor(theme.colors, color as string, 'light')};
      }
    `}
`;

const getStyledButton = ({ outline, link }: { outline?: boolean; link?: boolean }) => {
  if (outline) {
    return OutlineButton;
  }
  if (link) {
    return LinkButton;
  }
  return ColorButton;
};

const Button: React.FC<ButtonProps> = (props) => {
  const {
    color = 'default',
    size = 'middle',
    link,
    loading,
    outline,
    icon,
    children,
    ...rest
  } = props;

  const StyledButton = getStyledButton({ outline, link });

  return (
    <StyledButton color={color} size={size} outline={outline} {...rest}>
      {icon && (
        <IconBox style={{ marginRight: children ? '.8rem' : '0' }}>{icon}</IconBox>
      )}
      {loading ? <Loader size='small' color='default' /> : children}
    </StyledButton>
  );
};

export default Button;
