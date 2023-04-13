import React, { useState } from "react";

const Contact = () => {
  const [data, setData] = useState({
    fullname: "",
    phone: "",
    email: "",
    msg: "",
  });
  const InputEvent = (event) => {
    const { name, value } = event.target;

    setData((preVal) => {
      return {
        ...preVal,
        [name]: value,
      };
    });
  };
  const formSubmit = (e) => {
    e.preventDefault();
    alert(
      `My Name is ${data.fullname}.
      number is ${data.phone},
      email is ${data.email} and
        here is what i want to say  ${data.msg}`
    );
  };
  return (
    <>
      <div
        className="my-5"
        style={{
          background: "rgba(200, 20, 20, 0.1)",
        }}
      >
        <h1
          className="text-center"
          style={{
            background: "rgba(200, 20, 20, 0.0)",
          }}
        >
          {" "}
          Bizimle İletişime Geçin
        </h1>
      </div>
      <div
        className="container contact_div"
        style={{
          background: "rgba(200, 20, 20, 0.0)",
        }}
      >
        <div
          className="row"
          style={{
            background: "rgba(200, 20, 20, 0.0)",
          }}
        >
          <div className="col-md-6 col-10 mx-auto">
            <form onSubmit={formSubmit}>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Ad Soyad{" "}
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="fullname"
                  value={data.fullname}
                  onChange={InputEvent}
                  placeholder="Adınızı Giriniz"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Telefon Numarası
                </label>
                <input
                  type="number"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="phone"
                  value={data.phone}
                  onChange={InputEvent}
                  placeholder="Numaranızı Giriniz"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlInput1" class="form-label">
                  Email Adresi
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="exampleFormControlInput1"
                  name="email"
                  value={data.email}
                  onChange={InputEvent}
                  placeholder="ornek@ornek.com"
                />
              </div>
              <div className="mb-3">
                <label for="exampleFormControlTextarea1" class="form-label">
                  Mesaj{" "}
                </label>
                <textarea
                  className="form-control"
                  id="exampleFormControlTextarea1"
                  rows="3"
                  name="msg"
                  value={data.msg}
                  onChange={InputEvent}
                  placeholder="Mesajınız"
                ></textarea>
              </div>
              <div className="col-12">
                <button className="btn btn-outline-primary"> Gönder</button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
