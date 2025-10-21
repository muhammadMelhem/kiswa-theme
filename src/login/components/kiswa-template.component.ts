import { Component, Input } from '@angular/core';
import type { TemplateProps } from '@keycloakify/angular/login/template';
import type { KcContext } from '../KcContext';
import type { I18n } from '../i18n';

@Component({
  selector: 'kiswa-template',
  standalone: true,
  template: `
    <div class="kcLoginClass">
      <!-- Left Panel: Fashion Branding -->
      <div class="fashionPanel">
        <div class="brandHeader">
          <div class="brandLogo">K</div>
          <h1>{{ brandTitle }}</h1>
          <p>{{ brandSubtitle }}</p>
        </div>
        <div class="fashionQuote">
          <p>{{ fashionQuote }}</p>
        </div>
      </div>

      <!-- Right Panel: Form Content -->
      <div class="formPanel">
        <div class="kcFormCardClass">
          <!-- Display Messages (alerts) -->
          @if (displayMessage && message) {
            <div [class]="getAlertClass()">
              <span [innerHTML]="message.summary"></span>
            </div>
          }

          <!-- Form Header -->
          @if (headerNode) {
            <div class="kcFormHeaderClass">
              <ng-container [innerHTML]="headerNode"></ng-container>
            </div>
          }

          <!-- Main Content (form) -->
          <ng-content></ng-content>

          <!-- Info Area -->
          @if (infoNode) {
            <div class="kcInfoAreaWrapperClass">
              <div class="kcInfoAreaClass">
                <ng-container [innerHTML]="infoNode"></ng-container>
              </div>
            </div>
          }
        </div>
      </div>
    </div>
  `,
})
export class KiswaTemplateComponent {
  @Input() kcContext!: KcContext;
  @Input() i18n!: I18n;
  @Input() doUseDefaultCss = true;
  @Input() classes?: Record<string, string>;
  @Input() displayMessage = true;
  @Input() displayRequiredFields = false;
  @Input() headerNode?: string;
  @Input() infoNode?: string;
  @Input() socialProvidersNode?: string;

  get brandTitle(): string {
    return this.kcContext.realm.displayName || 'Kiswa';
  }

  get brandSubtitle(): string {
    return this.i18n.msgStr('loginWelcome', 'Elegant Fashion Authentication');
  }

  get fashionQuote(): string {
    return this.i18n.msgStr(
      'fashionQuote',
      'Fashion is the armor to survive the reality of everyday life.'
    );
  }

  get message() {
    return this.kcContext.message;
  }

  getAlertClass(): string {
    if (!this.message) return 'kcAlertClass';

    const baseClass = 'kcAlertClass';
    const typeClass = this.message.type === 'success'
      ? 'kcAlertSuccessClass'
      : this.message.type === 'warning'
      ? 'kcAlertWarningClass'
      : this.message.type === 'error'
      ? 'kcAlertErrorClass'
      : 'kcAlertInfoClass';

    return `${baseClass} ${typeClass}`;
  }
}