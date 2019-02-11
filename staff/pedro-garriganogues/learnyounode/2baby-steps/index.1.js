var args = process.argv.slice(2);
all = 0;
for (var i in args) {
    all += +(args[i]);
}
console.log(all)



