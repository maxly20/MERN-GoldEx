const products = [
  {
    rating: 5,
    reviews: [],
    price: 15200,
    countInStock: 4,
    name: 'Rolex DateJust 36',
    category: 'silver',
    image: 'https://i.ibb.co/2c0z6Dj/01.jpg',
    description:
      ' Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, alloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.',
  },
  {
    rating: 5,
    reviews: [],
    price: 18700,
    countInStock: 0,
    name: 'Rolex DateJust 41',
    category: 'gold silver',
    image: 'https://i.ibb.co/TKYMNbH/02.jpg',
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch.The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.',
  },
  {
    rating: 4.5,
    reviews: [],
    price: 12000,
    countInStock: 5,
    name: 'Rolex DateJust 36',
    category: 'silver',
    image: 'https://i.ibb.co/02XsDg5/03.jpg',
    description:
      'The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.',
  },
  {
    rating: 4.5,
    reviews: [],
    price: 17600,
    countInStock: 5,
    name: 'Rolex DateJust 41',
    category: 'gold silver',
    image: 'https://i.ibb.co/nR8Fybt/04.jpg',
    description:
      'Gold is coveted for its lustre and nobility. Steel reinforces strength and reliability. Together, they harmoniously combine the best of their properties. A true Rolex signature, Rolesor has featured on Rolex models since the early 1930s, and was trademarked as a name in 1933. It is one of the prominent pillars of the Oyster collection.',
  },
  {
    rating: 5,
    reviews: [],
    price: 800,
    countInStock: 7,
    name: 'Rolex DateJust 36',
    category: 'gold silver',
    image: 'https://i.ibb.co/txX5hMv/05.jpg',
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
  },
  {
    rating: 5,
    reviews: [],
    price: 13600,
    countInStock: 6,
    name: 'Rolex DateJust 41',
    category: 'silver',
    image: 'https://i.ibb.co/CMhL8wC/06.jpg',
    description:
      'The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.',
  },
  {
    rating: 5,
    reviews: [],
    price: 22600,
    countInStock: 6,
    name: 'Rolex DateJust 31',
    category: 'silver',
    image: 'https://i.ibb.co/vPRPStx/07.jpg',
    description:
      'Gem-setters, like sculptors, finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. With the art and craft of a jeweller, the stone is placed and meticulously aligned with the others, then firmly secured in its gold or platinum setting. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork. A sparkling symphony to enhance the watch and enchant the wearer.',
  },
  {
    rating: 5,
    reviews: [],
    price: 16900,
    countInStock: 7,
    name: 'Rolex DateJust 36',
    category: 'silver',
    image: 'https://i.ibb.co/KWsrnkN/08.jpg',
    description:
      'The Rolex fluted bezel is a mark of distinction. Originally, the fluting of the Oyster bezel had a functional purpose: it served to screw the bezel onto the case helping to ensure the waterproofness of the watch. It was therefore identical to the fluting on the case back, which was also screwed onto the case for waterproofness, using specific Rolex tools. Over time, the fluting became an aesthetic element, a genuine Rolex signature feature. Today the fluted bezel is a mark of distinction, always in gold.',
  },
  {
    rating: 4.5,
    reviews: [],
    price: 11250,
    countInStock: 3,
    name: 'Rolex DateJust 31',
    category: 'silver',
    image: 'https://i.ibb.co/YkjCy2V/09.jpg',
    description:
      'The sunray finish on Rolex dials is a predominant method in watchmaking of achieving pure metallic colour dials such as shades of silver grey, rhodium or ruthenium. Silver-plating is mostly used as a base layer for the sunray finish, where further colour is added to the prepared dial. Sometimes colours such as champagne are achieved through electroplating with more than half a dozen different metals.',
  },
  {
    rating: 5,
    reviews: [],
    price: 11250,
    countInStock: 7,
    name: 'Rolex Lady-Datejust',
    category: 'gold',
    image: 'https://i.ibb.co/JzftX7j/10.jpg',
    description:
      'Gem-setters, like sculptors, finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. With the art and craft of a jeweller, the stone is placed and meticulously aligned with the others, then firmly secured in its gold or platinum setting. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork. A sparkling symphony to enhance the watch and enchant the wearer.',
  },
  {
    rating: 4.5,
    reviews: [],
    price: 9600,
    countInStock: 7,
    name: 'Rolex Datejust 31',
    category: 'silver',
    image: 'https://i.ibb.co/0hYmF8y/11.jpg',
    description:
      'Rolex uses Oystersteel for its steel watch cases. Specially developed by the brand, Oystersteel belongs to the 904L steel family, alloys most commonly used in high-technology and in the aerospace and chemical industries, where maximum resistance to corrosion is essential. Oystersteel is extremely resistant, offers an exceptional finish once polished and maintains its beauty even in the harshest environments.',
  },
  {
    rating: 5,
    reviews: [],
    price: 18200,
    countInStock: 7,
    name: 'Rolex Datejust 31',
    category: 'silver',
    image: 'https://i.ibb.co/rs34v92/12.jpg',
    description:
      'Gem-setters, like sculptors, finely carve the precious metal to hand-shape the seat in which each gemstone will be perfectly lodged. With the art and craft of a jeweller, the stone is placed and meticulously aligned with the others, then firmly secured in its gold or platinum setting. Besides the intrinsic quality of the stones, several other criteria contribute to the beauty of Rolex gem-setting: the precise alignment of the height of the gems, their orientation and position, the regularity, strength and proportions of the setting as well as the intricate finishing of the metalwork. A sparkling symphony to enhance the watch and enchant the wearer.',
  },
];

export default products;
