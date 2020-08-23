# TIL-Today-I-Learned- 20200610(Wed).md

## URL && Query String

`http://opentutorials.org:3000/main?id=HTML&page=12`

### http
`http` HyperText Transfer Protocol: protocol used by web browsers and web servers

## opentutorials.org
`host(domain name)` - opentutorials.org is a specific address of a computer in a network

### 3000
3000 is a `port` number.
There can be many servers in one computer
and the client communicates with the server linked to the port 3000.
Default is 80, the web server in http. No need to write 80.

### main
Is the path pointing to a certain file in a certain directory.

### id=HTML&page=12 (`queryData`)
`query string` begins with `?`, separates with `&` and identifies with `=`
The information I want to read is HTML and page 12.
We can send data to the web server by modifying the query string.


---

### Loading web page
- Save file in Atom
- Go to the directory containing the file on the Terminal.
- `node <filename.js>`
- Enger "localhost:3000" on the web page

---

