import React from 'react'
import styles from './styles.css'

const Comet = ({ width, height }) => (
  <>
    <style>{styles.toString()}</style>
    <div className="rla-comet" style={{ width, height }}>
      <div />
      <div />
      <div />
    </div>
  </>
)

Comet.propTypes = {
  width: Number,
  height: Number
}

export default Comet
