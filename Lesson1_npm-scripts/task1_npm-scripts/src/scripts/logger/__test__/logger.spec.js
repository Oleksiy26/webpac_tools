import { createLogger } from '../logger';

it('should return stored logs', () => {
  const logger = createLogger('logger name');
  expect(logger.getLogs()).toEqual([]);
});

it('should save log message', () => {
  const logger = createLogger('logger name');
  logger.log('loggin success');
  expect(logger.getLogs()).toEqual(['log - logger name - loggin success']);
});

it('should save errors', () => {
  const logger = createLogger('logger name');
  logger.error('loggin failed');
  expect(logger.getLogs()).toEqual(['error - logger name - loggin failed']);
});
