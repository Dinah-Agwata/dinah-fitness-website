import { useState } from 'react'
import PlanModal from './PlanModal'

const GOOGLE_FORM_URL = 'https://forms.gle/NTLsAqYLhVDFYo6d8'

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

function WorkWithMe() {
  const [selectedPlan, setSelectedPlan] = useState(null)

  return (
    <>
      <p className="db-work-title">Work with me</p>
      <p className="db-work-sub">
        Choose a plan that fits your goals.
      </p>

      <div className="db-plans">
        <a
          className="db-plan-card assessment"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          <div className="db-plan-left">
            <div className="db-plan-dot soft"></div>
            <div>
              <div className="db-plan-name">
                Not sure where to start? Take the assessment
              </div>
              <div className="db-plan-desc">
                Answer a few questions and I'll guide you to the right plan
              </div>
            </div>
          </div>
          <span className="db-plan-arrow">→</span>
        </a>

        <div className="db-divider">
          <div className="db-divider-line"></div>
          <span className="db-divider-text">or choose a plan</span>
          <div className="db-divider-line"></div>
        </div>

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

      <button className="db-cta-btn">Request a custom plan →</button>

      <div className="db-email-section">
        <p className="db-email-label">Or reach me directly</p>
        <a className="db-email-link" href="mailto:dinahbagwata@gmail.com">
          dinahbagwata@gmail.com
        </a>
      </div>

      {selectedPlan !== null && (
        <PlanModal
          planIndex={selectedPlan}
          onClose={() => setSelectedPlan(null)}
        />
      )}
    </>
  )
}

export default WorkWithMe
