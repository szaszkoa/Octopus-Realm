# Octopus-Realm
My first attempt at a personal project, meaning horrible spaghetti code awaits if you take a look at it.


## Background

Since i like incremental games, i had the idea to create a basic game to practice TS, HTML and CSS, as my first personal project. So here it goes.

## Goal of the game

General end-goal is to help Octopi achieve total world hegemony, by the means of conquering the surface world. Octopus sciense will be introduced later in time.

## Logs

### v0.0.2
  - Cleaned up UI and replace big buttons with "+" buttons. maybe adding +10 buttons later.
  - TODO: adding increasing price for additional octopus
  - TODO: adding new octopus type, which generates additional resourse.
  - TODO: start to implement housing limit for octopi, and create structures. Figure out creation methods for structures.
  - TODO: think about adding visual feedback on progress.
  - TODO: think about hower information

### v0.0.1
  - resource "shellfish" created.
  - resurce/class octopus created. should be moved into an actual "octopus class" later on. As game data expands, it will be separated based on logical rules of separation.
  - game starts with 0 shellfish and 0 octopus.
    - 1 octopus costs 100 shellfish
    - 1 octopus generates shellfishPerClick amount of shellfish every 1 second
## User stories, ideas, chain of tought

### resources of the game:

  - Resources for octopus creation
    - shellfish
    - crustacean
    - sea-worm

  - Resources for structure creation - to be implemented
    - corall beads
    - corall rock
    - glass bottle

  - different octopus classes
    - octopus
      - cost: 100 shellfist + 10 for every octopus already owned
      - generates: 1 shellfish/s
    - squid
      - cost: 10.000 shellfish + 100 for every squid already owned
      - generates: 10 shellfish/s, 1 crustean/min
    - giant octopus
      - cost: 100.000 shellfish, 1000 crustean +10% of original price/giant octopus
      - generates: 100 shellfish, 10 csrustean/min, 1 seaworm/5min
    - colossal squid
      - cost: 1.000.000 shellfish, 10.000 crustean, 100 seaworm + 10% of original price/colossal squid owned
      - generates: 1000 shellfish/5s, 100 crustean/min, 10 seaworm/5min

### UI idea

```
 ___________________________________________________________________
|  buildings _  |                                                   |
|      __   |'| |             O C T O P U S   R E A L M             |
|   _ |''|--|'| |                                                   |
|__|'|'''|''|'|_|___________________________________________________|
|---population--|                                                   |
| [+] octopus   |   more complex game elements to be put here       |
| [+] kalamari  |                                                   |
| [+] etc.      |                                                   |
|               |                                                   |
|---resources---|                                                   |
| [num]shell... |                                                   |
| [num]corall   |                                                   |
| [num]etc      |                                                   |


```