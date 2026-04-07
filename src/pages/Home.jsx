import React from "react";
import { Link } from "react-router-dom";
import logo from "../assets/site-logo.jpeg";

const sample = [
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
      <div className="bg-gradient-to-r from-blue-600 to-blue-400 text-white py-12">
        <div className="container flex flex-col md:flex-row items-center justify-between">
          <div>
            <h1 className="text-4xl font-bold">10 Padel Arena</h1>
            <p className="mt-3">מרכז התחרויות והקהילה של ענף הפאדל</p>
            <div className="mt-4 flex gap-3">
              <Link
                to="/competitions"
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold"
              >
                לראות תחרויות
              </Link>
              <Link
                to="/signup"
                className="bg-white text-blue-600 px-4 py-2 rounded-md font-semibold"
              >
                להצטרפות
              </Link>
            </div>
          </div>

          <div className="mt-6 md:mt-0">
            {/* Header photo using site-logo.jpeg, shown round via CSS */}
            <img src={logo} alt="10 Padel Arena" className="header-photo" />
          </div>
        </div>
      </div>

      <section className="py-6 container">
        <h2 className="text-2xl font-bold mb-4">תחרויות קרובות</h2>
        <div className="grid gap-4">
          {sample.map((s) => (
            <div
              key={s.id}
              className="card flex items-center justify-between p-4"
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
                  to={`/competitions/${s.id}`}
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
