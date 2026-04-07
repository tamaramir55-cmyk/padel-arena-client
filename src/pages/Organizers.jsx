import React from "react";

const organizers = [
  {
    id: "o1",
    name: "יוסי כהן",
    role: "מנהל תחרויות",
    bio: "מאמן ותיק עם ניסיון של 10 שנים",
    avatar: "",
  },
  {
    id: "o2",
    name: "שרון לוי",
    role: "אחראית רישומים",
    bio: "מארגנת אירועים וקשר קהילתי",
    avatar: "",
  },
];

export default function Organizers() {
  return (
    <section className="organizers" dir="rtl">
      <h2>המארגנים</h2>
      <div className="organizer-list">
        {organizers.map((o) => (
          <a key={o.id} className="organizer-card" href={`/organizers/${o.id}`}>
            <div className="avatar">{o.name[0]}</div>
            <div className="info">
              <div className="name">{o.name}</div>
              <div className="role">{o.role}</div>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
