import { createPortal } from "react-dom";

export default function Blur() {
  return createPortal(
    <div
      style={{
        position: "fixed",
        inset: 0,
        backgroundColor: "rgba(0,0,0,0.3)",
        backdropFilter: "blur(2px)",
        WebkitBackdropFilter: "blur(5px)",
        zIndex: 20,
      }}
    />,
    document.body
  );
}
