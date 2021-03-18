# Camping manager Project

### camping

- nadmorski
- górski
- nadjeziorny

### miejsce campingowe

- VIP
- normalne

### użytkownik

- właściciel
- klient

### rezerwacja

# Wymagania funkcjonalne:

### użytkownik niezarejestrowany

- może przeglądać dostępny miejsca campingowe
- może się zarejestrować

### użytkownik zarejestrowany

- może się zalogować
- zarezerwoać miejsce campingowe (ilość miejsc, czas)

### właściciel campingu

- może dodać camping (np. górski, nad jeziorem, nad morzem)
- może dodać miejsca campingowe (ile max osób, udogodnienia)
- swoje miejsca campingowe (ile wolnych-zajęty)

#

## Frontend

- strona główna
- strona logowania
- dostępne campingi
- strona campingu (na którym są miejsca campingowe i możliwość rezerwacji) - klient
- strona moich rezerwacji - klient
- strona dodawania nowego campingu - właściciel
- strona zarządzania campingiem (CRUD na miejscach campingowych oraz widok rezerwacji) - właściciel

## Baza danych

- właściciel może mieć 1 camping
- camping może mieć wiele miejsc campingowych
- miejsce campingowe może mieć wiele rezerwacji [BL: w terminach nie mogą na siebie nachodzić]
- Klient może mieć wiele rezerwacji ale rezerwacja może być przypisana do 1 klienta.

# Podział obowiązków

### Moduł 1

#### back

- camping
- rezerwacja

#### front

- strona główna
- strona logowania
- dostępne campingi

### Moduł 2

#### back

- miejsca campingowe

#### front

- strona campingu (na którym są miejsca campingowe i możliwość rezerwacji) - klient
- strona moich rezerwacji - klient

### Moduł 3

#### back

- użytkownik

#### front

- strona dodawania nowego campingu - właściciel
- strona zarządzania campingiem (CRUD na miejscach campingowych oraz widok rezerwacji) - właściciel
