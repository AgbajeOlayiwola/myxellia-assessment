import CustomerViewSvg from "@/components/SVGs/CustomerViewSvg"
import LeftSvg from "@/components/SVGs/LeftSvg"
import ProperTyViewSvg from "@/components/SVGs/ProperTyViewSvg"
import RightArrowSvg from "@/components/SVGs/RightArrowSvg"
import RightSvg from "@/components/SVGs/RightSvg"
import CountCard from "../CountCard"
import Cover from "../Cover"
import StatusCard from "../StatusCard"
import styles from "./styles.module.css"
const TopCards = () => {
  const months = [
    "Jan",
    "Feb",
    "Mar",
    "Apr",
    "May",
    "Jun",
    "Jul",
    "Aug",
    "Sep",
    "Oct",
    "Nov",
    "Dec",
  ]
  return (
    <Cover>
      <div className={styles.covFlex}>
        <div className={styles.overViwcard}>
          <div className={styles.overViewTop}>
            <div className={styles.overVIEWTITLE}>
              <h1>Sales Overview</h1>
              <p>Showing overview Jan 2022 - Sep 2022</p>
            </div>
            <div>
              <button className={styles.viewTransBtn}>View Transactions</button>
            </div>
          </div>
          <div className={styles.periods}>
            <p className={styles.inactive}>1 Week</p>
            <p className={styles.inactive}>1 Month</p>
            <p className={styles.activePeroiod}>1 Year</p>
          </div>
          <hr />
          <div className={styles.overviewBtm}>
            <div className={styles.dateMap}>
              <div className={styles.buttonCov}>
                <LeftSvg />
              </div>
              <div className={styles.dates}>
                <hr />
                <div className={styles.months}>
                  {months.map((item, index) => {
                    return <p key={index}>{item}</p>
                  })}
                </div>
              </div>
              <div className={styles.buttonCov}>
                <RightSvg />
              </div>
            </div>
            <div className={styles.cards}>
              <div>
                <StatusCard status="Balance" percentage="0" amount="0.00" />
              </div>
              <div>
                <StatusCard status="Deposit" percentage="0" amount="0.00" />
              </div>
              <div>
                <StatusCard status="Balance" percentage="0" amount="0.00" />
              </div>
              <div>
                <StatusCard status="Withdrawal" percentage="0" amount="0.00" />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.cardsFlex}>
          <div className={styles.cardCov}>
            <div className={styles.viewAllFlex}>
              <div>
                <ProperTyViewSvg />
                <p className={styles.props}>Property Overview</p>
              </div>
              <p className={styles.viewAll}>
                View All <RightArrowSvg />
              </p>
            </div>
            <div className={styles.countCards}>
              <CountCard />
              <CountCard />
              <CountCard />
            </div>
          </div>
          <div>
            <div className={styles.cardCov}>
              <div className={styles.viewAllFlex}>
                <div>
                  <CustomerViewSvg />
                  <p className={styles.props}>Property Overview</p>
                </div>
                <p className={styles.viewAll}>
                  View All <RightArrowSvg />
                </p>
              </div>
              <div className={styles.countCards}>
                <CountCard />
                <CountCard />
                <CountCard />
                <CountCard />
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cover>
  )
}

export default TopCards
