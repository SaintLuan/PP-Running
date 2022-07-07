import React from 'react';
import { CtaContainer } from './styles';

function Cta({
    children, action
}) {
    return(
        <CtaContainer>
            {children}
        </CtaContainer>
    )
}

export default Cta