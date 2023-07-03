import { Passed } from '@react-vant/icons'
import PageWrapper from '@/components/PageWrapper'

export default function Success() {
  return (
    <PageWrapper title="Success" desc="success page">
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Passed color="green" fontSize="60" />
        <div>成功</div>
      </div>
    </PageWrapper>
  )
}
