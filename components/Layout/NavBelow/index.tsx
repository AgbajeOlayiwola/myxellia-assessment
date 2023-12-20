"use client"
import InputWithSvg from "@/components/Inputs/InputWithSvg"
import AccountSvg from "@/components/SVGs/AccountSvg"
import DashboardIconSvg from "@/components/SVGs/DashboardIconSvg"
import LocationIconSvg from "@/components/SVGs/LocationIconSvg"
import RequestSvg from "@/components/SVGs/RequestSvg"
import SettingsSvg from "@/components/SVGs/SettingsSvg"
import UsersSvg from "@/components/SVGs/UsersSvg"
import { useState } from "react"
import Cover from "../Cover"
import styles from "./style.module.css"
const NavBelow = () => {
  const [searchVal, setSarchVal] = useState()
  const navData = [
    {
      title: "Dashboard",
      icon: <DashboardIconSvg />,
    },
    {
      title: "Listing",
      icon: <LocationIconSvg />,
    },
    {
      title: "Users",
      icon: <UsersSvg />,
    },
    {
      title: "Account",
      icon: <AccountSvg />,
    },
    {
      title: "Request",
      icon: <RequestSvg />,
    },
    {
      title: "Settings",
      icon: <SettingsSvg />,
    },
  ]
  const activeNavItem = "Dashboard"
  return (
    <div className={styles.navBg}>
      <Cover>
        <div className={styles.navBelow}>
          <div className={styles.navItems}>
            {navData?.map((item, index) => {
              return (
                <div
                  key={index}
                  className={
                    item.title === activeNavItem
                      ? styles.activeNavItem
                      : styles.navItemsIcons
                  }
                >
                  <div>{item?.icon}</div>
                  <p>{item?.title}</p>
                </div>
              )
            })}
          </div>
          <div className={styles.serachDiv}>
            <InputWithSvg
              type="text"
              placeholder={"Search... properties, customers here"}
              onChnage={(e: any) => setSarchVal(e.target.value)}
            />
          </div>
        </div>
      </Cover>
    </div>
  )
}

export default NavBelow
