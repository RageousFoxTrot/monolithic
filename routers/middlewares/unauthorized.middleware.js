import { STATUS_CODES } from '../../utils/app-errors.js';

export default async function (req, res, next) {
  return res
    .status(STATUS_CODES.UNAUTHORIZED)
    .json({ message: 'UNAUTHORIZED' });
}
