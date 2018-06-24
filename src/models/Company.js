import mongoose from 'mongoose';

const schema = new mongoose.Schema({
	name: { type: String, required: true },
	industry: { type: String, required: true },
	assignedAgent: { type: String, required: true },
	leadContact: { 
		name: { type: String, required: true },
		title: { type: String, required: true },
		email: { type: String, required: true },
		phone: { type: String, required: true },
		notes: { type: Array, required: true }
	},
	billingAddress: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		zip: { type: String, required: true }
	},
	shippingAddress: {
		street: { type: String, required: true },
		city: { type: String, required: true },
		state: { type: String, required: true },
		zip: { type: String, required: true }
	},
	employees: { type: Array },
	tasks: { type: Array },
	notes: { type: Array }
},
	{ timestamps: true }
);

export default mongoose.model('Company', schema);