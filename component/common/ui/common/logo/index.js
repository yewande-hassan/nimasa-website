import imgs from "../../../../../public/nimasa-logo.png";
export default function Logo({ height = 50, width = 50 }) {
  return <img src={imgs.src} height={height} width={width} alt="nimasa-logo" />;
}
