import React from 'react';
import {Image, Text, View} from 'react-native';
import styles from './ProductCardStyle';

const ProductCard = ({product}) => {
  return (
    <View style={styles.card}>
      <Image source={{uri: product.item.imgURL}} style={styles.image} />
      <Text style={styles.title}>{product.item.title}</Text>
      <Text style={styles.price}>{product.item.price}</Text>
      <Text style={styles.stock}>
        {product.item.inStock ? '' : 'Stokta yok'}
      </Text>
    </View>
  );
};

export default ProductCard;
