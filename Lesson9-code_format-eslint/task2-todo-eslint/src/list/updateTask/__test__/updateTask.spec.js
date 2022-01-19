/**
 * @jest-environment jsdom
 *
 */
/* eslint-disable */
import { taskId } from '../updateTask';

it('should return not null', () => {
  expect(taskId).not.toBeNull();
});
