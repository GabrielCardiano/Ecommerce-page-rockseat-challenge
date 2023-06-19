"use client"
import * as React from 'react';
import { styled } from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWithSearchIcon } from './PrimaryInput';
import { CartControl } from './CartControl';

interface HeaderProps {

};

const sairaStencil = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ['400'],
})

const TagHeader = styled.header`
    display:flex;
    alignt-items: center;
    justify-content: space-between;
    padding: 20px 160px;
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;

export function Header(props: HeaderProps) {
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWithSearchIcon placeholder='Procurando algo específico?'/>
                <CartControl/>
            </div>
        </TagHeader>
    );
};