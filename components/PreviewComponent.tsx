import React from 'react'

const PreviewComponent = ({tsx,payload}:{tsx:any, payload:any}) => {
    {payload}
  return (
    <main dangerouslySetInnerHTML={tsx}></main>
  )
}

export default PreviewComponent