import { createLogger, transports } from 'winston';

const LogErrors = createLogger({
  transports: [
    new transports.Console(),
    new transports.File({ filename: 'app_error.log' }),
  ],
});

class ErrorLogger {
  constructor() {}

  async logError(e) {
    console.log('==================== Start Error Logger ===============');
    LogErrors.log({
      private: true,
      level: 'error',
      message: `${new Date()}-${JSON.stringify(e)}`,
    });
    console.log('====================  End Error Logger  ===============');

    // Bootstrap other loggers.

    return false;
  }

  isTrustError(e) {
    return e instanceof AppError ? e.isOperational : false;
  }
}

export const ErrorHandler = async (e, req, res, next) => {
  const errorLogger = new ErrorLogger();

  process.on('uncaughtException', (reason, promise) => {
    console.log(reason, 'UNHANDLED');
    if (errorLogger.isTrustError(e) && process.env['NODE_ENV'] !== 'dev') {
      console.log(
        `Process with PID ${process.pid} is about to end.\nA new instance will replace it.`
      );
      setTimeout(() => {
        process.on('exit', async () => {
          debugger;
          (await import('child_process')).spawn(process.argv.shift(), '', {
            cwd: process.cwd(),
            detached: true,
            stdio: 'inherit',
          });
        });
        process.exit(0x1001);
      }, 5000);
    }
  });
};
