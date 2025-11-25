import React from 'react';
import { Breadcrumb, Layout, Menu, theme } from 'antd';
import { useNavigate, Link } from 'react-router-dom';
const { Header, Content, Footer } = Layout;

const items = [
    {
        label:"Home",
        key:"/home"
    },
    {
        label:"Profile",
        key:"/profile"
    }
]






const AppLayout = ({children}) => {


   const navigate = useNavigate()

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();
  return (
    <Layout>
      <Header
        style={{
          position: 'sticky',
          top: 0,
          zIndex: 1,
          width: '100%',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <div className="demo-logo" />

        <div style={{display:'flex',width:'100%',gap:'40px'}}>

            <Link to={'/home'} ><span style={{color:"#fff"}}>Home</span></Link>

            <Link to={'/profile'}><span style={{color:"#fff"}}>Profile</span></Link>
            
        </div>

        {/* <Menu onClick={(data)=>{
            console.log(data)
            navigate(data.key)
        }}
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={['2']}
          items={items}
          style={{ flex: 1, minWidth: 0 }}
        /> */}
      </Header>
      <Content style={{ padding: '0 48px' }}>
        <Breadcrumb
          style={{ margin: '16px 0' }}
          items={[{ title: 'Home' }, { title: 'List' }, { title: 'App' }]}
        />
        <div
          style={{
            padding: 24,
            minHeight: 380,
            background: colorBgContainer,
            borderRadius: borderRadiusLG,
          }}
        >
          {children}
        </div>
      </Content>
      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
    </Layout>
  );
};
export default AppLayout;