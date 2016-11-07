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
  	let fullname = req.query.fullname || '';
  	let result = 'Invalid fullname';

  	if (new RegExp(/[\d\.\,_\/\\]/g).test(fullname) || !fullname)
		return res.send(result);

  	fullname = fullname.trim().replace(/\s\s+/g, ' ');

  	const nameParts = fullname.split(' ');
  	const countParts = nameParts.length;

  	switch (countParts) {
  		case 3:
  			result = capitalize(nameParts[2]) + ' ' + getFirstLetter(nameParts[0]) + ' ' + getFirstLetter(nameParts[1]);
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

function capitalize(word) {
	return word.charAt(0).toUpperCase() + word.substr(1).toLowerCase();
}

function getFirstLetter(word) {
	return word.substr(0, 1).toUpperCase() + '.';
}

app.listen(3000, () => {
  	console.log('Your app listening on port 3000!');
});
