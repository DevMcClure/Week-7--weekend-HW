from modules.bank_account import *



# account = {"holder_name": "john","balance": 500,"type": "business"}

bank_account = BankAccount("John", 500, "business")
bank_account2 = BankAccount("steve", 10, "personal")

print(bank_account.holder_name)

bank_account.balance = 20

print(bank_account.balance)
print(bank_account2.holder_name)

bank_account.pay_in(50)
print(bank_account.balance)
bank_account.pay_monthly_fee()
print(bank_account.balance)