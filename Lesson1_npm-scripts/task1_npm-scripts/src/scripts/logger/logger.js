export const createLogger = (name) => {
  const logs = [];
  return {
    log(message) {
      logs.push(`log - ${name} - ${message}`);
    },
    error(erroText) {
      logs.push(`error - ${name} - ${erroText}`);
    },
    getLogs() {
      return logs;
    },
  };
};
