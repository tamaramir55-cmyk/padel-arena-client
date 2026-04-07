import React from 'react';

export default function Subscribe() {
  return (
    <section className="subscribe">
      <h2>Choose your plan</h2>
      <div className="plans">
        <div className="plan">
          <h3>Monthly</h3>
          <div className="price">$29</div>
          <ul>
            <li>Unlimited bookings</li>
            <li>1 free coaching session</li>
            <li>Access to community events</li>
          </ul>
          <button className="btn primary">Subscribe</button>
        </div>
        <div className="plan recommended">
          <h3>Annual</h3>
          <div className="price">$299</div>
          <ul>
            <li>Save 15%</li>
            <li>Priority booking</li>
            <li>Free gear pack</li>
          </ul>
          <button className="btn primary">Subscribe</button>
        </div>
      </div>
    </section>
  );
}
