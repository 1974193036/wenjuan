import React, { FC, CSSProperties } from 'react'

type PropsType = {
  // 不需要 fe_id
  text: string
  isCenter?: boolean
}

const QuestionParagraph: FC<PropsType> = ({ text, isCenter }) => {
  // 换行
  const textList = text.split('\n')

  return (
    <div
      style={{
        textAlign: isCenter ? 'center' : 'left',
        margin: '10px 0',
        fontSize: '14px'
      }}
    >
      {textList.map((t, index) => (
        <span key={index}>
          {index > 0 && <br />}
          {t}
        </span>
      ))}
    </div>
  )
}

export default QuestionParagraph
