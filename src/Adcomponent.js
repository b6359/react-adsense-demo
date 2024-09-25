import React, { useEffect, useRef } from "react";
const AdComponent = () => {
  const adRef = useRef(null);

  useEffect(() => {
    if (adRef.current) {
      adRef.current.innerHTML = "";
      try {
        (window.adsbygoogle = window.adsbygoogle || []).push({});
      } catch (e) {
        console.error("Adsense error:", e);
      }
    }
  }, []);

  return (
    <ins
      ref={adRef}
      className="adsbygoogle"
      style={{ display: "block" }}
      data-ad-client="YOUR_CLIENT_ID"
      data-ad-slot={"SLOT_ID"}
      data-ad-format="auto"
      data-full-width-responsive="true"
    ></ins>
  );
};
export default AdComponent;
