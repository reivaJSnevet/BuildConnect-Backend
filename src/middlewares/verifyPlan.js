import { User, Company } from '../models/index.js';

const verifyPlan = async (req, res, next) => {
	try {
		const userId = req.headers.userid;
		const user = await User.findByPk(userId, {
			include: [
				{
					model: Company,
					required: true,
				},
			],
		});
		req.plan = user.Company.pricing;
		next();
	} catch (error) {
		next(error);
	}
};

export default verifyPlan;
