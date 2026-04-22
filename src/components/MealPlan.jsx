import '../MealPlan.css'

import { useState, useEffect } from 'react'
import { weekPlan, shoppingList } from '../data/weekPlan'

const STORAGE_KEY = 'dinah_shopping_ticked'

const mealColors = {
  Breakfast: { bg: '#FFF8F0', border: '#F5DFC0', label: '#B87333' },
  Lunch: { bg: '#F0F7F0', border: '#C8DCC3', label: '#4A6741' },
  Snack: { bg: '#F5F0FA', border: '#DDD0F0', label: '#7A5FA0' },
}

function MealPlan() {
  const [activeDay, setActiveDay] = useState(0)
  const [activeTab, setActiveTab] = useState('plan')
  const [ticked, setTicked] = useState(() => {
    try {
      const saved = localStorage.getItem(STORAGE_KEY)
      return saved ? JSON.parse(saved) : {}
    } catch {
      return {}
    }
  })

  useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(ticked))
  }, [ticked])

  const toggleItem = (category, item) => {
    const key = `${category}__${item}`
    setTicked((prev) => ({ ...prev, [key]: !prev[key] }))
  }

  const totalItems = shoppingList.reduce((acc, cat) => acc + cat.items.length, 0)
  const tickedCount = Object.values(ticked).filter(Boolean).length

  const clearAll = () => {
    setTicked({})
    localStorage.removeItem(STORAGE_KEY)
  }

  return (
    <div className="mp-page">
      {/* Header */}
      <div className="mp-header">
        <a href="/" className="mp-back">← Home</a>
        <div className="mp-header-text">
          <p className="mp-label">Dinah Buyeke</p>
          <h1 className="mp-title">Your 1-Week Meal Plan</h1>
          <p className="mp-subtitle">Personalised nutrition to fuel your goals</p>
        </div>
      </div>

      {/* Tabs */}
      <div className="mp-tabs">
        <button
          className={`mp-tab${activeTab === 'plan' ? ' active' : ''}`}
          onClick={() => setActiveTab('plan')}
        >
          Meal Plan
        </button>
        <button
          className={`mp-tab${activeTab === 'shopping' ? ' active' : ''}`}
          onClick={() => setActiveTab('shopping')}
        >
          Shopping List
          {tickedCount > 0 && (
            <span className="mp-tick-count">{tickedCount}/{totalItems}</span>
          )}
        </button>
      </div>

      {/* Meal Plan Tab */}
      {activeTab === 'plan' && (
        <div className="mp-content">
          {/* Day selector */}
          <div className="mp-days">
            {weekPlan.map((d, i) => (
              <button
                key={d.day}
                className={`mp-day-btn${activeDay === i ? ' active' : ''}`}
                onClick={() => setActiveDay(i)}
              >
                {d.day.slice(0, 3)}
              </button>
            ))}
          </div>

          {/* Day meals */}
          <div className="mp-day-title">{weekPlan[activeDay].day}</div>
          <div className="mp-meals">
            {weekPlan[activeDay].meals.map((meal) => {
              const colors = mealColors[meal.type] || mealColors.Snack
              return (
                <div
                  key={meal.type}
                  className="mp-meal-card"
                  style={{ background: colors.bg, borderColor: colors.border }}
                >
                  <div className="mp-meal-type" style={{ color: colors.label }}>
                    {meal.type}
                  </div>
                  <ul className="mp-meal-items">
                    {meal.items.map((item) => (
                      <li key={item} className="mp-meal-item">
                        <span className="mp-dot" style={{ background: colors.label }}></span>
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              )
            })}
          </div>

          {/* Nav buttons */}
          <div className="mp-nav">
            <button
              className="mp-nav-btn"
              onClick={() => setActiveDay((d) => Math.max(0, d - 1))}
              disabled={activeDay === 0}
            >
              ← Previous
            </button>
            <button
              className="mp-nav-btn"
              onClick={() => setActiveDay((d) => Math.min(weekPlan.length - 1, d + 1))}
              disabled={activeDay === weekPlan.length - 1}
            >
              Next →
            </button>
          </div>
        </div>
      )}

      {/* Shopping List Tab */}
      {activeTab === 'shopping' && (
        <div className="mp-content">
          <div className="mp-shopping-header">
            <p className="mp-shopping-note">
              Tick items as you add them to your basket 🛒
            </p>
            {tickedCount > 0 && (
              <button className="mp-clear-btn" onClick={clearAll}>
                Clear all
              </button>
            )}
          </div>

          {/* Progress bar */}
          <div className="mp-progress-bar">
            <div
              className="mp-progress-fill"
              style={{ width: `${(tickedCount / totalItems) * 100}%` }}
            ></div>
          </div>
          <p className="mp-progress-text">{tickedCount} of {totalItems} items</p>

          {shoppingList.map((cat) => (
            <div key={cat.category} className="mp-shop-category">
              <p className="mp-shop-cat-label">{cat.category}</p>
              <div className="mp-shop-items">
                {cat.items.map((item) => {
                  const key = `${cat.category}__${item}`
                  const checked = !!ticked[key]
                  return (
                    <div
                      key={item}
                      className={`mp-shop-item${checked ? ' checked' : ''}`}
                      onClick={() => toggleItem(cat.category, item)}
                    >
                      <div className={`mp-checkbox${checked ? ' checked' : ''}`}>
                        {checked && <span className="mp-checkmark">✓</span>}
                      </div>
                      <span className="mp-shop-item-name">{item}</span>
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>
      )}

      <div className="mp-footer">
        <p>© {new Date().getFullYear()} Dinah Buyeke · All rights reserved</p>
        <p style={{ marginTop: '4px' }}>Questions? dinahbagwata@gmail.com</p>
      </div>
    </div>
  )
}

export default MealPlan
