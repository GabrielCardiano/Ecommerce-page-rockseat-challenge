"use client"
import Image from 'next/image'
import { FilterBar } from '../components/FilterBar'
import { ProductsList } from '@/components/ProductsList'
import { styled } from 'styled-components'
import { DefaultPageLayout } from '@/components/DefaultPageLayout'

const PageWrapper = styled.main`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default function Home() {
  return (
    <DefaultPageLayout>
      <PageWrapper>
        <FilterBar />
        <ProductsList />
      </PageWrapper>
    </DefaultPageLayout>
  )
}
