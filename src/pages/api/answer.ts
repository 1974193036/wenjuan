// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import { postAnswer } from '@/service/answer'
import type { NextApiRequest, NextApiResponse } from 'next'

type Data = {
  errno: number
  message?: string
}

function genAnswerInfo(data: any) {
  const answerList: any[] = []

  Object.keys(data).forEach(key => {
    if (key === 'questionId') return
    answerList.push({
      componentId: key,
      value: data[key]
    })
  })

  return {
    questionId: data.questionId || '',
    answerList
  }
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
  if (req.method !== 'POST') {
    res.status(200).json({ errno: -1, message: 'method错误' })
    return
  }

  const answerInfo = genAnswerInfo(req.body)
  console.log('answerInfo', answerInfo)

  try {
    // 提交到服务端 Mock
    const resData = await postAnswer(answerInfo) as any
    if (resData.data.errno === 0) {
      res.status(200).json({ errno: 0 })
    } else {
      res.status(200).json({ errno: 1 })
    }
  } catch(e) {
    res.status(200).json({ errno: 1 })
  }

  // try {
  //   // 提交到服务端 Mock
  //   const resData = await postAnswer(answerInfo) as any
  //   console.log('resData', resData)
  //   if (resData.errno === 0) {
  //     // 如果提交成功了
  //     res.redirect('/success')
  //   } else {
  //     // 提交失败了
  //     res.redirect('/fail')
  //   }
  // } catch (err) {
  //   res.redirect('/fail')
  // }

  // res.status(200).json({ errno: 1 })
}
