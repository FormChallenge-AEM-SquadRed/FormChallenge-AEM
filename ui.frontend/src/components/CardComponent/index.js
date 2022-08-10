import React from "react";
import {MapTo} from "@adobe/aem-react-editable-components";
import {Card, Container} from "./style";

const CardComponent = ({cardColor}) => {
    return (
        <Container>
            <Card cardColor={cardColor} />
        </Container>
    );
};

export default MapTo("reactapp/components/multifield-card")(CardComponent);
