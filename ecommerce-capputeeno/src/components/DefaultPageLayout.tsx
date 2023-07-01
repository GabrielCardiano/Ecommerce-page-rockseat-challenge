'use client'

import { styled } from "styled-components"

export const DefaultPageLayout = styled.div`
    background-color: var(--bg-primary);
    padding: 12px 24px;
    min-height: 100vh;

    @media(min-width: ${props => props.theme.desktopBreakpoint}){
        padding: 34px 160px;
    }
`;