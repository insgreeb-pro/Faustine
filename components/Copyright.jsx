import { FaFacebookF } from "react-icons/fa"
import { RiEarthLine } from "react-icons/ri"
import Button from "react-bootstrap/Button"

const title = {
  style: { fontWeight: "700", fontSize: "2em", margin: "5% 0 5% 0" },
}

export default () => {
  return (
    <>
      <div
        className="neo"
        style={{
          gridColumn: "1 / span 5",
          padding: "1%",
        }}
      >
        <div className="neoInset">
          <div>
            <p {...title}>Location</p>
            <p>
              <img src="/img/logoinsgreeb.png" />
              <br />
              <br />
              Integrated Smart and Green Building
              <br />
              Departemen Teknik Nuklir dan Teknik Fisika
              <br />
              Universitas Gadjah Mada
            </p>
          </div>
        </div>
        <div className="neoInset">
          <p {...title}>Around the Web</p>
          <div style={{ width: "100%" }}>
            <a
              href="https://www.facebook.com/insgreeb.ugm?hc_ref=SEARCH&fref=nf"
              target="_blank"
            >
              <Button
                variant="outline-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "3vw",
                  width: "3vw",
                  margin: "0 2%",
                  borderRadius: "3vw",
                  fontSize: "1.7em",
                }}
              >
                <FaFacebookF />
              </Button>
            </a>
            <a href="http://insgreeb.ft.ugm.ac.id/" target="_blank">
              <Button
                variant="outline-primary"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  justifyContent: "center",
                  height: "3vw",
                  width: "3vw",
                  margin: "0 2%",
                  borderRadius: "3vw",
                  fontSize: "1.7em",
                }}
              >
                <RiEarthLine />
              </Button>
            </a>
          </div>
        </div>
        <div className="neoInset">
          <p {...title}>About InSGreeB</p>
          <p>
            InSGreeB merupakan tim riset dari Departemen Teknik Nuklir dan
            Teknik Fisika dengan research interest yaitu Bangunan Pintar,
            Bangunan Hijau dan Bangunan Berkelanjutan.
          </p>
        </div>
        <p style={{ position: "absolute", bottom: "1%", margin: "0" }}>
          Copyright © InSGreeB 2020
        </p>
      </div>
    </>
  )
}
