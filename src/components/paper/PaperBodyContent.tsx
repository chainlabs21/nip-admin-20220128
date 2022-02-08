import React from 'react'

interface IPaperBody {
  fields: any[]
}

const PaperBodyContent: React.FC<IPaperBody> = ({ fields }) => {
  return (
    <>
      {fields.map((field: any, index: number) => (
        <div key={index}>
          <article>{field.content()}</article>
        </div>
      ))}
    </>
  )
}

export default PaperBodyContent
