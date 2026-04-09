import React from "react";
import { Link } from "react-router-dom";
import "./style.css";

export type Tournament = {
  id: string;
  title: string;
  date?: string;
  location?: string;
};

export interface TournamentCardProps {
  id?: string;
  title?: string;
  date?: string;
  location?: string;
  t?: Tournament;
}

const TournamentCard: React.FC<TournamentCardProps> = ({
  id,
  title,
  date,
  location,
  t,
}) => {
  const tournament = t ?? { id: id ?? "", title: title ?? "", date, location };
  return (
    <article className="card tournament-card" dir="rtl" data-id={tournament.id}>
      <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
        <div style={{ flex: 1 }}>
          <h3 style={{ fontSize: 18, fontWeight: 700 }}>{tournament.title}</h3>
          {tournament.date && (
            <div style={{ color: "#6b7280", fontSize: 13 }}>
              {tournament.date}
            </div>
          )}
          {tournament.location && (
            <div style={{ color: "#6b7280", fontSize: 13 }}>
              {tournament.location}
            </div>
          )}
        </div>
        <div style={{ textAlign: "right" }}>
          <Link
            to={`/tournaments/${tournament.id}`}
            style={{
              display: "inline-block",
              marginTop: 12,
              textDecoration: "none",
              padding: "8px 10px",
              borderRadius: 8,
              border: "1px solid rgba(11,99,255,0.12)",
              color: "#0b63ff",
            }}
          >
            פרטים
          </Link>
        </div>
      </div>
    </article>
  );
};

export default TournamentCard;
