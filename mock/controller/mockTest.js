import { mock } from "mockjs";

export default [
  {
    url: "/service/plat/admin/findTestQues",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "操作成功",
        data: {
          testQues: {
            total: 9,
            list: [
              {
                id: 1,
                test_id: 1,
                que_id: 599,
                que: {
                  id: 599,
                  content:
                    "供用电系统接火，（　　）、（　　）或（　　）电气设备时，必须切断电源并做好安全措施后进行。",
                  answer: 2,
                  prof_id: 2,
                  module_id: 1,
                  type: 3,
                  analysis: null,
                  create_time: "2020-12-10 13:17:29.0",
                  queOptions: [
                    {
                      id: 2867,
                      que_id: 599,
                      name: "B",
                      value: 1,
                      rig: 0,
                      content: "正确",
                    },
                    {
                      id: 2868,
                      que_id: 599,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "错误",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 2,
                test_id: 1,
                que_id: 601,
                que: {
                  id: 601,
                  content:
                    " 高处作业人员攀爬A型杆时，必须使用提前设置的（　　）；在横梁上行走时，必须使用提前设置的（　　）。在转移作业位置时不得失去保护。",
                  answer: 3,
                  prof_id: 2,
                  module_id: 1,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:30.0",
                  queOptions: [
                    {
                      id: 2874,
                      que_id: 601,
                      name: "A",
                      value: 1,
                      rig: 1,
                      content: "",
                    },
                    {
                      id: 2875,
                      que_id: 601,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "垂直攀登自锁器",
                    },
                    {
                      id: 2876,
                      que_id: 601,
                      name: "C",
                      value: 4,
                      rig: 0,
                      content: "水平安全绳",
                    },
                    {
                      id: 2877,
                      que_id: 601,
                      name: "D",
                      value: 8,
                      rig: 0,
                      content: "安全带",
                    },
                    {
                      id: 2878,
                      que_id: 601,
                      name: "E",
                      value: 16,
                      rig: 0,
                      content: "防坠器",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 3,
                test_id: 1,
                que_id: 594,
                que: {
                  id: 594,
                  content:
                    "15.  塔式起重机安装与拆除作业时，施工（　　）必须在现场监督。",
                  answer: 15,
                  prof_id: 2,
                  module_id: 2,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:29.0",
                  queOptions: [
                    {
                      id: 2845,
                      que_id: 594,
                      name: "A",
                      value: 1,
                      rig: 1,
                      content: "",
                    },
                    {
                      id: 2846,
                      que_id: 594,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "项目负责人",
                    },
                    {
                      id: 2847,
                      que_id: 594,
                      name: "C",
                      value: 4,
                      rig: 1,
                      content: "安全员",
                    },
                    {
                      id: 2848,
                      que_id: 594,
                      name: "D",
                      value: 8,
                      rig: 1,
                      content: "机械管理员",
                    },
                    {
                      id: 2849,
                      que_id: 594,
                      name: "E",
                      value: 16,
                      rig: 0,
                      content: "安全监理",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 4,
                test_id: 1,
                que_id: 577,
                que: {
                  id: 577,
                  content:
                    "施工单位应当在施工现场入口处、施工起重机械、临时用电设施、（　　）、孔洞口、桥梁口、基坑边沿、爆破物及有害危险气体和液体存放处等危险部位，设置明显的安全警示标志。安全警示标志必须符合国家标准。",
                  answer: 31,
                  prof_id: 2,
                  module_id: 1,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:24.0",
                  queOptions: [
                    {
                      id: 2760,
                      que_id: 577,
                      name: "A",
                      value: 1,
                      rig: 1,
                      content: "",
                    },
                    {
                      id: 2761,
                      que_id: 577,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "脚手架",
                    },
                    {
                      id: 2762,
                      que_id: 577,
                      name: "C",
                      value: 4,
                      rig: 1,
                      content: "出入通道口",
                    },
                    {
                      id: 2763,
                      que_id: 577,
                      name: "D",
                      value: 8,
                      rig: 1,
                      content: "楼梯口",
                    },
                    {
                      id: 2764,
                      que_id: 577,
                      name: "E",
                      value: 16,
                      rig: 1,
                      content: "电梯井口",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 5,
                test_id: 1,
                que_id: 575,
                que: {
                  id: 575,
                  content:
                    "《建设工程安全生产管理条例》的规定，（　　）等自升式架设设施的使用达到国家规定的检验检测期限的，必须经具有专业资质的检验检测机构检测。",
                  answer: 13,
                  prof_id: 2,
                  module_id: 1,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:24.0",
                  queOptions: [
                    {
                      id: 2750,
                      que_id: 575,
                      name: "A",
                      value: 1,
                      rig: 1,
                      content: "",
                    },
                    {
                      id: 2751,
                      que_id: 575,
                      name: "B",
                      value: 2,
                      rig: 0,
                      content: "施工起重机械",
                    },
                    {
                      id: 2752,
                      que_id: 575,
                      name: "C",
                      value: 4,
                      rig: 1,
                      content: "客运索道",
                    },
                    {
                      id: 2753,
                      que_id: 575,
                      name: "D",
                      value: 8,
                      rig: 1,
                      content: "整体提升脚手架",
                    },
                    {
                      id: 2754,
                      que_id: 575,
                      name: "E",
                      value: 16,
                      rig: 0,
                      content: "模板",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 6,
                test_id: 1,
                que_id: 583,
                que: {
                  id: 583,
                  content: "下列对起重机操作人员描述正确的是（　　）。",
                  answer: 15,
                  prof_id: 2,
                  module_id: 1,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:25.0",
                  queOptions: [
                    {
                      id: 2790,
                      que_id: 583,
                      name: "A",
                      value: 1,
                      rig: 1,
                      content: "",
                    },
                    {
                      id: 2791,
                      que_id: 583,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "起重机械操作人员应持证上岗",
                    },
                    {
                      id: 2792,
                      que_id: 583,
                      name: "C",
                      value: 4,
                      rig: 1,
                      content: "非操作人员禁止进入操作室",
                    },
                    {
                      id: 2793,
                      que_id: 583,
                      name: "D",
                      value: 8,
                      rig: 1,
                      content: "操作人员应按规定的起重性能作业，禁止超载",
                    },
                    {
                      id: 2794,
                      que_id: 583,
                      name: "E",
                      value: 16,
                      rig: 0,
                      content: "当信号不清或错误时，操作人员可拒绝执行",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 7,
                test_id: 1,
                que_id: 591,
                que: {
                  id: 591,
                  content:
                    " 依据《国家电网公司输变电工程施工现场关键点作业安全管控措施》要求，施工项目部应落实施工项目部验收职责，认真开展（　　）工作。",
                  answer: 3,
                  prof_id: 2,
                  module_id: 2,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:27.0",
                  queOptions: [
                    {
                      id: 2830,
                      que_id: 591,
                      name: "A",
                      value: 1,
                      rig: 1,
                      content: "",
                    },
                    {
                      id: 2831,
                      que_id: 591,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "施工队自检",
                    },
                    {
                      id: 2832,
                      que_id: 591,
                      name: "C",
                      value: 4,
                      rig: 0,
                      content: "项目部复检",
                    },
                    {
                      id: 2833,
                      que_id: 591,
                      name: "D",
                      value: 8,
                      rig: 0,
                      content: "公司专检",
                    },
                    {
                      id: 2834,
                      que_id: 591,
                      name: "E",
                      value: 16,
                      rig: 0,
                      content: "项目部初检",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 8,
                test_id: 1,
                que_id: 573,
                que: {
                  id: 573,
                  content:
                    "采用（　　）的建设工程和特殊结构的建设工程，设计单位应当在设计中提出保障施工作业人员安全和预防生产安全事故的措施建议。",
                  answer: 14,
                  prof_id: 2,
                  module_id: 1,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:23.0",
                  queOptions: [
                    {
                      id: 2740,
                      que_id: 573,
                      name: "A",
                      value: 1,
                      rig: 0,
                      content: "",
                    },
                    {
                      id: 2741,
                      que_id: 573,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "新技术",
                    },
                    {
                      id: 2742,
                      que_id: 573,
                      name: "C",
                      value: 4,
                      rig: 1,
                      content: "新结构",
                    },
                    {
                      id: 2743,
                      que_id: 573,
                      name: "D",
                      value: 8,
                      rig: 1,
                      content: "新材料",
                    },
                    {
                      id: 2744,
                      que_id: 573,
                      name: "E",
                      value: 16,
                      rig: 0,
                      content: "新工艺",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
              {
                id: 9,
                test_id: 1,
                que_id: 586,
                que: {
                  id: 586,
                  content:
                    "安全工器具包括防止触电、灼伤、坠落、淹溺等事故或职业危害，保障作业人员人身安全的（　　）和标志牌等专用工具和器具的管理，应符合《国家电网公司电力安全工器具管理规定》。",
                  answer: 15,
                  prof_id: 2,
                  module_id: 2,
                  type: 2,
                  analysis: null,
                  create_time: "2020-12-10 13:17:26.0",
                  queOptions: [
                    {
                      id: 2805,
                      que_id: 586,
                      name: "A",
                      value: 1,
                      rig: 1,
                      content: "",
                    },
                    {
                      id: 2806,
                      que_id: 586,
                      name: "B",
                      value: 2,
                      rig: 1,
                      content: "绝缘安全工器具",
                    },
                    {
                      id: 2807,
                      que_id: 586,
                      name: "C",
                      value: 4,
                      rig: 1,
                      content: "登高工器具",
                    },
                    {
                      id: 2808,
                      que_id: 586,
                      name: "D",
                      value: 8,
                      rig: 1,
                      content: "安全围栏（网）",
                    },
                    {
                      id: 2809,
                      que_id: 586,
                      name: "E",
                      value: 16,
                      rig: 0,
                      content: "个体防护装备",
                    },
                  ],
                  profession: null,
                  module: null,
                },
              },
            ],
            pageNum: 1,
            pageSize: 30,
            size: 9,
            startRow: 1,
            endRow: 9,
            pages: 1,
            prePage: 0,
            nextPage: 0,
            isFirstPage: true,
            isLastPage: true,
            hasPreviousPage: false,
            hasNextPage: false,
            navigatePages: 8,
            navigatepageNums: [1],
            navigateFirstPage: 1,
            navigateLastPage: 1,
          },
        },
        key: null,
      };
    },
  },
  {
    url: "/service/plat/admin/findTest",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "操作成功",
        data: {
          tests: {
            total: 4,
            list: [
              {
                id: 4,
                name: "模拟考测试题1",
                prof_id: 1,
                module_id: 1,
                company_id: 1,
                judge_count: 1,
                judge_score: 10,
                radio_count: 1,
                radio_score: 10,
                check_count: 8,
                check_score: 10,
                time: 50,
                start_time: "2020-08-20 08:00:00.0",
                end_time: "2020-08-20 08:50:00.0",
                que_orders: 1,
                answer_orders: 1,
                create_time: "2020-12-11 11:41:48.0",
              },
              {
                id: 3,
                name: "模拟考测试题1",
                prof_id: 1,
                module_id: 1,
                company_id: 1,
                judge_count: 1,
                judge_score: 10,
                radio_count: 1,
                radio_score: 10,
                check_count: 8,
                check_score: 10,
                time: 50,
                start_time: "2020-08-20 08:00:00.0",
                end_time: "2020-08-20 08:50:00.0",
                que_orders: 1,
                answer_orders: 1,
                create_time: "2020-12-11 11:41:42.0",
              },
              {
                id: 2,
                name: "模拟考二",
                prof_id: 1,
                module_id: 1,
                company_id: 1,
                judge_count: 1,
                judge_score: 10,
                radio_count: 1,
                radio_score: 10,
                check_count: 8,
                check_score: 10,
                time: 50,
                start_time: "2020-08-20 08:00:00.0",
                end_time: "2020-08-20 08:50:00.0",
                que_orders: 1,
                answer_orders: 1,
                create_time: "2020-12-11 11:41:22.0",
              },
              {
                id: 1,
                name: "模拟考测试题1",
                prof_id: 1,
                module_id: 1,
                company_id: 1,
                judge_count: 1,
                judge_score: 10,
                radio_count: 1,
                radio_score: 10,
                check_count: 8,
                check_score: 10,
                time: 50,
                start_time: "2020-08-20 08:00:00.0",
                end_time: "2020-08-20 08:50:00.0",
                que_orders: 1,
                answer_orders: 1,
                create_time: "2020-12-11 11:38:34.0",
              },
            ],
            pageNum: 1,
            pageSize: 30,
            size: 4,
            startRow: 1,
            endRow: 4,
            pages: 1,
            prePage: 0,
            nextPage: 0,
            isFirstPage: true,
            isLastPage: true,
            hasPreviousPage: false,
            hasNextPage: false,
            navigatePages: 8,
            navigatepageNums: [1],
            navigateFirstPage: 1,
            navigateLastPage: 1,
          },
        },
        key: null,
      };
    },
  },
  {
    url: "/service/plat/admin/modifyTest",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "操作成功",
        data: {
          tests: {
            id: 2,
            name: "模拟考二",
            prof_id: 1,
            module_id: 1,
            company_id: 1,
            judge_count: 1,
            judge_score: 10,
            radio_count: 1,
            radio_score: 10,
            check_count: 8,
            check_score: 10,
            time: 50,
            start_time: "2020-08-20 08:00:00.0",
            end_time: "2020-08-20 08:50:00.0",
            que_orders: 1,
            answer_orders: 1,
            create_time: "2020-12-11 11:41:22.0",
          },
        },
        key: null,
      };
    },
  },
  {
    url: "/service/plat/admin/addTest",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "操作成功",
        data: {
          tests: {
            id: 2,
            name: "模拟考测试题1",
            prof_id: 1,
            module_id: 1,
            company_id: 1,
            judge_count: 1,
            judge_score: 10,
            radio_count: 1,
            radio_score: 10,
            check_count: 8,
            check_score: 10,
            time: 50,
            start_time: "2020-08-20 08:00:00.0",
            end_time: "2020-08-20 08:50:00.0",
            que_orders: 1,
            answer_orders: 1,
            create_time: "2020-12-11 11:41:22.0",
          },
        },
        key: null,
      };
    },
  },
  {
    url: "/service/plat/admin/deleteTest",
    type: "post",
    response: (config) => {
      return {
        code: 200,
        msg: "操作成功",
        data: {},
        key: null,
      };
    },
  },
];