# Octopus-Realm
My first attempt at a personal project, meaning horrible spaghetti code awaits if you take a look at it.


## Background

Since i like incremental games, i had the idea to create a basic game to practice TS, HTML and CSS, as my first personal project. So here it goes.

## Goal of the game

General end-goal is to help Octopi achieve total world hegemony, by the means of conquering the surface world. Octopus sciense will be introduced later in time.

## Release notes

### v0.0.01
  - resource "shellfish" created.
  - resurce/class octopus created. should be moved into an actual "octopus class" later on. As game data expands, it will be separated based on logical rules of separation.
  - game starts with 0 shellfish and 0 octopus.
    - 1 octopus costs 100 shellfish
    - 1 octopus generates shellfishPerClick amount of shellfish every 1 second

### v0.0.02
  - TODO: adding increasing price for additional octopus
  - TODO: adding new octopus type, which generates additional resourse.
  - TODO: clean up UI and replace bit buttons with "+" buttons. maybe adding +10 buttons later.
  - TODO: start to implement housing limit for octopi, and create structures. Figure out creation methods for structures.
  - TODO: think about adding visual feedback on progress.

## User stories, ideas, chain of tought

### resources of the game:

  - Resources for octopus creation
    - shellfish
    - crustaceans
    - sea-worms
    - cephalopods

  - Resources for structure creation
    - corall beads
    - corall rock
    - glass bottle

  - different octopus classes
    - octopus
    - giant octopus

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