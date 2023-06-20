"use client"

import React from 'react';
import { FilterByType } from './FilterByType';
import { styled } from 'styled-components';

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: start;
    width: 100%;

`;

export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType/>
            
        </FilterContainer>
    );
}