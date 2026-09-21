import {
  Injectable,
  OnModuleInit,
  OnApplicationShutdown,
} from '@nestjs/common';

@Injectable()
export class DatabaseService implements OnModuleInit, OnApplicationShutdown {
  private isConected = false;

  onModuleInit() {
    this.isConected = true;
    console.log('Databae connected!');
  }

  onApplicationShutdown(signal: string) {
    this.isConected = false;
    console.log(`Databae disconnect due to app shoutdown. Signal ${signal}`);
  }

  getStatus() {
    return this.isConected ? 'Connected' : 'Disconnected';
  }
}
