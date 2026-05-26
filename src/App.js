import { useState } from "react";

const partners = [
  {
    id: "caf",
    name: "Allocations Familiales",
    acronym: "CAF",
    description: "RSA, APL, allocations enfants, prime d'activité",
    url: "https://www.caf.fr",
    color: "#005DA4",
    accent: "#E8F0F8",
    logo: "https://www.caf.fr/sites/default/files/caf/logo-caf.png",
    fallback: "CAF",
  },
  {
    id: "cpam",
    name: "Assurance Maladie",
    acronym: "CPAM",
    description: "Remboursements, carte vitale, arrêts maladie",
    url: "https://www.ameli.fr",
    color: "#009B77",
    accent: "#E5F5F1",
    logo: "https://www.ameli.fr/sites/default/files/thumbnails/image/logo-ameli-assurance-maladie.png",
    fallback: "CPAM",
  },
  {
    id: "carsat",
    name: "Assurance Retraite",
    acronym: "CARSAT",
    description: "Retraite, relevé de carrière, pension invalidité",
    url: "https://www.lassuranceretraite.fr",
    color: "#E2001A",
    accent: "#FDEAEC",
    logo: "https://www.lassuranceretraite.fr/img/logo-assurance-retraite.png",
    fallback: "CARSAT",
  },
  {
    id: "msa",
    name: "Mutualité Sociale Agricole",
    acronym: "MSA",
    description: "Protection sociale des agriculteurs",
    url: "https://www.msa.fr",
    color: "#4CAF50",
    accent: "#EDF7EE",
    logo: "https://www.msa.fr/lfy/image/logo_msa.png",
    fallback: "MSA",
  },
  {
    id: "dgfip",
    name: "Finances Publiques",
    acronym: "DGFiP",
    description: "Déclaration de revenus, impôts",
    url: "https://www.impots.gouv.fr",
    color: "#1A3066",
    accent: "#E8EBEF",
    logo: "https://www.impots.gouv.fr/sites/default/files/media/communication/logos/logo_dgfip_300px.png",
    fallback: "DGFiP",
  },
  {
    id: "francetravail",
    name: "France Travail",
    acronym: "France Travail",
    description: "Emploi, chômage, formation professionnelle",
    url: "https://www.francetravail.fr",
    color: "#F07800",
    accent: "#FEF3E6",
    logo: "https://www.francetravail.fr/files/live/sites/PE/files/images/logo-france-travail.png",
    fallback: "FT",
  },
  {
    id: "justice",
    name: "Point Justice",
    acronym: "Justice",
    description: "Accès au droit, aide juridictionnelle",
    url: "https://www.justice.fr",
    color: "#6D2077",
    accent: "#F3EAF4",
    logo: "https://www.justice.fr/sites/default/files/logo_minjus.png",
    fallback: "Justice",
  },
  {
    id: "interieur",
    name: "France Titres",
    acronym: "France Titres",
    description: "CNI, passeport, permis de conduire",
    url: "https://ants.gouv.fr",
    color: "#003189",
    accent: "#E6EAEF",
    logo: "https://ants.gouv.fr/sites/default/files/logo-ants.png",
    fallback: "ANTS",
  },
  {
    id: "laposte",
    name: "La Poste",
    acronym: "La Poste",
    description: "Services postaux, courrier, colis",
    url: "https://www.laposte.fr",
    color: "#FFCD00",
    accent: "#FFFBE6",
    textColor: "#2C2C2C",
    logo: "https://www.laposte.fr/img/logo-la-poste.svg",
    fallback: "Poste",
  },
];

function LogoBubble({ partner, size = 80 }) {
  const [imgError, setImgError] = useState(false);
  const textColor = partner.textColor || "#fff";

  return (
    <div style={{
      width: size, height: size,
      borderRadius: "50%",
      background: imgError ? partner.color : "#fff",
      display: "flex", alignItems: "center", justifyContent: "center",
      flexShrink: 0,
      border: `3px solid ${partner.color}`,
      boxShadow: `0 4px 16px ${partner.color}44`,
      overflow: "hidden",
    }}>
      {!imgError ? (
        <img
          src={partner.logo}
          alt={partner.acronym}
          onError={() => setImgError(true)}
          style={{ width: "78%", height: "78%", objectFit: "contain" }}
        />
      ) : (
        <span style={{
          color: textColor,
          fontSize: size * 0.22,
          fontWeight: 900,
          textAlign: "center",
          padding: 4,
          letterSpacing: -0.5,
        }}>{partner.fallback}</span>
      )}
    </div>
  );
}

