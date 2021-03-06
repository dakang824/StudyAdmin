<template>
  <div class="category-container">
    <vab-query-form>
      <vab-query-form-left-panel :span="12">
        <el-button icon="el-icon-plus" type="primary" @click="handleEdit">
          添加分类
        </el-button>
        <el-button icon="el-icon-delete" type="danger" @click="handleDelete">
          批量删除
        </el-button>
      </vab-query-form-left-panel>
      <vab-query-form-right-panel :span="12">
        <el-form :inline="true" :model="queryForm" @submit.native.prevent>
          <!-- <el-form-item>
            <el-input
              v-model.trim="queryForm.id"
              placeholder="请输入查询条件"
              clearable
            />
          </el-form-item> -->
          <el-form-item>
            <el-button icon="el-icon-refresh" type="primary" @click="queryData">
              刷新
            </el-button>
          </el-form-item>
        </el-form>
      </vab-query-form-right-panel>
    </vab-query-form>

    <el-table
      v-loading="listLoading"
      :data="list"
      border
      :element-loading-text="elementLoadingText"
      @selection-change="setSelectRows"
    >
      <el-table-column
        show-overflow-tooltip
        type="selection"
        align="center"
      ></el-table-column>
      <el-table-column
        show-overflow-tooltip
        prop="pos"
        label="排序"
        align="center"
        width="80"
      />
      <el-table-column
        show-overflow-tooltip
        prop="name"
        label="大类"
        align="center"
        width="100"
      />
      <el-table-column
        show-overflow-tooltip
        prop="subCategoryList"
        label="小分类"
        align="center"
      >
        <template slot-scope="scope">
          {{ scope.row.subCategoryList | getChildName }}
        </template>
      </el-table-column>

      <el-table-column fixed="right" label="操作" width="200" align="center">
        <template #default="scope">
          <el-button type="primary" @click="handleEdit(scope.row)">
            编辑
          </el-button>
          <el-button type="danger" @click="handleDelete(scope.row)">
            删除
          </el-button>
        </template>
      </el-table-column>
    </el-table>
    <el-pagination
      v-if="false"
      background
      :current-page="queryForm.pageNo"
      :page-size="queryForm.pageSize"
      :layout="layout"
      :total="total"
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
    ></el-pagination>
    <edit ref="edit" @fetchData="fetchData" @update="update" @add="add"></edit>
  </div>
</template>

<script>
  import { deleteCategory } from "@/api/category";
  import Edit from "./components/CategoryEdit";
  import { mapState } from "vuex";
  export default {
    name: "Category",
    components: { Edit },
    filters: {
      getChildName: (value) => {
        return value.map((item) => item.name).join();
      },
    },
    data() {
      return {
        list: null,
        listLoading: true,
        layout: "total, sizes, prev, pager, next, jumper",
        total: 0,
        selectRows: "",
        elementLoadingText: "正在加载...",
        queryForm: {
          pageNo: 1,
          pageSize: 10,
          id: "",
        },
      };
    },
    computed: mapState({
      category: (state) => state.goods.category,
    }),
    created() {
      this.fetchData();
    },
    methods: {
      setSelectRows(val) {
        this.selectRows = val;
      },
      add(e) {
        this.list.push(e);
      },
      update(e) {
        const index = this.list.findIndex((item) => item.id === e.id);
        this.$set(this.list, index, e);
      },
      handleEdit(row) {
        if (row.id) {
          this.$refs["edit"].showEdit(row);
        } else {
          this.$refs["edit"].showEdit();
        }
      },
      handleDelete(row) {
        if (row.id) {
          this.$baseConfirm("你确定要删除当前项吗?", null, async () => {
            const { msg } = await deleteCategory({ ids: row.id });
            this.$baseMessage(msg, "success");
            this.list.splice(
              this.list.findIndex((item) => item.id === row.id),
              1
            );
          });
        } else {
          if (this.selectRows.length > 0) {
            const ids = this.selectRows.map((item) => item.id).join();
            this.$baseConfirm("你确定要删除选中项吗?", null, async () => {
              const { msg } = await deleteCategory({ ids });
              this.$baseMessage(msg, "success");
              this.selectRows.map((item) => {
                this.list.splice(
                  this.list.findIndex((it) => it.id === item.id),
                  1
                );
              });
            });
          } else {
            this.$baseMessage("未选中任何行", "error");
            return false;
          }
        }
      },
      handleSizeChange(val) {
        this.queryForm.pageSize = val;
        this.fetchData();
      },
      handleCurrentChange(val) {
        this.queryForm.pageNo = val;
        this.fetchData();
      },
      queryData() {
        this.queryForm.pageNo = 1;
        this.fetchData();
      },
      async fetchData() {
        this.listLoading = true;
        await this.$store.dispatch("goods/findAllCategory");
        this.list = this.category;
        this.total = this.category.length;
        setTimeout(() => {
          this.listLoading = false;
        }, 300);
      },
    },
  };
</script>
