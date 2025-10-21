/* eslint-disable @typescript-eslint/no-unused-vars */
import { i18nBuilder } from '@keycloakify/angular/login';
import type { ThemeName } from '../kc.gen';

/** @see: https://docs.keycloakify.dev/features/i18n */
const { getI18n, ofTypeI18n } = i18nBuilder
  .withThemeName<ThemeName>()
  .withCustomTranslations({
    en: {
      /* Kiswa Theme - English Translations */
      loginTitle: 'Sign in to {0}',
      doLogIn: 'Sign In',
      noAccount: "Don't have an account?",
      username: 'Username',
      usernameOrEmail: 'Username or email',
      password: 'Password',
      email: 'Email',
      rememberMe: 'Remember me',
      doForgotPassword: 'Forgot Password?',
      doRegister: 'Sign up',
      or: 'or',
      loginWelcome: 'Elegant Fashion Authentication',
      fashionQuote: 'Fashion is the armor to survive the reality of everyday life.',
    },
    ar: {
      /* Kiswa Theme - Arabic Translations */
      loginTitle: 'تسجيل الدخول إلى {0}',
      doLogIn: 'تسجيل الدخول',
      noAccount: 'ليس لديك حساب؟',
      username: 'اسم المستخدم',
      usernameOrEmail: 'اسم المستخدم أو البريد الإلكتروني',
      password: 'كلمة المرور',
      email: 'البريد الإلكتروني',
      rememberMe: 'تذكرني',
      doForgotPassword: 'هل نسيت كلمة المرور؟',
      doRegister: 'إنشاء حساب',
      or: 'أو',
      loginWelcome: 'مصادقة أزياء أنيقة',
      fashionQuote: 'الموضة هي الدرع للبقاء على قيد الحياة في واقع الحياة اليومية.',
    },
  })
  .build();

type I18n = typeof ofTypeI18n;

export { getI18n, type I18n };