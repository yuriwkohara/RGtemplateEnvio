import React from 'react'

export default function DocumentBack() {
  return (
    <div className="document-card">
      <img
        src="/RGVERSO.jpeg"
        alt="RG - Verso"
        className="document-card__image"
        draggable={false}
        loading="eager"
        decoding="sync"
      />
    </div>
  )
}
