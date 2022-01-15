import { createLogger } from '../logger';

it('should return stored logs', () => {
  const logger = createLogger('user login');
  expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
  const logger = createLogger('user login');
  logger.log('loggin success');
  expect(logger.getLogs()).toEqual(['log - user login - loggin success']);
});

it('should save errors', () => {
  const logger = createLogger('user login');
  logger.error('loggin failed');
  expect(logger.getLogs()).toEqual(['error - user login - loggin failed']);
});