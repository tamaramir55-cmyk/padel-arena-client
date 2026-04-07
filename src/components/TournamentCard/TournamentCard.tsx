import React from 'react'
import { Link } from 'react-router-dom'
import './style.css'

export default function TournamentCard({ t }: any){
  return (
    <article className="card tournament-card" dir="rtl">
      <div style={{display:'flex',alignItems:'center',gap:16}}>
        <div style={{flex:1}}>
          <h3 style={{fontSize:18,fontWeight:700}}>{t.title}</h3>
          <div style={{color:'#6b7280',fontSize:13}}>{t.date} • {t.location}</div>
          <p style={{color:'#6b7280',fontSize:13,marginTop:8}}>פורמט: {t.format}</p>
        </div>
        <div style={{textAlign:'right'}}>
          <div style={{fontWeight:600}}>{t.price}</div>
          <div style={{fontSize:13,color:'#6b7280'}}>מקומות: {t.spots}</div>
          <Link to={`/tournaments/${t.id}`} style={{display:'inline-block',marginTop:12,textDecoration:'none',padding:'8px 10px',borderRadius:8,border:'1px solid rgba(11,99,255,0.12)',color:'#0b63ff'}}>פרטים</Link>
        </div>
      </div>
    </article>
  )
}
