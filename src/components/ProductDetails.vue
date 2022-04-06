<template>
  <div class="container mx-auto">

    <div class="flex h-20 shadow-lg shadow-black-500/50 justify-between items-center px-10 md:mx-24">
      <img class="w-16 h-16 " src="https://cdn.tgdd.vn/GameApp/1357107/anh-logo-nike-8-800x544.jpg" alt="">
      <div class="flex items-center gap-4">
        <div class="md:inline-block hidden">
          <ul class="flex items-center gap-4 ">
            <li><a href="" class="font-bold text-lg">Home</a></li>
            <li><a href="" class="font-bold text-lg">Danh Muc</a></li>
            <li><a href="" class="font-bold text-lg">Đăng ký</a></li>
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

    <div class="lg:mx-24 mx-5 my-10">
      <div class="grid lg:grid-cols-7 grid-cols-1 gap-4 space-x-5">
        <div class="grid grid-cols-2 col-span-3 gap-4 space-x-5">
          <div class="col-span-5">
            <img class="w-full h-96 object-cover" :src="imgCart" alt="">
          </div>
          <div class=" flex " v-for="(imgCartProducts,indexCartProducts) in cartProducts.images"
               :key="indexCartProducts">
            <div class="md:w-40 md:h-40  w-20 h-20 overflow-hidden">
              <img class="object-cover w-full min-h-full" :src="imgCartProducts.full_image_path"
                   alt="Nike Jordan 3-image-6"
                   @click="handleImgCart(imgCartProducts.full_image_path)"/>
            </div>

          </div>
        </div>

        <div class="col-span-4 space-y-7">
          <h1 class="text-3xl font-bold text-center">Nike Jordan 3</h1>
          <p class="font-bold text-2xl text-red-500 text-center">
            <span > 100</span>
          </p>

          <div class="flex space-x-2 items-center font-bold justify-center ">
            <span class="bi bi-plus cursor-pointer"> <i class="fa-solid fa-plus cursor-pointer"></i> </span>
            <input
                type="text" readonly="" class="quantity border rounded w-12 text-center font-medium"
                value="1">
            <span class="bi bi-dash cursor-pointer">  <i class="fa-solid fa-minus cursor-pointer"></i> </span>
            <button class="border border-gray-800 text-black p-2 text-xl" onclick="addItemToCart()">Add To
              Cart
            </button>
          </div>
        </div>
      </div>
      <div class="my-20">
        <h6 class="font-bold text-2xl text-center md:text-left">Mô tả sản phẩm</h6>
        <p>{{ cartProducts.short_desc }}</p>
      </div>
      <div>
        <h6 class="font-bold text-2xl text-center md:text-left">Có thể bạn sẽ thích</h6>
        <div class=" grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-4 mt-5">
          <div class="productItem w-auto h-auto shadow-lg shadow-black-500/50 relative"
               v-for="(mightYouLikeProductsItem,indexMightYouLikeProducts) in mightYouLikeProducts"
               :key="indexMightYouLikeProducts">
             <div class="overflow-hidden w-full h-72 ">
               <img class="object-cover w-full min-h-full" :src="mightYouLikeProductsItem.image.full_image_path" alt="">
             </div>
            <div class="mx-3 my-2 ">
              <div class="flex justify-between items-center">
                <h6 class="text-xl font-semibold">{{ mightYouLikeProductsItem.name }}</h6>
                <i class="fa-solid fa-heart"></i>
              </div>
              <span class="text-xl font-both my-4 inline-block text-red-500">{{ mightYouLikeProductsItem.price }}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="bg-gray-400">
      <div class=" mt-7 grid grid-cols-9 lg:ml-32 ml-5 py-10 gap-10">
        <div class="md:col-span-3 col-span-9">
          <img src="https://lucas.vn/wp-content/uploads/2021/06/shopee-logo-DD5CAE562A-seeklogo.com_.png" alt="" key="
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
        <div class="md:col-span-3 col-span-9 my-auto md:ml-10 ml-0">
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
        <div class="md:col-span-3 col-span-9 my-auto">
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
      cartProducts: [],
      mightYouLikeProducts: [],
      imgCart: '',
    }
  },
  methods: {
    getData() {
      fetch('http://128.199.211.17/api/v1/products/4')
          .then((response) => response.json())
          .then((data) => {
            this.cartProducts = data.product;
            this.mightYouLikeProducts = data.mightYouLikeProducts;
            this.imgCart = this.cartProducts.images[0].full_image_path
          })
    },
    handleImgCart(img) {
      this.imgCart = img;
    },
  },
  mounted() {
    this.getData();
  },
  components: {}
}
</script>

<style>
</style>