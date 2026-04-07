import React from "react";

export default function NotFound() {
  return (
    <main>
      <h2>404 - Not Found</h2>
      <p>The page you're looking for doesn't exist.</p>
    </main>
  );
}

export function NotFoundHebrew() {
  return (
    <div className="panel" dir="rtl">
      <h2>העמוד לא נמצא</h2>
      <p>הקישור שאיתו הגעת אינו קיים באתר 10 פאדל ארנה.</p>
    </div>
  );
}
