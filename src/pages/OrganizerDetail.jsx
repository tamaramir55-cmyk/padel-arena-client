import React from "react";
import { useParams } from "react-router-dom";

export default function OrganizerDetail() {
  const { id } = useParams();
  // In real app fetch organizer by id
  return (
    <div className="panel" dir="rtl">
      <h2>פרטי מארגן</h2>
      <p>מזהה מארגן: {id}</p>
      <p>פרטים נוספים על המארגן יופיעו כאן.</p>
    </div>
  );
}
