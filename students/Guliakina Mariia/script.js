const goods = [
    { title: 'Мышка', price: 500 },
    { title: 'Ноутбук', price: 50000 },
    { title: 'Клавиатура', price: 5000 },
    { title: 'Монитор', price: 10000 },
];

const getGoodsItemLayout = (title = 'Soon', price = 'Soon') => {
    return `
        <div class="item">
            <h4>${title}</h4>
            <p>${price}</p>
            <button class='buy-button' id='add-button'>BUY</button>
        </div>
    `;
}

const render = (list) => {
    let goodsItems = list.map(item => getGoodsItemLayout(item.title, item.price));
    document.querySelector('.goods').innerHTML = goodsItems.join('');
};

render(goods);
