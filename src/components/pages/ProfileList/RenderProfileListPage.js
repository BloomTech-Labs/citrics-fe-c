import React, { useState } from 'react';
import PropTypes from 'prop-types';
import Avatar from '../../common/UploadAvatar/Avatar';

import { Modal, Button, Form, Input } from 'antd';
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

  const handleOk = () => {
    setVisible(false);
  };

  const handleCancel = () => {
    setVisible(false);
  };

  return (
    <div>
      <section
        style={{
          marginTop: '50%',
          display: 'flex',
          justifyContent: 'center',
          alignContent: 'center',
        }}
      >
        <div style={{ paddingRight: '6%' }}>
          <Avatar src={user.avatar} />
        </div>
        <div>
          <h3 style={{ color: 'white' }}>Name: {user.name}</h3>
          <h3 style={{ color: 'white' }}>Email: {user.email}</h3>
        </div>
      </section>

      <section>
        <Button type="primary" onClick={showModal}>
          Edit
        </Button>
        {editing && (
          <Modal
            title="Edit Profile"
            visible={visible}
            onOk={handleOk}
            onCancel={handleCancel}
            footer={[
              <Form.Item {...buttonItemLayout}>
                <Button key="submit" type="primary" onClick={handleOk}>
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
