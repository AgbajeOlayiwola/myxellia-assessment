import styles from "./styles.module.css"
const CountCard = ({ num, text }: { num: string; text: string }) => {
  return (
    <div className={styles.countCard}>
      <h1>{num}</h1>
      <p>{text}</p>
    </div>
  )
}

export default CountCard
