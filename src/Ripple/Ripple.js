import React from 'react'
import styles from './styles.css'

const Ripple = ({ animating = true, width, height }) => {
  if (!animating) return <></>
  return (
    <>
      <style>{styles.toString()}</style>
      <div className="lds-ripple" style={{ width, height }}>
        <div />
        <div />
      </div>
    </>
  )
}

Ripple.propTypes = {
  animating: Boolean,
  width: Number,
  height: Number
}

export default Ripple
