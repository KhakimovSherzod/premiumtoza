import {getRequestConfig} from 'next-intl/server'
import {headers, cookies} from 'next/headers'

const supportedLocales = ['en', 'uz', 'ru'];
const defaultLocale = 'uz';

export default getRequestConfig(
    async () => {
        // Priority: Cookie > Accept-Language > Default
        let locale = defaultLocale;
        
        // 1. Check cookie
        const cookieStore = await cookies()
        const localeCookie = cookieStore.get('NEXT_LOCALE')
        
        if (localeCookie && supportedLocales.includes(localeCookie.value)) {
            locale = localeCookie.value;
        } else {
            // 2. Check accept-language header
            const headersList = await headers()
            const acceptLanguage = headersList.get('accept-language')
            
            if (acceptLanguage) {
                const preferredLanguage = acceptLanguage.split(',')[0].split('-')[0];
                if (supportedLocales.includes(preferredLanguage)) {
                    locale = preferredLanguage;
                }
            }
        }

        return {
            locale,
            messages: (await import(`../messages/${locale}.json`)).default,
        }
    }
)