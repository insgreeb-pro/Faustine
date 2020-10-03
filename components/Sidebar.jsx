import SidebarChild from "./Sidebarchild"

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

  return <div className="sidebar">{menuTag}</div>
}
