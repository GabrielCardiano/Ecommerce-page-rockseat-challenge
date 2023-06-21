"use client"

import React from 'react';
import { FilterByType } from './FilterByType';
import { styled } from 'styled-components';
import { FilterByPriority } from './FilterByPriority';

interface FilterBarProps {

}

const FilterContainer = styled.div`
    display: flex;
    align-items: start;
    width: 100%;
    justify-content: space-between;
`;

export function FilterBar(props: FilterBarProps) {
    return (
        <FilterContainer>
            <FilterByType />
            <FilterByPriority /> 
        </FilterContainer>
    );
}