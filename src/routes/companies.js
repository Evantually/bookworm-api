import express from 'express';
import authenticate from '../middlewares/authenticate';
import Company from '../models/Company';
import parseErrors from '../utils/parseErrors';

const router = express.Router();
router.use(authenticate);

router.get('/', (req, res) => {
	Company.find({}).then(companies => res.json({ companies }));
});

router.post('/', (req, res) => {
	Company.create({ ...req.body.company, userId: req.currentUser._id })
	.then(company => res.json({ company }))
	.catch(err => res.status(400).json({ errors: parseErrors(err.errors) }));
});

router.get('/search', (req, res) => {
	Company.find({ "name": { $regex: req.query.q }
	})
		.then(companies => res.json ({ companies })
		)
});

export default router;