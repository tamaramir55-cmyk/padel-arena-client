import React, { useEffect, useState } from 'react'
import { fetchPublishers } from '../../lib/stubs'
import { Link } from 'react-router-dom'
import './style.css'

export default function Publishers(): any {
  const [items,setItems] = useState([])
  useEffect(()=>{ fetchPublishers().then(d=>setItems(d)) },[])
  return (
    <section className="container" dir="rtl">
      <h2 className="section-heading">מפרסמים</h2>
      <div style={{display:'grid',gap:12}}>
        {items.map((p:any)=> (
          <Link to={`/publishers/${p.id}`} key={p.id} className="organizer-card">
            <div className="avatar">{p.name[0]}</div>
            <div className="info"><div className="name">{p.name}</div><div className="role text-muted">{p.contact}</div></div>
          </Link>
        ))}
      </div>
    </section>
  )
}
