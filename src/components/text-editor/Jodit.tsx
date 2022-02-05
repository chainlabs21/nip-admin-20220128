import React, { useState, useRef } from 'react'
import JoditEditor from 'jodit-react'

export default function Jodit() {
  const editor = useRef(null)
  const [content, setContent] = useState('')

  const config: { readonly: boolean; height: number } = {
    readonly: false,
    height: 500,
  }
  const handleUpdate = (event: any) => {
    const editorContent = event.target.innerHTML
    setContent(editorContent)
  }

  return (
    <>
      <JoditEditor
        ref={editor}
        value={content}
        config={config}
        onBlur={handleUpdate}
        onChange={(newContent) => {}}
      />
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </>
  )
}
