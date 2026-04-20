const specialities = [
  'Gut health',
  'Blood sugar balance',
  'Reducing inflammation',
  'Muscle building',
  'Weight management',
]

function About() {
  return (
    <>
      <p className="db-section-label">About</p>
      <p className="db-bio">
        I'm a certified dietitian who helps people transform their health through food.
        Every plan I create is tailored to your specific goals — no one-size-fits-all.
        I work with clients across a range of needs:
      </p>
      <div className="db-specialities">
        {specialities.map((s) => (
          <span key={s} className="db-tag">{s}</span>
        ))}
      </div>
    </>
  )
}

export default About
