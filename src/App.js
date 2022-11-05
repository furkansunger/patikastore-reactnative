import React, {useState} from 'react';
import {
  FlatList,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  View,
} from 'react-native';
import {ProductCard} from './components';
import allData from './data.json';

const App = () => {
  const [search, setSearch] = useState('');
  const [productData, setProductData] = useState(allData);

  const renderItem = data => {
    return <ProductCard product={data} />;
  };

  const handleSearch = searchText => {
    setSearch(searchText);
    searchText
      ? setProductData(
          productData.filter(product =>
            product.title.toLowerCase().includes(searchText.toLowerCase()),
          ),
        )
      : setProductData(allData);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.bar}>
        <Text style={styles.logo}>PatikaStore</Text>
        <TextInput
          placeholder="Ara..."
          style={styles.textInput}
          value={search}
          onChange={searchText => handleSearch(searchText.nativeEvent.text)}
        />
      </View>
      <FlatList
        style={styles.flatList}
        data={productData}
        renderItem={renderItem}
        numColumns={2}
      />
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  bar: {
    margin: 10,
  },
  logo: {
    fontSize: 24,
    color: 'purple',
    textTransform: 'uppercase',
    fontWeight: 'bold',
  },
  textInput: {
    marginVertical: 10,
    padding: 10,
    fontSize: 16,
    borderRadius: 12,
    backgroundColor: '#ddd',
  },
  flatList: {
    marginHorizontal: 5,
  },
});

export default App;
