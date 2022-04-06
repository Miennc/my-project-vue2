<template>
  <div class="container mx-auto">
    <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10 lg:mx-12">
      <img class="w-16 h-16 " src="https://cdn.tgdd.vn/GameApp/1357107/anh-logo-nike-8-800x544.jpg" alt="">
      <div class="flex items-center gap-4">
        <div class="md:inline-block hidden">
          <ul class="flex items-center gap-4 ">
            <li><a href="" class="font-bold text-lg">Home</a></li>
            <li><a href="" class="font-bold text-lg">Danh Muc</a></li>
            <li><a href="" class="font-bold text-lg">Đăng ký</a></li class=font-bold text-lg>
            <li><a href="" class="font-bold text-lg">Đăng nhập</a></li>
          </ul>
        </div>

        <div class="md:hidden inline-block ">
          <i class="fa-solid fa-bars text-3xl"></i>
        </div>
        <div>
          <i class="fa-solid fa-cart-arrow-down text-3xl cursor-pointer"></i>
        </div>
      </div>

    </div>

    <div class="my-5">
      <h3 class="text-2xl font-bold md:mx-12 text-center md:text-left">Sản Phẩm Mới Nhất</h3>
    </div>
    <div class=" xl:grid-cols-4 grid ld:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mx-3 md:mx-12">
      <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative p-4"
           v-for="(lastProductsItem,index) in lastProducts" :key="index">
        <img class="w-full h-72 object-cover" :src="lastProductsItem.image.full_image_path" alt="">
        <div class="mx-3 my-2 text-xl font-semibold">
          <div class="flex justify-between items-center">
            <h6>{{ lastProductsItem.name }}</h6>
            <i class="fa-solid fa-heart"></i>
          </div>
          <span class="my-4 inline-block text-red-500">{{ lastProductsItem.price }}</span>

          <div class="flex justify-between">
            <div class="flex items-center">
              <i class="fa-solid fa-minus cursor-pointer"></i>
              <span class="mx-4 ">1</span>
              <i class="fa-solid fa-plus cursor-pointer"></i>
            </div>

            <div class="flex align-item-center ">
              <div class="bg-gray-800  text-white flex items-center cursor-pointer px-1">ADD TO CART</div>
              <div class="text-white ">
                <i class="fa-solid fa-share-nodes bg-gray-800 p-4 ml-2 cursor-pointer"></i></div>
            </div>
          </div>

        </div>
      </div>
    </div>
    <div>
      <div class="bg-gray-400 mt-7 flex justify-around items-center p-9">
        <div>
          <img src="https://cdn.tgdd.vn/GameApp/1357107/anh-logo-nike-8-800x544.jpg" alt="" key="
          " class="w-18 h-16 ">
          <p class="font-bold mt-5">
            Công ty TNHH 1 thành viên Luân
          </p>
          <p class="font-bold">
            Địa chỉ: Hạ Long - Quảng Ninh
          </p>
          <p class="font-bold">
            SDT: 0868120192
          </p>
          <p class="font-bold">
            Fax: 0868120196
          </p>
        </div>
        <div>
          <p class="font-bold">
            Về chúng tôi
          </p>
          <p class="font-bold">
            Chính sách mua hàng
          </p>
          <p class="font-bold">
            Chính sách trả hàng
          </p>
        </div>
        <div class="">
          <p>Mạng xã hội</p>
          <span><i class="fa-brands fa-facebook mr-3"></i></span>
          <span><i class="fa-brands fa-facebook mr-3"></i></span>
          <span><i class="fa-brands fa-facebook mr-3"></i></span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>

export default {
  data() {
    return {
      lastProducts: [],
    }
  },
  methods: {
    getData() {
      fetch('http://128.199.211.17/api/v1/home')
          .then((response) => response.json())
          .then((data) => {
            this.lastProducts = data.lastProducts;
          })
    }
  },
  components: {},
  mounted() {
    this.getData();
  }
}
</script>

<style>

</style>