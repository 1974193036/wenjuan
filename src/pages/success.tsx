import { Passed } from '@react-vant/icons'
import PageWrapper from '@/components/PageWrapper'

type PropsType = {
  title?: string
  desc?: string,
  msg?: string
}

export default function Success(props: PropsType) {
  const { title = 'Success', desc = 'success page', msg = '成功' } = props

  return (
    <PageWrapper title={title} desc={desc}>
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Passed color="green" fontSize="60" />
        <div>{msg}</div>
      </div>
    </PageWrapper>
  )
}
