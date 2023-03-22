import styled from 'styled-components';

interface IButtonProps {
  text: string | number;
  isOn?: boolean;
  type?: 'button' | 'submit' | 'reset';
  onClick?: () => void;
}

function Button({
  text = '',
  onClick,
  isOn = true,
  type = 'button',
}: IButtonProps) {
  return (
    <StButton onClick={onClick} isOn={isOn} type={type}>
      {text}
    </StButton>
  );
}

export default Button;

export const StButton = styled.button<{ isOn: boolean }>`
  font-size: 14px;
  font-weight: bold;
  color: white;
  background: ${props => (props.isOn ? '#0d9df2' : '#a0d2f3')};
  border: none;
  border-radius: 15px;
  padding: 6px 10px;
  transition: all 0.3s;
  cursor: pointer;
`;
