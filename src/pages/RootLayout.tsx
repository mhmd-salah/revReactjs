import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import styles from "../Layout.module.css";

export default function RootLayout() {
  return (
    <>
      <Navbar />
      <div className={styles.outletContainer}>
        <Outlet />
      </div>
    </>
  );
}
