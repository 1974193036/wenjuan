import fetch from './ajax'

export function getQuestionById(id: string) {
  return fetch({
    url: `/api/question/${id}`,
    method: 'get'
  })
}