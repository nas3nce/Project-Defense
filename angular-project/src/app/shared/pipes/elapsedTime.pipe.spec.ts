import { elapsedTimePipe } from './elapsedTime.pipe';

describe('TimeFormatPipe', () => {
  it('create an instance', () => {
    const pipe = new elapsedTimePipe();
    expect(pipe).toBeTruthy();
  });
});
