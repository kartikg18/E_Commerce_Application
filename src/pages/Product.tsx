import React, { useEffect, useState, useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { CartContext } from "../store/CartProvider";

type Product = any;

export default function Product() {
  const { id } = useParams();
  const [product, setProduct] = useState<Product | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const { add } = useContext(CartContext);

  useEffect(() => {
    setLoading(true);
    fetch(`https://fakestoreapi.com/products/${id}`)
      .then((res) => {
        if (!res.ok) throw new Error("Network error. We ran into a problem.");
        return res.json();
      })
      .then((data) => setProduct(data))
      .catch((e) => setError((e as Error).message))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <div className="center">Loading...</div>;
  if (error) return <div className="center error">Error: {error}</div>;
  if (!product) return null;

  return (
    <div className="container product-page">
      <Link to="/" className="back">
        ← Back to products
      </Link>
      <div className="product-wrap">
        <div className="product-media">
          <img src={product.image} alt={product.title} />
        </div>
        <div className="product-info">
          <h2>{product.title}</h2>
          <p className="category">Category: {product.category}</p>
          <p className="desc">{product.description}</p>
          <div className="buy-row">
            <div className="price big">${product.price.toFixed(2)}</div>
            <button className="btn" onClick={() => add(product, 1)}>
              Add to cart
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
