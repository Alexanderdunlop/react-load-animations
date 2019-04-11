import React from 'react'
import styles from './styles.css'

const Ripple = ({ width, height }) => (
  <>
    <style>{styles.toString()}</style>
    <div className="lds-ripple" style={{ width, height }}>
      <div />
      <div />
    </div>
  </>
)

Ripple.propTypes = {
  width: Number,
  height: Number
}

export default Ripple
