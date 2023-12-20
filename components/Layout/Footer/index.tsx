import LockSvg from "@/components/SVGs/LockSvg"
import styles from "./styles.module.css"
const Footer = () => {
  return (
    <div className={styles.footer}>
      <p>
        <LockSvg />
        End-to-end encryption
      </p>
    </div>
  )
}

export default Footer
