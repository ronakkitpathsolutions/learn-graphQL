import { CommentOutlined, UsergroupAddOutlined, FileImageOutlined, FileAddOutlined } from '@ant-design/icons';

const useNavbar = () => {

    const sidebarData = [
        {
          key: '1',
          icon: <UsergroupAddOutlined />,
          label: 'Users',
          path: '/users'
        },
        {
          key: '2',
          icon: <FileImageOutlined />,
          label: 'Photos',
          path: '/photos'
        },
        {
          key: '3',
          icon: <FileAddOutlined />,
          label: 'Posts',
          path: '/posts'
        },
        {
          key: '4',
          icon: <CommentOutlined />,
          label: 'Commets',
          path: '/comments'
        },
      ]
    
    const defaultSelectedKeys =  ['1']

  return [sidebarData, defaultSelectedKeys]
}

export default useNavbar