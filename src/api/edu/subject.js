import request from '@/utils/request'

const api_name = '/edu-service/edu-subject'

export default {

  getNestedTreeList() {
    return request({
      url: `${api_name}/getNestedTreeList`,
      method: 'get'
    })
  }
}
