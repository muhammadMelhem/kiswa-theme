<#macro emailLayout>
<!DOCTYPE html>
<html lang="${locale}" style="margin: 0; padding: 0;">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <title>${msg("emailTitle")}</title>
    <style>
        @import url('https://fonts.googleapis.com/css2?family=Montserrat:wght@400;500;600;700&family=Playfair+Display:wght@600;700&display=swap');
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: 'Montserrat', Arial, sans-serif;
            background-color: #FAF7F2;
            color: #2D2D2D;
            line-height: 1.6;
            margin: 0;
            padding: 0;
        }
        
        .email-container {
            max-width: 600px;
            margin: 0 auto;
            background-color: #FFFFFF;
        }
        
        .email-header {
            background: linear-gradient(135deg, #E8D8C3 0%, #f5f0e8 100%);
            padding: 40px 30px;
            text-align: center;
            border-bottom: 3px solid #8B7355;
        }
        
        .logo {
            width: 120px;
            height: 120px;
            margin: 0 auto 20px;
            background: radial-gradient(circle, #8B7355 0%, #6D5A47 100%);
            border-radius: 50%;
            display: flex;
            align-items: center;
            justify-content: center;
            font-size: 48px;
            color: white;
            font-family: 'Playfair Display', serif;
            font-weight: 700;
            box-shadow: 0 10px 25px rgba(0, 0, 0, 0.15);
        }
        
        .brand-name {
            font-family: 'Playfair Display', serif;
            font-size: 32px;
            font-weight: 700;
            color: #8B7355;
            margin-bottom: 10px;
        }
        
        .tagline {
            font-size: 14px;
            color: #5A5A5A;
        }
        
        .email-body {
            padding: 40px 30px;
        }
        
        h1, h2, h3 {
            font-family: 'Playfair Display', serif;
            color: #8B7355;
            margin-bottom: 20px;
        }
        
        h1 {
            font-size: 28px;
        }
        
        h2 {
            font-size: 24px;
        }
        
        p {
            margin-bottom: 20px;
            font-size: 15px;
            color: #2D2D2D;
        }
        
        .btn {
            display: inline-block;
            padding: 16px 32px;
            background-color: #8B7355;
            color: #FFFFFF;
            text-decoration: none;
            border-radius: 10px;
            font-weight: 600;
            font-size: 16px;
            margin: 20px 0;
            transition: all 0.3s ease;
        }
        
        .btn:hover {
            background-color: #6D5A47;
        }
        
        .info-box {
            background-color: #FAF7F2;
            border-left: 4px solid #8B7355;
            padding: 20px;
            margin: 20px 0;
            border-radius: 8px;
        }
        
        .footer {
            background-color: #2D2D2D;
            color: #FFFFFF;
            padding: 30px;
            text-align: center;
            font-size: 13px;
        }
        
        .footer a {
            color: #E8D8C3;
            text-decoration: none;
        }
        
        .footer a:hover {
            color: #FFFFFF;
        }
        
        .divider {
            height: 2px;
            background: linear-gradient(to right, transparent, #8B7355, transparent);
            margin: 30px 0;
        }
        
        @media only screen and (max-width: 600px) {
            .email-header {
                padding: 30px 20px;
            }
            
            .email-body {
                padding: 30px 20px;
            }
            
            .logo {
                width: 100px;
                height: 100px;
                font-size: 40px;
            }
            
            .brand-name {
                font-size: 26px;
            }
            
            h1 {
                font-size: 24px;
            }
        }
    </style>
</head>
<body>
    <div class="email-container">
        <div class="email-header">
            <div class="logo">K</div>
            <div class="brand-name">Kiswa</div>
            <div class="tagline">Elevate Your Style, Define Your Identity</div>
        </div>
        
        <div class="email-body">
            <#nested>
        </div>
        
        <div class="footer">
            <p>
                © ${.now?string('yyyy')} Kiswa. All rights reserved.<br>
                Fashion that speaks to your soul.
            </p>
            <p style="margin-top: 15px;">
                <a href="#">Privacy Policy</a> | 
                <a href="#">Terms of Service</a> | 
                <a href="#">Contact Us</a>
            </p>
        </div>
    </div>
</body>
</html>
</#macro>