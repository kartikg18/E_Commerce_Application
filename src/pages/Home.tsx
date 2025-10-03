import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

type Product = any;

export default function Home() {
  const [products, setProducts] = useState<Product[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("all");
  const [sort, setSort] = useState("");
  const [categories, setCategories] = useState<string[]>([]);

  useEffect(() => {
    setLoading(true);
    fetch("https://fakestoreapi.com/products")
      .then((res) => {
        if (!res.ok) throw new Error("Network error. We ran into a problem.");
        return res.json();
      })
      .then((data) => setProducts(data))
      .catch((e) => setError((e as Error).message))
      .finally(() => setLoading(false));
  }, []);

  useEffect(() => {
    fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((c) => setCategories(c))
      .catch(() => {});
  }, []);

  if (loading) return <div className="center">Loading products...</div>;
  if (error) return <div className="center error">Error: {error}</div>;

  const filtered = products
    .filter((p: any) => (category === "all" ? true : p.category === category))
    .filter(
      (p: any) =>
        p.title.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
    )
    .sort((a: any, b: any) => {
      if (sort === "price-asc") return a.price - b.price;
      if (sort === "price-desc") return b.price - a.price;
      if (sort === "alpha") return a.title.localeCompare(b.title);
      return 0;
    });

  return (
    <div className="container">
      <h1>Products</h1>

      <div className="filters">
        <input
          placeholder="Search products"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
        />
        <select value={category} onChange={(e) => setCategory(e.target.value)}>
          <option value="all">All categories</option>
          {categories.map((category) => (
            <option key={category} value={category}>
              {category}
            </option>
          ))}
        </select>
        <select value={sort} onChange={(e) => setSort(e.target.value)}>
          <option value="">Default</option>
          <option value="price-asc">Price: Low → High</option>
          <option value="price-desc">Price: High → Low</option>
          <option value="alpha">Alphabetical</option>
        </select>
      </div>

      <div className="grid">
        {filtered.map((p: any) => (
          <article key={p.id} className="card">
            <Link to={`/product/${p.id}`} className="card-link">
              <div className="thumb">
                <img src={p.image} alt={p.title} />
              </div>
              <h3 className="title">{p.title}</h3>
              <div className="price">${p.price.toFixed(2)}</div>
            </Link>
          </article>
        ))}
      </div>
    </div>
  );
}
