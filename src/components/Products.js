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
        id: 2,
        name: 'Williams Sonoma No Kid Hungry Tools for Change Spatula',
        description: 'This adorable spatula is made by Williams Sonoma and partnered with No Kid Hungry. Each purchase goes towards working to end childhood hunger. ',
        image: '/images/Spatula.jpg',
        price: '$16',
      },
      {
        id: 3,
        name: 'Purpose Jewelry Daisy Earrings',
        description: 'These beautiful handmade earrings are simple-yet-sophisticated! 100% of the proceeds from every purchase goes to Internation Sanctuary, an organization that helps girls and young women escape human trafficking survivors.',
        image: '/images/DaisyEarrings.jpg',
        price: '$26',
      },
      {
        id: 4,
        name: 'Lula’s Garden Jewel Garden',
        description: 'For our nature lovers, this hand-planted succulent garden will make a beautiful gift. With every purchase a portion of the proceeds goes to water.org, and each garden sold provides six months of water for someone in the developing world!',
        image: '/images/JewelGarden.jpg',
        price: '$44',
      },
      {
        id: 5,
        name: 'Out of Print Read Your Socks Off Socks',
        description: 'Out of Print transforms literary classics into apparel and accessories for book lovers, like these incredibly fun socks. Every purchase helps fund literacy programs and book donations to communities in need.',
        image: '/images/ReadYourSocksOff.jpg',
        price: '$12',
      },
      {
        id: 6,
        name: 'Feed Market Tote',
        description: 'With every purchase of this fashionable tote Feed Projects provides 50 meals to schoolchildren in need. ',
        image: '/images/FeedTote.jpg',
        price: '$88',
      },
      {
        id: 7,
        name: 'Williams-Sonoma Pride Rainbow Towels',
        description: 'Show your Pride with this colorful set of 4 Turkish cotton dishtowels! Half of each purchase will go towards The Trevor Project, which provides crisis & suicide prevention support to LGBTQ+ youth.',
        image: '/images/PrideTowels.jpg',
        price: '$25',
      },
      {
        id: 8,
        name: 'Thistle Farms Hand Care Duo',
        description: 'A perfect gift for a great cause! With every sale, this hand soap and lotion duo goes towards supporting Thistle Farms, a nonprofit social enterprise that helps provide safe, supportive housing and jobs for women survivors of sexual abuse. ',
        image: '/images/HandCareDuo2.png',
        price: '$30',
      },
      {
        id: 9,
        name: 'Pottery with a Purpose Beginner Pottery Kit',
        description: 'Give the gift of creativity to the artist in your life! This cute pottery kit includes everything you need to make something special. The best part is with every kit sold, Pottery With A Purpose gives back to mental health initiatives.',
        image: '/images/PotteryPurpose.png',
        price: '$65',
      },
      {
        id: 10,
        name: 'Love Your Melon Bucket Hat',
        description: 'Ramp up your style with one of Love Your Melons fun, bright bucket hats! Not only do these hats sheild you from the summer sun, but fifty percent of every purchase goes towards fighting pediatric cancer. There are also beanies & baseball caps too!',
        image: '/images/MelonBucketHat.jpg',
        price: '$27',
      },
      {
        id: 11,
        name: 'Conscious Step Socks that Save LGBTQ+ Lives',
        description: 'Every sock sold is unique and supports a different cause. This rainbow set donates to the Trevor Project and other versions go towards causes like protecting oceans, supporting mental health, planting trees, and donating books!',
        image: '/images/StepSocksSaveLives.jpg',
        price: '$35',
      },
      {
        id: 12,
        name: 'Cuddle + Kind Lola the Llama',
        description: 'This adorable doll is hand-knit with premium 100 percent cotton yarn. With every purchase, 10 meals go to children in need!',
        image: '/images/KindLola.jpg',
        price: '$57',
      },
      {
        id: 13,
        name: 'Warby Parker Bette Sunglasses',
        description: 'These classic square-frame sunglasses in fresh frost blue not only provide shade to you, but for every pair purchased Warby Parker distributes a pair to millions of people around the world who cannot afford the glasses they need.',
        image: '/images/WarbySunglasses.png',
        price: '$95',
      },
      {
        id: 14,
        name: 'Corkcicle Cold Cup',
        description: 'This 30 oz cup not only keeps your water cold for 12 hours, but it also provides clean water to those in need. Corkcicle partnered with Charity: Water to create multiple pretty colors for your choosing!',
        image: '/images/ColdCup.jpg',
        price: '$45',
      },
      {
        id: 15,
        name: 'Lush Charity Pot Body Lotion',
        description: 'Lush’s cocoa butter lotion will leave skin “subtly perfumed and touchably soft.” For every purchase, the brand donates 100 perfect of the price (minus taxes) to grassroots organizations for human rights, animal protection, and environmental justice.',
        image: '/images/LushLotion.jpg',
        price: '$32',
      },
      {
        id: 1,
        name: 'Prinkshop 1973 Retro Affirmation Tee',
        description: 'Even though Roe v. Wade was overturned, you can still stand up for women’s rights in this vintage-inspired cotton tee. It pays homage to the year Roe was passed, and every sale donates $5 to the National Institute for Reproductive Health’s fight to change public policy.',
        image: '/images/RetroTee.jpg',
        price: '$45',
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