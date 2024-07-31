const catalogButton = document.getElementById('catalogButton');

catalogButton.addEventListener('click', function () {
	window.location.href =
		'https://tut-sport.ru/tovary/futbolnaya-odezhda/sportivnye-kostyumy';
});

const categoryButton = document.getElementById('categoryButton');

categoryButton.addEventListener('click', function () {
	window.location.href = 'https://www.futbolki.ru/catalog/muzhskie-futbolki';
});

const categoryList = document.getElementById('categoryList');

categoryList.addEventListener('click', function () {
	window.location.href =
		'https://royrobson.com.ua/ru/blog-gid/vidi-koft-muzhskih';
});

const category = document.getElementById('category');

category.addEventListener('click', function () {
	window.location.href = 'https://afmen.online/muzhskie-koftyi.html';
});

const categoryL = document.getElementById('categoryL');

categoryL.addEventListener('click', function () {
	window.location.href = 'https://www.wantedshop.ru/magazin/kofty-tolstovki';
});

const categoryLi = document.getElementById('categoryLi');

categoryLi.addEventListener('click', function () {
	window.location.href = 'https://tkaner.com/odezhda/kofta/vidy-koft/';
});

const categoryLit = document.getElementById('categoryLit');

categoryLit.addEventListener('click', function () {
	window.location.href =
		'https://ager.ua/mans/muzhskie-svitera-svitshoty-dzhempery/muzhskie-kofty/';
});

const categoryLis = document.getElementById('categoryLis');

categoryLis.addEventListener('click', function () {
	window.location.href = 'https://leboutique.com/catalog/men/jersey';
});

const button1 = document.getElementById('button1');

button1.addEventListener('click', function () {
	window.location.href = 'https://pr-tex.ru/nanesenie-fleksom/';
});

const button2 = document.getElementById('button2');

button2.addEventListener('click', function () {
	window.location.href =
		'https://polo24.ru/blog/sposoby-naneseniya/fleks-flok/';
});

const button3 = document.getElementById('button3');

button3.addEventListener('click', function () {
	window.location.href = 'https://www.fan-print.ru/print/flok-i-fleks/';
});

const detailButton1 = document.getElementById('detailButton1');

detailButton1.addEventListener('click', function () {
	window.location.href = 'https://www.footballstore.ru/';
});

const detailButton2 = document.getElementById('detailButton2');

detailButton2.addEventListener('click', function () {
	window.location.href = 'https://abi.kg/catalog/sportivnye_tovary/futbol/';
});

const detailButton3 = document.getElementById('detailButton3');

detailButton3.addEventListener('click', function () {
	window.location.href = 'https://soccer-shop.com.ua/ua/';
});

const button7 = document.getElementById('button7');

button7.addEventListener('click', function () {
	window.location.href =
		'https://bobbystore.kg/category/lichnye-veshchi/odezhda-khan-tengri_1/detyam/futbolki/';
});

const lev = document.getElementById('lev');

lev.addEventListener('click', function () {
	window.location.href =
		'https://cotton-road.com/stati/12-interesnostej-o-futbolkah.html';
});

const li1 = document.getElementById('li1');

li1.addEventListener('click', function () {
	window.location.href = 'https://futbolki.net/futbolki-3/belyj/';
});

const li2 = document.getElementById('li2');

li2.addEventListener('click', function () {
	window.location.href = 'https://dresscode.kg/zheltye-futbolki/';
});

const li3 = document.getElementById('li3');

li3.addEventListener('click', function () {
	window.location.href =
		'https://megamarket.ru/catalog/sportivnye-bryuki-muzhskie/set-belye/';
});

const li4 = document.getElementById('li4');

li4.addEventListener('click', function () {
	window.location.href =
		'https://www.wildberries.ru/catalog/muzhchinam/odezhda/bryuki/tags/zheltye';
});

const li5 = document.getElementById('li5');

