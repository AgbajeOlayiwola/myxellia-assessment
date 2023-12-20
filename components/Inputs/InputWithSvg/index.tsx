import SearchSvg from "@/components/SVGs/searchSvg"
import styles from "./styles.module.css"
const InputWithSvg = ({
  type,
  placeholder,
  onChnage,
}: {
  type: string
  placeholder: string
  onChnage: any
}) => {
  return (
    <div className={styles.input}>
      <input type={type} placeholder={placeholder} onChange={onChnage} />
      <SearchSvg />
    </div>
  )
}

export default InputWithSvg
