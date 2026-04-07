import React from "react";
import { Link } from "react-router-dom";
import logo from "../../assets/site-logo.svg";
import "./style.css";

type Tournament = {
  id: string;
  title: string;
  date: string;
  location: string;
  spots: number;
  price: string;
};

const sample: Tournament[] = [
  {
    id: "t1",
    title: "טורניר פתוח",
    date: "2026-05-10",
    location: "מגרש מרכזי",
    spots: 16,
    price: "₪80",
  },
];

export default function Home() {
  return (
    <div dir="rtl">
      <section className="py-6 container">
        <h2 className="text-2xl font-bold mb-4">תחרויות קרובות</h2>
        <div className="grid gap-4">
          {sample.map((s) => (
            <div
              key={s.id}
              className="card flex items-center justify-between p-4"
              dir="rtl"
            >
              <div>
                <div className="font-bold">{s.title}</div>
                <div className="text-sm text-gray-500">
                  {s.date} • {s.location}
                </div>
              </div>
              <div className="text-right">
                <div className="font-semibold">{s.price}</div>
                <Link
                  to={`/tournaments/${s.id}`}
                  className="mt-2 inline-block text-sm text-blue-600"
                >
                  פרטים
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
