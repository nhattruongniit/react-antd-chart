import { Button, Space, Table } from 'antd';
import { useNavigate } from 'react-router-dom';

function Project() {
  const navigate = useNavigate();
  const dataSource = [
    {
      key: '1',
      id: 1,
      name: 'Lava Lamps',
      email: 'truong@gmail.com',
      chart: 3,
      version: '1.0',
    },
    {
      key: '2',
      id: 2,
      name: 'Monitoring',
      email: 'hau@gmail.com',
      chart: 4,
      version: '2.0',
    },
  ];
  
  const columns = [
    {
      title: 'Name',
      dataIndex: 'name',
      key: 'name',
    },
    {
      title: 'Email',
      dataIndex: 'email',
      key: 'email',
    },
    {
      title: 'Chart',
      dataIndex: 'chart',
      key: 'chart',
    },
    {
      title: 'Version',
      dataIndex: 'version',
      key: 'version',
    },
    {
      title: 'Actions',
      key: 'actions',
      width: '100px',
      render: (_: any, record: any) => {
        console.log(record)
        return (
          <Space size="middle">
            <Button type="text" onClick={() => gotoChart(record.id)}>Edit</Button>
            <Button danger type="text">Delete</Button>
          </Space>
        )
      },
    },
  ];

  function gotoChart(projectId: number) {
    navigate(`/project/${projectId}/chart`)
  }

  return (
    <div className='my-10 px-20'>
      <div className='font-bold text-[30px] mb-4'>Project</div>
      <Table dataSource={dataSource} columns={columns} />
    </div>
  )
}

export default Project