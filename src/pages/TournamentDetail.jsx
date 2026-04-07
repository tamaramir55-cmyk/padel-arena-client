import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

// Mock fetch function
function fetchTournament(id) {
  return new Promise((res) => {
    setTimeout(() => {
      res({
        id,
        title: "טורניר פתוח",
        date: "2026-05-10",
        location: "מגרש מרכזי",
        format: "זוגות",
        deadline: "2026-05-05",
        price: "₪80",
        spots: 16,
      });
    }, 300);
  });
}

export default function TournamentDetail() {
  const { id } = useParams();
  const [t, setT] = useState(null);
  const [status, setStatus] = useState("Pending");

  useEffect(() => {
    let mounted = true;
    fetchTournament(id).then((data) => {
      if (mounted) setT(data);
    });
    return () => (mounted = false);
  }, [id]);

  function register() {
    setStatus("Registered");
    setTimeout(() => setStatus("Confirmed"), 1500);
  }

  if (!t)
    return (
      <div className="container py-6" dir="rtl">
        טוען...
      </div>
    );

  return (
    <div className="container py-6" dir="rtl">
      <div className="card p-6">
        <h2 className="text-2xl font-bold">{t.title}</h2>
        <div className="mt-3 text-gray-600">
          תאריך: {t.date} • מיקום: {t.location}
        </div>

        <div className="mt-4 grid md:grid-cols-3 gap-4">
          <div className="p-4 bg-blue-50 rounded">
            <div className="text-sm text-gray-700">פורמט</div>
            <div className="font-semibold">{t.format}</div>
          </div>

          <div className="p-4 bg-blue-50 rounded">
            <div className="text-sm text-gray-700">מועד סגירה</div>
            <div className="font-semibold">{t.deadline}</div>
          </div>

          <div className="p-4 bg-blue-50 rounded text-right">
            <div className="text-sm text-gray-700">מחיר</div>
            <div className="font-semibold">{t.price}</div>
            <div className="text-sm text-gray-500">
              מקומות פנויים: {t.spots}
            </div>
          </div>
        </div>

        <div className="mt-6 flex items-center gap-4">
          <button
            onClick={register}
            className="bg-blue-600 text-white px-4 py-2 rounded"
          >
            הרשמה
          </button>
          <div className="text-sm text-gray-700">סטטוס: {status}</div>
        </div>
      </div>
    </div>
  );
}
