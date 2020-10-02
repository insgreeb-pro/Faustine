import SidebarChild from "./Sidebarchild"
import { FaFacebookF } from "react-icons/fa"
import { RiEarthLine } from "react-icons/ri"
import Link from "next/link"

function Bio() {
  const styles = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    whiteSpace: "nowrap",
  }

  return (
    <div style={styles}>
      <a
        href="https://www.facebook.com/insgreeb.ugm?hc_ref=SEARCH&fref=nf"
        style={{ cursor: "pointer", textDecoration: "none", color: "#232323" }}
        className="menu"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "inline-flex",
              height: "3.2vw",
              width: "3.2vw",
              margin: "0",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.7em",
            }}
          >
            <FaFacebookF />
          </div>
          <span>Facebook Insgreeb</span>
        </div>
      </a>
      <a
        href="http://insgreeb.ft.ugm.ac.id/"
        style={{ cursor: "pointer", textDecoration: "none", color: "#232323" }}
        className="menu"
      >
        <div style={{ display: "flex", alignItems: "center" }}>
          <div
            style={{
              display: "inline-flex",
              height: "3.2vw",
              width: "3.2vw",
              margin: "0",
              alignItems: "center",
              justifyContent: "center",
              fontSize: "1.7em",
            }}
          >
            <RiEarthLine />
          </div>
          <span>Website Insgreeb</span>
        </div>
      </a>
    </div>
  )
}

export default ({ activePage }) => {
  const menus = [
    {
      icon: "homepage.svg",
      label: "Home",
      page: "",
    },
    {
      icon: "TataLahan.svg",
      label: "Tata Lahan Tepat Guna",
      page: "TataLahanTepatGuna",
    },
    {
      icon: "KonservasiEnergi.svg",
      label: "Konservasi Energi",
      page: "KonservasiEnergi",
    },
    {
      icon: "PengelolaanAir.svg",
      label: "Pengelolaan Air",
      page: "PengelolaanAir",
    },
    {
      icon: "KesehatanKenyamanan.svg",
      label: "Kesehatan dan Kenyamanan",
      page: "KesehatandanKenyamanan",
    },
    {
      icon: "PengelolaanLimbah.svg",
      label: "Pengelolaan Limbah dan Material",
      page: "PengelolaanLimbahdanMaterial",
    },
    {
      icon: "PengelolaanTingkLanjut.svg",
      label: "Pengelolaan Bangunan Tingkat Lanjut",
      page: "PengelolaanBangunanTingkatLanjut",
    },
  ]

  const aktif = `${activePage}`

  const menuTag = menus.map(({ icon, label, page }) => (
    <SidebarChild
      key={`${label}`}
      icon={icon}
      label={label}
      page={page}
      aktif={aktif}
    />
  ))

  return (
    <div className="sidebar">
      {menuTag}
      <Bio />
    </div>
  )
}
