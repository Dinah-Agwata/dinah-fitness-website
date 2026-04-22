import { useState } from 'react'
import PlanModal from './PlanModal'

const plans = [
  {
    name: '1-Week Kickstart Plan',
    desc: 'Reset and restart your nutrition',
    price: '$15',
    dot: '',
    featured: false,
  },
  {
    name: '1-Month Transformation',
    desc: 'Build lasting habits and see real changes',
    price: '$50',
    dot: '',
    featured: true,
    badge: 'Most popular',
  },
  {
    name: '90-Day Total Reset',
    desc: 'Full lifestyle transformation',
    price: '$200',
    dot: '',
    featured: false,
    badge: 'Best value',
  },
  {
    name: '1:1 Online Coaching',
    desc: 'Tailored sessions, real accountability',
    price: null,
    cta: 'Book a call',
    dot: 'accent',
    featured: false,
    badge: 'Personal',
  },
]

function ThankYou() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <div className="db-page">
      <div className="db-thankyou-hero">
        <div className="db-thankyou-icon">✓</div>
        <h1 className="db-name">Thank you!</h1>
        <p className="db-thankyou-sub">
          I've received your assessment and will be in touch soon.
          In the meantime, take a look at the plans below and pick
          what feels right for your goals.
        </p>
      </div>

      <div className="db-content">
        <p className="db-work-title">Choose your plan</p>
        <p className="db-work-sub">
          Click on any plan to see what's included.
        </p>

        <div className="db-plans">
          {plans.map((plan, index) => (
            <div
              key={plan.name}
              className={plan.featured ? 'db-plan-card featured' : 'db-plan-card'}
              onClick={() => setSelectedPlan(index)}
            >
              <div className="db-plan-left">
                <div className={plan.dot ? 'db-plan-dot ' + plan.dot : 'db-plan-dot'}></div>
                <div>
                  <div className="db-plan-name">
                    {plan.name}
                    {plan.badge === 'Most popular' && (
                      <span className="db-featured-badge most-popular">Most popular</span>
                    )}
                    {plan.badge === 'Best value' && (
                      <span className="db-featured-badge best-value">Best value</span>
                    )}
                    {plan.badge === 'Personal' && (
                      <span className="db-featured-badge">Personal</span>
                    )}
                  </div>
                  <div className="db-plan-desc">{plan.desc}</div>
                </div>
              </div>
              <div className="db-plan-right">
                {plan.cta ? (
                  <span className="db-book-btn">{plan.cta}</span>
                ) : (
                  <span className="db-plan-price">{plan.price}</span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="db-thankyou-cta">
          <p className="db-thankyou-cta-text">
            Not sure which plan is right for you? Reach out and I'll help you decide.
          </p>
          <a
            className="db-cta-btn"
            href="mailto:dinahbagwata@gmail.com"
            style={{ display: 'block', textAlign: 'center', textDecoration: 'none' }}
          >
            Contact me →
          </a>
        </div>

        <div className="db-thankyou-back">
          <a href="/" className="db-back-link">← Back to home</a>
        </div>
      </div>

      <div className="db-footer">
        © {new Date().getFullYear()} Dinah Buyeke · All rights reserved
      </div>

      {selectedPlan !== null && (
        <PlanModal
          planIndex={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </div>
  )
}

export default ThankYou
