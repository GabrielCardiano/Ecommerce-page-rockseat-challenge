"use client"

import * as React from 'react';
import { styled } from 'styled-components';
import { Saira_Stencil_One } from 'next/font/google';
import { PrimaryInputWithSearchIcon } from './PrimaryInput';
import { CartControl } from './CartControl';
import { useFilter } from '@/hooks/useFilter';
import { FilterContext } from '@/context/FilterContext';

interface HeaderProps {

};

const sairaStencil = Saira_Stencil_One({
    subsets: ['latin'],
    weight: ['400'],
})

const TagHeader = styled.header`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 20px 160px;

    > div {
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 24px;
    }
`;

const Logo = styled.a`
    color: var(--logo-color);
    font-weight: 400;
    font-size: 40px;
    line-height: 150%;
`;

export function Header(props: HeaderProps) {
    const { setSearch, search } = useFilter();
    return (
        <TagHeader>
            <Logo className={sairaStencil.className}>Capputeeno</Logo>
            <div>
                <PrimaryInputWithSearchIcon
                value={search}
                handleChannge={setSearch}                placeholder='Procurando algo específico?' />
                <CartControl />
            </div>
        </TagHeader>
    );
};