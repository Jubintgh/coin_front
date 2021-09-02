'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
    */
      return queryInterface.bulkInsert('Products', [
        {
          ownerId: 1,
          title: 'DeFi',
          imageUrl: 'https://img.block123.com/nav/images/ed999010-f1fb-51c1-b48e-c0979f4c1c78_T1Xvz0P.jpg?imageView2/0/w/128/format/jpg/',
          description: "An Open Community of Decentralized Finance Platforms. We saw an overlap in the problems that decentralized finance protocols were trying to solve and thought there would be no better way to tackle them then by forming an open community of like-minded projects. Interoperability and Open Source. Members of DeFi take interoperability into account when building their projects. This helps strengthen the compounding effects of all our projects as a whole. Open sourcing helps us reach this goal by allowing us to collectively understand how all of our products can be woven together on a technical level. Accessibility and Financial Inclusion. We strive to create a financial system that is accessible to anyone with an internet connection. We believe in a world where value flows freely, regardless of one’s geographic location.Financial Transparency. We believe that financial services should not be built in opaque silos, but rather that market-level information should be transparent to all participants while still preserving individual privacy."
        },
        {
          ownerId: 2,
          title: 'MakerDAO',
          imageUrl: 'https://img.block123.com/nav/images/cea0d6c1-fefc-52fc-aca3-21c31fdd239b_kynmd03.jpg?imageView2/0/w/128/format/jpg/',
          description: 'MakerDAO is “Decentralized Autonomous Organization” (“DAO”) operating on the Ethereum blockchain. At its core, MakerDAO permits the creation of a decentralized ‘stablecoin’ on Ethereum called Dai. A stablecoin is a token that seeks to eliminate price volatility, effectively tracking the price of a fiat currency like the US dollar. 1 Dai = 1 USD. In contrast to Dai which is a stablecoin that is suitable for payments and savings, MKR is a token that has a volatile price because of its unique supply mechanics and role on the Maker platform. MKR is a utility token, governance token and recapitalization resource of the Maker system.'
        },
        {
          ownerId: 3,
          title: 'DAI',
          imageUrl: 'https://img.block123.com/nav/images/a27a1512-ba77-5b59-9a91-58c83e099571.png?imageView2/0/w/128/format/jpg/',
          description: 'Dai is an Ethereum ERC20 token that is pegged to $1 USD — every Dai is worth $1, Dai is created by users borrowing against locked collateral and destroyed when loans are repaid. Anyone can create new dai by depositing ether as collateral and drawing an appropriate amount of dai. Locked collateral can be recovered at any time by paying back the borrowed dai (plus a stability fee). Thus, all dai in circulation is at all times backed by at least as much collateral. You can also exchange for Dai at both traditional exchanges and decentralized exchanges.'
        },
        {
          ownerId: 4,
          title: 'Wyre',
          imageUrl: 'https://img.block123.com/nav/image/36ea73c8-6f0a-5f4b-a077-91d77f93b4da_yNTjmJ5.jpg?imageView2/0/w/128/format/jpg/',
          description: 'Wyre leverages cutting-edge technology to bring you the fastest, most cost-effective international money transfers. The On/Off ramps for your users. Getting the coverage, banking relationships, and payment partners can be a huge drain on developers time. Don’t distract your vision or hold back the product getting into the hands of users. We’ve spent a lot of time and effort building out our infrastructure and excited to offer it so others don’t have to repeat the process.'
        },
        {
          ownerId: 5,
          title: 'Compound',
          imageUrl: 'https://img.block123.com/nav/images/3f312f55-0082-5ad5-bdf9-d33b991357e1.jpg?imageView2/0/w/128/format/jpg/',
          description: 'Compound is an open-source protocol for algorithmic, efficient Money Markets on the Ethereum blockchain. Seamlessly earn interest or borrow ERC-20 tokens without managing an order book.'
        },
      ], {});
  },

  down: (queryInterface, Sequelize) => {
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  }
};
