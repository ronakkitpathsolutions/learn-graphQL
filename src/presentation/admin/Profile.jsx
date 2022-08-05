import React from 'react'
import { Row, Col, Avatar, Radio, Button, Switch, Descriptions, List } from 'antd'
import Error404 from '../../shared/Error404';
import CustomSkeleton from '../../shared/CustomSkeleton';
import useProfile from '../../components/admin/profile';
import CustomCard from '../../shared/CustomCard';
import CustomBadge from '../../shared/CustomBadge';
import CustomInput from '../../shared/CustomInput';
import { listData, tabData } from '../../utils/constant/constantData';

const Profile = ({ ...props }) => {
    const [{ error, data, loading }, id] = useProfile()
    const user = data?.user

    if (error) return <Error404 />
    if (loading) return <CustomSkeleton isLoaded={loading} className='default-margin' type="card" />

    return (
        <div {...props} >
            <img alt="profile_banner" src={`https://picsum.photos/seed/${id}/1200/400`} className="profile-nav-bg" />
            <CustomCard
                className="card-profile-head"
                bodyStyle={{ display: "none" }}
                headertitle={
                    <Row justify="space-between" align="middle" gutter={[24, 0]}>
                        <Col span={24} md={12} className="col-info">
                            <Avatar.Group>
                                <CustomBadge type='ribbon' color="orange">
                                    <Avatar size={74} alt={user?.username} src={`https://joeschmoe.io/api/v1/:${user?.id}`} />
                                </CustomBadge>
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
                            }}>
                            <Radio.Group defaultValue="overview" buttonStyle="solid">
                                {tabData?.map((data) => <CustomInput optionType="button" key={data?.id} type='radio' isSolid {...data} />)}
                            </Radio.Group>
                        </Col>
                    </Row>
                } />
            <Row gutter={[24, 0]}>
                <Col span={24} md={8} className="mb-24 ">
                    <CustomCard
                        className="header-solid h-full"
                        headertitle={<h6 className="font-semibold m-0">Platform Settings</h6>}>
                        <ul className="list settings-list">
                            <li>
                                <h6 className="list-header text-sm text-muted">ACCOUNT</h6>
                            </li>
                            <li>
                                <Switch defaultChecked />

                                <span>Email me when someone follows me</span>
                            </li>
                            <li>
                                <Switch />
                                <span>Email me when someone answers me</span>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>Email me when someone mentions me</span>
                            </li>
                            <li>
                                <h6 className="list-header text-sm text-muted m-0">
                                    APPLICATION
                                </h6>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>New launches and projects</span>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>Monthly product updates</span>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>Subscribe to newsletter</span>
                            </li>
                        </ul>
                    </CustomCard>
                </Col>
                <Col span={24} md={8} className="mb-24">
                    <CustomCard
                        headertitle={<h6 className="font-semibold m-0">Profile Information</h6>}
                        className="header-solid h-full card-profile-information"
                        extra={<Button type="link">Click</Button>}
                        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                    >
                        <p className="text-dark">
                            {" "}
                            Hi, I’m Alec Thompson, Decisions: If you can’t decide, the answer
                            is no. If two equally difficult paths, choose the one more painful
                            in the short term (pain avoidance is creating an illusion of
                            equality).{" "}
                        </p>
                        <hr className="my-25" />
                        <Descriptions title="Oliver Liam">
                            <Descriptions.Item label="Full Name" span={3}>
                                Sarah Emily Jacob
                            </Descriptions.Item>
                            <Descriptions.Item label="Mobile" span={3}>
                                (44) 123 1234 123
                            </Descriptions.Item>
                            <Descriptions.Item label="Email" span={3}>
                                sarahjacob@mail.com
                            </Descriptions.Item>
                            <Descriptions.Item label="Location" span={3}>
                                USA
                            </Descriptions.Item>
                        </Descriptions>
                    </CustomCard>
                </Col>
                <Col span={24} md={8} className="mb-24">
                    <CustomCard
                        headertitle={<h6 className="font-semibold m-0">Conversations</h6>}
                        className="header-solid h-full"
                        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}>
                        <List
                            itemLayout="horizontal"
                            dataSource={listData}
                            split={false}
                            className="conversations-list"
                            renderItem={(item) => (
                                <List.Item actions={[<Button type="link">REPLY</Button>]}>
                                    <List.Item.Meta
                                        avatar={
                                            <Avatar shape="square" size={48} src={item.avatar} />
                                        }
                                        title={item.title}
                                        description={item.description}
                                    />
                                </List.Item>
                            )}
                        />
                    </CustomCard>
                </Col>
            </Row>
        </div>
    )
}

export default Profile