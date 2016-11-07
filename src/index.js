import express from 'express';
import cors from 'cors';

const app = express();
app.use(cors());
app.get('/', (req, res) => {
  	res.json({
    	hello: 'JS World',
  	});
});

app.get('/task2B', (req, res) => {
  	console.info(req.query);
  	let fullname = req.query.fullname || '';
  	fullname = fullname.trim().replace(/\s\s+/g, ' ');

  	const nameParts = fullname.split(' ');
  	console.log(nameParts);

  	let result = 'Invalid fullname';
  	const countParts = nameParts.length;

  	for (var i = 0; i < countParts; i++) {
  		const part = nameParts[i].match(/^([^\d\s\t\.\,_\/\\]+)$/);

  		if (part === null) {
  			return res.send(result);
  		}
  	}

  	switch (countParts) {
  		case 3:
  			const family = nameParts[2].charAt(0).toUpperCase() + nameParts[2].substr(1).toLowerCase();
  			result = family + ' ' + getFirstLetter(nameParts[0]) + ' ' + getFirstLetter(nameParts[1]);
  			break;
  		case 2:
  			result = nameParts[1] + ' ' + getFirstLetter(nameParts[0]);
  			break;
  		case 1:
  			result = nameParts[0];
  			break;
  	}

	res.send(result);
});

function getFirstLetter(word) {
	return word.substr(0, 1).toUpperCase() + '.';
}

app.listen(3000, () => {
  	console.log('Your app listening on port 3000!');
});
