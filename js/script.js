function connection(){
            var doc = document.getElementById("purchase-order").contentDocument;
            var Items = doc.getElementsByTagNameNS("http://example.mozilla.org/PurchaseOrderML", "Figure");
            for (let i = 0; i < 100; i+=3) 
            {
                  document.getElementById(i+1).src=Items[i/3].getElementsByTagNameNS("http://example.mozilla.org/PurchaseOrderML", "img")[0].textContent;
                  document.getElementById(i+2).innerHTML=Items[i/3].getElementsByTagNameNS("http://example.mozilla.org/PurchaseOrderML", "name")[0].textContent;
                  document.getElementById(i+3).innerHTML=Items[i/3].getElementsByTagNameNS("http://example.mozilla.org/PurchaseOrderML", "price")[0].textContent;
            }        
}

var d = document,
    itemBox = d.querySelectorAll('.main-cart'), // блок каждого товара
		cartCont = d.getElementById('cart_content'); // блок вывода данных корзины
// Функция кроссбраузерная установка обработчика событий
function addEvent(elem, type, handler){
  if(elem.addEventListener){
    elem.addEventListener(type, handler, false);
  } else {
    elem.attachEvent('on'+type, function(){ handler.call( elem ); });
  }
  return false;
}
// Получаем данные из LocalStorage
function getCartData(){
	return JSON.parse(localStorage.getItem('cart'));
}
// Записываем данные в LocalStorage
function setCartData(o){
	localStorage.setItem('cart', JSON.stringify(o));
	return false;
}
// Добавляем товар в корзину
function addToCart(e){
	this.disabled = true; // блокируем кнопку на время операции с корзиной
	var cartData = getCartData() || {}, // получаем данные корзины или создаём новый объект, если данных еще нет
			parentBox = this.parentNode, // родительский элемент кнопки &quot;Добавить в корзину&quot;
			itemId = this.getAttribute('data-id'), // ID товара
			itemTitle = parentBox.querySelector('.cart-name').innerHTML, // название товара
                  itemPrice = parentBox.querySelector('.cart-price').innerHTML, // стоимость товара
                  PriceValue = parentBox.querySelector('.price-value').innerHTML;
                  console.log(PriceValue);
	if(cartData.hasOwnProperty(itemId)){ // если такой товар уже в корзине, то добавляем +1 к его количеству
            cartData[itemId][2] += 1;
            cartData[itemId][3] = PriceValue * cartData[itemId][2] + ' Р.';
	} else { // если товара в корзине еще нет, то добавляем в объект
            cartData[itemId] = [itemTitle, itemPrice, 1, 0];
            cartData[itemId][3] = PriceValue * cartData[itemId][2] + ' Р.';
	}
	// Обновляем данные в LocalStorage
	if(!setCartData(cartData)){ 
		this.disabled = false; // разблокируем кнопку после обновления LS
		cartCont.innerHTML = 'Товар добавлен в корзину.';
		setTimeout(function(){
			cartCont.innerHTML = 'Продолжить покупки...';
		}, 1000);
	}
	return false;
}
// Устанавливаем обработчик события на каждую кнопку &quot;Добавить в корзину&quot;
for(var i = 0; i < itemBox.length; i++){
	addEvent(itemBox[i].querySelector('.button'), 'click', addToCart);
}
// Открываем корзину со списком добавленных товаров
function openCart(e){
	
	var cartData = getCartData(), // вытаскиваем все данные корзины
			totalItems = '';
	console.log(JSON.stringify(cartData));
	// если что-то в корзине уже есть, начинаем формировать данные для вывода
	if(cartData !== null){
		totalItems = '<table class="shopping_list"><tr><th>Наименование</th><th>Цена</th><th>Кол-во</th></tr>';
		for(var items in cartData){
			totalItems += '<tr>';
			for(var i = 0; i < cartData[items].length; i++){
				totalItems += '<td>' + cartData[items][i] + '</td>';
			}
			totalItems += '</tr>';
		}
		totalItems += '<table>';
		cartCont.innerHTML = totalItems;
	} else {
		// если в корзине пусто, то сигнализируем об этом
		cartCont.innerHTML = 'В корзине пусто!';
	}
	return false;
}


/* Очистить корзину */
addEvent(d.getElementById('clear_cart'), 'click', function(e){
	localStorage.removeItem('cart');
	cartCont.innerHTML = 'Корзина очищена.';	
});