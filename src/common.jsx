import React from "react";

import { NavLink } from "react-router-dom";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { Suspense } from "react";

import Model from "./Model";

const Common = (props) => {
  return (
    <>
      <section id="header" className="d-flex align-items-center">
        <div className="container-fluid ">
          <div className="row">
            <div className="col-10 mx-auto">
              <div className="row">
                <div className="col-md-6 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column">
                  <h1>
                    <strong className="brand-name"> {props.name} </strong>
                    platformuna HOŞGELDİNİZ
                  </h1>
                  <h2 className="my-3">
                    Birlikte çok eğlenceli vakit geçirmeye hazır mısın? Hemen
                    başlayalım hadi!
                  </h2>
                  <div className="mt-3">
                    <NavLink to={props.visit} className="btn-get-started">
                      {props.btname}
                    </NavLink>
                  </div>
                </div>
                <div className="col-lg-6 order-1 order-lg-2 header-img">
                  {/* <img
                    src={props.imgsrc}
                    className="img-fluid animated"
                    alt="home img"
                  /> */}
                  <Canvas
                    camera={{ position: [2, 0, 12.25], fov: 15 }}
                    style={{
                      backgroundColor: "#F8F8F8",
                      width: "30vw",
                      height: "100vh",
                    }}
                  >
                    <ambientLight intensity={1.25} />
                    <ambientLight intensity={0.1} />
                    <directionalLight intensity={0.4} />
                    <Suspense fallback={null}>
                      <Model
                        position={[0.025, -0.6, 1]}
                        rotation={[0, -60, 0]}
                      />
                    </Suspense>
                    <OrbitControls />
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
