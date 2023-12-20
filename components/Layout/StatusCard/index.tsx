import StatusSvg from "@/components/SVGs/StatusSvg"
import styles from "./styles.module.css"
const StatusCard = ({
  status,
  percentage,
  amount,
}: {
  status: string
  percentage: string
  amount: string
}) => {
  return (
    <div className={styles.statusCard}>
      <h1
        className={
          status === "Balance"
            ? styles.possitive
            : status === "Deposit"
            ? styles.deposit
            : styles.failed
        }
      >
        ₦ {amount}
      </h1>
      <div className={styles.positiveBal}>
        <p className={styles.positivePs}>{status}</p>
        <StatusSvg />
        <p
          className={
            status === "Balance" || status === "Deposit"
              ? styles.positiveP
              : styles.neg
          }
        >
          {percentage}%
        </p>
      </div>
    </div>
  )
}

export default StatusCard
