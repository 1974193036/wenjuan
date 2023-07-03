import React, { FC } from 'react'
// import styles from './QuestionTextarea.module.scss'
import { Input, Form } from 'react-vant'

type PropsType = {
  fe_id: string
  props: {
    title: string
    placeholder?: string
  }
}

// const QuestionTextarea: FC<PropsType> = ({ fe_id, props }) => {
//   const { title, placeholder = '' } = props

//   return (
//     <>
//       <p>{title}</p>
//       <div className={styles.textAreaWrapper}>
//         <textarea name={fe_id} placeholder={placeholder} rows={5} />
//       </div>
//     </>
//   )
// }

// 使用组件库
const QuestionTextarea: FC<PropsType> = ({ fe_id, props }) => {
  const { title, placeholder = '' } = props

  return (
    <Form.Item
      name={fe_id}
      label={title}
      rules={[{ required: true, message: '请输入' }]}
    >
      <Input.TextArea
        rows={2}
        autoSize
        maxLength={50}
        showWordLimit
        placeholder={placeholder}
      />
    </Form.Item>
  )
}

export default QuestionTextarea
