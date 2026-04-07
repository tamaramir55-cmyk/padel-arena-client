import React, { useEffect, useState } from "react";

export default function UsersList() {
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const API_URL = import.meta.env.VITE_API_URL;
  useEffect(() => {
    async function load() {
      try {
        const res = await fetch(`${API_URL}/api/users`);
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        setUsers(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  if (loading) return <div className="panel">Loading members...</div>;
  if (error) return <div className="panel">Error: {error}</div>;

  return (
    <section className="members">
      <h2>Members</h2>
      <div className="member-list">
        {users.map((u) => (
          <div key={u.id} className="member-card">
            <div className="member-avatar">
              {u.firstName ? u.firstName[0] : "U"}
            </div>
            <div className="member-info">
              <div className="member-name">
                {u.firstName} {u.lastName}
              </div>
              <div className="member-email">{u.email}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
