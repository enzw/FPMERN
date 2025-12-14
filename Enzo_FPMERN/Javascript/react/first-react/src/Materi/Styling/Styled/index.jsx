import React from "react";
import styled from "styled-components"

// ini styled css, styled.komponen ap yang mau di styling
const Button = styled.button`
    border-radius: 32px;
    border: 0px none;
    padding: 14px 28px;
    font-size: 16px;
    cursor: pointer;
    background-color: aqua;

    &:hover {
        background-color: aquamarine;
    }
`;

export default class Styled extends React.Component {

    render() {
        return (
            <div>
                {/* pake tag sesuai komponen styled di atas misal <Button> */}
                <Button>Enzo</Button>
            </div>
        )
    }
}