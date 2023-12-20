import Image from "next/image"
import Cover from "../Cover"
import styles from "./styles.module.css"
const Welcome = () => {
  return (
    <Cover>
      <div className={styles.welcome}>
        <div className={styles.welcomeName}>
          <Image
            src={"/Assets/Rectangle.png"}
            width={29}
            height={29}
            alt="welcome"
          />
          <h1>Hi Ahmed</h1>
        </div>
        <p className={styles.welcomeP}>Welcome to your Dashboard</p>
      </div>
    </Cover>
  )
}

export default Welcome
