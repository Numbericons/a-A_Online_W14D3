import React from 'react'


const BenchIndexItem = function ({ bench }) {
  return <li key={bench.id}>{bench.description}</li>
}


export default BenchIndexItem;