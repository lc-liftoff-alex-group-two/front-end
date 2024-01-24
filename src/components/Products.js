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
      companyWebsite: 'https://www.thetoteproject.com/products/free-to-be-wild-tote',
    },
    {
        id: 2,
        name: 'Williams Sonoma No Kid Hungry Tools for Change Spatula',
        description: 'This adorable spatula is made by Williams Sonoma and partnered with No Kid Hungry. Each purchase goes towards working to end childhood hunger. ',
        image: '/images/Spatula.jpg',
        price: '$16',
        companyWebsite: 'https://www.williams-sonoma.com/products/nkh-silicone-fsc-wood-spatula-common-2023/?cm_cat=10078&cm_ven=afshoppromo&clickid=0L%253ATKo0JDxyPUTvwQQxEOUzDUkHzzV2UrUULS80&irgwc=1&bnrid=3917500&cm_ite=oprahdaily.com&cm_pla=ir&irpid=10078',
      },
      {
        id: 3,
        name: 'Purpose Jewelry Daisy Earrings',
        description: 'These beautiful handmade earrings are simple-yet-sophisticated! 100% of the proceeds from every purchase goes to Internation Sanctuary, an organization that helps girls and young women escape human trafficking survivors.',
        image: '/images/DaisyEarrings.jpg',
        price: '$26',
        companyWebsite: 'https://www.purposejewelry.org/collections/earrings/products/daisy-earrings?sscid=11k8_owsri&',
      },
      {
        id: 4,
        name: 'Lula’s Garden Jewel Garden',
        description: 'For our nature lovers, this hand-planted succulent garden will make a beautiful gift. With every purchase a portion of the proceeds goes to water.org, and each garden sold provides six months of water for someone in the developing world!',
        image: '/images/JewelGarden.jpg',
        price: '$44',
        companyWebsite: 'https://www.lulasgarden.com/collections/original-gardens/products/jewel-garden?cjdata=MXxOfDB8WXww&cjevent=874c8b30b6f911ee83b100c30a82b82a&utm_source=Skimlinks&utm_medium=affiliate&utm_id=15299302&utm_campaign=Take+10%25+off+Eco-Friendly+Succulent+Graduation+Gifts&utm_content=100102749',
      },
      {
        id: 5,
        name: 'Out of Print Read Your Socks Off Socks',
        description: 'Out of Print transforms literary classics into apparel and accessories for book lovers, like these incredibly fun socks. Every purchase helps fund literacy programs and book donations to communities in need.',
        image: '/images/ReadYourSocksOff.jpg',
        price: '$12',
        companyWebsite: 'https://www.amazon.com/dp/B08832J76H?linkCode=ogi&tag=oprah-auto-20&ascsubtag=%5Bartid%7C10072.g.25223818%5Bsrc%7Cwww.google.com%5Bch%7C%5Blt%7C%5Bpid%7C772fde5a-eebf-4895-9223-d80a8c487960%5Bofsxid%7Cbutton_poc%5Bofsvid%7Clt_t%5Bofsxid%7Coft%5Bofsvid%7Con%5Bofsxid%7Csubx_vs_jam%5Bofsvid%7Cjam',
      },
      {
        id: 6,
        name: 'Feed 10 Bag',
        description: 'With every purchase of this fashionable tote Feed Projects provides 10 meals to schoolchildren in need. ',
        image: '/images/FeedNewTote.png',
        price: '$28',
        companyWebsite: 'https://feedprojects.com/products/feed-10-bag',
      },
      {
        id: 7,
        name: 'Williams-Sonoma Pride Rainbow Towels',
        description: 'Show your Pride with this colorful set of 4 Turkish cotton dishtowels! Half of each purchase will go towards The Trevor Project, which provides crisis & suicide prevention support to LGBTQ+ youth.',
        image: '/images/PrideTowels.jpg',
        price: '$25',
        companyWebsite: 'https://www.williams-sonoma.com/products/the-trevor-project-rainbow-towels/?cm_cat=10078&cm_ven=afshoppromo&clickid=0L%253ATKo0JDxyPUTvwQQxEOUzDUkHzzkycrUULS80&irgwc=1&bnrid=3917500&cm_ite=oprahdaily.com&cm_pla=ir&irpid=10078',
      },
      {
        id: 8,
        name: 'Thistle Farms Hand Care Duo',
        description: 'A perfect gift for a great cause! With every sale, this hand soap and lotion duo goes towards supporting Thistle Farms, a nonprofit social enterprise that helps provide safe, supportive housing and jobs for women survivors of sexual abuse. ',
        image: '/images/HandCareDuo2.png',
        price: '$30',
        companyWebsite: 'https://thistlefarms.org/products/hand-care-duo?variant=18295068393537',
      },
      {
        id: 9,
        name: 'Pottery with a Purpose Beginner Pottery Kit',
        description: 'Give the gift of creativity to the artist in your life! This cute pottery kit includes everything you need to make something special. The best part is with every kit sold, Pottery With A Purpose gives back to mental health initiatives.',
        image: '/images/PotteryPurpose.png',
        price: '$65',
        companyWebsite: 'https://www.potterywithapurpose.com/collections/clay-kits/products/beginner-pottery-kit-air-dry?sscid=11k8_oxdou&',
      },
      {
        id: 10,
        name: 'Love Your Melon Bucket Hat',
        description: 'Ramp up your style with one of Love Your Melons fun, bright bucket hats! Not only do these hats sheild you from the summer sun, but fifty percent of every purchase goes towards fighting pediatric cancer. There are also beanies & baseball caps too!',
        image: '/images/MelonBucketHat.jpg',
        price: '$27',
        companyWebsite: 'https://loveyourmelon.com/collections/all/products/pink-gingham-melon-bucket-hat?utm_source=partnerize&utm_medium=affiliate&utm_campaign=21181&utm_content=8-12840&nb_platform=partnerize&nb_clid=4635874048&nb_subid=21181&nb_creative=8-12840&clickId=4635874048',
      },
      {
        id: 11,
        name: 'Conscious Step Socks that Save LGBTQ+ Lives',
        description: 'Every sock sold is unique and supports a different cause. This rainbow set donates to the Trevor Project and other versions go towards causes like protecting oceans, supporting mental health, planting trees, and donating books!',
        image: '/images/StepSocksSaveLives.jpg',
        price: '$35',
        companyWebsite: 'https://consciousstep.com/products/pride-ankle-basics?variant=40154085425352&currency=USD&utm_medium=product_sync&utm_source=google&utm_content=sag_organic&utm_campaign=sag_organic&gclid=CjwKCAjwrNmWBhA4EiwAHbjEQHwEAbvHh4VPLjeMlZQFK3mpInLmA9NR5B2e53J3HuXH3HzsZryEoBoCEGMQAvD_BwE&sscid=11k8_oxfcw&',
      },
      {
        id: 12,
        name: 'Cuddle + Kind Lola the Llama',
        description: 'This adorable doll is hand-knit with premium 100 percent cotton yarn. With every purchase, 10 meals go to children in need!',
        image: '/images/KindLola.jpg',
        price: '$57',
        companyWebsite: 'https://cuddleandkind.com/collections/hand-knit-dolls/products/lola-the-llama',
      },
      {
        id: 13,
        name: 'Warby Parker Bette Sunglasses',
        description: 'These classic square-frame sunglasses in fresh frost blue not only provide shade to you, but for every pair purchased Warby Parker distributes a pair to millions of people around the world who cannot afford the glasses they need.',
        image: '/images/WarbySunglasses.png',
        price: '$95',
        companyWebsite: 'https://www.warbyparker.com/sunglasses/bette/frost?w=wide&source=aw&utm_source=AWIN&utm_medium=affiliate&publisherid=1264447&utm_content=1264447&singular=84049__1264447__0&sv1=affiliate&sv_campaign_id=1264447&awc=17226_1705690338_d249c2d965f722c9a4dc36cb5d0e9ac2&utm_campaign=_campaign',
      },
      {
        id: 14,
        name: 'Corkcicle Cold Cup',
        description: 'This 30 oz cup not only keeps your water cold for 12 hours, but it also provides clean water to those in need. Corkcicle partnered with Charity: Water to create multiple pretty colors for your choosing!',
        image: '/images/ColdCup.jpg',
        price: '$45',
        companyWebsite: 'https://corkcicle.com/collections/best-sellers/products/cold-cup-xl?variant=40234181820504&irclickid=0L%3ATKo0JDxyPUTvwQQxEOUzDUkHzzmxQrUULS80&irgwc=1&utm_source=impact&utm_medium=affiliates',
      },
      {
        id: 15,
        name: 'Lush Charity Pot Body Lotion',
        description: 'Lush’s cocoa butter lotion will leave skin “subtly perfumed and touchably soft.” For every purchase, the brand donates 100 perfect of the price (minus taxes) to grassroots organizations for human rights, animal protection, and environmental justice.',
        image: '/images/LushLotion.jpg',
        price: '$32',
        companyWebsite: 'https://www.lush.com/us/en_us/p/charity-pot-hand-and-body-lotion',
      },
      {
        id: 16,
        name: 'Prinkshop 1973 Retro Affirmation Tee',
        description: 'Even though Roe v. Wade was overturned, you can still stand up for women’s rights in this vintage-inspired cotton tee. It pays homage to the year Roe was passed, and every sale donates $5 to the National Institute for Reproductive Health’s fight to change public policy.',
        image: '/images/RetroTee.jpg',
        price: '$45',
        companyWebsite: 'https://www.social-goods.com/collections/view-all/products/1973-retro-womens-activist-tee-white?sscid=11k8_oxlr6&utm_source=Shareasale&utm_medium=affiliate&utm_campaign=314743&utm_content=1734752',
      },
      {
        id: 17,
        name: 'Uncommon Goods Sunflowers for Ukraine Earrings',
        description: 'Each purchase of these stunning earrings dontates to Global Givings Ukraine Crisis Relief Fund. This organization provides food, water, shelter and more to Ukrainian communities that have been torn apart due to the ongoing war.',
        image: '/images/UkraineEarrings.jpg',
        price: '$70',
        companyWebsite: 'https://www.uncommongoods.com/product/sunflowers-for-ukraine-earrings?clickid=0LrVtL0JDxyPReBx4dyucW8jUkHzzBz4rUULS80&irgwc=1&utm_source=Hearst%20Magazines&utm_medium=affiliates&utm_campaign=8444&utm_term=Online%20Tracking%20Link&trafficSource=Impact&sharedid=',
      },
      {
        id: 18,
        name: 'Tatcha Hinoki Body Wash',
        description: 'A 2023 Beauty O-Ward Winner, this exfoliating body wash aids the initiative to help girls in Asia & Africa stay in school, and donates diverse books to underserved communities through its partnership with Room to Read.',
        image: '/images/TatchaBody.jpg',
        price: '$34',
        companyWebsite: 'https://www.tatcha.com/product/forest-awakening-body-wash/CM05010T.html?cgid=Body&ranMID=38643&ranEAID=tv2R4u9rImY&ranSiteID=tv2R4u9rImY-Sh_NYDRXMNANw6bKi.wyPA&siteID=tv2R4u9rImY-Sh_NYDRXMNANw6bKi.wyPA&utm_medium=affiliate&utm_term=1&utm_content=1055064&utm_source=LinkShare&utm_campaign=Skimlinks+%28Variable+Pricing%29',
      },
      {
        id: 19,
        name: 'The Giving Keys Best Friend Mini Key Necklace Set',
        description: 'This matching set for you and your bestie is dainty and beautiful. It also supports those transitioning out of homelessness with every purchase! You can choose these necklaces to be engraved with love, dream, or believe.',
        image: '/images/GivingKeys.jpg',
        price: '$85',
        companyWebsite: 'https://www.thegivingkeys.com/products/best-friend-mini-key-necklace-sets?sscid=11k8_oz7x0&',
      },
      {
        id: 20,
        name: 'Patagonia Lightweight Fleece Pullover',
        description: 'This classis Patagonia fleece supports climate initiatives with every purchase. When you shop this brand, you are putting your money towards your future, literally!',
        image: '/images/Fleece.jpg',
        price: '$139',
        companyWebsite: 'https://www.patagonia.com/product/womens-lightweight-synchilla-snap-t-fleece-pullover/25455.html?avad=55097_b36c191d1&netid=1&pubid=40661&utm_source=skimlinks.com&utm_medium=affiliate&utm_campaign=Custom+Link&src=cl&src=avl',
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