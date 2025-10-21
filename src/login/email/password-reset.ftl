<#import "template.ftl" as layout>
<@layout.emailLayout>
    <h1>${msg("passwordResetSubject")}</h1>
    
    <p>${msg("passwordResetBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration))}</p>
    
    <div style="text-align: center;">
        <a href="${link}" class="btn">${msg("passwordResetLinkLabel")}</a>
    </div>
    
    <div class="info-box">
        <p style="margin: 0;"><strong>Security Notice:</strong> This password reset link will expire in ${linkExpiration} minutes. If you didn't request a password reset, please ignore this email and ensure your account is secure.</p>
    </div>
    
    <div class="divider"></div>
    
    <p style="font-size: 13px; color: #5A5A5A;">
        If the button above doesn't work, copy and paste this link into your browser:<br>
        <a href="${link}" style="color: #8B7355; word-break: break-all;">${link}</a>
    </p>
</@layout.emailLayout>