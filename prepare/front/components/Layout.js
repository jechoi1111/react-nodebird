import React from 'react';
import PropTypes from 'prop-types';
import Link from 'next/link';
import { Menu } from 'antd';
import { QqOutlined, WechatOutlined } from '@ant-design/icons';

const Layout = ({ children }) => {
   return (
      <div>
         <Menu mode="horizontal">
            <Menu.Item>
               <WechatOutlined />
               <Link href="/">
                  <a>노드버드</a>
               </Link>
            </Menu.Item>
            <Menu.Item>
               <QqOutlined />
               <Link href="/profile">
                  <a>프로필</a>
               </Link>
            </Menu.Item>
            <Menu.Item>
               <Link href="/signup">
                  <a>회원가입</a>
               </Link>
            </Menu.Item>
         </Menu>
         {children}
      </div>
   );
};

Layout.propTypes = {
   children: PropTypes.node.isRequired,
};

export default Layout;
