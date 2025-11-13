# Konfiguracja EmailJS dla Ośrodka MyWay

## Krok 1: Załóż konto EmailJS

1. Przejdź na stronę [EmailJS.com](https://www.emailjs.com/)
2. Zarejestruj się lub zaloguj
3. Przejdź do Dashboard

## Krok 2: Połącz usługę email

1. W Dashboard kliknij **"Add New Service"**
2. Wybierz dostawcę email (Gmail, Outlook, itp.)
3. Postępuj zgodnie z instrukcjami połączenia
4. Zanotuj **Service ID** (np. "service_gmail123")

## Krok 3: Utwórz szablon email

1. Przejdź do zakładki **"Email Templates"**
2. Kliknij **"Create New Template"**
3. Użyj tego szablonu:

```html
Temat: Nowe zapytanie od {{from_name}} - Ośrodek MyWay

Cześć,

Otrzymałeś nowe zapytanie kontaktowe:

Imię i nazwisko: {{from_name}}
Kontakt: {{from_contact}}
Preferowany czas: {{preferred_time}}
Rodzaj terapii: {{treatment_type}}

Wiadomość:
{{message}}

---
Automatyczna wiadomość z formularza kontaktowego
Ośrodek MyWay
```

4. Zapisz szablon i zanotuj **Template ID** (np. "template_abc123")

## Krok 4: Pobierz Public Key

1. Przejdź do **"Account"** → **"General"**
2. Znajdź **Public Key**
3. Skopiuj klucz (np. "user_xyz789")

## Krok 5: Zaktualizuj konfigurację

W pliku `src/lib/emailjs.ts` zamień:

```typescript
const EMAILJS_SERVICE_ID = 'twój_service_id';
const EMAILJS_TEMPLATE_ID = 'twój_template_id'; 
const EMAILJS_PUBLIC_KEY = 'twój_public_key';
```

## Krok 6: Przetestuj

1. Wypełnij formularz na stronie
2. Sprawdź czy email dotarł
3. W EmailJS Dashboard możesz zobaczyć historię wysłanych emaili

## Limity darmowego planu

- 200 emaili miesięcznie
- Wszystkie funkcje podstawowe
- Logo EmailJS w stopce (opcjonalne usunięcie za opłatą)

## Dodatkowe wskazówki

- Używaj Gmail lub Outlook dla lepszej doręczalności
- Ustaw auto-reply dla użytkowników
- Można dodać załączniki i formatowanie HTML
- Monitoring i statystyki dostępne w Dashboard