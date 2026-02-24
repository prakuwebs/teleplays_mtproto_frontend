"use client";

import { useSearchParams } from "next/navigation";
import { Suspense } from "react";

function WatchPlayer() {
  const p = useSearchParams();
  const chat = p.get("chat");
  const msg = p.get("msg");

  const src = `https://teleplays-mtproto-backend.onrender.com/stream/${chat}/${msg}`;

  return (
    <div style={{ display:"flex", justifyContent:"center", marginTop:"50px" }}>
      <video
        src={src}
        controls
        autoPlay
        style={{ width:"90%", maxWidth:"900px", borderRadius:"8px" }}
      />
    </div>
  );
}

export default function Page() {
  return (
    <Suspense fallback={<div style={{color:"#fff", textAlign:"center", marginTop:"50px"}}>Loading player...</div>}>
      <WatchPlayer />
    </Suspense>
  );
}
