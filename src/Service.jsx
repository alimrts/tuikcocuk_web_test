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
      <div className="my-5">
        {/* <h1 className="text-center"> İçerikler </h1> */}
      </div>
      <div className="container-fluid mb-5" style={{ marginLeft: "2vh" }}>
        <div className="row">
          <div className="col-8 mx-auto">
            <div className="row gy-4">
              {Sdata.map((val, ind) => {
                return (
                  <Card
                    key={ind}
                    imgsrc={val.imgsrc}
                    title={val.title}
                    goToName={val.goToName}
                  />
                );
              })}
            </div>
          </div>
          <div className="col">
            <div
              style={{
                backgroundColor: "#FCCF47",
                height: "30px",
                display: "flex",
                justifyContent: "center",
              }}
            >
              <span
                style={{
                  backgroundColor: "#FCCF47",
                }}
              >
                10-14 Yaş Grubu
              </span>
            </div>

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
                <Model position={[0.025, -0.6, 1]} rotation={[0, -60, 0]} />
              </Suspense>
              <OrbitControls />
            </Canvas>
          </div>
        </div>
      </div>
    </>
  );
};

export default Service;
