import Api from '@/services/Api'

export default {
  index (params) {
    return Api().get('history')
  },
  post (history) {
    return Api().post('history', history)
  }
}
