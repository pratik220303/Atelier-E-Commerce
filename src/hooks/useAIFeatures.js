import { useState, useCallback, useMemo } from "react";
import { products, aiKeywords, descriptionTemplates } from "@/data/products";

export function useAIFeatures(cartItems, viewedProducts) {
  const [searchQuery, setSearchQuery] = useState("");

  // AI-style search suggestions based on query
  const searchSuggestions = useMemo(() => {
    if (searchQuery.length < 2) return [];

    const query = searchQuery.toLowerCase();
    const suggestions = [];

    // Match keywords
    aiKeywords.forEach((keyword) => {
      if (keyword.includes(query) && !suggestions.includes(keyword)) {
        suggestions.push(keyword);
      }
    });

    // Match product names
    products.forEach((product) => {
      if (
        product.name.toLowerCase().includes(query) &&
        !suggestions.includes(product.name)
      ) {
        suggestions.push(product.name);
      }
    });

    // Match tags
    products.forEach((product) => {
      product.tags.forEach((tag) => {
        if (tag.includes(query) && !suggestions.includes(tag)) {
          suggestions.push(tag);
        }
      });
    });

    return suggestions.slice(0, 6);
  }, [searchQuery]);

  // Smart product recommendations based on cart and viewed items
  const recommendations = useMemo(() => {
    const recommendedIds = new Set();
    const cartCategories = cartItems.map((item) => item.category);
    const cartTags = cartItems.flatMap((item) => item.tags);

    const viewedCategories = viewedProducts
      .map((id) => products.find((p) => p.id === id)?.category)
      .filter(Boolean);

    // Find products with similar categories
    products.forEach((product) => {
      if (
        cartCategories.includes(product.category) ||
        viewedCategories.includes(product.category)
      ) {
        if (
          !cartItems.some((item) => item.id === product.id) &&
          !viewedProducts.includes(product.id)
        ) {
          recommendedIds.add(product.id);
        }
      }
    });

    // Find products with matching tags
    products.forEach((product) => {
      const matchingTags = product.tags.filter((tag) =>
        cartTags.includes(tag)
      );

      if (matchingTags.length > 0) {
        if (
          !cartItems.some((item) => item.id === product.id) &&
          !viewedProducts.includes(product.id)
        ) {
          recommendedIds.add(product.id);
        }
      }
    });

    // If no recommendations, show featured products
    if (recommendedIds.size === 0) {
      products
        .filter((p) => p.featured)
        .forEach((p) => recommendedIds.add(p.id));
    }

    return products.filter((p) => recommendedIds.has(p.id)).slice(0, 4);
  }, [cartItems, viewedProducts]);

  // Generate AI-style dynamic description
  const generateDescription = useCallback((product) => {
    const template =
      descriptionTemplates[
        Math.floor(Math.random() * descriptionTemplates.length)
      ];

    const qualities = ["elegance", "sophistication", "comfort", "style"];
    const benefits = ["durability", "comfort", "versatility", "timeless appeal"];
    const materials = ["premium", "artisanal", "sustainable", "luxurious"];

    return template
      .replace("{product}", product.name.toLowerCase())
      .replace(
        "{quality}",
        qualities[Math.floor(Math.random() * qualities.length)]
      )
      .replace(
        "{benefit}",
        benefits[Math.floor(Math.random() * benefits.length)]
      )
      .replace(
        "{material}",
        materials[Math.floor(Math.random() * materials.length)]
      );
  }, []);

  // Filter products based on search
  const searchProducts = useCallback((query) => {
    if (!query.trim()) return products;

    const lowerQuery = query.toLowerCase();
    return products.filter(
      (product) =>
        product.name.toLowerCase().includes(lowerQuery) ||
        product.category.toLowerCase().includes(lowerQuery) ||
        product.tags.some((tag) => tag.includes(lowerQuery)) ||
        product.description.toLowerCase().includes(lowerQuery)
    );
  }, []);

  return {
    searchQuery,
    setSearchQuery,
    searchSuggestions,
    recommendations,
    generateDescription,
    searchProducts,
  };
}
