import { notFound } from 'next/navigation';
import { getRequestConfig } from 'next-intl/server';
import { locales } from './i18n/config';

export default getRequestConfig(async ({ requestLocale }) => {
  const locale = await requestLocale; // Obtiene el idioma dinámicamente

  // Verifica si el locale es válido
  if (!locale || !locales.includes(locale)) notFound();

  return {
    locale, // Incluye el locale en el objeto retornado
    messages: (await import(`./i18n/locales/${locale}/globals.json`)).default,
  };
});
