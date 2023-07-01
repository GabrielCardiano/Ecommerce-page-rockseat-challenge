'use client'

import { BackButton } from "@/components/BackButton";
import { DefaultPageLayout } from "@/components/DefaultPageLayout";
import { styled } from "styled-components";
// import { BackwardIcon } from "../../components/icons/BackwardIcon"

export interface ProductProps {
}

const Container = styled.div`
    display: flex;
    align-items: flex-start;
    flex-direction: column;
`;

export default function Product(props: ProductProps) {
    return (
        <DefaultPageLayout>
            <Container>
                <BackButton navigate="/"/>
                <section>Informações</section>
            </Container>
        </DefaultPageLayout>
    );
}
