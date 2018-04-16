<template>
    <div class="dashboard">
      this is the dashboard
      <div v-for='item in inventory'>
        <p>
          <span> {{item.name}}</span>
          <span> {{item.description}}</span>
        </p>
      </div>
    </div>
</template>

<script>
import InventoryService from '@/services/InventoryService'

export default {
  name: 'dashboard',
  data () {
    return {
      inventory: []
    }
  },
  mounted () {
    this.getInventory()
  },
  methods: {
    async getInventory () {
      const response = await InventoryService.fetchInventory()
      this.inventory = response.data
    }
  }

}
</script>

<style scoped>

</style>
