"use client"
import CalendarSvg from "@/components/SVGs/CalendarSvg"
import CancelSvg from "@/components/SVGs/CancelSvg"
import NotificationSvg from "@/components/SVGs/NotificationSvg"
import PlusSvg from "@/components/SVGs/PlusSvg"
import ProfileSvg from "@/components/SVGs/ProfileSvg"
import Image from "next/image"
import { useState } from "react"
import Calendar from "react-calendar"
import {
  IoIosArrowForward,
  IoMdArrowDropdown,
  IoMdArrowDropup,
} from "react-icons/io"
import Cover from "../Cover"
import styles from "./style.module.css"
const NavTop = () => {
  const [date, setDate] = useState(new Date())
  const [showData, setShowDate] = useState(false)
  const [showMore, setShowMore] = useState(false)
  return (
    <div className={styles.navBg}>
      <Cover>
        <div className={styles.navTop}>
          <div>
            <Image src="/Assets/logo.png" width={119} height={35} alt="logo" />
            <p className={styles.forMainStone}>For Mainstone</p>
          </div>
          <div className={styles.navItems}>
            <div>
              <PlusSvg />
            </div>
            <div
              className={styles.calender}
              onClick={() => setShowDate((prev) => !prev)}
            >
              <CalendarSvg />
              {showData ? (
                <div className={styles.shownCalendar}>
                  <div className={styles.calendarTop}>
                    <p>Calender</p>
                    <div>
                      <CancelSvg onClick={() => setShowDate((prev) => !prev)} />
                    </div>
                  </div>
                  <Calendar onChange={setDate} value={date} />
                </div>
              ) : null}
            </div>
            <div>
              <NotificationSvg />
            </div>
            <div className={styles.prgfileImageName}>
              <div>
                <ProfileSvg />
              </div>
              <div
                onClick={() => setShowMore((prev) => !prev)}
                className={styles.nameButton}
              >
                <p>Ahmed Ali</p>
                {showMore ? <IoMdArrowDropup /> : <IoMdArrowDropdown />}
              </div>

              {showMore ? (
                <div className={styles.more}>
                  <div className={styles.moreInner}>
                    <div>
                      <p>Support Center</p>
                    </div>
                    <IoIosArrowForward />
                  </div>
                  <hr />
                  <div className={styles.moreInner}>
                    <div>
                      <p>Switch Accounts</p>
                    </div>
                    <IoIosArrowForward />
                  </div>
                  <hr />
                  <div className={styles.moreInner}>
                    <div>
                      <p>Logout</p>
                    </div>
                    <IoIosArrowForward />
                  </div>
                </div>
              ) : null}
            </div>
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default NavTop
