const BOOKING_URL = 'https://calendly.com/YOUR_LINK'

const plans = [
  {
    name: '1-Week Kickstart Plan',
    desc: 'Perfect for getting started',
    price: '$15',
    dot: '',
    featured: false,
  },
  {
    name: '1-Month Transformation',
    desc: 'Build lasting habits',
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
    ctaUrl: BOOKING_URL,
    dot: 'accent',
    featured: false,
    badge: 'Personal',
  },
]

function ThankYou() {
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
          All plans are digital and mobile-friendly — take your
          shopping list straight to the grocery store.
        </p>

        <div className="db-plans">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`db-plan-card${plan.featured ? ' featured' : ''}`}
            >
              <div className="db-plan-left">
                <div className={`db-plan-dot${plan.dot ? ` ${plan.dot}` : ''}`}></div>
                <div>
                  <div className="db-plan-name">
                    {plan.name}
                    {plan.badge && (
                      <span className={`db-featured-badge${
                        plan.badge === 'Best value' ? ' best-value' :
                        plan.badge === 'Most popular' ? ' most-popular' : ''
                      }`}>
                        {plan.badge}
                      </span>
                    )}
                  </div>
                  <div className="db-plan-desc">{plan.desc}</div>
                </div>
              </div>
              <div className="db-plan-right">
                {plan.cta ? (
                  <a
                    href={plan.ctaUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="db-book-btn"
                  >
                    {plan.cta}
                  </a>
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
    </div>
  )
}

export default ThankYou
