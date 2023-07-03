import Head from 'next/head'
import { Button, Form, Skeleton } from 'react-vant'
import axios from 'axios'
import Router from 'next/router'
import PageWrapper from '@/components/PageWrapper'
import QuestionInput from '@/components/QuestionComponents/QuestionInput'
import QuestionRadio from '@/components/QuestionComponents/QuestionRadio'
import QuestionCheckbox from '@/components/QuestionComponents/QuestionCheckbox'
import QuestionTextarea from '@/components/QuestionComponents/QuestionTextarea'
import QuestionParagraph from '@/components/QuestionComponents/QuestionParagraph'
import QuestionTitle from '@/components/QuestionComponents/QuestionTitle'
import QuestionInfo from '@/components/QuestionComponents/QuestionInfo'
import { useState } from 'react'

type PropsType = {
  id: string
}

// 访问该页面路径：http://localhost:3000/question/150000200406079038

export default function Question(props: PropsType) {
  // console.log(props.id)
  const [loading, setLoading] = useState(false)

  const onFinish = (values: any) => {
    const data = { questionId: props.id, ...values }

    setLoading(true)

    axios
      .post('/api/answer', data)
      .then(res => {
        if (res.data.errno === 0) {
          Router.push('/success')
        } else {
          Router.push('/fail')
        }
      })
      .finally(() => {
        setLoading(false)
      })
  }

  return (
    <PageWrapper title="Question" desc="question page">
      <Form
        layout="vertical"
        onFinish={onFinish}
        footer={
          <div style={{ margin: '16px' }}>
            <Button
              loading={loading}
              round
              nativeType="submit"
              type="primary"
              block
            >
              提交
            </Button>
          </div>
        }
        style={{
          padding: '2px 20px',
          width: '100%',
          boxSizing: 'border-box'
        }}
      >
        <QuestionInfo title="问卷标题" desc="问卷描述" />
        <QuestionTitle text="个人信息调研" level={2} isCenter={false} />
        <QuestionInput
          fe_id="c2"
          props={{ title: '你的姓名', placeholder: '请输入姓名...' }}
        />
        <QuestionInput
          fe_id="c3"
          props={{ title: '你的电话', placeholder: '请输入电话...' }}
        />
        <QuestionTextarea
          fe_id="c4"
          props={{ title: '自我介绍', placeholder: '请输入自我介绍...' }}
        />
        <QuestionParagraph text="下面是单选或全选" isCenter={false} />
        <QuestionRadio
          fe_id="c6"
          props={{
            title: '你的星座',
            options: [
              { value: 'baiyang', text: '白羊座' },
              { value: 'jinniu', text: '金牛座' },
              { value: 'shuangzi', text: '双子座' }
            ],
            value: '',
            isVertical: false
          }}
        />
        <QuestionCheckbox
          fe_id="c7"
          props={{
            title: '你的爱好',
            list: [
              { value: 'chifan', text: '吃饭', checked: false },
              { value: 'shuijiao', text: '睡觉', checked: false },
              { value: 'dadoudou', text: '打豆豆', checked: false }
            ],
            isVertical: false
          }}
        />
      </Form>
    </PageWrapper>
  )
}

export async function getServerSideProps(context: any) {
  // console.log('每次请求都会执行...')

  const { id = '' } = context.params // 从url路径中获取id

  return {
    props: {
      id
      // 其他数据
    }
  }
}
