export default function canonize(url) {
	// TODO custom domain name
	const re = 
		new RegExp(
			'@?((https|http)?:)?(\/\/)?((www\.)?(telegramm|vk|vkontakte|twitter|github|xn--80adtgbbrh1bc|medium)[^\/]*\/)?([@a-z0-9\._]*)[\?\/]?.*', 
			'i'
		);

	console.log(url.match(re));

	const username = url.match(re)[7].toLowerCase().replace(/^@/, '');
	// const username = 'asd';
	return '@' + username;
}