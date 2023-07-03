import React, { FC } from 'react'
// import styles from './QuestionInput.module.scss'
import { Input, Form } from 'react-vant'

type PropsType = {
  fe_id: string
  props: {
    title: string
    placeholder?: string
  }
}

// const QuestionInput: FC<PropsType> = ({ fe_id, props }) => {
//   const { title, placeholder = '' } = props

//   return (
//     <>
//       <p>{title}</p>
//       <div className={styles.inputWrapper}>
//         <input name={fe_id} placeholder={placeholder} />
//       </div>
//     </>
//   )
// }

// 使用组件库
const QuestionInput: FC<PropsType> = ({ fe_id, props }) => {

  const { title, placeholder = '' } = props

  return (
    <Form.Item
      rules={[{ required: true, message: '请填写' }]}
      name={fe_id}
      label={title}
    >
      <Input placeholder={placeholder} />
    </Form.Item>
  )
}

export default QuestionInput
