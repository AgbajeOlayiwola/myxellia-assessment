import Assistant from "@/components/Layout/Assistant"
import BottomsCard from "@/components/Layout/BottomCards"
import Footer from "@/components/Layout/Footer"
import NavBelow from "@/components/Layout/NavBelow"
import NavTop from "@/components/Layout/NavTop"
import TopCards from "@/components/Layout/TopCards"
import Welcome from "@/components/Layout/Welcome"
import styles from "./page.module.css"
export default function Home() {
  return (
    <main className={styles.main}>
      <NavTop />
      <NavBelow />
      <Welcome />
      <TopCards />
      <BottomsCard />
      <div className={styles.Assistant}>
        <Assistant />
      </div>
      <Footer />
    </main>
  )
}
