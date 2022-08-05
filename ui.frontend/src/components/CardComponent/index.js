import React from 'react';
import { MapTo } from '@adobe/aem-react-editable-components';
import { Card, Container } from './indexStyled.js';

const CardComponent = ({color}) => {
    return(
        <Container>
             <Card cardcolor = {color} />
        </Container>
           
    );
}





export default MapTo('reactapp/components/card-component')(CardComponent);