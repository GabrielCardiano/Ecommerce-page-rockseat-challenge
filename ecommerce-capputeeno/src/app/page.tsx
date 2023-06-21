import Image from 'next/image'
import styles from './page.module.css'
import { FilterBar } from '../components/FilterBar'

export default function Home() {
  return (
    <main className={styles.main}>
      <FilterBar/>
      <div>A wizard is never late</div>
    </main>
  )
}
