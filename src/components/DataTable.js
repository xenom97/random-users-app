import { Table } from "antd";
import { WomanOutlined, ManOutlined } from "@ant-design/icons";

export const DataTable = ({ users, loading, onChangePage }) => {
  const columns = [
    {
      title: "No.",
      dataIndex: "no",
      key: "no",
      sorter: (a, b) => a.no - b.no,
    },
    {
      title: "Username",
      dataIndex: "username",
      key: "username",
      sorter: (a, b) => a.username.localeCompare(b.username),
    },
    {
      title: "Fullname",
      dataIndex: "fullname",
      key: "fullname",
      sorter: (a, b) => a.fullname.localeCompare(b.fullname),
    },
    {
      title: "Gender",
      dataIndex: "gender",
      key: "gender",
      render: (gender) => {
        const isMale = gender === "male";

        return (
          <div className="flex items-center">
            <span className={isMale ? "text-blue-500" : "text-pink-500"}>
              {isMale ? <ManOutlined /> : <WomanOutlined />}
            </span>
            <span className="capitalize ml-2">{gender}</span>
          </div>
        );
      },
      sorter: (a, b) => a.gender.localeCompare(b.gender),
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
      sorter: (a, b) => a.email.localeCompare(b.email),
    },
    {
      title: "Phone Number",
      dataIndex: "phone",
      key: "phone",
      sorter: (a, b) => a.phone.localeCompare(b.phone),
    },
  ];

  return (
    <Table
      dataSource={users}
      columns={columns}
      loading={loading}
      rowKey={"no"}
      pagination={{
        pageSize: 10,
        total: 50,
        onChange: onChangePage,
      }}
    />
  );
};
