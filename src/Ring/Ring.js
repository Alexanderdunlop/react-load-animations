import React from 'react'
import styles from './styles.css'

const Ring = ({ animating = true, width, height }) => {
  if (!animating) return <></>
  return (
    <>
      <style>{styles.toString()}</style>
      <div className="lds-ring" style={{ width, height }}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  )
}

Ring.propTypes = {
  animating: Boolean,
  width: Number,
  height: Number
}

export default Ring
