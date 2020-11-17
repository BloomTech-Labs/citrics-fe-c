import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../common/UploadAvatar/Avatar';

import { Modal, Button, Form, Input, Card } from 'antd';
import '../../../styles/ProfilePage.less';

const RenderProfileListPage = props => {
  const [editing, setEditing] = useState(false);
  const [user, setUser] = useState({
    id: props.data.id,
    name: props.data.name,
    email: props.data.email,
    avatar: props.data.avatar,
  });
  const [visible, setVisible] = useState(false);
  const [form] = Form.useForm();
  const [formLayout, setFormLayout] = useState('horizontal');

  const onFormLayoutChange = ({ layout }) => {
    setFormLayout(layout);
  };

  const formItemLayout =
    formLayout === 'horizontal'
      ? {
          labelCol: {
            span: 4,
          },
          wrapperCol: {
            span: 14,
          },
        }
      : null;

  const buttonItemLayout =
    formLayout === 'horizontal'
      ? {
          wrapperCol: {
            span: 14,
            offset: 4,
          },
        }
      : null;

  const showModal = () => {
    setVisible(true);
    setEditing(true);
    setUser({ ...user, password: '' });
  };

  const handleChange = e => {
    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const handleSave = () => {
    setVisible(false);
    setUser(user);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <section style={{ marginTop: '40%' }}>
        <Card title="User Info">
          <Avatar src={user.avatar} />
          <h3 label="Name">{user.name}</h3>
          <p label="Email">{user.email}</p>
          <Button type="primary" onClick={showModal}>
            Edit
          </Button>
        </Card>
      </section>

      <section>
        {editing && (
          <Modal
            title="Edit Profile"
            visible={visible}
            onOk={handleSave}
            onCancel={handleCancel}
            footer={[
              <Form.Item {...buttonItemLayout}>
                <Button key="submit" type="primary" onClick={handleSave}>
                  Save
                </Button>
                <Button key="back" onClick={handleCancel}>
                  Cancel
                </Button>
              </Form.Item>,
            ]}
          >
            <Form
              {...formItemLayout}
              layout={formLayout}
              form={form}
              initialValues={{
                layout: formLayout,
              }}
              onValuesChange={onFormLayoutChange}
            >
              <Form.Item label="Name">
                <Input
                  style={{ color: 'black' }}
                  type="text"
                  name="name"
                  value={user.name}
                  onChange={handleChange}
                />
              </Form.Item>
              <Form.Item label="Email">
                <Input
                  style={{ color: 'black' }}
                  type="text"
                  name="email"
                  value={user.email}
                  onChange={handleChange}
                />
              </Form.Item>
            </Form>
          </Modal>
        )}
      </section>
    </div>
  );
};

export default RenderProfileListPage;

// Don't forget your prop types! It will save you a lot of debugging headache as you add more features.
RenderProfileListPage.propTypes = {
  data: PropTypes.arrayOf(
    // Here is an example of enforcing an object structure that we expect to receive in our props:
    PropTypes.shape({
      // Here we require an id of type number or string to prevent a "unique key prop" warning
      id: PropTypes.oneOfType([PropTypes.number, PropTypes.string]).isRequired,
      name: PropTypes.string,
      email: PropTypes.string,
      avatar: PropTypes.string,
    })
  ).isRequired,
};
