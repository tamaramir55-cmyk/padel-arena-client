import React, { useState } from "react";

export default function SignUp() {
  const [form, setForm] = useState({ name: "", email: "", password: "" });
  function update(e) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }
  function submit(e) {
    e.preventDefault();
    alert("signup mock");
  }

  return (
    <div className="container py-6" dir="rtl">
      <div className="card max-w-md mx-auto p-6">
        <h2 className="text-2xl font-bold mb-4">הרשמה</h2>
        <form onSubmit={submit} className="flex flex-col gap-3">
          <input
            name="name"
            placeholder="שם מלא"
            value={form.name}
            onChange={update}
            className="border p-2 rounded"
          />
          <input
            name="email"
            placeholder="אימייל"
            value={form.email}
            onChange={update}
            className="border p-2 rounded"
          />
          <input
            name="password"
            type="password"
            placeholder="סיסמה"
            value={form.password}
            onChange={update}
            className="border p-2 rounded"
          />
          <button className="bg-blue-600 text-white px-4 py-2 rounded">
            צור חשבון
          </button>
        </form>
      </div>
    </div>
  );
}
