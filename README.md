How To Run:
1. git clone https://github.com/kanagaraj1989/beer-finder.git
2. cd beer-finder
3. npm install
4. npm start

Note:
1. All beers are cached when component mount and used for user search "Search by name & Search by description" on dashboard.
2. We don't have API to search by "description", so i have used cached object for this operation.
3. PUNK API always return the same beer for Non Alcoholic beer request.


ToDo:
1. Need to update cached "All Beers" at particular intervals of time, because few new beers will be added in feature at PunkAPI server.
