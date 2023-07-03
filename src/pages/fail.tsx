import { Close } from '@react-vant/icons'
import PageWrapper from '@/components/PageWrapper'

type PropsType = {
  title?: string
  desc?: string
  msg?: string
}

export default function Fail(props: PropsType) {
  const { title = '失败', desc = 'fail page', msg = '错误' } = props

  return (
    <PageWrapper title={title} desc={desc}>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Close color="red" fontSize="60" />
        <div>{msg}</div>
      </div>
    </PageWrapper>
  )
}
