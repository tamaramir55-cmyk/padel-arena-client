import React, { useEffect, useState } from "react";
import { fetchTournaments } from "../../lib/stubs";
import TournamentCard from "../../components/TournamentCard";
import "./style.css";

const Competitions = () => {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchTournaments().then((d) => {
      setItems(d);
      setLoading(false);
    });
  }, []);

  if (loading)
    return (
      <div className="container" dir="rtl">
        טוען...
      </div>
    );

  return (
    <section className="py-6 container" dir="rtl">
      <h2 className="section-heading">תחרויות קרובות</h2>
      <div style={{ display: "grid", gap: 12 }}>
        {items.map((t: any) => (
          <TournamentCard key={t.id} t={t} />
        ))}
      </div>
    </section>
  );
};

export default Competitions;
