import React from 'react'
import styles from './styles.css'

const Comet = ({ animating = true, width, height }) => {
  if (!animating) return <></>
  return (
    <>
      <style>{styles.toString()}</style>
      <div className="rla-comet" style={{ width, height }}>
        <div />
        <div />
        <div />
      </div>
    </>
  )
}

Comet.propTypes = {
  animating: Boolean,
  width: Number,
  height: Number
}

export default Comet
