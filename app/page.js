"use client";
import { useState } from "react";

export default function Home() {
  const [link,setLink]=useState("");
  const [loading,setLoading]=useState(false);
  const [error,setError]=useState("");
  const backend="https://teleplays-mtproto-backend.onrender.com";

  async function play(){
    setLoading(true); setError("");
    const form=new FormData(); form.append("link", link);
    const res=await fetch(backend+"/resolve_link",{method:"POST",body:form});
    const j=await res.json();
    setLoading(false);
    if(j.error){ setError(j.error); return; }
    window.location.href=`/watch?chat=${j.chat_id}&msg=${j.message_id}`;
  }

  return (
    <div style={{
      display:"flex",flexDirection:"column",
      alignItems:"center",marginTop:"120px"
    }}>
      <img src="/logo.png" style={{height:"80px",opacity:0.9}} />
      <h2 style={{opacity:0.7,marginTop:"20px"}}>Paste Telegram Video / Audio Link</h2>

      <input 
        value={link} onChange={e=>setLink(e.target.value)}
        placeholder="https://t.me/c/xxxx/yyy"
        style={{
          width:"60%",padding:"14px",borderRadius:"8px",
          border:"none",marginTop:"20px",fontSize:"18px"
        }}
      />

      <button 
        onClick={play}
        style={{
          marginTop:"20px",padding:"14px 30px",
          background:"#e50914",color:"#fff",border:"none",
          borderRadius:"6px",fontSize:"18px",cursor:"pointer"
        }}>
        {loading?"Loading...":"Play"}
      </button>

      {error && <p style={{color:"orange",marginTop:"20px"}}>{error}</p>}
    </div>
  );
}
##
