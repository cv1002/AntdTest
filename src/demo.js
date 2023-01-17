import React from "react";
import { Space, Table, Tag } from "antd";

const App = () => {
  const columns = [
    {
      title: "库名",
      dataIndex: "name",
      key: "name",
      render: (text) => <a href="https://github.com">{text}</a>
    },
    {
      title: "下发平台",
      dataIndex: "platform",
      key: "platform"
    },
    {
      title: "配置版本",
      dataIndex: "level",
      key: "level"
    },
    {
      title: "状态",
      key: "tags",
      dataIndex: "tags",
      render: (_, { tags }) => (
        <>
          {tags.map((tag) => {
            return (
              <Tag color={tag === "上线" ? "green" : "red"} key={tag}>
                {tag}
              </Tag>
            );
          })}
        </>
      )
    },
    {
      title: "备注",
      dataIndex: "comment",
      key: "comment",
      render: (text) => {
        if (text === "") {
          return "没填备注";
        } else {
          return text;
        }
      }
    },
    {
      title: "操作",
      key: "action",
      render: (_, record) => (
        <Space size="middle">
          {record.tags[0] === "灰度中" ? (
            <>
              <a href="https://github.com">查看灰度进度</a>
              <a href="https://github.com">取消灰度</a>
            </>
          ) : (
            <a href="https://github.com">修改</a>
          )}
        </Space>
      )
    }
  ];
  const data = [
    {
      key: "1",
      name: "安平库",
      platform: "OC平台",
      level: "1.0",
      tags: ["上线"],
      comment: "安全平台下发在OC节点的库"
    },
    {
      key: "2",
      name: "架平库",
      platform: "中间源平台",
      level: "1.0",
      tags: ["上线"],
      comment: ""
    },
    {
      key: "3",
      name: "云平库",
      platform: "OC平台",
      level: "1.0",
      tags: ["上线"],
      comment: ""
    },
    {
      key: "4",
      name: "云平库",
      platform: "中间源平台",
      level: "1.0",
      tags: ["灰度中"],
      comment: ""
    },
    {
      key: "5",
      name: "云平库",
      platform: "中间源平台",
      level: "0.9",
      tags: ["上线"],
      comment: ""
    }
  ];

  return (
    <>
      <Table columns={columns} dataSource={data} />
    </>
  );
};
export default App;
