import React from 'react'
import styles from './styles.css'

const Ellipsis = ({ width, height }) => (
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

Ellipsis.propTypes = {
  width: Number,
  height: Number
}

export default Ellipsis
