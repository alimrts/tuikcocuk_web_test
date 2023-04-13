import React from "react";

import { NavLink } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Html, useProgress } from "@react-three/drei";
import { Suspense } from "react";

import Model from "./Model";
import "./App.css";

function Loader() {
  const { progress } = useProgress();
  return (
    <Html center>
      {" "}
      <div
        style={{
          fontSize: 24,
          color: "black",
          background: "rgba(200, 20, 20, 0.1)",
        }}
      >
        {progress} % yükleniyor
      </div>
    </Html>
  );
}

const Common = (props) => {
  return (
    <>
      <section
        id="header"
        className="d-flex align-items-center"
        style={{
          backgroundColor: "rgba(52, 52, 52, 0.0)",
        }}
      >
        <div
          className="container-fluid"
          style={{
            background: "rgba(200, 20, 20, 0.0)",
          }}
        >
          <div
            className="row"
            style={{
              background: "rgba(200, 20, 20, 0.1)",
              boxShadow:
                "0 4px 8px 0 rgba(200, 20, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
            }}
          >
            <div
              className="col-10 mx-auto"
              style={{
                background: "rgba(200, 20, 20, 0.0)",
              }}
            >
              <div className="row">
                <div
                  className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column "
                  style={{
                    background: "rgba(200, 20, 20, 0.1)",
                  }}
                >
                  <h1
                    style={{
                      background: "rgba(200, 20, 20, 0.0)",
                    }}
                  >
                    <strong
                      className="brand-name"
                      style={{
                        background: "rgba(200, 20, 20, 0.0)",
                      }}
                    >
                      {" "}
                      {props.name}{" "}
                    </strong>
                    platformuna HOŞGELDİNİZ
                  </h1>
                  <h2
                    className="my-3"
                    style={{
                      background: "rgba(200, 20, 20, 0.0)",
                    }}
                  >
                    Birlikte çok eğlenceli vakit geçirmeye hazır mısın? Hemen
                    başlayalım hadi!
                  </h2>
                  <div
                    className="mt-3"
                    style={{
                      background: "rgba(200, 20, 20, 0.0)",
                    }}
                  >
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>

                <div
                  className="col-md-6 order-1 order-lg-2 header-img"
                  style={{
                    background: "rgba(200, 20, 20, 0.0)",
                  }}
                >
                  <Canvas
                    className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
                    camera={{ position: [2, 0, 9.25], fov: 15 }}
                    style={{
                      minWidth: "30vw",
                      minHeight: "60vh",
                      color: "black",
                      cursor: "pointer",
                      background: "rgba(200, 20, 20, 0.1)",
                      boxShadow:
                        "0 4px 8px 0 rgba(200, 200, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                    }}
                  >
                    <color attach="background" args={["#F3E1E1"]} />
                    <ambientLight intensity={1.25} />

                    <directionalLight intensity={0.4} />
                    <Suspense fallback={<Loader />}>
                      <Model
                        position={[0.925, -0.6, 1]}
                        rotation={[0, -60, 0]}
                      />
                    </Suspense>
                    <OrbitControls
                      enableZoom={false}
                      enablePan={false}
                      rotateSpeed={0.5}
                      maxPolarAngle={1.5}
                      minPolarAngle={1.4}
                      maxAzimuthAngle={0.5}
                      minAzimuthAngle={-0.5}
                    />
                    <Html distanceFactor={2.5} position={[-1.2, 1.15, 1]}>
                      {
                        <div className="card">
                          <img
                            src={props.imgsrc}
                            className="card-img-top"
                            alt={props.imgsrc}
                          />
                          <div
                            className="card-body"
                            style={{
                              minWidth: "16vw",
                              minHeight: "20vh",
                              color: "black",
                              cursor: "pointer",
                              textAlign: "left",
                              fontSize: "10",
                              boxShadow:
                                "0 4px 8px 0 rgba(200, 200, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19)",
                            }}
                          >
                            Merhaba Ayşe, bugün itibarıyla 10 yıl 8 ay 13
                            günlüksün.
                            <br />
                            Senin isminde Antalya ilinde 40386, Türkiye’de
                            963.436 kişi var.
                            <br />
                            Antalya ilinde seninle aynı tarihte doğan 458,
                            Türkiye’de 6510 kişi var.
                            <br />
                            Senin yaş ve cinsiyetine göre boyun, ortanca değerin
                            3 cm. üstünde.
                            <br />
                            Senin yaş ve cinsiyetine göre kilon, ortanca değerin
                            1 kg. altında.
                          </div>
                        </div>
                      }
                    </Html>
                  </Canvas>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Common;
