import Head from 'next/head'
import { Arrow, Like } from '@react-vant/icons'
import { Card, Button, Toast, Space, Typography, Tag } from 'react-vant'

const { Title, Text } = Typography

export default function Home() {
  return (
    <>
      <Head>
        <title>Index</title>
        <meta name="description" content="index page" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <Space
          direction="vertical"
          style={{
            padding: 20,
            width: '100%',
            backgroundColor: '#f2f2f2',
            boxSizing: 'border-box'
          }}
        >
          <Title level={1}>
            Hello React Vant <Tag type="primary">v3</Tag>
          </Title>
          <Text>参照 Vant 打造的 React 框架移动端组件库。</Text>
          <Card round>
            <Card.Header
              extra={<Arrow />}
              onClick={() => Toast.info('点击了Header区域')}
            >
              封面展示
            </Card.Header>
            <Card.Body onClick={() => Toast.info('点击了Body区域')}>
              卡片内容区域
            </Card.Body>
            <Card.Footer>
              <Space>
                <Button round size="small">
                  更多
                </Button>
                <Button
                  icon={<Like />}
                  round
                  color="linear-gradient(to right, #ff6034, #ee0a24)"
                  size="small"
                >
                  Like
                </Button>
              </Space>
            </Card.Footer>
          </Card>
        </Space>
      </main>
    </>
  )
}
