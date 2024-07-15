import React from 'react'
import { useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';

const { Header } = Layout;

type IProps = React.PropsWithChildren & {}

function MainLayout({ children }: IProps) {
  const navigate = useNavigate();
  return (
    <>
      <Header 
        style={{ 
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}>
        <div className="demo-logo" />
        <Menu
          theme="dark"
          mode="horizontal"
          items={[
            { key: '1', label: 'Dashboard', onClick: () => navigate('/')}
          ]}
          style={{ flex: 1, minWidth: 0 }}
        />
      </Header>
      <main>
        {children}
      </main>
    </>
  )
}

export default MainLayout