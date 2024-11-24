import React from 'react';
import { Button, Space, Table } from 'antd';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { RootState } from '../../stores';
import { createAsyncFetchProject } from '../../redux/project.slice';

import { dataProject } from '../../mocks/dataProject';


function Project() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const projects = useSelector((state: RootState) => state.project.projects);

  React.useEffect(() => {
    dispatch(createAsyncFetchProject(dataProject as any) as any)
  }, [])

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
      <Table dataSource={projects} columns={columns} />
    </div>
  )
}

export default Project