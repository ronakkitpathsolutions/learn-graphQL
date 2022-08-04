import React from 'react'
import { Card, Row, Col, Avatar, Badge, Radio } from 'antd'
import Error404 from '../../shared/Error404';
import CustomSkeleton from '../../shared/CustomSkeleton';
import useProfile from '../../components/admin/profile';

const Profile = ({ ...props }) => {
    const [{ error, data, loading }, id] = useProfile()
    const user = data?.user

    if (error) return <Error404 />
    if (loading) return <CustomSkeleton isLoaded={loading} className='default-margin' type="card" />

    return (
        <div {...props} >
            <img alt="profile_banner" src={`https://picsum.photos/seed/${id}/1200/400`} className="profile-nav-bg" />
            <Card
                className="card-profile-head"
                bodyStyle={{ display: "none" }}
                title={
                    <Row justify="space-between" align="middle" gutter={[24, 0]}>
                        <Col span={24} md={12} className="col-info">
                            <Avatar.Group>
                                <Badge.Ribbon color="purple" count={1}>
                                    <Avatar size={74} alt={user?.username} src={`https://joeschmoe.io/api/v1/:${user?.id}`} />
                                </Badge.Ribbon>
                                <div className="avatar-info">
                                    <h5 className="font-semibold m-0">{user?.name}</h5>
                                    <p>{user?.company?.name}</p>
                                </div>
                            </Avatar.Group>
                        </Col>
                        <Col
                            span={24}
                            md={12}
                            style={{
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "flex-end",
                            }}
                        >
                            <Radio.Group defaultValue="albums">
                                <Radio.Button value="albums">Albums</Radio.Button>
                                <Radio.Button value="posts">Posts</Radio.Button>
                                <Radio.Button value="projects">Projects</Radio.Button>
                            </Radio.Group>
                        </Col>
                    </Row>
                }
            ></Card>
        </div>
    )
}

export default Profile