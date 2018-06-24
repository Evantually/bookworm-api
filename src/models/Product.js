import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	name: { type: String, required: true },
	supplier: { type: String, required: true },
	leadTime: { type: String, required: true },
	location: { type: String, required: true },
	price: { type: Number, required: true },
	quantity: { type: Number, required: true },
	orderMin: { type: Number, required: true },
	setupFee: { type: Number, required: true },
	description: { type: String, required: true },
	image: { type: String, required: true }
},
	{ timestamps: true }

);

export default mongoose.model('Product', schema);