export default function FranceServicesApp() {
  const [activePartner, setActivePartner] = useState(null);
  const [searchQuery, setSearchQuery] = useState("");

  const filtered = partners.filter(
    (p) =>
      p.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.acronym.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleOpen = (partner) => {
    window.open(partner.url, "_blank", "noopener,noreferrer");
  };

  return (
    <div style={{
      minHeight: "100vh",
      background: "linear-gradient(160deg, #EEF2FF 0%, #F8F9FF 60%, #E8F4FD 100%)",
      fontFamily: "'Segoe UI', system-ui, sans-serif",
      display: "flex", flexDirection: "column",
      maxWidth: 430, margin: "0 auto",
      boxShadow: "0 0 60px rgba(0,0,0,0.12)",
      position: "relative", overflow: "hidden",
    }}>
      {/* Filigrane */}
      <div style={{
        position: "fixed", top: 0, left: "50%",
        transform: "translateX(-50%)",
        width: 430, height: "100vh",
        pointerEvents: "none", zIndex: 0,
        display: "flex", alignItems: "center", justifyContent: "center",
      }}>
        <div style={{
          display: "flex", flexDirection: "column",
          alignItems: "center", opacity: 0.06,
        }}>
          <div style={{ fontSize: 160, lineHeight: 1 }}>🇫🇷</div>
          <div style={{
            fontSize: 48, fontWeight: 900, color: "#003189",
            letterSpacing: 6, textAlign: "center", lineHeight: 1.2, marginTop: 8,
          }}>FRANCE<br/>SERVICES</div>
          <div style={{ width: 180, height: 4, background: "#003189", marginTop: 14, borderRadius: 2 }}/>
          <div style={{
            fontSize: 14, fontWeight: 700, color: "#003189",
            letterSpacing: 3, marginTop: 10, textTransform: "uppercase",
          }}>Liberté · Égalité · Fraternité</div>
        </div>
      </div>

      {/* Header */}
      <div style={{
        background: "linear-gradient(135deg, #003189 0%, #1A3066 100%)",
        padding: "28px 20px 24px",
        position: "relative", overflow: "hidden", zIndex: 1,
      }}>
        <div style={{
          position: "absolute", top: -30, right: -30,
          width: 120, height: 120, borderRadius: "50%",
          background: "rgba(255,255,255,0.06)"
        }} />
        <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 16 }}>
          <div style={{
            background: "#fff", borderRadius: 10,
            padding: "6px 10px", display: "flex", alignItems: "center", gap: 6,
          }}>
            <span style={{ fontSize: 20 }}>🇫🇷</span>
            <span style={{ fontWeight: 800, fontSize: 13, color: "#003189", letterSpacing: 0.5 }}>
              FRANCE<br/>SERVICES
            </span>
          </div>
          <div>
            <div style={{ color: "rgba(255,255,255,0.7)", fontSize: 11, letterSpacing: 1, textTransform: "uppercase" }}>
              Portail citoyen
            </div>
            <div style={{ color: "#fff", fontWeight: 700, fontSize: 15 }}>Vos services publics</div>
          </div>
        </div>
        <div style={{ position: "relative" }}>
          <span style={{
            position: "absolute", left: 12, top: "50%", transform: "translateY(-50%)",
            fontSize: 16, opacity: 0.6,
          }}>🔍</span>
          <input
            placeholder="Rechercher un organisme…"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            style={{
              width: "100%", padding: "12px 12px 12px 38px",
              borderRadius: 12, border: "none",
              background: "rgba(255,255,255,0.15)",
              color: "#fff", fontSize: 14, outline: "none",
              boxSizing: "border-box",
            }}
          />
        </div>
      </div>

      {/* Subtitle */}
      <div style={{ padding: "14px 20px 6px", display: "flex", alignItems: "center", justifyContent: "space-between", zIndex: 1 }}>
        <span style={{ color: "#555", fontSize: 13 }}>
          {filtered.length} organisme{filtered.length > 1 ? "s" : ""} disponible{filtered.length > 1 ? "s" : ""}
        </span>
        <span style={{
          background: "#E8EFFF", color: "#003189",
          fontSize: 11, padding: "4px 10px", borderRadius: 20, fontWeight: 600,
        }}>Accès direct</span>
      </div>

      {/* Grille pastilles */}
      <div style={{ padding: "10px 16px 24px", flex: 1, zIndex: 1 }}>
        {filtered.length === 0 ? (
          <div style={{ textAlign: "center", padding: "40px 0", color: "#999" }}>
            <div style={{ fontSize: 40, marginBottom: 12 }}>🔍</div>
            <div>Aucun résultat pour « {searchQuery} »</div>
          </div>
        ) : (
          <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 16 }}>
            {filtered.map((partner) => (
              <PastilleCard
                key={partner.id}
                partner={partner}
                isActive={activePartner === partner.id}
                onTap={() => setActivePartner(activePartner === partner.id ? null : partner.id)}
                onOpen={() => handleOpen(partner)}
              />
            ))}
          </div>
        )}

        {/* Panel détail */}
        {activePartner && (() => {
          const p = partners.find(x => x.id === activePartner);
          if (!p) return null;
          return (
            <div style={{
              marginTop: 16, background: "#fff", borderRadius: 16, padding: "16px",
              boxShadow: `0 8px 32px ${p.color}33`,
              border: `1.5px solid ${p.color}55`,
            }}>
              <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 12 }}>
                <LogoBubble partner={p} size={50} />
                <div>
                  <div style={{ fontWeight: 800, fontSize: 14, color: "#1A1A2E" }}>{p.name}</div>
                  <div style={{ fontSize: 11, color: "#888", marginTop: 2 }}>{p.description}</div>
                </div>
              </div>
              <div style={{ display: "flex", gap: 8 }}>
                <button onClick={() => handleOpen(p)} style={{
                  flex: 1, padding: "11px",
                  background: p.color, color: p.textColor || "#fff",
                  border: "none", borderRadius: 10,
                  fontSize: 13, fontWeight: 700, cursor: "pointer",
                  display: "flex", alignItems: "center", justifyContent: "center", gap: 6,
                }}>
                  🔗 Se connecter
                </button>
                <button onClick={() => setActivePartner(null)} style={{
                  padding: "11px 14px", background: "#f0f0f0", color: "#666",
                  border: "none", borderRadius: 10, fontSize: 13, cursor: "pointer",
                }}>✕</button>
              </div>
            </div>
          );
        })()}
      </div>

      {/* Footer */}
      <div style={{
        background: "#fff", borderTop: "1px solid #E8ECF0",
        padding: "14px 20px",
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 10, zIndex: 1,
      }}>
        <div style={{ color: "#bbb", fontSize: 10, letterSpacing: 0.5 }}>
          france-services.gouv.fr • Service public gratuit
        </div>
        <div style={{ color: "#ccc", fontSize: 9, letterSpacing: 0.3, marginTop: -4 }}>
          Création François Rouichi
        </div>
        <a
          href="https://www.sarcelles.fr"
          target="_blank"
          rel="noopener noreferrer"
          style={{
            display: "flex", alignItems: "center", gap: 10,
            textDecoration: "none", background: "#F4F6FB",
            border: "1.5px solid #E0E6F0", borderRadius: 12, padding: "8px 16px",
          }}
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/9e/Blason_ville_fr_Sarcelles_%28Val-d%27Oise%29.svg/218px-Blason_ville_fr_Sarcelles_%28Val-d%27Oise%29.svg.png"
            alt="Blason de Sarcelles"
            style={{ width: 36, height: 40, objectFit: "contain", flexShrink: 0 }}
          />
          <div>
            <div style={{ fontWeight: 700, fontSize: 13, color: "#003189" }}>Ville de Sarcelles</div>
            <div style={{ fontSize: 10, color: "#888" }}>Val-d'Oise • www.sarcelles.fr</div>
          </div>
          <span style={{ color: "#003189", fontSize: 16, marginLeft: 4 }}>›</span>
        </a>
      </div>
    </div>
  );
}

function PastilleCard({ partner, isActive, onTap }) {
  return (
    <div
      onClick={onTap}
      style={{
        display: "flex", flexDirection: "column",
        alignItems: "center", gap: 8,
        cursor: "pointer", padding: "12px 6px",
        borderRadius: 16,
        background: isActive ? partner.accent : "rgba(255,255,255,0.7)",
        border: `1.5px solid ${isActive ? partner.color + "88" : "rgba(255,255,255,0.8)"}`,
        boxShadow: isActive ? `0 6px 20px ${partner.color}33` : "0 2px 8px rgba(0,0,0,0.06)",
        transition: "all 0.2s ease",
      }}
    >
      <LogoBubble partner={partner} size={72} />
      <div style={{
        fontSize: 11, fontWeight: 700,
        color: "#1A1A2E", textAlign: "center", lineHeight: 1.3,
        display: "-webkit-box",
        WebkitLineClamp: 2,
        WebkitBoxOrient: "vertical",
        overflow: "hidden",
      }}>
        {partner.acronym === partner.name ? partner.name : partner.acronym}
      </div>
    </div>
  );
}
