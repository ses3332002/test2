import { Select } from 'antd';

const { Option } = Select;

export default function Filter({ selectedGender, setSelectedGender }) {
  function handleChange(value) {
    setSelectedGender(value);
  }

  return (
    <Select style={{ width: 120, margin: 20 }} value={selectedGender} onChange={handleChange}>
      <Option value="all">all</Option>
      <Option value="male">male</Option>
      <Option value="female">female</Option>
    </Select>
  );
}
