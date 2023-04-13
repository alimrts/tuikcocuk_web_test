import React from "react";
import { Suspense } from "react";
import Card from "./Card";
import Sdata from "./Sdata";

import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

import Model from "./Model";

const Service = () => {
  // const [action, setAction] = useState("Run Forward");
  return (
    <>
      <div
        className="my-5"
        style={{
          background: "rgba(200, 20, 20, 0.0)",
        }}
      >
        {/* <h1 className="text-center"> İçerikler </h1> */}
      </div>
      <div
        className="container-fluid mb-5"
        style={{ marginLeft: "2vh", background: "rgba(200, 20, 20, 0.0)" }}
      >
        <div
          className="row"
          style={{
            background: "rgba(200, 20, 20, 0.0)",
          }}
        >
          <div
            className="col-8 mx-auto"
            style={{
              background: "rgba(200, 20, 20, 0.0)",
            }}
          >
            <div
              className="row gy-4"
              style={{
                background: "rgba(200, 20, 20, 0.0)",
              }}
            >
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    className="service_card"
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    goToName={val.goToName}
                  />
                );
              })}
            </div>
          </div>
          <div
            className="col "
            style={{
              background: "rgba(200, 20, 20, 0.0)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span></span>
            </div>

            <Canvas
              className="col-md-4 pt-5 pt-lg-0 order-2 order-lg-1 d-flex justify-content-center flex-column"
              camera={{ position: [2, 0, 12.25], fov: 15 }}
              style={{
                backgroundColor: "#F8F8F8",
                width: "30vw",
                height: "80vh",
                cursor: "pointer",
              }}
            >
              <ambientLight intensity={1.25} />
              <ambientLight intensity={0.1} />
              <directionalLight intensity={0.4} />
              <Suspense fallback={null}>
                <Model position={[0.025, -0.6, 1]} rotation={[0, -60, 0]} />
              </Suspense>
              <OrbitControls
                enableZoom={false}
                enablePan={false}
                rotateSpeed={0.5}
                maxPolarAngle={1.5}
                minPolarAngle={1.1}
                maxAzimuthAngle={0.5}
                minAzimuthAngle={-0.5}
              />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
