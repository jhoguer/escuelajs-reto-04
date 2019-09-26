const orders = (time, product, table) => {

  console.log(`### Orden: ${product} para ${table}`)

    return new Promise((resolve, reject) => { 
      try {
        setTimeout(() => {
          resolve(`=== Pedido servido: ${product}, tiempo de preparación ${time}ms para la ${table}`)
        }, time)
      } catch (error) {
        reject(error)
      }       

  })
}




const randomTime = () => {
  return Math.floor(Math.random() * 9) * 1000
  
}



const menu = {
  hamburger: 'Combo Hamburguesa',
  hotdog: 'Combo Hot Dogs',
  pizza: 'Combo Pizza',
};

const table = ['Mesa 1', 'Mesa 2', 'Mesa 3', 'Mesa 4', 'Mesa 5'];

const waiter = () => {
  const time = randomTime();
  orders(time, menu.hamburger, table[3])
    .then((res) => console.log(res))
    .catch((err) => console.error(err));
};

const waiter2 = () => {
  const time1 = randomTime();
  const time2 = randomTime();
  orders(time1, menu.hotdog, table[0])
    .then((res) => {
      console.log(res)
      return orders(time2, menu.pizza, table[2])
    })
    .then((res) => {
      console.log(res)
    })
    .catch((err) => console.error(err))
      
}

waiter();
waiter2()

