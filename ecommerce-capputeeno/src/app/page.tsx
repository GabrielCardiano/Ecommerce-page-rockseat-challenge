"use client"
import Image from 'next/image'
import styles from './page.module.css'
import { FilterBar } from '../components/FilterBar'
import { ProductsList } from '@/components/ProductsList'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar />
      <ProductsList />
    </main>
  )
}
