import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import {
  fetchPublisherById,
  fetchTournamentsByPublisher,
} from "../../lib/stubs";
import TournamentCard, {
  Tournament,
} from "../../components/TournamentCard/TournamentCard";
import "./style.css";

export interface PublisherDetailProps {
  id?: string;
}

type Publisher = {
  id: string;
  name: string;
  contact?: string;
  bio?: string;
  tournaments?: Tournament[];
};

const PublisherDetail: React.FC<PublisherDetailProps> = () => {
  const { id } = useParams();
  const [publisher, setPublisher] = useState<Publisher | null>(null);
  const [tournaments, setTournaments] = useState<any[]>([]);

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
        {publisher.bio && <p className="text-muted">{publisher.bio}</p>}
      </div>

      <div style={{ marginTop: 12 }}>
        <h3 style={{ fontWeight: 700 }}>תחרויות מפרסם זה</h3>
        <div style={{ display: "grid", gap: 12, marginTop: 8 }}>
          {publisher.tournaments?.map((t) => (
            <div key={t.id}>
              <TournamentCard t={t} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PublisherDetail;
