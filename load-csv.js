const fs = require('fs');
const csv = require('csv-parser');
const { sequelize, Customer, Product, Order } = require('./models');

async function loadCSV(filePath = 'csv/sales.csv') {
  await sequelize.sync({ alter: true });

  return new Promise((resolve, reject) => {
    const results = [];
    fs.createReadStream(filePath)
      .pipe(csv())
      .on('data', (row) => results.push(row))
      .on('end', async () => {
        try {
          for (const row of results) {
            const exists = await Order.findOne({ where: { id: row['Order ID'] } });
            if (exists) continue;

            await Customer.findOrCreate({
              where: { id: row['Customer ID'] },
              defaults: {
                name: row['Customer Name'],
                email: row['Customer Email'],
                address: row['Customer Address'],
              },
            });

            await Product.findOrCreate({
              where: { id: row['Product ID'] },
              defaults: {
                name: row['Product Name'],
                category: row['Category'],
              },
            });

            await Order.create({
              id: row['Order ID'],
              CustomerId: row['Customer ID'],
              ProductId: row['Product ID'],
              region: row['Region'],
              dateOfSale: new Date(row['Date of Sale']),
              quantitySold: parseInt(row['Quantity Sold']),
              unitPrice: parseFloat(row['Unit Price']),
              discount: parseFloat(row['Discount']),
              shippingCost: parseFloat(row['Shipping Cost']),
              paymentMethod: row['Payment Method'],
            });
          }
          console.log('CSV Load Complete');
          resolve({ success: true, message: 'CSV import complete.' });
        } catch (error) {
          console.error('CSV Load Error:', error.message);
          reject(error);
        }
      });
  });
}

module.exports = loadCSV;
