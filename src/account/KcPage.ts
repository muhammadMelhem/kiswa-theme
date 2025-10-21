import { getDefaultPageComponent, type KcPage } from '@keycloakify/angular/account';
import { TemplateComponent } from '@keycloakify/angular/account/template';
import type { ClassKey } from 'keycloakify/account';
import type { KcContext } from './KcContext';
import './account.css';

export const classes = {} satisfies Partial<Record<ClassKey, string>>;
export const doUseDefaultCss = true;

export async function getKcPage(pageId: KcContext['pageId']): Promise<KcPage> {
  switch (pageId) {
    default:
      return {
        PageComponent: await getDefaultPageComponent(pageId),
        TemplateComponent,
        doUseDefaultCss,
        classes,
      };
  }
}