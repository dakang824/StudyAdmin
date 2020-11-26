/**
 * @copyright chuzhixin 1204505056@qq.com
 * @description router全局配置，如有必要可分文件抽离
 */

import Vue from "vue";
import VueRouter from "vue-router";
import Layout from "@/layouts";
import EmptyLayout from "@/layouts/EmptyLayout";
import { publicPath, routerMode } from "@/config/settings";

Vue.use(VueRouter);

export const constantRoutes = [
  {
    path: "/login",
    component: () => import("@/views/login/index"),
    hidden: true,
  },
  {
    path: "/register",
    component: () => import("@/views/register/index"),
    hidden: true,
  },
  {
    path: "/401",
    name: "401",
    component: () => import("@/views/401"),
    hidden: true,
  },
  {
    path: "/404",
    name: "404",
    component: () => import("@/views/404"),
    hidden: true,
  },
];

/*当settings.js里authentication配置的是intelligence时，views引入交给前端配置*/
export const asyncRoutes = [
  {
    path: "/",
    component: Layout,
    redirect: "/index",
    children: [
      {
        path: "/index",
        name: "Index",
        component: () => import("@/views/index/index"),
        meta: {
          title: "首页",
          icon: "home",
          affix: true,
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: "/userManagement",
    component: Layout,
    redirect: "/userManagement",
    children: [
      {
        path: "/userManagement",
        name: "UserManagement",
        component: () =>
          import("@/views/project/personnelManagement/userManagement/index"),
        meta: {
          title: "用户管理",
          icon: "user-cog",
        },
      },
    ],
  },
  {
    path: "/category",
    component: Layout,
    redirect: "/category",
    hidden: true,
    children: [
      {
        path: "/category",
        name: "Category",
        component: () => import("@/views/project/category/index"),
        meta: {
          title: "分类管理",
          icon: "puzzle-piece",
        },
      },
    ],
  },
  {
    path: "/goods",
    component: Layout,
    redirect: "/goods",
    hidden: true,
    children: [
      {
        path: "/goods",
        name: "Goods",
        component: () => import("@/views/project/goods/index"),
        meta: {
          title: "商品管理",
          icon: "gifts",
        },
      },
    ],
  },
  {
    path: "/freight",
    component: Layout,
    redirect: "/freight",
    hidden: true,
    children: [
      {
        path: "/freight",
        name: "Freight",
        component: () => import("@/views/project/freight/index"),
        meta: {
          title: "运费管理",
          icon: "donate",
        },
      },
    ],
  },
  {
    path: "/produce",
    component: Layout,
    hidden: true,
    redirect: "/produce",
    children: [
      {
        path: "/produce",
        name: "Produce",
        component: () => import("@/views/project/produce/index"),
        meta: {
          title: "产地管理",
          icon: "parking",
        },
      },
    ],
  },
  {
    path: "/store",
    component: Layout,
    hidden: true,
    redirect: "store",
    children: [
      {
        path: "/store",
        name: "Store",
        component: () => import("@/views/project/store/index"),
        meta: {
          title: "店铺管理",
          icon: "store",
        },
      },
    ],
  },
  {
    path: "/finance",
    component: Layout,
    redirect: "/finance",
    hidden: true,
    children: [
      {
        path: "/finance",
        name: "Finance",
        component: () => import("@/views/project/finance/index"),
        meta: {
          title: "财务管理",
          icon: "money-bill-alt",
          permissions: ["financial", "admin"],
        },
      },
    ],
  },
  {
    path: "/order",
    component: Layout,
    redirect: "noRedirect",
    name: "Order",
    hidden: true,
    meta: {
      title: "订单管理",
      icon: "shopping-cart",
    },
    children: [
      {
        path: "/recharge",
        name: "Recharge",
        hidden: true,
        component: () => import("@/views/project/order/recharge"),
        meta: {
          title: "充值订单",
          icon: "funnel-dollar",
          noKeepAlive: true,
        },
      },
      {
        path: "/orderGoods",
        name: "OrderGoods",
        component: () => import("@/views/project/order/goods"),
        meta: {
          title: "订单管理",
          icon: "shopping-bag",
          noKeepAlive: true,
        },
      },
      {
        path: "/remittance",
        name: "Remittance",
        hidden: true,
        component: () => import("@/views/project/order/remittance"),
        meta: {
          title: "汇款订单",
          icon: "file-invoice-dollar",
          noKeepAlive: true,
        },
      },
      {
        path: "/businessGoods",
        name: "BusinessGoods",
        hidden: true,
        component: () => import("@/views/project/order/business-goods"),
        meta: {
          title: "商家订单查询",
          icon: "shopping-bag",
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: "/payBackOrders",
    component: Layout,
    hidden: true,
    redirect: "/payBackOrders",
    children: [
      {
        path: "/payBackOrders",
        name: "PayBackOrders",
        component: () => import("@/views/project/payBackOrders/index"),
        meta: {
          title: "退款订单",
          icon: "money-bill-alt",
        },
      },
    ],
  },
  {
    path: "/finance",
    component: Layout,
    redirect: "noRedirect",
    name: "Order",
    hidden: true,
    meta: {
      title: "系统设置",
      icon: "cog",
    },
    children: [
      {
        path: "/banner",
        name: "Banner",
        component: () => import("@/views/project/banner/index"),
        meta: {
          title: "banner设置",
          icon: "images",
        },
      },
      {
        path: "/ads",
        name: "Ads",
        component: () => import("@/views/project/ads/index"),
        meta: {
          title: "广告设置",
          icon: "image",
        },
      },
      {
        path: "/setting",
        name: "Setting",
        component: () => import("@/views/project/storeSet/index"),
        meta: {
          title: "店铺设置",
          icon: "store-alt",
        },
      },
    ],
  },
  {
    path: "/article",
    component: Layout,
    redirect: "noRedirect",
    name: "Article",
    meta: {
      title: "文章管理",
      icon: "users-cog",
    },
    children: [
      {
        path: "list",
        name: "List",
        component: () => import("@/views/project/article/list.vue"),
        meta: {
          title: "文章管理",
          icon: "list-ul",
        },
      },
      {
        path: "editor",
        hidden: true,
        component: () => import("@/views/project/article/editor.vue"),
        meta: {
          title: "编辑文章",
          noKeepAlive: true,
        },
      },
    ],
  },
  {
    path: "/personnelManagement",
    component: Layout,
    hidden: true,
    redirect: "noRedirect",
    name: "PersonnelManagement",
    meta: { title: "权限管理", icon: "users-cog", permissions: ["admin"] },
    children: [
      {
        path: "roleManagement",
        name: "RoleManagement",
        component: () =>
          import("@/views/project/personnelManagement/roleManagement/index"),
        meta: { title: "角色管理" },
      },
      {
        path: "menuManagement",
        name: "MenuManagement",
        component: () =>
          import("@/views/project/personnelManagement/menuManagement/index"),
        meta: { title: "菜单管理" },
      },
    ],
  },
  {
    path: "/personalCenter",
    component: Layout,
    hidden: true,
    redirect: "personalCenter",
    children: [
      {
        path: "personalCenter",
        name: "PersonalCenter",
        component: () => import("@/views/personalCenter/index"),
        meta: {
          title: "个人中心",
        },
      },
    ],
  },
  {
    path: "*",
    redirect: "/404",
    hidden: true,
  },
];

const router = new VueRouter({
  base: routerMode === "history" ? publicPath : "",
  mode: routerMode,
  scrollBehavior: () => ({
    y: 0,
  }),
  routes: constantRoutes,
});
//注释的地方是允许路由重复点击，如果你觉得框架路由跳转规范太过严格可选择放开
/* const originalPush = VueRouter.prototype.push;
VueRouter.prototype.push = function push(location, onResolve, onReject) {
  if (onResolve || onReject)
    return originalPush.call(this, location, onResolve, onReject);
  return originalPush.call(this, location).catch((err) => err);
}; */

export function resetRouter() {
  router.matcher = new VueRouter({
    base: routerMode === "history" ? publicPath : "",
    mode: routerMode,
    scrollBehavior: () => ({
      y: 0,
    }),
    routes: constantRoutes,
  }).matcher;
}

export default router;
