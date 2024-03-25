import * as React from "react";
import img5 from "./img/mapnek.png";

function Footer() {
  return (
    <>
      <div className="div">
        <div className="div-2">
          <div className="column">
            <div className="div-3">
              <div className="div-4">
                <div className="div-5">
                  <div className="div-6" />
                  <div className="div-7" />
                  <div className="div-8" />
                  <div className="div-9">Rhythm House</div>
                </div>
                <div className="div-10">Contact Us</div>
                <div className="div-11">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3867ebf889624d9e7a83e8b0cafff7e6a3ac007517fdb75ace3b7414ec945e86?"
                    className="img"
                  />
                  <div className="div-12">
                    590 Cach Mang Thang Tam, Ward 11, District 3, HCM
                  </div>
                </div>
                <div className="div-13">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/fcb69222e5d61cc9af49db599119f82cf468dabe5fcbe71dc5eae2b9cfdf0db3?"
                    className="img"
                  />
                  <div className="div-14">xxxx@gmail.com</div>
                </div>
                <div className="div-15">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/3c3cb131fcedcf83310305a9c335750226fa53562d085876e5139200382d096a?"
                    className="img"
                  />
                  <div className="div-16">000000000</div>
                </div>
                <div className="div-17">
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/d0dad3146a4a100d4251a5155fbcfc33fc601b991ff2d707cbf0b466f8a95470?"
                    className="img-2"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/e974bdce026e98ce850dad5ab72a416b22242e0c35449f930b0beaf9f23673c6?"
                    className="img-3"
                  />
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/a3aa860d6926266fbc1f3ea265a0cfc015678b84330d799c946fe121a97485ac?"
                    className="img-4"
                  />
                </div>
              </div>
              <div className="div-18" />
              <div className="div-19">
                <div className="div-20">Product</div>
                <div className="div-21">Album-Band</div>
                <div className="div-22">Album-Solo</div>
                <div className="div-23">Album-Movie</div>
                <div className="div-24">Magazine</div>
                <div className="div-25">Concert</div>
              </div>
            </div>
          </div>
          <div className="column-2">
            <div className="div-26">
              <div className="div-27">
                <div className="div-28">Navigation</div>
                <div className="div-29">Home</div>
                <div className="div-30">Album</div>
                <div className="div-31">Event</div>
                <div className="div-32">Membership</div>
                <div className="div-33">About Us</div>
                <div className="div-34">Contact Us</div>
              </div>
              <div className="div-35">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3919.2825779582945!2d106.6622787737751!3d10.789655958952158!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x31752f631cb7c4b7%3A0xd152d83450f68d15!2sFPT%20Aptech!5e0!3m2!1svi!2s!4v1711339077607!5m2!1svi!2s"
                  width="304"
                  height="224"
                  style={{ border: "0" }}

                  allowfullscreen=""
                  loading="lazy"
                ></iframe>
                <div className="div-36">
                  590 Cach Mang Thang Tam, Ward 11, District 3, HCM
                </div>
                <div className="div-37">
                  @2024 Rhythm House. All rights reserved.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <style jsx>{`
        .div {
          background-color: var(--Cold-Grey-black, #000);
          padding: 38px 80px 0 39px;
        }
        @media (max-width: 991px) {
          .div {
            padding: 0 20px;
          }
        }
        .div-2 {
          gap: 20px;
          display: flex;
        }
        @media (max-width: 991px) {
          .div-2 {
            flex-direction: column;
            align-items: stretch;
            gap: 0px;
          }
        }
        .column {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 38%;
          margin-left: 0px;
        }
        @media (max-width: 991px) {
          .column {
            width: 100%;
          }
        }
        .div-3 {
          display: flex;
          flex-grow: 1;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-3 {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
          }
        }
        .div-4 {
          display: flex;
          flex-direction: column;
          margin: auto 0;
        }
        .div-5 {
          align-items: center;
          display: flex;
          gap: 6px;
          font-size: 22px;
          color: #fff;
          font-weight: 300;
          padding: 12px 0;
        }
        .div-6 {
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 4px;
          background-color: #fff;
          align-self: stretch;
          width: 4px;
          height: 20px;
          margin: auto 0;
        }
        .div-7 {
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 4px;
          background-color: #fff;
          align-self: stretch;
          width: 4px;
          height: 16px;
          margin: auto 0;
        }
        .div-8 {
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 4px;
          background-color: #fff;
          align-self: stretch;
          width: 4px;
          height: 12px;
          margin: auto 0;
        }
        .div-9 {
          font-family: Roboto, sans-serif;
          align-self: stretch;
        }
        .div-10 {
          color: var(--Cold-Grey-white, #fff);
          align-self: center;
          margin-top: 58px;
          font: 700 18px Roboto, sans-serif;
        }
        @media (max-width: 991px) {
          .div-10 {
            margin-top: 40px;
          }
        }
        .div-11 {
          display: flex;
          margin-top: 27px;
          gap: 13px;
          font-size: 13px;
          color: #fff;
          font-weight: 400;
        }
        .img {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 24px;
        }
        .div-12 {
          font-family: Roboto, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
        }
        .div-13 {
          align-self: start;
          display: flex;
          margin-top: 16px;
          gap: 14px;
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-13 {
            white-space: initial;
          }
        }
        .div-14 {
          font-family: Roboto, sans-serif;
          flex-grow: 1;
          flex-basis: auto;
          margin: auto 0;
        }
        .div-15 {
          align-self: start;
          display: flex;
          margin-top: 20px;
          gap: 13px;
          font-size: 14px;
          color: #fff;
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-15 {
            white-space: initial;
          }
        }
        .div-16 {
          font-family: Roboto, sans-serif;
          margin: auto 0;
        }
        .div-17 {
          align-self: center;
          display: flex;
          margin-top: 39px;
          gap: 16px;
        }
        .img-2 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 30px;
        }
        .img-3 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 30px;
        }
        .img-4 {
          aspect-ratio: 1;
          object-fit: auto;
          object-position: center;
          width: 30px;
        }
        .div-18 {
          border-color: rgba(255, 255, 255, 1);
          border-style: solid;
          border-width: 1px;
          background-color: #fff;
          width: 1px;
          height: 368px;
        }
        .div-19 {
          align-self: start;
          display: flex;
          margin-top: 18px;
          flex-direction: column;
          font-size: 14px;
          color: var(--Cold-Grey-white, #fff);
          font-weight: 400;
          white-space: nowrap;
        }
        @media (max-width: 991px) {
          .div-19 {
            white-space: initial;
          }
        }
        .div-20 {
          font: 700 18px Roboto, sans-serif;
        }
        .div-21 {
          font-family: Roboto, sans-serif;
          margin-top: 39px;
        }
        @media (max-width: 991px) {
          .div-21 {
            margin-right: 6px;
          }
        }
        .div-22 {
          font-family: Roboto, sans-serif;
          margin-top: 22px;
        }
        .div-23 {
          font-family: Roboto, sans-serif;
          margin-top: 22px;
        }
        .div-24 {
          font-family: Roboto, sans-serif;
          margin-top: 22px;
        }
        .div-25 {
          font-family: Roboto, sans-serif;
          margin-top: 19px;
        }
        .column-2 {
          display: flex;
          flex-direction: column;
          line-height: normal;
          width: 62%;
          margin-left: 20px;
        }
        @media (max-width: 991px) {
          .column-2 {
            width: 100%;
          }
        }
        .div-26 {
          display: flex;
          gap: 20px;
          justify-content: space-between;
        }
        @media (max-width: 991px) {
          .div-26 {
            max-width: 100%;
            margin-top: 40px;
            flex-wrap: wrap;
          }
        }
        .div-27 {
          align-self: start;
          display: flex;
          margin-top: 19px;
          flex-direction: column;
          font-size: 14px;
          color: var(--Cold-Grey-white, #fff);
          font-weight: 400;
        }
        .div-28 {
          font: 700 18px Roboto, sans-serif;
        }
        .div-29 {
          font-family: Roboto, sans-serif;
          margin-top: 35px;
        }
        .div-30 {
          font-family: Roboto, sans-serif;
          margin-top: 22px;
        }
        .div-31 {
          font-family: Roboto, sans-serif;
          margin-top: 22px;
        }
        .div-32 {
          font-family: Roboto, sans-serif;
          margin-top: 22px;
        }
        .div-33 {
          font-family: Roboto, sans-serif;
          margin-top: 19px;
        }
        .div-34 {
          font-family: Roboto, sans-serif;
          margin-top: 22px;
        }
        .div-35 {
          display: flex;
          flex-direction: column;
          color: #fff;
        }
        .img-5 {
          aspect-ratio: 1.25;
          object-fit: auto;
          object-position: center;
          width: 304px;
          align-self: end;
          max-width: 100%;
        }
        .div-36 {
          margin-top: 25px;
          font: 400 13px Roboto, sans-serif;
        }
        .div-37 {
          margin-top: 50px;
          font: italic 300 16px Inter, -apple-system, Roboto, Helvetica,
            sans-serif;
        }
        @media (max-width: 991px) {
          .div-37 {
            margin-top: 40px;
          }
        }
      `}</style>
    </>
  );
}
export default Footer;
