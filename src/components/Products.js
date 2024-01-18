import React from 'react';
import ProductCard from './ProductCard';
import './Products.css';

const Products = () => {
  
  const products = [
    {
      id: 1,
      name: 'The Tote Project Free to Be Wild Tote',
      description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
      image: '/images/TheToteProject.jpg',
      price: '$29',
    },
    {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
      {
        id: 1,
        name: 'The Tote Project Free to Be Wild Tote',
        description: 'Each bag bought from The Tote Project fights human trafficking and supports survivors. The designs are beautiful, too, like this “free to be wild” flower image.',
        image: '/images/TheToteProject.jpg',
        price: '$29',
      },
    // Add more products as needed
  ];

  return (
    <div>
    <h2>Products</h2>
    <div className="product-container">
      {products.map((product) => (
        <ProductCard key={product.id} product={product} />
      ))}
    </div>
  </div>
);
};

export default Products;