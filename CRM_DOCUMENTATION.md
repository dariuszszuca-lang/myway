# System CRM dla Ośrodka MyWay

## Opis systemu

System CRM (Customer Relationship Management) został zaprojektowany specjalnie dla ośrodka leczenia uzależnień MyWay. Umożliwia kompleksowe zarządzanie danymi pacjentów, generowanie umów oraz kart pacjentów z możliwością ich wydruku.

## Funkcje systemu

### 1. Zarządzanie pacjentami
- ✅ Dodawanie nowych pacjentów
- ✅ Edycja danych istniejących pacjentów
- ✅ Usuwanie pacjentów z systemu
- ✅ Przeglądanie listy wszystkich pacjentów

### 2. Dane pacjenta
System zbiera następujące informacje:

**Dane osobowe:**
- Imię i nazwisko (wymagane)
- PESEL
- Data urodzenia

**Dane kontaktowe:**
- Adres (ulica, miasto, kod pocztowy)
- Telefon
- Email

**Kontakt awaryjny:**
- Imię i nazwisko osoby kontaktowej
- Telefon kontaktowy
- Relacja z pacjentem

**Informacje medyczne:**
- Rodzaj terapii
- Diagnoza
- Data przyjęcia
- Data wypisu
- Numer umowy
- Data umowy
- Dodatkowe notatki

### 3. Generowanie dokumentów

#### Umowa o świadczenie usług terapeutycznych
- Automatyczne wypełnianie danych pacjenta
- Profesjonalny format dokumentu
- Możliwość wydruku
- Zawiera wszystkie wymagane klauzule prawne

#### Karta pacjenta
- Kompletny przegląd wszystkich danych pacjenta
- Przejrzysty układ sekcji
- Informacje administracyjne
- Możliwość wydruku

## Instalacja i uruchomienie

### 1. Instalacja zależności

```bash
npm install --onnxruntime-node-install-cuda=skip
```

### 2. Konfiguracja bazy danych (Supabase)

#### Opcja A: Przez Supabase Dashboard (zalecane)

1. Zaloguj się do [Supabase Dashboard](https://supabase.com/dashboard)
2. Wybierz swój projekt
3. Przejdź do **SQL Editor** w lewym menu
4. Skopiuj zawartość pliku `supabase/migrations/20251113000000_create_patients_table.sql`
5. Wklej kod SQL i kliknij **RUN**

#### Opcja B: Przez Supabase CLI

```bash
# Zainstaluj Supabase CLI (jeśli jeszcze nie masz)
npm install -g supabase

# Zaloguj się do Supabase
supabase login

# Połącz się z projektem
supabase link --project-ref jrmqxbmkmrlkrevlsmpv

# Uruchom migracje
supabase db push
```

### 3. Uruchomienie aplikacji

#### Tryb deweloperski:
```bash
npm run dev
```

Aplikacja będzie dostępna pod adresem: `http://localhost:5173`

#### Budowanie dla produkcji:
```bash
npm run build
```

#### Podgląd produkcji:
```bash
npm run preview
```

## Dostęp do systemu CRM

Po uruchomieniu aplikacji, system CRM jest dostępny pod adresem:
```
http://localhost:5173/crm
```

## Instrukcja obsługi

### Dodawanie nowego pacjenta

1. Otwórz stronę CRM (`/crm`)
2. Kliknij przycisk **"Dodaj Pacjenta"** w prawym górnym rogu
3. Wypełnij formularz:
   - Pola oznaczone * są wymagane (Imię i Nazwisko)
   - Pozostałe pola są opcjonalne
4. Kliknij **"Dodaj pacjenta"**

### Edycja pacjenta

1. Na liście pacjentów kliknij ikonę **⋮** (trzy kropki)
2. Wybierz **"Edytuj"**
3. Wprowadź zmiany w formularzu
4. Kliknij **"Zapisz zmiany"**

### Generowanie umowy

1. Na liście pacjentów kliknij ikonę **⋮** (trzy kropki)
2. Wybierz **"Generuj umowę"**
3. Sprawdź wygenerowaną umowę
4. Kliknij **"Drukuj umowę"** aby wydrukować lub zapisać jako PDF

### Generowanie karty pacjenta

1. Na liście pacjentów kliknij ikonę **⋮** (trzy kropki)
2. Wybierz **"Generuj kartę pacjenta"**
3. Sprawdź wygenerowaną kartę
4. Kliknij **"Drukuj kartę pacjenta"** aby wydrukować lub zapisać jako PDF

### Usuwanie pacjenta

1. Na liście pacjentów kliknij ikonę **⋮** (trzy kropki)
2. Wybierz **"Usuń"**
3. Potwierdź usunięcie w oknie dialogowym

## Struktura plików

```
src/
├── pages/
│   └── CRM.tsx                      # Główna strona systemu CRM
├── components/
│   └── crm/
│       ├── PatientForm.tsx          # Formularz dodawania/edycji pacjenta
│       ├── PatientList.tsx          # Lista pacjentów
│       ├── ContractGenerator.tsx    # Generator umowy
│       └── PatientCardGenerator.tsx # Generator karty pacjenta
├── integrations/
│   └── supabase/
│       ├── client.ts                # Klient Supabase
│       └── types.ts                 # Typy TypeScript dla bazy danych
supabase/
└── migrations/
    └── 20251113000000_create_patients_table.sql # Migracja bazy danych
```

## Bezpieczeństwo danych

### Ochrona danych osobowych
- Wszystkie dane pacjentów są przechowywane w bezpiecznej bazie danych Supabase
- System implementuje Row Level Security (RLS)
- Dane są szyfrowane podczas przesyłania (HTTPS)

### RODO
System jest zgodny z wymogami RODO:
- Możliwość usunięcia danych pacjenta
- Bezpieczne przechowywanie danych osobowych
- Informacje o przetwarzaniu danych w umowie

## Rozwiązywanie problemów

### Problem: Nie mogę połączyć się z bazą danych
**Rozwiązanie:** Sprawdź plik `.env` i upewnij się, że klucze Supabase są poprawne.

### Problem: Lista pacjentów jest pusta
**Rozwiązanie:**
1. Upewnij się, że migracja bazy danych została wykonana
2. Sprawdź konsole w przeglądarce (F12) pod kątem błędów
3. Zweryfikuj połączenie z Supabase

### Problem: Nie mogę wydrukować dokumentów
**Rozwiązanie:**
1. Sprawdź, czy przeglądarka nie blokuje wyskakujących okien
2. Upewnij się, że masz włączoną obsługę JavaScript
3. Spróbuj użyć innej przeglądarki

## Wsparcie techniczne

W przypadku problemów technicznych:
1. Sprawdź logi w konsoli przeglądarki (F12)
2. Sprawdź logi serwera w terminalu
3. Przejrzyj dokumentację Supabase: https://supabase.com/docs

## Przyszłe ulepszenia

Potencjalne rozszerzenia systemu:
- [ ] Eksport danych do formatu Excel/CSV
- [ ] System powiadomień e-mail
- [ ] Historia wizyt pacjenta
- [ ] Kalendarz sesji terapeutycznych
- [ ] Raporty i statystyki
- [ ] Wyszukiwanie i filtrowanie pacjentów
- [ ] System archiwizacji pacjentów
- [ ] Integracja z systemami płatności

## Licencja

System CRM MyWay - Właściciel: Ośrodek Leczenia Uzależnień MyWay

---

**Wersja dokumentacji:** 1.0
**Data ostatniej aktualizacji:** 13.11.2025
**Autor:** System Claude AI
