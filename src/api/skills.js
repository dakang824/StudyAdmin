/*
 * @Author: yukang 1172248038@qq.com
 * @Description: 技能树管理
 * @Date: 2020-10-02 00:59:22
 * @LastEditTime: 2021-02-24 19:39:17
 */
import request from "@/utils/request";

export function addSkillTree(data) {
  return request({
    url: "/service/plat/admin/addSkillTree",
    method: "post",
    data,
  });
}

export function modifySkillTree(data) {
  return request({
    url: "/service/plat/admin/modifySkillTree",
    method: "post",
    data,
  });
}

export function findSkillTree(data) {
  return request({
    url: "/service/plat/admin/findSkillTree",
    method: "post",
    data,
  });
}

export function publicSkillTree(data) {
  return request({
    url: "/service/plat/admin/publicSkillTree",
    method: "post",
    data,
  });
}

export function canclePublicSkillTree(data) {
  return request({
    url: "/service/plat/admin/canclePublicSkillTree",
    method: "post",
    data,
  });
}

export function deleteSkillTree(data) {
  return request({
    url: "/service/plat/admin/deleteSkillTree",
    method: "post",
    data,
  });
}

export function getSkillTreeTemplate(data) {
  return request({
    url: "/service/plat/admin/getSkillTreeTemplate",
    method: "post",
    data,
  });
}

export function querySkillTreeScore(data) {
  return request({
    url: "/service/plat/admin/querySkillTreeScore",
    method: "post",
    data,
  });
}

export function getSkillTreeScoreTemplate(data) {
  return request({
    url: "/service/plat/admin/getSkillTreeScoreTemplate",
    method: "post",
    data,
  });
}

export function importSkillTree(data) {
  return request({
    url: "/service/plat/admin/importSkillTree",
    method: "post",
    data,
  });
}

export function importSkillTreeScore(data) {
  return request({
    url: "/service/plat/admin/importSkillTreeScore",
    method: "post",
    data,
  });
}
