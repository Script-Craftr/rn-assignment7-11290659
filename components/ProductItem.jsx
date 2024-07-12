import React, { useState } from "react";
import {
  ActivityIndicator,
  View,
  Text,
  Image,
  TouchableOpacity,
  StyleSheet,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ProductDetails from "./ProductDetails"; // We'll create this component next

const ProductItem = ({ product, addToCart }) => {
  const [showDetails, setShowDetails] = useState(false);

  return (
    <View style={styles.productItem}>
      {product ? (
        <>
          <TouchableOpacity
            style={styles.imageContainer}
            onPress={() => setShowDetails(true)}
          >
            <Image source={{ uri: product.image }} style={styles.image} />
            <TouchableOpacity
              style={styles.addButton}
              onPress={() => addToCart(product)}
            >
              <Ionicons name="add" size={24} color="white" />
            </TouchableOpacity>
          </TouchableOpacity>
          <Text style={styles.name}>{product.title.slice(0, 20)}</Text>
          <Text style={styles.price}>${product.price}</Text>
          {showDetails && (
            <ProductDetails
              product={product}
              visible={showDetails}
              onClose={() => setShowDetails(false)}
              onAddToCart={addToCart}
            />
          )}
        </>
      ) : (
        <ActivityIndicator size="large" color="#0000ff" />
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  productItem: {
    margin: 6,
    width: "47%",
    padding: 6,
    borderRadius: 8,
  },
  imageContainer: {
    position: "relative",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  },
  image: {
    width: "70%",
    height: 130,
    borderRadius: 8,
  },
  addButton: {
    position: "absolute",
    right: 8,
    bottom: 8,
    borderWidth: 1,
    borderColor: "white",
    backgroundColor: "rgba(0, 0, 0, 0.5)",
    borderRadius: 15,
    padding: 4,
  },
  name: {
    fontSize: 16,
    marginTop: 8,
    marginBottom: 4,
  },
  price: {
    fontSize: 14,
    marginBottom: 4,
    color: "#666",
  },
});

export default ProductItem;
