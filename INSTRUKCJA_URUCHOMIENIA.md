# 🚀 Jak uruchomić system CRM MyWay - Instrukcja dla początkujących

## Krok 1: Zainstaluj Node.js

1. Wejdź na stronę: https://nodejs.org/
2. Pobierz wersję **LTS** (zalecana dla większości użytkowników)
3. Uruchom pobrany instalator i klikaj "Dalej" aż do końca
4. Sprawdź czy się zainstalowało:
   - Naciśnij klawisz Windows + R
   - Wpisz: `cmd` i naciśnij Enter
   - W czarnym oknie wpisz: `node --version`
   - Powinien pokazać się numer wersji (np. v22.0.0)

## Krok 2: Pobierz kod projektu

### Jeśli masz Git:
1. Otwórz terminal/wiersz poleceń
2. Przejdź do folderu gdzie chcesz mieć projekt (np. `cd C:\Projekty`)
3. Wpisz:
```bash
git clone https://github.com/dariuszszuca-lang/myway.git
cd myway
git checkout claude/crm-patient-contract-generator-011CV5WMWBJHZhvRVbiFb7ix
```

### Jeśli NIE masz Git:
1. Wejdź na: https://github.com/dariuszszuca-lang/myway
2. Kliknij zielony przycisk "Code"
3. Wybierz "Download ZIP"
4. Rozpakuj pobrany plik ZIP do wybranego folderu
5. Otwórz terminal w tym folderze:
   - W Windowsie: kliknij prawym w folderze → "Otwórz w terminalu"

## Krok 3: Zainstaluj zależności projektu

W terminalu, w folderze projektu wpisz:

```bash
npm install --onnxruntime-node-install-cuda=skip
```

**Poczekaj** - to może potrwać 2-5 minut. Zobaczysz dużo tekstu - to normalne! ✅

## Krok 4: Skonfiguruj bazę danych (Supabase)

### 4A. Utwórz konto Supabase (jeśli nie masz)

1. Wejdź na: https://supabase.com
2. Kliknij "Start your project"
3. Zaloguj się przez GitHub (lub utwórz konto)

### 4B. Utwórz projekt lub użyj istniejącego

Projekt już istnieje! Klucze są w pliku `.env`:
- Projekt ID: `jrmqxbmkmrlkrevlsmpv`
- URL: `https://jrmqxbmkmrlkrevlsmpv.supabase.co`

### 4C. Dodaj tabelę pacjentów do bazy danych

1. Zaloguj się na: https://supabase.com/dashboard
2. Wybierz swój projekt MyWay
3. Z lewego menu wybierz **"SQL Editor"**
4. Kliknij **"+ New query"**
5. Skopiuj CAŁY tekst z pliku `supabase/migrations/20251113000000_create_patients_table.sql`
6. Wklej go w okno SQL Editor
7. Kliknij **"RUN"** (lub naciśnij Ctrl + Enter)
8. Jeśli zobaczysz "Success. No rows returned" - SUPER! ✅

**Graficzna instrukcja:**
```
Dashboard → SQL Editor (lewy panel) → + New query → Wklej kod SQL → RUN
```

## Krok 5: Uruchom aplikację

W terminalu wpisz:

```bash
npm run dev
```

Po chwili zobaczysz coś takiego:
```
VITE v5.4.19  ready in 500 ms

➜  Local:   http://localhost:5173/
```

## Krok 6: Otwórz aplikację w przeglądarce

1. Otwórz przeglądarkę (Chrome, Firefox, Edge)
2. W pasku adresu wpisz: **http://localhost:5173/crm**
3. Voilà! System CRM jest uruchomiony! 🎉

---

## 🎯 Skrócona wersja (dla szybkich)

```bash
# 1. Sklonuj repozytorium
git clone https://github.com/dariuszszuca-lang/myway.git
cd myway
git checkout claude/crm-patient-contract-generator-011CV5WMWBJHZhvRVbiFb7ix

# 2. Zainstaluj zależności
npm install --onnxruntime-node-install-cuda=skip

# 3. Uruchom Supabase SQL (w Dashboard):
# Wykonaj kod z: supabase/migrations/20251113000000_create_patients_table.sql

# 4. Uruchom aplikację
npm run dev

# 5. Otwórz http://localhost:5173/crm
```

---

## ❓ Najczęstsze problemy

### Problem: "npm nie jest rozpoznawane..."
**Rozwiązanie:** Nie zainstalowałeś Node.js lub trzeba zrestartować terminal po instalacji.

### Problem: "Port 5173 jest już używany"
**Rozwiązanie:** Inna aplikacja używa tego portu. Zamknij inne programy lub:
```bash
# W terminalu naciśnij Ctrl + C aby zatrzymać serwer
# Spróbuj ponownie: npm run dev
```

### Problem: "Lista pacjentów jest pusta/błąd połączenia"
**Rozwiązanie:**
1. Sprawdź czy wykonałeś SQL w Supabase (Krok 4C)
2. Sprawdź czy plik `.env` istnieje i ma poprawne klucze

### Problem: Aplikacja się nie otwiera
**Rozwiązanie:**
1. Sprawdź czy w terminalu NIE MA błędów
2. Spróbuj otworzyć: http://127.0.0.1:5173/crm
3. Wyczyść cache przeglądarki (Ctrl + Shift + Delete)

---

## 📱 Jak korzystać z systemu CRM

### Dodawanie pacjenta:
1. Kliknij niebieski przycisk **"Dodaj Pacjenta"** w prawym górnym rogu
2. Wypełnij formularz (tylko Imię i Nazwisko są wymagane)
3. Kliknij **"Dodaj pacjenta"**

### Generowanie umowy:
1. W tabeli znajdź pacjenta
2. Kliknij **⋮** (trzy kropki) po prawej stronie
3. Wybierz **"Generuj umowę"**
4. Kliknij **"Drukuj umowę"**
5. Zapisz jako PDF lub wydrukuj

### Generowanie karty pacjenta:
1. W tabeli znajdź pacjenta
2. Kliknij **⋮** (trzy kropki)
3. Wybierz **"Generuj kartę pacjenta"**
4. Kliknij **"Drukuj kartę pacjenta"**

---

## 🛑 Jak zatrzymać aplikację

W terminalu naciśnij: **Ctrl + C**

---

## 💡 Wskazówki

- **Zawsze uruchamiaj aplikację z folderu projektu** (`myway`)
- **Nie zamykaj terminala** podczas gdy aplikacja działa
- **Możesz edytować kod** - zmiany pojawią się automatycznie w przeglądarce
- **Dane są bezpieczne** - wszystko jest zapisywane w bazie Supabase

---

## 📞 Potrzebujesz pomocy?

1. Sprawdź terminal - błędy są tam wyświetlane
2. Otwórz konsolę przeglądarki (F12) - sprawdź czy są błędy
3. Przeczytaj pełną dokumentację: `CRM_DOCUMENTATION.md`

---

**Powodzenia! 🚀**

Jeśli wszystko działa - zobaczysz piękny system CRM gotowy do zarządzania pacjentami ośrodka MyWay!
