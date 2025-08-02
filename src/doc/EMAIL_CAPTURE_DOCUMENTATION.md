# Email Capture Functionality Documentation

## Overview

This document describes the complete email capture functionality implemented for the "Activa la protección visual" button in the SightGuardian AI landing page.

## Features Implemented

### 1. Email Storage

- **File Location**: `src/doc/phase_1_mail_catcher.txt`
- **Format**: `email@domain.com - 2024-01-01T12:00:00.000Z`
- **Duplicate Prevention**: Emails are checked before adding to prevent duplicates
- **Normalization**: All emails are stored in lowercase for consistency

### 2. Validation

- **Email Format**: Uses Zod schema for robust email validation
- **Required Field**: Email field is mandatory
- **Error Messages**: User-friendly Spanish error messages

### 3. Rate Limiting

- **Limit**: Maximum 3 attempts per 15 minutes per identifier
- **Identifier**: Uses email address or IP (if available)
- **Reset**: Automatically resets after 15 minutes
- **Memory**: In-memory storage (resets on server restart)

### 4. User Experience

- **Success Messages**: Detailed success messages explaining next steps
- **Error Handling**: Graceful error handling with appropriate feedback
- **Loading States**: Visual feedback during form submission
- **Animations**: Smooth transitions and hover effects

### 5. Email Notifications

- **Service**: Resend API for email delivery
- **Template**: HTML email with professional design
- **Content**: Information about Beta access and early user benefits
- **Fallback**: Graceful degradation if email service fails

## Technical Implementation

### File Structure

```
src/
├── lib/
│   ├── actions.ts          # Server actions for email processing
│   └── types.ts            # TypeScript types and Zod schemas
├── app/
│   ├── _components/
│   │   └── EmailForm.tsx   # React form component
│   └── page.tsx            # Main landing page
└── doc/
    ├── phase_1_mail_catcher.txt    # Email storage file
    └── EMAIL_CAPTURE_DOCUMENTATION.md
```

### Key Functions

#### `addEmailToWaitlist(email: string, userIdentifier?: string)`

Main server action that handles email processing:

- Validates email format
- Checks for rate limiting
- Prevents duplicate entries
- Saves to file
- Sends welcome email
- Returns appropriate success/error messages

#### Helper Functions

- `readExistingEmails()`: Reads and parses existing emails from file
- `emailExists(email: string)`: Checks if email already exists
- `appendEmailToFile(email: string)`: Safely appends email to file
- `isRateLimited(identifier: string)`: Checks rate limiting status

## Deployment Considerations

### Hostinger Compatibility

- Uses Node.js `fs.promises` for file operations
- Creates directories recursively if they don't exist
- Handles file permission errors gracefully
- Provides fallback mechanisms for hosting limitations

### Environment Variables

```bash
RESEND_API_KEY=your_resend_api_key_here
```

### File Permissions

Ensure the `src/doc/` directory has write permissions in production.

## Testing

### Manual Testing

1. Visit the landing page
2. Enter an email in the form
3. Click "Activa la protección visual"
4. Verify success message appears
5. Check `src/doc/phase_1_mail_catcher.txt` for the email entry

### Test Page

Visit `/test` for a dedicated testing interface that allows:

- Direct testing of the email capture function
- Viewing of detailed response objects
- Testing various email formats and edge cases

## Error Handling

### File Operations

- Directory creation if missing
- Graceful handling of write permission errors
- Fallback success messages if file operations fail

### Email Service

- Continues processing even if email sending fails
- Logs errors for debugging
- Provides appropriate user feedback

### Validation Errors

- Clear error messages for invalid emails
- Rate limiting notifications
- Duplicate email detection

## Success Messages

### Primary Success (File + Email)

"¡Perfecto! Tu email ha sido registrado exitosamente. Te notificaremos cuando lancemos nuestra Beta Pública y serás uno de los primeros en acceder gratuitamente. ¡Revisa tu correo!"

### Secondary Success (File Only)

"¡Excelente! Tu email ha sido registrado exitosamente en nuestra base de datos. Te notificaremos cuando lancemos nuestra Beta Pública y tendrás acceso gratuito por tiempo limitado."

### Fallback Success

"Tu solicitud ha sido procesada. Te contactaremos pronto con más información sobre el acceso a la Beta Pública."

## Monitoring and Maintenance

### Logging

- All email registrations are logged with timestamps
- Error conditions are logged for debugging
- Success/failure rates can be monitored through logs

### File Management

- Regular backup of `phase_1_mail_catcher.txt` recommended
- Monitor file size growth
- Consider migration to database for large volumes

## Security Features

### Rate Limiting

Prevents spam and abuse with configurable limits.

### Input Validation

All inputs are validated before processing.

### Error Information

Error messages don't expose sensitive system information.

### File Safety

Safe file operations with proper error handling.
