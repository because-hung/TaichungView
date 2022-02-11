<template>
  <div class="home container">
    <div class="title mt-4 ">
      <h1 class="mb-4 text-secondary">台中觀光景點</h1>
<h2 class="mt-2 bg-success w-sm-50 w-75 mx-auto text-white py-2">請輸入地區 或 路名</h2>
    </div>
    <div class="input-group mt-3 input mx-auto">
      <input
        type="text"
        class="form-control"
        aria-label="Recipient's username"
        aria-describedby="button-addon2"
        v-model.trim="txt"
        @keyup.enter="filterData()"
      />
      <button
        class="btn btn-outline-secondary d-none d-sm-block"
        type="button"
        id="button-addon2"
        @click="filterData()"
      >
        搜尋
      </button>
    </div>
    <div class=" mt-3 ">
      <div class="row mx-auto" v-if="!filterAry.length">
        <div class="col-12 col-sm-6 col-lg-3 my-3" v-for="(item, i) in data" :key="i">
          <div class="card">
             <img src="../assets/views.jpg" class="card-img-top" alt="...">
            <div class="card-body fs-4">
              <h3 class="card-title mt-3 mb-5 fw-bold btn btn-primary fs-4">{{ item.名稱 }}</h3>
              <h3 class="text-danger ">{{ item.鄉鎮市區 }}{{ item.地址 }} </h3>
              <p class="card-text mt-4 ">
               {{ item.簡述 }}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div class="row mx-auto" v-if="filterAry.length">
        <div class="col-12 col-sm-6 col-lg-3 my-3" v-for="(item, i) in filterAry" :key="i">
          <div class="card">
             <img src="../assets/views.jpg" class="card-img-top" alt="...">
            <div class="card-body fs-4">
              <h3 class="card-title mt-3 mb-5 fw-bold btn btn-primary">{{ item.名稱 }}</h3>
              <h3 class="text-danger ">{{ item.鄉鎮市區 }}{{ item.地址 }} </h3>
              <p class="card-text mt-4 ">
               {{ item.簡述 }}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import api from '../api/taichungview.json'
export default {
  data() {
    return {
      data: [],
      txt:'',
      dataFilter: [],
      filterAry: []
    };
  },
  methods: {
    getApi() {
      this.data = api
      this.data.pop()
      this.dataFilter = api
      console.log(this.data)
    },
    filterData() {
     this.filterAry = this.dataFilter.filter((item)=>{
      return item.鄉鎮市區.includes(this.txt)
     })
     console.log('have to filtered 區', this.filterAry)
     if(this.filterAry.length == 0){
       this.filterAry = this.dataFilter.filter((item)=>{
      return item.地址.includes(this.txt)
     })
     console.log('have to filtered 路', this.filterAry)
     }
    if(this.filterAry.length == 0){
        alert('not found  請重新輸入')
      }
    }
  },
  created() {
    this.getApi();
  },
};
</script>

<style lang="scss">
.input {
  width: 500px;
}
.card-text{
  min-height: 250px;
}
</style>
