import { sum } from '../calculator';
import { mult } from '../calculator';

it('should return 4', () => {
  expect(sum(2, 2)).toEqual(4);
});

it('should return 4', () => {
  expect(mult(2, 2)).toEqual(4);
});
