# Internationalization (i18n) Guide

This project now supports multiple languages using `react-i18next`.

## Supported Languages

- **English (en)** - Default language
- **Russian (ru)** - Russian translation

## Features

### Language Switcher
A language switcher button is located in the top-right corner of the page. Click it to toggle between English and Russian.

### Automatic Language Detection
The application automatically detects the user's browser language on first visit and uses it if supported. The language preference is saved in localStorage.

## File Structure

```
src/
├── i18n/
│   ├── config.ts          # i18n configuration
│   └── locales/
│       ├── en.json        # English translations
│       └── ru.json        # Russian translations
└── app/
    └── components/
        ├── Hero.tsx       # Uses translations
        └── LanguageSwitcher.tsx  # Language toggle button
```

## How to Add Translations

### 1. Add New Translation Keys

Edit the translation files in `src/i18n/locales/`:

**en.json:**
```json
{
  "hero": {
    "tag": "HSE Expert Session",
    "title": {
      "line1": "The Creative",
      "line2": "Pitch"
    }
  }
}
```

**ru.json:**
```json
{
  "hero": {
    "tag": "Экспертная Сессия ВШЭ",
    "title": {
      "line1": "Креативный",
      "line2": "Питч"
    }
  }
}
```

### 2. Use Translations in Components

```tsx
import { useTranslation } from 'react-i18next';

export function MyComponent() {
  const { t } = useTranslation();

  return (
    <div>
      <h1>{t('hero.title.line1')}</h1>
      <p>{t('hero.tag')}</p>
    </div>
  );
}
```

## Add a New Language

1. Create a new translation file in `src/i18n/locales/`, e.g., `es.json`
2. Add the translations following the same structure as `en.json`
3. Import and register it in `src/i18n/config.ts`:

```typescript
import es from './locales/es.json';

i18n.init({
  resources: {
    en: { translation: en },
    ru: { translation: ru },
    es: { translation: es }, // Add new language
  },
  // ...
});
```

4. Update the LanguageSwitcher component to support the new language

## Testing

The language preference is stored in localStorage with the key `i18nextLng`. You can:
- Use the language switcher button
- Clear localStorage to reset the language
- Change your browser's language settings to test auto-detection

## Current Translation Coverage

- Hero section (fully translated)
- Other sections can be added following the same pattern
