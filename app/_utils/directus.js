
import { createDirectus, rest, staticToken } from '@directus/sdk';
// try {
const directus = createDirectus(process.env.NEXT_PUBLIC_API_URL).with(
    rest({
        onRequest: (options) => ({ ...options, cache: 'no-store' }),
    })
).with(staticToken(process.env.NEXT_PUBLIC_API_KEY));

// }
// catch (e) {
//     console.error(e);
// }

export default directus;