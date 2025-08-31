// src/components/common/Card.jsx
import styled from 'styled-components';

export const WidgetCard = styled.div`
  background-color: ${({ theme }) => theme.colors.lightNavy};
  border: 1px solid ${({ theme }) => theme.colors.teal}30;
  padding: 2.5rem;
  border-radius: ${({ theme }) => theme.borderRadius};
  position: relative;
  z-index: 2;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.2);
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    border-radius: ${({ theme }) => theme.borderRadius};
    padding: 1px;
    background: linear-gradient(135deg, ${({ theme }) => theme.colors.teal}50, transparent 40%);
    -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
    -webkit-mask-composite: destination-out;
    mask-composite: exclude;
  }
`;