<template>
  <div>
    <div class="title">
      <h1 class="postTitle">{{getPostData.title}}</h1>
      <ul class="nav-li">
        <li>
          <a @click.prevent="$router.go(-1)">&larr;Back</a>
        </li>
      </ul>
    </div>
    <img :src="getPostData.image" alt style="width:100%;" />
    <p class="post-para">{{paragraph1}}.</p>
    <p class="post-para">{{paragraph2.substring(1)}}.</p>
    <p class="post-para">{{paragraph3.substring(1)}}</p>
    <p class="post-para">{{paragraph4.substring(1)}}.</p>
    <p class="post-para">{{paragraph5.substring(1)}}.</p>
    <p class="post-para">{{paragraph6.substring(1)}}.</p>
    <p class="post-para">{{paragraph7.substring(1)}}.</p>
  </div>
</template>
<script>
import { mapActions, mapGetters } from "vuex";
export default {
  name: "Single",
  data() {
    return {
      post: {},
      paragraph1: "",
      paragraph2: "",
      paragraph3: "",
      paragraph4: "",
      paragraph5: "",
      paragraph6: "",
      paragraph7: "",
      paragraph8: ""
    };
  },
  computed: {
    ...mapGetters(["getPostData"])
  },
  methods: {
    ...mapActions(["getSinglePost"]),
    convertTextBody() {
      let talkText = this.getPostData.body;
      let periods = talkText.match(/\./g, " ").length;
      let index1 = Math.round(periods / 6);
      let indices = [];

      for (var v = 0; v < talkText.length; v++) {
        if (talkText[v] == ".") {
          indices.push(v);
        }
      }
      let index11 = indices[index1];
      let index2 = index1 * 2;
      let index22 = indices[index2];
      let index3 = index1 * 3;
      let index33 = indices[index3];

      let index4 = index1 * 4;
      let index44 = indices[index4];

      let index5 = index1 * 5;
      let index55 = indices[index5];

      let index6 = index1 * 6;
      let index66 = indices[index6];

      let index7 = index1 * 7;
      let index77 = indices[index7];

      let paragraph8End = talkText.length - 1;
      this.paragraph1 = talkText.substring(0, index11);

      this.paragraph2 = talkText.substring(index11, index22);

      this.paragraph4 = talkText.substring(index22, index33);

      this.paragraph4 = talkText.substring(index33, index44);

      this.paragraph5 = talkText.substring(index44, index55);

      this.paragraph6 = talkText.substring(index55, index66);

      this.paragraph7 = talkText.substring(index66, index77);

      this.paragraph8 = talkText.substring(index77, paragraph8End);
    }
  },
  async created() {
    await this.getSinglePost(this.$route.params.id);
    this.$nextTick(() => this.convertTextBody());
  }
};
</script>
<style  scoped>
.title {
  display: flex;
}
.nav-li {
  margin-left: auto;
  cursor: pointer;
}
@media only screen and (min-width: 320px) and (max-width: 479px) {
  .post-para {
    line-height: 1.5;
    font-size: 1em;
    font-weight: 500;
  }
  .postTitle {
    font-size: 1.3em;
  }
}

@media only screen and (min-width: 480px) and (max-width: 768px) {
  .post-para {
    line-height: 1.5;
    font-size: 1.2em;
    font-weight: 500;
  }
  .postTitle {
    font-size: 1.6em;
  }
}

@media only screen and (min-width: 769px) and (max-width: 991px) {
  .post-para {
    line-height: 1.5;
    font-size: 1.2em;
    font-weight: 500;
  }
  .postTitle {
    font-size: 1.6em;
  }
}

@media only screen and (min-width: 992px) {
  .post-para {
    line-height: 1.5;
    font-size: 1.3em;
    font-weight: 500;
  }
  .postTitle {
    font-size: 1.6em;
  }
}
</style>