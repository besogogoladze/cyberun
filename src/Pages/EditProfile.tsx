import React, { useState } from "react";
import {
  Button,
  Form,
  Input,
  Cascader,
  Space,
  Avatar,
  Select,
  message,
} from "antd";
import type { FormItemProps } from "antd";
import { UserOutlined } from "@ant-design/icons";
import "../App.css";

const MyFormItemContext = React.createContext<(string | number)[]>([]);

interface MyFormItemGroupProps {
  prefix: string | number | (string | number)[];
}

function toArr(
  str: string | number | (string | number)[]
): (string | number)[] {
  return Array.isArray(str) ? str : [str];
}

const MyFormItemGroup: React.FC<
  React.PropsWithChildren<MyFormItemGroupProps>
> = ({ prefix, children }) => {
  const prefixPath = React.useContext(MyFormItemContext);
  const concatPath = React.useMemo(
    () => [...prefixPath, ...toArr(prefix)],
    [prefixPath, prefix]
  );

  return (
    <MyFormItemContext.Provider value={concatPath}>
      {children}
    </MyFormItemContext.Provider>
  );
};

const EditProfile: React.FC = () => {
  const [selectedCountry, setSelectedCountry] = useState<string | null>(null);
  const [cities, setCities] = useState<{ value: string; label: string }[]>([]);
  const [messageApi, contextHolder] = message.useMessage();
  const MyFormItem = ({ name, ...props }: FormItemProps) => {
    const prefixPath = React.useContext(MyFormItemContext);
    const concatName =
      name !== undefined ? [...prefixPath, ...toArr(name)] : undefined;

    return <Form.Item name={concatName} {...props} />;
  };
  const { Option } = Select;
  const success = () => {
    messageApi.open({
      type: "success",
      content: "User successfully edited!",
    });
  };

  const validateMessages = {
    required: "${label} is required!",
    types: {
      email: "${label} is not a valid email!",
      number: "${label} is not a valid number!",
    },
    number: {
      range: "${label} must be between ${min} and ${max}",
    },
  };

  const countries = [
    { value: "France", label: "France" },
    { value: "Italy", label: "Italy" },
  ];

  const cityOptions: Record<string, { value: string; label: string }[]> = {
    France: [
      { value: "Paris", label: "Paris" },
      { value: "Lyon", label: "Lyon" },
      { value: "Marseille", label: "Marseille" },
    ],
    Italy: [
      { value: "Rome", label: "Rome" },
      { value: "Milan", label: "Milan" },
      { value: "Naples", label: "Naples" },
    ],
  };

  const onFinish = (value: object) => {
    console.log(value);
    form.resetFields();
    success();
  };

  const handleCountryChange = (value: string[]) => {
    if (value?.length > 0) {
      const country = value[0];
      setSelectedCountry(country);
      setCities(cityOptions[country] || []);
      form.setFieldsValue({ city: null });
    } else {
      setSelectedCountry(null);
      setCities([]);
      form.setFieldsValue({ city: null });
    }
  };
  const [form] = Form.useForm();

  const cancelForm = () => {
    form.resetFields();
  };

  return (
    <div className="editProfile">
      <div>
        <div className="editProfileHeader">
          <h1>Edit Profile</h1>
          <div>
            <Space direction="vertical" size={16}>
              <Space wrap size={16}>
                <Avatar size={64} icon={<UserOutlined />} />
              </Space>
            </Space>
          </div>
        </div>
        <Form
          form={form}
          className="editProfileForm"
          name="form_item_path"
          layout="vertical"
          onFinish={onFinish}
          validateMessages={validateMessages}
        >
          <MyFormItemGroup prefix={["user"]}>
            <div className="editProfileName">
              <MyFormItem
                className="editProfileNameInput"
                name="firstName"
                label="First Name"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Input />
              </MyFormItem>
              <MyFormItem
                className="editProfileNameInput"
                name="lastName"
                label="Last Name"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Input />
              </MyFormItem>
            </div>
            <Form.Item
              name={["user", "email"]}
              label="Email"
              rules={[{ type: "email", required: true }]}
              hasFeedback
            >
              <Input />
            </Form.Item>
            <MyFormItem
              name="address"
              label="Address"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Input />
            </MyFormItem>
            <MyFormItem
              name="contactNumber"
              label="Contact Number"
              rules={[
                { required: true, message: "Contact number is required" },
                {
                  pattern: /^\+\d{10,15}$/,
                  message:
                    "Contact number must start with '+' and be 10-15 digits long",
                },
              ]}
              hasFeedback
            >
              <Input placeholder="+994123456789" style={{ width: "100%" }} />
            </MyFormItem>
            <div className="editProfileName">
              <MyFormItem
                className="editProfileCountry"
                name="country"
                label="Country"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Cascader
                  options={countries}
                  placeholder="Select Country"
                  onChange={handleCountryChange}
                />
              </MyFormItem>
              <MyFormItem
                className="editProfileCountry"
                name="city"
                label="City"
                rules={[{ required: true }]}
                hasFeedback
              >
                <Select placeholder="Select City" disabled={!selectedCountry}>
                  {cities.map((city) => (
                    <Option key={city.value} value={city.value}>
                      {city.label}
                    </Option>
                  ))}
                </Select>
              </MyFormItem>
            </div>

            <MyFormItem
              name="password"
              label="Password"
              rules={[{ required: true }]}
              hasFeedback
            >
              <Input.Password placeholder="Input password" />
            </MyFormItem>
          </MyFormItemGroup>
          <div className="editProfileButtons">
            <Button className="editProfileCancelButton" onClick={cancelForm}>
              Cancel
            </Button>
            <Button className="editProfileSaveButton" htmlType="submit">
              Save
            </Button>
          </div>
          {contextHolder}
        </Form>
      </div>
    </div>
  );
};

export default EditProfile;
