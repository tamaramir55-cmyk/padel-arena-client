import React from 'react'
import './style.css'

export default function NotFound(): any {
  return (
    <div className="notfound-container" dir="rtl">
      <div className="card notfound-card">
        <h2 className="notfound-title">לא נמצא</h2>
        <p className="notfound-text">הדף המבוקש לא נמצא. בדוק את הכתובת או חזור לעמוד הראשי.</p>
      </div>
    </div>
  )
}
