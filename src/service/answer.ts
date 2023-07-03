import fetch from './ajax'

export function postAnswer(answerInfo: any) {
  return fetch({
    url: `/api/answer`,
    method: 'post'
  })
}