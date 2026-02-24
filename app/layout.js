export const metadata = { title: "TelePlayss" };
export default function RootLayout({ children }) {
  return (
    <html>
      <body style={{margin:0,background:"#111",color:"#fff",fontFamily:"Arial"}}>
        <div style={{
          display:"flex",
          alignItems:"center",
          padding:"15px 25px",
          background:"#000",
          borderBottom:"1px solid #222"
        }}>
          <img src="/logo.png" style={{height:"36px"}} />
        </div>
        {children}
      </body>
    </html>
  );
}