li5.addEventListener('click', function () {
	window.location.href = 'https://street-beat.ru/cat/man/obuv/krossovki/';
});

const li6 = document.getElementById('li6');

li6.addEventListener('click', function () {
	window.location.href =
		'https://www.intersport.kg/products/accessory_kepka/?sex=M&brand__in=50';
});

const li7 = document.getElementById('li7');

li7.addEventListener('click', function () {
	window.location.href =
		'https://skygear.ru/catalog/muzhskaya-sportivnaya-odezhda/muzhskie-sportivnye-zhilety/';
});

const images = document.querySelectorAll('.next img');

images.forEach(img => {
	img.addEventListener('click', () => {
		img.classList.toggle('clicked');
	});
});

function updateTime() {
	var timeElement = document.getElementById('time');
	var currentTime = new Date();
	var hours = currentTime.getHours();
	var minutes = currentTime.getMinutes();
	var formattedTime = hours + ':' + (minutes < 10 ? '0' : '') + minutes;
	timeElement.textContent = formattedTime;
}

setInterval(updateTime, 1000);

function showHome() {
	document.querySelector('.content.home').classList.add('active');
	document.querySelector('.content.cabinet').classList.remove('active');
	document.querySelector('.content.reviews').classList.remove('active');
}

function showCabinet() {
	document.querySelector('.content.home').classList.remove('active');
	document.querySelector('.content.cabinet').classList.add('active');
	document.querySelector('.content.reviews').classList.remove('active');
}

function showReviews() {
	document.querySelector('.content.home').classList.remove('active');
	document.querySelector('.content.cabinet').classList.remove('active');
	document.querySelector('.content.reviews').classList.add('active');
}

document
	.getElementById('review-form')
	.addEventListener('submit', function (event) {
		event.preventDefault(); // Предотвращаем стандартное поведение отправки формы

		var name = document.getElementById('name').value;
		var message = document.getElementById('message').value;

		var reviewElement = document.createElement('div');
		var nameElement = document.createElement('h2');
		var messageElement = document.createElement('p');

		nameElement.textContent = name;
		messageElement.textContent = message;

		reviewElement.appendChild(nameElement);
		reviewElement.appendChild(messageElement);

		document.getElementById('reviews-container').appendChild(reviewElement);

		document.getElementById('name').value = '';
		document.getElementById('message').value = '';
	});

function submitReview() {
	var name = document.getElementById('review-name').value;
	var text = document.getElementById('review-text').value;

	var reviewElement = document.createElement('div');
	reviewElement.classList.add('review');
	reviewElement.style.backgroundColor = '#f9f9f9';
	reviewElement.style.borderRadius = '10px';
	reviewElement.style.padding = '20px';
	reviewElement.style.marginBottom = '10px';

	var nameElement = document.createElement('h2');
	nameElement.textContent = name;
	nameElement.style.fontSize = '18px';
	nameElement.style.color = '#333';

	var textElement = document.createElement('p');
	textElement.textContent = text;
	textElement.style.fontSize = '16px';
	textElement.style.color = '#666';

	reviewElement.appendChild(nameElement);
	reviewElement.appendChild(textElement);

	document.getElementById('reviews-container').appendChild(reviewElement);

	document.getElementById('review-name').value = '';
	document.getElementById('review-text').value = '';
}

function getCurrentDate() {
	var now = new Date();
	var date = now.toLocaleDateString();
	return date;
}

function updateDate() {
	var dateElement = document.getElementById('date');
	dateElement.textContent = getCurrentDate();
}

updateDate();

var currentDate = new Date();

var dayOfWeek = currentDate.getDay();

var daysOfWeek = [
	'Воскресенье',
	'Понедельник',
	'Вторник',
	'Среда',
	'Четверг',
	'Пятница',
	'Суббота',
];

var currentDayOfWeek = daysOfWeek[dayOfWeek];

document.getElementById('dayOfWeek').innerHTML = '' + currentDayOfWeek;
