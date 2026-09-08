export default function Home() {
  return (
    <div className="av-hero fade-in">
      <h1 className="pixel">Arcade Vault</h1>
      <p className="sub">
        <span className="neon-yellow">Inserta moneda para continuar</span>
        <span className="blink">_</span>
      </p>
      <div className="detail-actions" style={{ justifyContent: "center", marginTop: 32 }}>
        <button className="btn pulse">Explorar juegos</button>
        <button className="btn ghost">Salón de la fama</button>
      </div>
    </div>
  );
}
