import unittest
from src.fizzbuzz import fizzbuzz

class TestFizzBuzz(unittest.TestCase):

    def test_returns_fizz_when_passed_number_divisilble_by_3(self):
        self.assertEqual("Fizz", fizzbuzz (3))


    def test_returns_buzz_when_passed_number_divisible_by_3_and_5(self):
        self.assertEqual("Buzz",fizzbuzz(5))   


    def test_returns_fizzbuzz_when_passed_number_divisible_by_15(self):
        self.assertEqual("FizzBuzz", fizzbuzz(15))     


    def test_returns_number_if_not_divisible_by_3_or_5(self):
        self.assertEqual(7, fizzbuzz(7))