<template>
  <div>
    <div class="cb-title">
      <input @input="inputFn" type="text" placeholder="请输入文章标题，字数控制在30字内">
      <div class="cb-title-text">
        <span>{{inputValue.length}}</span>/35
      </div>
    </div>
    <div class="cb-editor">
      <Tinymce v-model="Value"></Tinymce>
      <!-- 输出值:{{Value}}-->
    </div>
    <div class="cb-cover">
      <label>封面：</label>
      <div class="cb-cover-img">
        <img src="../assets/images/noimg.gif" alt id="cb-corver-img">
      </div>
      <div class="cb-cover-input">
        <input @input="upImage" type="file" name="file">
        <a>上传图片</a>
      </div>
      <div class="cb-cover-tip">
        <span>图片尺寸建议：800*400 图片大小不超过1MB</span>
      </div>
    </div>
    <div class="cb-fabu-upload">
      <!--<input type="button" @input="cbSubmit" value="提交">-->
      <button v-on:click="cbSubmit">提交</button>
    </div>
  </div>
</template>

<script>
// console.log('using');
import Tinymce from "../components/tinymced";
// import { type } from 'os';
// import func from '../../vue-temp/vue-editor-bridge';
// import axios from 'vue-axios';
// import qs from 'qs';
// import func from '../../vue-temp/vue-editor-bridge';
window.tinymce.baseURL = "./static/tinymce";
window.tinymce.suffix = ".min";
export default {
  components: {
    Tinymce
  },
  data() {
    return {
      Value: "",
      inputValue: "",
      file: ""
    };
  },
  methods: {
    //标题输入字数检测
    inputFn(thisArea) {
      if (thisArea.target.value.length > 35) {
        alert(35 + " 个字限制. \r超出的将自动清除.");
        thisArea.target.value = thisArea.target.value.substring(0, 35);
        thisArea.target.focus();
      }
      this.inputValue = thisArea.target.value;
    },
    upImage(e) {
      //把读取到的图片显示在上边
      let file = e.target.files[0];
      console.log(e);
      //临时显示用的url
      let url = window.URL.createObjectURL(file);
      document.getElementById("cb-corver-img").src = url;
      this.file = file;
      console.log(typeof this.file);
    },
    cbSubmit() {
      // console.log('是否有值', this.inputValue);

      // axios({
      //    url: 'http://localhost:9001/api/upload_article',
      //    methods:'post',
      //     headers:{
      //     "Content-Type":"application/x-www-form-urlencoded" //允许跨域
      //   },
      //    data:qs.stringify({
      //     articleTitle:this.inputValue,
      //      articleData:this.Value,
      //      coverIcon:this.file,
      //      postTime: new Date().getTime(),
      //      author:'cityboy'
      //    })
      // }).then(function(response){
      //   console.log(response);
      // }).catch(function(err){
      //   console.log(err);
      // })

      //fetch上传

      let postData = {
        articleTitle: this.inputValue,
        articleData: this.Value,
        coverIcon: this.file,
        postTime: new Date().getTime(),
        author: "cityboy"
      };
      console.log(postData.articleData);
      //  let postData = {
      //   articleTitle: "jkdsjfksj.jkdsjkfsj",
      //   articleData: "121232323",
      //   coverIcon: "kkkkkkkk.ggg",
      //   postTime: new Date().getTime(),
      //   author: "cityboy"
      // };

      // var formData = new FormData();
      // formData.append('articleTitle',this.inputValue);
      // formData.append('articleData',this.Value);
      // formData.append('coverIcon',this.file);
      // formData.append('postTime',new Date().getTime());
      // formData.append('author','cityboy');
      fetch("http://localhost:9001/api/admin/upload_article", {
        method: "post",
        // mode:"cors",//允许跨域
        headers: {
          "Content-Type": "application/x-www-form-urlencoded;charset=utf-8"
          // "Content-Type":"application/json"
        },
        body: `data=${JSON.stringify(postData)}`
      })
        .then(response => response.json())
        .then(response => console.log("Success:", JSON.stringify(response)))
        .catch(error => console.error("Error:", error));
    }
  }
};
</script>

<style scoped>
.cb-title {
  height: 40px;
  width: 100%;
  border: #9b9b9b solid 1px;
  margin-bottom: 5px;
}
.cb-title input {
  display: inline-block;
  border: none;
  outline: none;
  width: 100%;
  height: 38px;
  line-height: 38px;
  padding: 2px 5px;
  float: left;
}
.cb-title-text {
  height: 26px;
  position: absolute;
  right: 5px;
  top: 11px;
}
.cb-title-text span {
  color: #70dbdb;
}
.cb-cover {
  position: relative;
}
.cb-cover label {
  height: 30px;
  line-height: 30px;
}
.cb-cover-img {
  border: 1px solid #9b9b9b;
  width: 202px;
  height: auto;
}
.cb-cover-img img {
  width: 200px;
  height: auto;
}
.cb-cover-input {
  width: 100px;
  position: relative;
  margin-top: 15px;
}
.cb-cover-input a {
  display: inline-block;
  width: 100px;
  height: 40px;
  line-height: 40px;
  background-color: #e8e8e8;
  color: #287fc2;
  text-align: center;
  border: #9b9b9b solid 1px;
}
.cb-cover-input input {
  display: inline-block;
  width: 100px;
  height: 40px;
  position: absolute;
  top: 0;
  left: 0;
  opacity: 0;
}
.cb-cover-tip {
  margin: 5px 0px 10px 0px;
}
.cb-fabu-upload {
  text-align: center;
}
.cb-fabu-upload button {
  width: 100px;
  height: 40px;
  line-height: 40px;
  text-align: center;
  background-color: #cd796f;
  color: white;
  outline: none;
  border: 1px solid #9b9b9b;
}
</style>
