<!--
 * @Author: yukang 1172248038@qq.com
 * @Description: 
 * @Date: 2020-10-03 11:27:37
 * @LastEditTime: 2021-04-27 21:54:15
-->
<template>
  <el-drawer
    :title="title"
    :visible.sync="dialogFormVisible"
    :before-close="close"
    size="760px"
  >
    <div v-if="dialogFormVisible" class="form">
      <el-form
        ref="form"
        :model="form"
        :rules="rules"
        size="medium"
        label-width="100px"
      >
        <el-form-item label="商品类型" prop="type">
          <el-select
            v-model="form.type"
            placeholder="请选择商品类型"
            filterable
            clearable
            :style="{ width: '100%' }"
            @change="handleChange"
          >
            <el-option
              v-for="(item, index) in getGoodsType"
              :key="index"
              :label="item.label"
              :value="item.value"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品名称" prop="name">
          <el-input
            v-model="form.name"
            placeholder="请输入商品名称"
            :maxlength="60"
            show-word-limit
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item v-if="form.type === 1" label="所属菜谱" prop="menuId">
          <el-select
            v-model="form.menuId"
            placeholder="请选择菜谱"
            clearable
            :style="{ width: '100%' }"
            @change="handleMenuId"
          >
            <el-option
              v-for="(item, index) in menuData"
              :key="index"
              :label="item.name"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品简述" prop="summary">
          <el-input
            v-model="form.summary"
            placeholder=" 显示在商品标题下面的一行小字"
            :maxlength="60"
            show-word-limit
            clearable
            :style="{ width: '100%' }"
          ></el-input>
        </el-form-item>
        <el-form-item label="商品类目" prop="cateId">
          <el-cascader
            v-model="form.cateId"
            :options="category"
            :props="categoryProps"
            :style="{ width: '100%' }"
            placeholder="请选择商品类目"
            clearable
          ></el-cascader>
        </el-form-item>
        <el-form-item label="商品产地" prop="address_id">
          <el-select
            v-model="form.address_id"
            placeholder="请选择商品产地"
            clearable
            :style="{ width: '100%' }"
          >
            <el-option
              v-for="(item, index) in areaOptions"
              :key="index"
              :label="item.address"
              :value="item.id"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item label="商品规格" prop="spe_type">
          <el-radio-group v-model="form.spe_type" size="medium">
            <el-radio
              v-for="(item, index) in skuOptions"
              :key="index"
              :label="item.value"
            >
              {{ item.label }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.spe_type === 1">
          <unifySpec
            ref="unifySpec"
            :model="form"
            :is-add="isAdd"
            @getData="handleGetData"
          ></unifySpec>
        </div>
        <div v-if="form.spe_type === 2">
          <prodSpec ref="prodSpec" :model="form" :is-add="isAdd"></prodSpec>
        </div>

        <el-form-item label="商品图片" prop="pics">
          <el-upload
            ref="pics_img"
            :file-list="form.pics_list"
            :action="fileUpload"
            :before-upload="good_imgBeforeUpload"
            :list-type="form.introPics_list.length ? 'picture' : 'text'"
            accept="zip/*"
            :on-success="handlePicsSuccess"
            :before-remove="handlePicsRemove"
            :limit="getLimit"
          >
            <el-button size="small" type="primary" icon="el-icon-upload">
              添加图片
            </el-button>
            <div slot="tip" class="el-upload__tip">
              上传ZIP格式压缩包，单张尺寸建议258px*258px，？？？像素以上，单张图片大小1M以下，最多5张图片，01-05，顺序从小到大
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="商品描述" prop="introPics">
          <el-upload
            ref="introPics_img"
            :file-list="form.introPics_list"
            :action="fileUpload"
            :before-upload="describe_imgBeforeUpload"
            :list-type="form.introPics_list.length ? 'picture' : 'text'"
            accept="zip/*"
            :on-success="handleIntroPicsSuccess"
            :before-remove="handleIntroPicsRemove"
            :limit="getLimit"
          >
            <el-button size="small" type="primary" icon="el-icon-upload">
              添加图片
            </el-button>
            <div slot="tip" class="el-upload__tip">
              上传ZIP格式压缩包，单张尺寸建议？？*？？？，？？？像素以上，单张图片大小1M以下，01-50，顺序从小到大
            </div>
          </el-upload>
        </el-form-item>
        <el-form-item label="运费模板" prop="postTempId">
          <el-select
            v-model="form.postTempId"
            placeholder="请选择运费模板"
            clearable
            :style="{ width: '100%' }"
          >
            <el-option
              v-for="(item, index) in postTemps"
              :key="index"
              :label="item.name"
              :value="item.id"
              :disabled="item.disabled"
            ></el-option>
          </el-select>
        </el-form-item>
        <el-form-item
          label-width="120px"
          label="库存计算方式"
          prop="dealStockType"
        >
          <el-radio-group v-model="form.dealStockType" size="medium">
            <el-radio
              v-for="(item, index) in modeOptions"
              :key="index"
              :label="item.value"
              :disabled="item.disabled"
            >
              {{ item.label }}
            </el-radio>
          </el-radio-group>
        </el-form-item>
        <div v-if="form.type === 4 || (form.type === 1 && form.menuId)">
          <prodRecipes
            ref="prodRecipes"
            :key="'it' + proInd"
            :model="form"
            :is-add="isAdd"
          ></prodRecipes>
        </div>
      </el-form>
    </div>

    <div class="dialog-footer">
      <el-button size="medium" @click="close">取 消</el-button>
      <el-button size="medium" type="primary" @click="save">保 存</el-button>
    </div>
  </el-drawer>
</template>
<script>
  import { addProduct, modifyProduct, findProduct } from "@/api/goods";
  import { mapState } from "vuex";
  import { fileUpload } from "@/config/settings";
  import { findAllProdAddress } from "@/api/produce";
  import { findAllPostTemplate } from "@/api/freight";
  import prodSpec from "./prodSpec";
  import prodRecipes from "./prodRecipes";
  import unifySpec from "./unifySpec";
  import filters from "@/filters";
  export default {
    name: "GoodsEdit",
    components: {
      prodSpec,
      prodRecipes,
      unifySpec,
    },
    data() {
      return {
        isAdd: true,
        fileUpload,
        proInd: 0,
        form: {
          storeId: 1,
          name: "",
          type: "",
          summary: "",
          cateId: "",
          address_id: "",
          subCateId: "",
          spe_type: 1,
          prodSpec: [
            {
              id: 0,
              prodId: 0,
              oriPrice: "",
              sellPrice: "",
              stock: "",
              weight: "",
            },
          ],
          postTempId: "",
          dealStockType: "",
          prodRecipes: [],
          pics: "",
          introPics: "",
          menuId: "",
          storeId: "",
          introPics_list: [],
          pics_list: [],
        },
        rules: {
          id: [{ required: true, trigger: "blur", message: "请输入id" }],
          type: [
            {
              required: true,
              message: "请选择商品类型",
              trigger: "change",
            },
          ],
          name: [
            {
              required: true,
              message: "请输入商品名称",
              trigger: "blur",
            },
          ],
          summary: [
            {
              required: true,
              message: " 请输入商品简述,显示在商品标题下面的一行小字",
              trigger: "blur",
            },
          ],
          cateId: [
            {
              required: true,
              type: "array",
              message: "请选择一个商品类目",
              trigger: "change",
            },
          ],
          address_id: [
            {
              required: true,
              message: "请选择商品产地",
              trigger: "change",
            },
          ],
          postTempId: [
            {
              required: true,
              message: "请选择运费模板",
              trigger: "change",
            },
          ],
          dealStockType: [
            {
              required: true,
              message: "请选择库存计算方式",
              trigger: "blur",
            },
          ],
          pics: [
            {
              required: true,
              message: "请上传商品图片",
            },
          ],
          introPics: [
            {
              required: true,
              message: "请上传商品描述图片",
            },
          ],
          menuId: [
            {
              required: false,
              message: "请上传商品描述图片",
            },
          ],
        },
        good_imgfileList: [],
        describe_imgfileList: [],

        areaOptions: [],
        skuOptions: [
          {
            label: "统一规格",
            value: 1,
          },
          {
            label: "多规格",
            value: 2,
          },
        ],
        menuData: [],
        postTemps: [],
        modeOptions: [
          {
            label: "下单减库存",
            value: 1,
          },
          {
            label: "支付减库存",
            value: 2,
          },
        ],
        categoryProps: {
          multiple: false,
          label: "name",
          value: "id",
          children: "subCategoryList",
        },
        title: "",
        dialogFormVisible: false,
      };
    },
    computed: mapState({
      goodsType: (state) => state.goods.goodsType,
      category: (state) => state.goods.category,
      getLimit() {
        return this.isAdd ? 1 : 10000;
      },
      getGoodsType() {
        const arr = JSON.parse(JSON.stringify(this.goodsType))
          .filter(
            (item) => (this.$store.state.user.store[0].prodPri & item.value) > 0
          )
          .map((item) => {
            item.value =
              item.value === 4 ? 3 : item.value === 8 ? 4 : item.value;
            return item;
          });
        arr.length === 1 ? (this.form.type = arr[0].value) : "";
        return arr;
      },
    }),
    created() {},
    mounted() {},
    methods: {
      handleMenuId(e) {
        if (e) {
          const item = this.menuData.filter((item) => item.id === e);
          this.form.prodRecipes = item[0].prodRecipes;
          this.proInd += 1;
          // this.$set(this.form, "prodRecipes", item[0].prodRecipes);
        } else {
          this.form.prodRecipes = [];
        }
      },
      handleChange(e) {
        if (e === 1) {
          this.form.menuId = "";
          this.rules.menuId[0].required = true;
        }
      },
      handleIntroPicsRemove(file, fileList) {
        if (!this.isAdd) {
          const index = this.form.introPics.findIndex(
            (item) => item.id === file.id
          );
          this.form.introPics.splice(index, 1);
        } else {
          this.form.introPics = "";
        }
      },
      handlePicsRemove(file) {
        if (!this.isAdd) {
          const index = this.form.pics.findIndex((item) => item.id === file.id);
          this.form.pics.splice(index, 1);
        } else {
          this.form.pics = "";
        }
      },
      handlePicsSuccess(e) {
        this.form.pics = e.data.tempUrl;
        if (e.code === 500) {
          this.$baseAlert(e.msg, "温馨提示");
        }
        this.$refs.form.clearValidate("pics");
      },
      handleIntroPicsSuccess(e) {
        this.form.introPics = e.data.tempUrl.replace(/\"/g, "");
        if (e.code === 500) {
          this.$baseAlert(e.msg, "温馨提示");
        }
        this.$refs.form.clearValidate("introPics");
      },
      showEdit(row) {
        this.fetchData();
        if (!row) {
          this.title = "添加商品";
          this.isAdd = true;
        } else {
          this.title = "编辑商品";
          this.isAdd = false;
          var row = JSON.parse(JSON.stringify(row));
          this.handleChange(row.type);
          row.spe_type = row.speType;
          row.prodSpec = row.specList;
          row.address_id = row.addressId;
          row.cateId = [row.cateId, row.subCateId];
          row.pics_list = row.pics.map((item) => {
            return {
              name: item.path.substr(item.path.lastIndexOf("/") + 1),
              url: filters.imgBaseUrl(item.path),
              id: item.id,
            };
          });
          row.introPics_list = row.introPics.map((item) => {
            return {
              name: item.path.substr(item.path.lastIndexOf("/") + 1),
              url: filters.imgBaseUrl(item.path),
              id: item.id,
            };
          });

          this.form = Object.assign(this.form, row);
        }
        this.dialogFormVisible = true;
      },
      close() {
        this.$refs["form"].resetFields();
        this.form = this.$options.data().form;
        this.dialogFormVisible = false;
      },
      handleGetData(e) {
        this.form.prodSpec = JSON.stringify([e]);
      },
      async save() {
        if (this.form.spe_type === 2) {
          this.form.prodSpec = JSON.stringify(this.$refs.prodSpec.getData());
        } else {
          await this.$refs.unifySpec.getData();
        }
        if (this.form.type === 4) {
          this.form.prodRecipes = JSON.stringify(
            this.$refs.prodRecipes.getData()
          );
        }

        this.$refs["form"].validate(async (valid) => {
          if (valid) {
            const form = JSON.parse(JSON.stringify(this.form));
            let category = form.cateId;
            form.cateId = category[0];
            form.subCateId = category[1];
            form.storeId = 7;
            if (form.spe_type == 1) {
              const arr = JSON.parse(form.prodSpec);
              arr[0].name = "统一规格";
              form.prodSpec = JSON.stringify(arr);
            }
            if (this.title.includes("添加")) {
              const {
                msg,
                data: { product },
              } = await addProduct(form);
              this.$baseMessage(msg, "success");
              this.form = this.copyData;
              product.state =
                product.status === 0 || product.status === 2 ? 0 : 1;
              product.edit = false;
              this.$emit("add", product);
              // this.$emit("fetchData", false);
              this.close();
            } else {
              Array.isArray(form.pics)
                ? delete form.pics
                : (form.pics = form.pics);

              Array.isArray(form.introPics)
                ? delete form.introPics
                : (form.introPics = form.introPics);

              const {
                msg,
                data: { product },
              } = await modifyProduct(form);
              this.$baseMessage(msg, "success");
              this.form = this.copyData;
              product.state =
                product.status === 0 || product.status === 2 ? 0 : 1;
              product.edit = false;
              this.$emit("update", product);
              // this.$emit("fetchData", false);
              this.close();
            }
          } else {
            return false;
          }
        });
      },
      good_imgBeforeUpload(file) {
        // let isRightSize = file.size / 1024 / 1024 < 2;
        // if (!isRightSize) {
        //   this.$message.error("文件大小超过 2MB");
        // }
        let isAccept = new RegExp("zip/*").test(file.type);
        if (!isAccept) {
          this.$message.error("应该选择zip/*类型的文件");
        }
        return isAccept;
      },
      describe_imgBeforeUpload(file) {
        // let isRightSize = file.size / 1024 / 1024 < 2;
        // if (!isRightSize) {
        //   this.$message.error("文件大小超过 2MB");
        // }
        let isAccept = new RegExp("zip/*").test(file.type);
        if (!isAccept) {
          this.$message.error("应该选择zip/*类型的文件");
        }
        return isAccept;
      },
      async fetchData() {
        const {
          data: { prodAddress },
        } = await findAllProdAddress();
        const {
          data: { postTemps },
        } = await findAllPostTemplate();

        const {
          data: {
            product: { list },
          },
        } = await findProduct({
          type: 4,
          status: 1,
          pageNum: 1,
          pageSize: 10000,
          ignoreStoreId: true,
        });
        this.menuData = list;
        this.areaOptions = prodAddress;
        this.postTemps = postTemps;
        this.copyData = JSON.parse(JSON.stringify(this.form));
      },
    },
  };
</script>

<style lang="scss" scoped>
  .el-form {
    margin: 0 40px 0 20px;
  }

  .dialog-footer {
    position: absolute;
    right: 0;
    bottom: 0;
    left: 0;
    padding: $base-padding;
    text-align: center;
    text-align: right;
    border-top: 1px solid $base-border-color;
  }

  ::v-deep {
    .el-card__header {
      padding: 10px 20px;
    }

    .el-upload {
      &-list__item-status-label,
      &-list__item .el-icon-close {
        display: none !important;
      }
    }

    .el-card__body {
      padding: 20px 10px 0 0;
    }

    .add-btn {
      .el-form-item__content {
        margin-left: 10px !important;
      }
    }

    .el-upload__tip {
      line-height: 20px;
    }

    .el-drawer__header {
      padding-bottom: 15px;
      margin-bottom: 0;
      border-bottom: 1px solid $base-border-color;
    }

    .el-drawer {
      &__body {
        flex: inherit;
        padding-top: 10px;

        .form {
          max-height: calc(100vh - 148px);
          overflow: auto;

          .el-table {
            margin-bottom: 20px;
          }
        }
      }
    }
  }
</style>
