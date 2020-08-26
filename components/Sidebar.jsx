import SidebarChild from "./Sidebarchild"

export default ({ activePage }) => {
  const menus = [
    {
      icon: "homepage.svg",
      label: "Home",
      page: "index",
    },
    {
      icon: "TataLahan.svg",
      label: "Tata Lahan Tepat Guna",
      page: "TataLahanTepatGuna",
    },
    {
      icon: "PengelolaanAir.svg",
      label: "Pengelolaan Air",
      page: "PengelolaanAir",
    },
    {
      icon: "KonservasiEnergi.svg",
      label: "Konservasi Energi",
      page: "KonservasiEnergi",
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
