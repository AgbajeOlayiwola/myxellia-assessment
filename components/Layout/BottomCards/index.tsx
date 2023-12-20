import BookmarkSvg from "@/components/SVGs/BookmarkSvg"
import DefaultImageSvg from "@/components/SVGs/DefaultImageSvg"
import LeftSvg from "@/components/SVGs/LeftSvg"
import RightSvg from "@/components/SVGs/RightSvg"
import Cover from "../Cover"
import styles from "./styles.module.css"
const BottomsCard = () => {
  return (
    <Cover>
      <div className={styles.bottomCard}>
        <div className={styles.bottomCardDIv}>
          <div className={styles.listingCards}>
            <h1>Listing Overview</h1>
            <div className={styles.viewed}>
              <div className={styles.mstViewed}>
                <p className={styles.numps}>Most Viewed</p>
                <hr />
                <div className={styles.defNone}>
                  <div className={styles.defaultIag}>
                    <DefaultImageSvg />
                  </div>
                  <h2>None</h2>
                </div>
              </div>
              <div className={styles.mstViewed}>
                <p className={styles.numps}>Most Shared</p>
                <hr />
                <div className={styles.defNone}>
                  <div className={styles.mostSHaredDef}>
                    <DefaultImageSvg />
                  </div>
                  <h2>None</h2>
                </div>
              </div>
            </div>
            <div className={styles.watchLit}>
              <p className={styles.numps}>Most Watchlisted</p>
              <div className={styles.watchListFlex}>
                <div className={styles.defNone}>
                  <div className={styles.mostSHaredDefs}>
                    <DefaultImageSvg />
                  </div>
                  <h2>None</h2>
                </div>
                <div className={styles.bookMark}>
                  <div>
                    <h1>0</h1>
                    <p className={styles.mump}>Number of watchlists</p>
                  </div>
                  <BookmarkSvg />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomCardDIvs}>
          <div className={styles.totalOutStanding}>
            <div className={styles.totalDiv}>
              <h1>₦ 0.00</h1>
              <p>Total Outstanding Balance</p>
            </div>
            <p className={styles.viewAllp}>View All</p>
          </div>
          <div className={styles.defaultSIde}>
            <div className={styles.defNone}>
              <div className={styles.mostSHaredDef}>
                <DefaultImageSvg />
              </div>
            </div>
            <div className={styles.none}>
              <h1>None</h1>
              <div>
                <p className={styles.neg}>0.00</p>
                <p className={styles.outstanding}>Outstanding Balance</p>
              </div>
            </div>
            <div className={styles.paginations}>
              <p>1/5</p>
              <div>
                <LeftSvg />
              </div>
              <div>
                <RightSvg />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.bottomCardDIv}>
          <p className={styles.topSelling}>Top Selling</p>
          <div className={styles.totalOutStanding}>
            <div className={styles.totalDiv}>
              <h1>₦ 0.00</h1>
              <p>Total Sold</p>
            </div>
          </div>
          <div className={styles.defaultSIde}>
            <div className={styles.defNone}>
              <div className={styles.mostSHaredDef}>
                <DefaultImageSvg />
              </div>
            </div>
            <div className={styles.none}>
              <h1>None</h1>
              <div>
                <p className={styles.neg}>0.00</p>
                <p className={styles.outstanding}>Whole units sold</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Cover>
  )
}

export default BottomsCard
