import SidebarChild from "./Sidebarchild"
import { FaFacebookF, FaInfo } from "react-icons/fa"
import { RiEarthLine } from "react-icons/ri"
import OverlayTrigger from "react-bootstrap/OverlayTrigger"
import Popover from "react-bootstrap/Popover"

function Bio() {
  const styles = {
    position: "absolute",
    bottom: "0",
    width: "100%",
    whiteSpace: "nowrap",
  }

  return (
    <div style={styles}>
      <div
        style={{ cursor: "pointer", textDecoration: "none", color: "#232323" }}
        className="menu"
      >
        <OverlayTrigger
          placement="top"
          overlay={
            <Popover style={{ borderColor: "rgba(0,0,0,0)" }}>
              <Popover.Content className="popover-content">
                <img src="/img/logoinsgreeb.png" style={{ width: "100%" }} />
                InSGreeB merupakan tim riset dari Departemen Teknik Nuklir dan
                Teknik Fisika dengan research interest yaitu Bangunan Pintar,
                Bangunan Hijau dan Bangunan Berkelanjutan.
              </Popover.Content>
            </Popover>
          }
        >
          {/* icon */}
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
              <FaInfo />
            </div>
            <span>Insgreeb</span>
          </div>
        </OverlayTrigger>
      </div>

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
