
const GOOGLE_FORM_URL = 'https://forms.gle/g1Jpf2LWc8J2SxFB8'

const plans = [
  {
    name: '1-Week Kickstart Plan',
    desc: 'Perfect for getting started',
    dot: '',
  },
  {
    name: '1-Month Transformation',
    desc: 'Build lasting habits',
    dot: '',
  },
  {
    name: '90-Day Total Reset',
    desc: 'Full lifestyle transformation',
    dot: '',
  },
  {
    name: '1:1 Online Coaching',
    desc: 'Tailored sessions, real accountability',
    dot: 'accent',
    featured: true,
    badge: 'Personal',
  },
]

function WorkWithMe() {
  return (
    <>
      <p className="db-work-title">Work with me</p>
      <p className="db-work-sub">
        Choose a plan that fits your goals. Not sure where to start? Take the assessment first.
      </p>

      <div className="db-plans">
        {/* Assessment card — links to Google Form */}
        <a
          className="db-plan-card assessment"
          href={GOOGLE_FORM_URL}
          target="_blank"
          rel="noreferrer"
        >
          <div className="db-plan-left">
            <div className="db-plan-dot soft"></div>
            <div>
              <div className="db-plan-name">Not sure where to start? Take the assessment</div>
              <div className="db-plan-desc">Answer a few questions and I'll guide you to the right plan</div>
            </div>
          </div>
          <span className="db-plan-arrow">→</span>
        </a>

        <div className="db-divider">
          <div className="db-divider-line"></div>
          <span className="db-divider-text">or choose a plan</span>
          <div className="db-divider-line"></div>
        </div>

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
                    <span className="db-featured-badge">{plan.badge}</span>
                  )}
                </div>
                <div className="db-plan-desc">{plan.desc}</div>
              </div>
            </div>
            <span className="db-plan-arrow">→</span>
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
    </>
  )
}

export default WorkWithMe
