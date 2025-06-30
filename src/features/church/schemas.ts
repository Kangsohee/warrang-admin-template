import { z } from 'zod';

export const registerSchema = z.object({
	name: z.string().min(2, { message: '소희님 짱짱' }).max(100),
	//   "description": "string",
	//   "location": "string",
	//   "communityName": "셀",
	//   "crewName": "크루",
	//   "communityDivision": [
	//     "string"
	//   ]
});
