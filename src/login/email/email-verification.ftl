<#import "template.ftl" as layout>
<@layout.emailLayout>
    <h1>${msg("emailVerificationSubject")}</h1>
    
    <p>${msg("emailVerificationBodyHtml",link, linkExpiration, realmName, linkExpirationFormatter(linkExpiration))}</p>
    
    <div style="text-align: center;">
        <a href="${link}" class="btn">${msg("emailVerificationLinkLabel")}</a>
    </div>
    
    <div class="info-box">
        <p style="margin: 0;"><strong>Note:</strong> This link will expire in ${linkExpiration} minutes. If you didn't request this verification, please ignore this email.</p>
    </div>
    
    <div class="divider"></div>
    
    <p style="font-size: 13px; color: #5A5A5A;">
        If the button above doesn't work, copy and paste this link into your browser:<br>
        <a href="${link}" style="color: #8B7355; word-break: break-all;">${link}</a>
    </p>
</@layout.emailLayout>