import React from "react";

const sampleCompetitions = [
  {
    id: "c1",
    title: "אירוע חובבים",
    date: "2026-05-10",
    location: "מגרש 1",
    spots: 16,
    price: "₪80",
  },
  {
    id: "c2",
    title: "טורניר פרמיום",
    date: "2026-06-02",
    location: "מגרש מרכזי",
    spots: 8,
    price: "₪150",
  },
];

function TournamentCard({ t }) {
  return (
    <div className="card tournament-card flex flex-col md:flex-row gap-4">
      <div className="flex-1">
        <h3 className="text-xl font-bold">{t.title}</h3>
        <div className="text-sm text-gray-500 mt-2">מיקום: {t.location}</div>
        <div className="text-sm text-gray-500">תאריך: {t.date}</div>
      </div>
      <div className="w-48 flex flex-col items-end justify-between text-right">
        <div className="text-lg font-semibold">{t.price}</div>
        <div className="text-sm text-gray-500">מקומות: {t.spots}</div>
        <div>
          <button className="bg-blue-600 text-white px-3 py-2 rounded-md">
            פרטים
          </button>
        </div>
      </div>
    </div>
  );
}

export default function Competitions() {
  return (
    <section className="py-6" dir="rtl">
      <div className="container">
        <h2 className="text-2xl font-bold mb-4">תחרויות קרובות</h2>
        <div className="grid gap-4">
          {sampleCompetitions.map((s) => (
            <TournamentCard key={s.id} t={s} />
          ))}
        </div>
      </div>
    </section>
  );
}
