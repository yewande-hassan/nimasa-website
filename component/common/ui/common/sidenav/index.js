import React from "react";
import styles from "../../../../../styles/sidenav.module.css";
import { Logo } from "../../common";
import Link from "next/link";
export default function SideNav() {
  return (
    <div className={`position-fixed  top-0 start-0 ${styles.nimasaWidth}`}>
      <nav className={`navbar navbar-expand-lg navbar-light ${styles.bg}`}>
        <div className={`d-flex flex-column ${styles.nav}`}>
          <div className="d-flex flex-row m-4">
            <Logo height={100} width={100} />
          </div>
          <div className={styles.flex}>
          <div>
          <Link passHref href="/main/" _hover={{ textDecor: "none" }}>
            <div className="d-flex  align-items-baseline  flex-row m-4">
              <div
                style={{
                  marginRight: "12px",
                }}
              >
                <svg
                  width="24"
                  height="23"
                  viewBox="0 0 24 23"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M23.5785 8.92763L20.5755 6.48019V2.56605C20.5755 2.12528 20.2169 1.76663 19.7761 1.76663H17.8866C17.4458 1.76663 17.0872 2.12528 17.0872 2.56605V3.63704L13.0746 0.366785C12.7844 0.130304 12.4018 0 11.9975 0C11.5947 0 11.214 0.129505 10.9253 0.364751L0.421514 8.92756C-0.0557363 9.31644 -0.0271028 9.65517 0.0324172 9.82247C0.0917919 9.9894 0.282997 10.2695 0.896075 10.2695H2.33437V21.5301C2.33437 22.3337 2.9864 22.9874 3.78785 22.9874H8.32997C9.12466 22.9874 9.74712 22.3472 9.74712 21.5301V16.9123C9.74712 16.5165 10.1108 16.1562 10.5102 16.1562H13.5625C13.9432 16.1562 14.2529 16.4954 14.2529 16.9123V21.5301C14.2529 22.3201 14.9352 22.9874 15.7427 22.9874H20.2122C21.0136 22.9874 21.6657 22.3337 21.6657 21.5301V10.2695H23.1039C23.717 10.2695 23.9082 9.9894 23.9676 9.82247C24.0271 9.65517 24.0558 9.31644 23.5785 8.92763Z"
                    fill="black"
                  />
                </svg>
              </div>
              <a className={`navbarbrand ml-5 ${styles.link}`}>Dashboard</a>
            </div>
          </Link>

          <Link passHref href="/main/vessel/" _hover={{ textDecor: "none" }}>
            <div className="d-flex  align-items-baseline flex-row m-4">
              <div
                style={{
                  marginRight: "12px",
                }}
              >
                <svg
                  width="24"
                  height="18"
                  viewBox="0 0 24 18"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M24 10.4457L21.1669 16.35C20.8126 17.0369 20.1043 17.4684 19.3313 17.4684H2.62643C2.31859 17.4684 2.1189 17.1438 2.25773 16.869L2.26475 16.8551C2.49133 16.4065 2.3569 15.8597 1.94812 15.5674L1.92502 15.5509C0.976118 14.8722 0.413098 13.7773 0.413098 12.6107V11.2719H15.2848V11.2636C15.2848 10.8118 15.651 10.4457 16.1027 10.4457H24ZM14.4585 5.48847H11.5669C11.3387 5.48847 11.1538 5.67341 11.1538 5.90157V10.4457C11.1538 10.6738 11.3387 10.8588 11.5669 10.8588H14.4585C14.6867 10.8588 14.8716 10.6738 14.8716 10.4457V5.90157C14.8717 5.67341 14.6867 5.48847 14.4585 5.48847ZM19.4158 7.14086H16.111C15.8829 7.14086 15.6979 7.3258 15.6979 7.55396V9.20631C15.6979 9.43447 15.8829 9.61945 16.111 9.61945H19.4158C19.6439 9.61945 19.8289 9.43447 19.8289 9.20631V7.55396C19.8289 7.3258 19.6439 7.14086 19.4158 7.14086ZM6.60961 10.8587H9.91439C10.1425 10.8587 10.3275 10.6738 10.3275 10.4457V7.14086C10.3275 6.9127 10.1425 6.72776 9.91439 6.72776H6.60961C6.38145 6.72776 6.19651 6.9127 6.19651 7.14086V10.4457C6.19655 10.6738 6.38149 10.8587 6.60961 10.8587ZM6.39824 4.66223L5.37035 5.48847V10.8587H1.23929V5.48847H0V4.66223H2.89169V3.46435H1.82376V2.98215H2.89169V0.53125H3.30478V2.98215H4.37275V3.46435H3.30478V4.66223H6.39824ZM4.62404 8.0611H3.27973V9.29471H4.62404V8.0611ZM4.62404 6.08419H3.27973V7.31784H4.62404V6.08419Z"
                    fill="black"
                  />
                </svg>
              </div>
              <a className={`navbarbrand ${styles.link} `}>Vessel</a>
            </div>
          </Link>
          </div>
          <div>
          <Link passHref href="/" _hover={{ textDecor: "none" }}>
            <div className="d-flex  align-items-baseline flex-row m-4">
              <div
                style={{
                  marginRight: "12px",
                }}
              >
                  <svg 
                  width="24"
                  height="18"
                  viewBox="0 0 512 512"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg">
                    <path 
                    d="M96 480h64C177.7 480 192 465.7 192 448S177.7 416 160 416H96c-17.67 0-32-14.33-32-32V128c0-17.67 14.33-32 32-32h64C177.7 96 192 81.67 192 64S177.7 32 160 32H96C42.98 32 0 74.98 0 128v256C0 437 42.98 480 96 480zM504.8 238.5l-144.1-136c-6.975-6.578-17.2-8.375-26-4.594c-8.803 3.797-14.51 12.47-14.51 22.05l-.0918 72l-128-.001c-17.69 0-32.02 14.33-32.02 32v64c0 17.67 14.34 32 32.02 32l128 .001l.0918 71.1c0 9.578 5.707 18.25 14.51 22.05c8.803 3.781 19.03 1.984 26-4.594l144.1-136C514.4 264.4 514.4 247.6 504.8 238.5z"
                    fill="black"
                    />
                    
                </svg>
              </div>
              <a className={`navbarbrand ${styles.link} `}>Logout</a>
            </div>
          </Link>
          </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
