# Camping IO

## Data Types
- Camping
  - name: string
  - address: string
  - campingSpotLimit: number
  - type: enum
  - owner: User
- Camping spot
  - camping: Camping
  - name: string
  - guestsLimit: number
  - price: number
  - picture: string
- User
  - displayName: string
  - email: string
  - password: string
  - phone: string
  - isOwner: string
- Reservation
  - campingSpot: CampingSpot
  - startDate: Date
  - endDate: Date
  - isVip: bool
  - guests: number

## Requirements
- unregistered user: 
  - can see camping spots with campings and prices 
  - can register
- registered user:
  - can login
  - reserve camping spot
- camping owner
  - add camping
  - add camping spoty
  - check reservations for every campign
