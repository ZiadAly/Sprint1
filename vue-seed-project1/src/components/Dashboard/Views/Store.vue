<template>
    <div class="row">
      <div class="col-md-12">
        <div class="card">
          <paper-table :title="table1.title" :sub-title="table1.subTitle" :data="product.data" :columns="table1.columns">

          </paper-table>

          <button v-on:click="addtoApi"> add product</button >
            <button v-on:click="deletep"> delete</button >
              <button v-on:click="updatepro"> update</button >

          <input type="text" v-model="item.delpro"> delete <br>
          <input type="text" v-model="item.upid"> update <br>


        </div>
        <input type="text"  v-model="item.name"> name to add <br>
        <input type="text"  v-model="item.price"> price to add <br>
        <input type="text" v-model="item.upname"> name to update <br>
        <input type="text" v-model="item.upprice"> price to update <br>
      </div>

    </div>
</template>
<script>

import axios from 'axios'
import PaperTable from 'components/UIComponents/PaperTable.vue'
const tableColumns = ['Id', 'Name', 'Price', 'CreatedAt', 'UpdatedAt', 'SellerName', 'Action', '']
const tableData = [{
  id: '',
  name: '',
  price: '',
  createdat: '',
  updatedat: '',
  sellername: ''
},
{
  id: '',
  name: '',
  price: '',
  createdat: '',
  updatedat: '',
  sellername: ''
}]
export default {
  components: {
    PaperTable
  },
  data () {
    return {
      table1: {
        title: 'Stripped Table',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      },
      table2: {
        title: 'Table on Plain Background',
        subTitle: 'Here is a subtitle for this table',
        columns: [...tableColumns],
        data: [...tableData]
      },
      product: [],
      item: {
        name: '',
        price: '',
        delpro: '',
        upid: '',
        upname: '',
        upprice: ''
      }
    }
  },
  created () {
    this.getPro()
  },
  methods: {
    addtoApi () {
      axios.post('http://localhost:3000/api/product/createProduct', {
        name: this.item.name,
        price: this.item.price
      })
        .then((response) => {
          console.log(response)
        })
      .catch((error) => {
        console.log(error)
      })
    },
    getPro () {
      axios.get('http://localhost:3000/api/product/getProducts')
      .then((response) => {
        this.product = response.data
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    deletep () {
      axios.delete('http://localhost:3000/api/product/deleteProduct/' + this.item.delpro)
      .then((response) => {
        console.log(this.product.data)
      })
      .catch((error) => {
        console.log(error)
      })
    },
    updatepro () {
      axios.patch('http://localhost:3000/api/product/updateProduct/' + this.item.upid, {
        name: this.item.upname,
        price: this.item.upprice
      })
      .then((response) => {
        console.log(response)
      })
      .catch((error) => {
        console.log(error)
      })
    }
  }
}

</script>
<style>

</style>
