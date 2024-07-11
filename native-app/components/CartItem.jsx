import React from 'react';
import { View, Text, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { Ionicons } from '@expo/vector-icons';

const CartItem = ({ product, onRemoveFromCart, onUpdateQuantity }) => {
  return (
    <View style={styles.cartItem}>
      <Image 
        source={{uri: product.image}} 
        style={styles.image} 
        defaultSource={require('../assets/shoppingBag.png')}
      />
      <View style={styles.details}>
        <Text style={styles.name}>{product.name}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.price}>${product.price.toFixed(2)}</Text>
        <View style={styles.quantityControl}>
          <TouchableOpacity onPress={() => onUpdateQuantity(product.id, -1)}>
            <Text style={styles.quantityButton}>-</Text>
          </TouchableOpacity>
          <Text style={styles.quantity}>{product.quantity}</Text>
          <TouchableOpacity onPress={() => onUpdateQuantity(product.id, 1)}>
            <Text style={styles.quantityButton}>+</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.subtotal}>
          Subtotal: ${(product.price * product.quantity).toFixed(2)}
        </Text>
      </View>
      <TouchableOpacity onPress={() => onRemoveFromCart(product.id)} style={styles.removeButton}>
        <Ionicons name="close-circle" size={24} color="red" />
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  cartItem: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 10,
    borderBottomWidth: 1,
    borderBottomColor: '#e0e0e0',
  },
  image: {
    width: 80,
    height: 100,
    marginRight: 15,
  },
  details: {
    flex: 1,
  },
  name: {
    fontSize: 16,
    fontWeight: 'bold',
    marginBottom: 4,
  },
  description: {
    fontSize: 14,
    color: '#666',
    marginBottom: 4,
  },
  price: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 4,
  },
  quantityControl: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 4,
  },
  quantityButton: {
    fontSize: 18,
    paddingHorizontal: 10,
    color: '#007AFF',
  },
  quantity: {
    fontSize: 16,
    paddingHorizontal: 10,
  },
  subtotal: {
    fontSize: 14,
    fontWeight: 'bold',
    color: '#007AFF',
  },
  removeButton: {
    padding: 10,
  },
});

export default CartItem;