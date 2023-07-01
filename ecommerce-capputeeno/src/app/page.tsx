"use client"
import Image from 'next/image'
import { FilterBar } from '../components/FilterBar'
import { ProductsList } from '@/components/ProductsList'
import { styled } from 'styled-components'

const PageWrapper = styled.main`
  background-color: var(--bg-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12px 24px;
  min-height: 100vh;
  
  @media(min-width: ${props => props.theme.desktopBreakpoint}){
    padding: 34px 160px;
  }
`;

export default function Home() {
  return (
    <PageWrapper>
      <FilterBar />
      <ProductsList />
    </PageWrapper>
  )
}
