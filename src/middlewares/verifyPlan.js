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
		if (user?.Company) {
			req.plan = user.Company.pricing.plan;
		}
		next();
	} catch (error) {
		next(error);
	}
};

export default verifyPlan;
