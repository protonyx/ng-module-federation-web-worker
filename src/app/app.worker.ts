/// <reference lib="webworker" />
import {map, of} from 'rxjs';

addEventListener('message', ({ data }) => {
  of(data).pipe(
    map(d => `worker response to ${d}`)
  ).subscribe(msg => {
    postMessage(msg);
  });
});
