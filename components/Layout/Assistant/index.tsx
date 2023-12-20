import BulbSvg from "@/components/SVGs/BulbSvg"
import CircleCancelSvg from "@/components/SVGs/CircleCancelSvg"
import styles from "./styles.module.css"
const Assistant = () => {
  return (
    <div className={styles.vergeAssistant}>
      <BulbSvg />
      <p>Veerge Assistant</p>
      <CircleCancelSvg />
    </div>
  )
}

export default Assistant
