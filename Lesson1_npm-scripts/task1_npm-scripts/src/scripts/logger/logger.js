export const createLogger = (loggerName) => {
  const logs = [];
  return {
    log(message) {
      logs.push(`log - ${loggerName} - ${message}`);
    },
    error(erroText) {
      logs.push(`error - ${loggerName} - ${erroText}`);
    },
    getLogs() {
      return logs;
    },
  };
};
