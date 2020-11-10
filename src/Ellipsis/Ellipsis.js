import React from 'react'
import styles from './styles.css'

const Ellipsis = ({ animating = true, width, height }) => {
  if (!animating) return <></>
  return (
    <>
      <style>{styles.toString()}</style>
      <div className="lds-ellipsis" style={{ width, height }}>
        <div />
        <div />
        <div />
        <div />
      </div>
    </>
  )
}

Ellipsis.propTypes = {
  animating: Boolean,
  width: Number,
  height: Number
}

export default Ellipsis
