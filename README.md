# TIL-Today-I-Learned 20200513(Wed)

### AND OR Operators
a = 2;
b = 2;

`c = a = 2 && b + 1 = 3`

then `c = 1` because `1 AND 1` is 1.
I had no idea that these operators could be used with equations instead of ones and zeroes.
It's actually quite obvious, but it just never came to my mind.
These operations seem very useful in writing concise code lines.

---

### How to run Glagan's cub3D
1. Git clone Glagan's repository.
2. Unzip mlx_beta and copy libmlx.dylib to Glagan's repo.
3. Replace Glagan's mlx with unzipped mlx (the non-beta one).
4. Must have Xcode installed.
5. Do make mlx.
6. Do make in Glagan's repo.
7. Run cub3D with one of the maps of your choice: `./cub3D ./maps/1.cub`

***

### Difference between header files and a library
Header file: notifies the _compiler_ of certain things(mostly their existence or **declarations**)
Library file: actual _executable code_ that does the work as specified in the header file. This is linked in by the linker to provide the actual functionality

`#include <pthread.h>` tells the _compiler_ all about the existence of `pthread_mutex_this`, `pthread_condvar_that` and `pthread_thread_the_other`, but doesn't actually provide the implementations of those things.

The `-lpthread` option tells the linker that it should locate a library based on the pthread name from which it can pull in the actual implementations, in order to forn the final executable.


***


**Header Files**: These are the files that are included at the top of any program. If we use any function inside a program, then the header file containing declaration or definition of that function ,has to be included.Like printf() is defined in stdio.h.So, we must include it (by #include in order to use printf().

**Library Files**: These are the files which the compiler uses in order to define the functions which have been used in the program and had been declared inside the header file.Like, printf() has its complete definition ,like how it will work etc. in an I/O library! So, the compiler uses that library to get the machine code for printf.

**_Difference:_**

Header files are TEXT files while library files are BINARY. This means, we can read and modify the header file but not the library!
Header file is in C language while the library is in machine language!
Header file has to be included by the programmer while the compiler automatically relates the library file(s) with the program!

Souce: https://stackoverflow.com/questions/6407975/what-are-header-files-and-library-files


