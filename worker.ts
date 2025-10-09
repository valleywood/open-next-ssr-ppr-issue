import type { ExportedHandler } from '@cloudflare/workers-types';

// @ts-ignore `.open-next/worker.ts` is generated at build time
import { default as handler } from './.open-next/worker.js';

export default {
  fetch: handler.fetch,
} satisfies ExportedHandler<CloudflareEnv>;

// The re-export is only required if your app uses the DO Queue
// See https://opennext.js.org/cloudflare/caching for details
// @ts-ignore `.open-next/worker.ts` is generated at build time
export { DOQueueHandler } from './.open-next/worker.js';
