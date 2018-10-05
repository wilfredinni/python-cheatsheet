n=int(input('enter number'))
c=1
for i in range(1,n+1):
    c=1
    for j in range(1,i+1):
        c*=j
    print(c)