


# def greet(name, time_of_day):
#     return "good " + time_of_day + name



# name_1 ="Ken"
# time_of_daye_1 = "morning"
# greeting = greet(name_1, time_of_daye_1)
# print(greeting)

# name_2 = "diedre"
# time_of_day_2 = "afternoon"
# greeting(greet(name_2, time_of_day_2))
# print(greeting)




# def greet():
#     words = "Hey"
#     return words


# def greet_two():
#     words = "You"
#     return words

# print(greet_two())



# birds = [
#   { "name": "Margaret", "age": 2, "eggs": 0 },
#   { "name": "Hetty", "age": 1, "eggs": 2 },
#   { "name": "Henrietta", "age": 3, "eggs": 1 },
#   { "name": "Audrey", "age": 2, "eggs": 0 },
#   { "name": "Mabel", "age": 5, "eggs": 1 },
# ]

# def count_eggs(list):

#     total_eggs = 0

#     for chicken in chickens:
#         total_eggs += chicken["eggs"]
#         chicken ["eggs"] = 0

#     return f"{total_eggs} eggs collected"

# print(count_eggs(chickens))


# def find_chicken_by_name(list, chicken_name):
#     for chicken in list:
#         if chicken ["name"] == chicken_name:
#             return chicken
#     return None    

# print (find_chicken_by_name(birds, "Audrey"))


users = [
  { "user_id": 1, "first_name": "Guido", "last_name": "van Rossum" },
  { "user_id": 2, "first_name": "Katherine", "last_name": "Johnson" },
  { "user_id": 3, "first_name": "Dorothy", "last_name": "Vaughan" },
  { "user_id": 4, "first_name": "Hen", "last_name": "Solo" },
  { "user_id": 5, "first_name": "Mary", "last_name": "Jackson" },
]


def find_user_by_id (list, user_id):
    found_user = None
    for user in list:
        if user ["user_id"]  == user_id:
            found_user = user
    
    return found_user        



    