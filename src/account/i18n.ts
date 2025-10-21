/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from '@keycloakify/angular/account';
import type { ThemeName } from '../kc.gen';

/** @see: https://docs.keycloakify.dev/features/i18n */
const { getI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      /* Kiswa Theme - English Translations */
      accountTitle: 'Account Settings',
      personalInfo: 'Personal Information',
      accountSecurity: 'Account Security',
      applications: 'Applications',
    },
    ar: {
      /* Kiswa Theme - Arabic Translations */
      accountTitle: 'إعدادات الحساب',
      personalInfo: 'المعلومات الشخصية',
      accountSecurity: 'أمان الحساب',
      applications: 'التطبيقات',
    },
  })
  .build();

type I18n = typeof ofTypeI18n;

export { getI18n, type I18n };