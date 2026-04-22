import { useEffect } from 'react'

const planDetails = [
  {
    name: '1-Week Kickstart Plan',
    price: '$15',
    badge: null,
    tagline: 'Perfect for resetting after taking a break — vacation, plateau or a fresh start.',
    includes: [
      '7-day personalised meal plan',
      'Full grocery list',
    ],
    ctaText: 'Get this plan',
    ctaUrl: '#', // Replace with Paystack payment link
  },
  {
    name: '1-Month Transformation',
    price: '$50',
    badge: 'Most popular',
    tagline: 'Perfect for those looking to build lasting habits and see physical changes.',
    includes: [
      '4 weeks of rotating custom meals',
      'Full grocery guide',
      'Swap options if you dislike certain foods',
      'Meal prep tips',
    ],
    ctaText: 'Get this plan',
    ctaUrl: '#', // Replace with Paystack payment link
  },
  {
    name: '90-Day Total Reset',
    price: '$200',
    badge: 'Best value',
    tagline: '3 months of personalised nutrition for a full lifestyle transformation.',
    includes: [
      'Everything in the 1-month plan',
      'Interactive food choice booklet — pick from approved options each week',
      'Food education notes explaining why each meal was chosen',
      'Weekly check-in prompts',
    ],
    ctaText: 'Get this plan',
    ctaUrl: '#', // Replace with Paystack payment link
  },
  {
    name: '1:1 Online Coaching',
    price: null,
    badge: 'Personal',
    tagline: 'Tailored sessions with real accountability.',
    includes: [
      'Fully tailored to your goals',
      'Regular check-ins and plan adjustments',
      'Best for complex goals or medical conditions',
    ],
    ctaText: 'Book a call',
    ctaUrl: 'https://calendly.com/YOUR_LINK',
  },
]

function PlanModal({ planIndex, onClose }) {
  const plan = planDetails[planIndex]

  useEffect(() => {
    document.body.style.overflow = 'hidden'
    return () => { document.body.style.overflow = '' }
  }, [])

  if (!plan) return null

  return (
    <>
      {/* Overlay */}
      <div className="modal-overlay" onClick={onClose} />

      {/* Panel */}
      <div className="modal-panel">
        <div className="modal-handle" />

        {/* Close button */}
        <button className="modal-close" onClick={onClose}>✕</button>

        {/* Header */}
        <div className="modal-header">
          <div className="modal-name-row">
            <h2 className="modal-name">{plan.name}</h2>
            {plan.badge && (
              <span className={`modal-badge${
                plan.badge === 'Best value' ? ' best-value' :
                plan.badge === 'Most popular' ? ' most-popular' : ''
              }`}>
                {plan.badge}
              </span>
            )}
          </div>
          {plan.price && (
            <p className="modal-price">{plan.price}</p>
          )}
          <p className="modal-tagline">{plan.tagline}</p>
        </div>

        {/* Divider */}
        <div className="modal-divider" />

        {/* What's included */}
        <p className="modal-includes-label">What's included</p>
        <ul className="modal-includes">
          {plan.includes.map((item) => (
            <li key={item} className="modal-include-item">
              <span className="modal-check">✓</span>
              {item}
            </li>
          ))}
        </ul>

        {/* CTA */}
        <a
          href={plan.ctaUrl}
          target="_blank"
          rel="noreferrer"
          className="modal-cta-btn"
        >
          {plan.ctaText} →
        </a>

        <p className="modal-note">
          After payment, you'll receive your personalised plan by email within 24 hours.
        </p>
      </div>
    </>
  )
}

export default PlanModal

