# counter = 0 
# my_number = 5

# while(counter < my_number):
#     print(f"counter is {counter}")
#     counter += 1






# numbers =(1,2,3,4,5)

# for number in numbers:
#     print(number * 3)



# total= 0

# for number in numbers:
#     total = total + number

#     print (total)



chickens = [
  {"name": "Margaret", "age": 2, "eggs": 0},
  {"name": "Hetty", "age": 1, "eggs": 2},
  {"name": "Henrietta", "age": 3, "eggs": 1},
  {"name": "Audrey", "age": 2, "eggs": 0},
  {"name": "Mabel", "age": 5, "eggs": 1},
]


total_eggs= 0


for chicken in chickens:
    if chicken ["eggs"] > 0:
        print("woohoo we have eggs!")
    total_eggs += chicken["eggs"]
    chicken["eggs"] = 0

print(f'{total_eggs} eggs collected')
print (chickens)

