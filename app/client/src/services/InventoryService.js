import Api from '@/services/Api'

export default {
  fetchInventory () {
    return Api().get('inventory')
  }
}
