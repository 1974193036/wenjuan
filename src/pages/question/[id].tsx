// import Head from 'next/head'
import { Button, Form, Skeleton } from 'react-vant'
import axios from 'axios'
import Router from 'next/router'
import PageWrapper from '@/components/PageWrapper'
// import QuestionInput from '@/components/QuestionComponents/QuestionInput'
// import QuestionRadio from '@/components/QuestionComponents/QuestionRadio'
// import QuestionCheckbox from '@/components/QuestionComponents/QuestionCheckbox'
// import QuestionTextarea from '@/components/QuestionComponents/QuestionTextarea'
// import QuestionParagraph from '@/components/QuestionComponents/QuestionParagraph'
// import QuestionTitle from '@/components/QuestionComponents/QuestionTitle'
// import QuestionInfo from '@/components/QuestionComponents/QuestionInfo'
import { useState } from 'react'
import { getQuestionById } from '@/service/question'
import Fail from '../fail'
import { getComponent } from '@/components/QuestionComponents'

type PropsType = {
  errno: number
  data: {
    id: string
    title: string
    desc?: string
    js?: string
    css?: string
    isDeleted: boolean
    isPublished: boolean
    componentList: Array<any>
  }
  msg?: string
}

// 访问该页面路径：http://localhost:3000/question/150000200406079038

export default function Question(props: PropsType) {
  const { errno, data, msg } = props

  const [loading, setLoading] = useState(false)

  if (errno !== 0) {
    return <Fail msg={msg} />
  }

  const { id, title, desc, isDeleted, isPublished, componentList = [] } = data

  if (isDeleted) {
    return <Fail msg="该问卷已被删除" />
  }

  if (!isPublished) {
    return <Fail msg="该问卷尚未发布" />
  }

  const onFinish = (values: any) => {
    const data = { questionId: id, ...values }

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

  const ComponentListElem = <>
    {componentList.map(item => {
      const {fe_id} = item
      const comp = getComponent(item)
      return <div key={fe_id}>{comp}</div>
    })}
  </>

  return (
    <PageWrapper title={title} desc={desc}>
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
        {ComponentListElem}
        {/* <QuestionInfo title="问卷标题" desc="问卷描述" />
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
        /> */}
      </Form>
    </PageWrapper>
  )
}

export async function getServerSideProps(context: any) {
  // console.log('每次请求都会执行...')

  const { id = '' } = context.params // 从url路径中获取id

  const { data } = await getQuestionById(id)

  return {
    props: data
  }
}
