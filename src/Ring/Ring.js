import React from 'react'
import styles from './styles.css'

const Ring = ({ width, height }) => (
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

Ring.propTypes = {
  width: Number,
  height: Number
}

export default Ring
