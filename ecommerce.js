// Será usado na página de checkout, antes do pagamento.
// Primeira parte é dedicada para puxar os dados da página.


// Segunda parte será inputar os dados que foram coletados na tag.
gtag('event', 'purchase', {
  "transaction_id": "24.031608523954162",
  "affiliation": "Google online store",
  "value": 23.07,
  "currency": "USD",
  "tax": 1.24,
  "shipping": 0,
  "items": [
    {
      "id": "P12345",
      "name": "Android Warhol T-Shirt",
      "list_name": "Search Results",
      "brand": "Google",
      "category": "Apparel/T-Shirts",
      "variant": "Black",
      "list_position": 1,
      "quantity": 2,
      "price": '2.0'
    },
    {
      "id": "P67890",
      "name": "Flame challenge TShirt",
      "list_name": "Search Results",
      "brand": "MyBrand",
      "category": "Apparel/T-Shirts",
      "variant": "Red",
      "list_position": 2,
      "quantity": 1,
      "price": '3.0'
    }
  ]
});
