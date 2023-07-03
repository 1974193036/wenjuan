import { Close } from '@react-vant/icons'
import PageWrapper from '@/components/PageWrapper'

export default function Success() {
  return (
    <PageWrapper title="Fail" desc="fail page">
      <div style={{ textAlign: 'center', marginTop: '60px' }}>
        <Close color="red" fontSize="60" />
        <div>失败</div>
      </div>
    </PageWrapper>
  )
}
