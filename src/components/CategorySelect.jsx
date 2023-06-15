import React, { useEffect, useState } from 'react';
import SelectBox from './SelectBox';
import categoryApi from '../API/categoryApi';

export default function CategorySelect(props) {
  const [categories, setCategories] = useState([]);
  const [loading, setLoading] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState(0);
  const handleAddChange=props.handleAddChange
  const defaultValue=props.defaultValue
  const handleCategoryChange = value => {
    setSelectedCategory(value);
  };

  const myView = loading ? (
    <select>
      <option>loading categories.....</option>
    </select>
  ) : (
    <SelectBox
      name="category"
      defaultValue={defaultValue}
      data={categories}
      onChange={handleCategoryChange}
      handleAddChange={handleAddChange}
    />
  );

  useEffect(() => {
    const fetchData = async () => {
      const response = await categoryApi.getAll();
      const data = response.data.data;
      const categories = data.map(category => ({
        label: category.attributes.categoryName,
        value: category.id,
      }));
      setCategories(categories);
      setLoading(false);
    };

    fetchData();
  }, [selectedCategory]);

  return <>{myView}</>;
}