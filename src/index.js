const employers = ['АртеМ',
	'максим',
	'Владимир',
	'сергей',
	'НикиТа',
	'евГений',
	' Дарья',
	' ',
	'виктория ',
	'ЕкаТерина',
	'',
	' Андрей ',
	'КИРИЛЛ'];
const nameCourse = 'Базовый React';

let command = employers.filter(employee =>  employee.length > 0 && employee.trim() !== '');
command = command.map(com => {
	const comLowercase = com.toLowerCase().trim();
	return comLowercase[0].toUpperCase() + comLowercase.slice(1);
});

const data = {
	cash: [3, 8, 3],
	react: ['JSX', 'components', 'props', 'state', 'hooks'],
	add: ['styled-components', 'firebase']
};

function calcCash(own = 0, ...args) {
	const everyCash = args[0];
	let total = own;
	for (let i = 0; i < everyCash.length; i++) {
		total += +everyCash[i];
	}
	return total;
}

const lesson = calcCash(null, data.cash);

function makeBusiness(director, teacher = 'Максим', allModule, gang, course) {
	const sumTech = [...data.react, ...data.add, 'и другие'];
	console.log(`Стартуем новый курс: "${course}". Владелец: ${director}, преподаватель: ${teacher}. Всего уроков: ${allModule}.
Команда Академии: ${gang}`);
	console.log(`Первое что изучим будет ${data.react[0]}. Он очень похож на HTML!`);
	console.log('Технологии которые мы изучим: ');
	console.log(sumTech.join(' '));
}

makeBusiness.apply(null, ['Артем', undefined, lesson, command, nameCourse]);
