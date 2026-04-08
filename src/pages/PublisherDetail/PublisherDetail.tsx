import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchPublisherById,
  fetchTournamentsByPublisher,
} from "../../lib/stubs";
import TournamentCard from "../../components/TournamentCard";
import "./style.css";

const PublisherDetail = () => {
  const { id } = useParams();
  const [publisher, setPublisher] = useState(null);
  const [tournaments, setTournaments] = useState([]);

  useEffect(() => {
    if (typeof id === "string") {
      fetchPublisherById(id).then((p) => setPublisher(p));
      fetchTournamentsByPublisher(id).then((t) => setTournaments(t));
    }
  }, [id]);

  if (!publisher)
    return (
      <div className="container" dir="rtl">
        טוען...
      </div>
    );

  return (
    <section className="publisher-detail container" dir="rtl">
      <div className="card">
        <h2 className="publisher-name">{publisher.name}</h2>
        <p className="text-muted">{publisher.bio}</p>
      </div>

      <div style={{ marginTop: 12 }}>
        <h3 style={{ fontWeight: 700 }}>תחרויות מפרסם זה</h3>
        <div style={{ display: "grid", gap: 12, marginTop: 8 }}>
          {tournaments.map((t: any) => (
            <TournamentCard key={t.id} t={t} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublisherDetail;
