import React from 'react'

export default function DocumentFront() {
  return (
    <div className="document-card">
      <img
        src="/RGFRENTE.jpeg"
        alt="RG - Frente"
        className="document-card__image"
        draggable={false}
        loading="eager"
        decoding="sync"
      />
    </div>
  )
}
