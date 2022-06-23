class Team:

    def __init__(self, name, players, coach):
        self.name = name
        self.players = players
        self.coach = coach
        self.points = 0


    def add_player(self, player):
        self.players.append(player)


    def has_player(self, name):
        
        players = self.players   
        for player in players:
            if player == name:
                return True
        return False    


    def play_game(self, result):
        if result == True:
            self.points += 3
        else:
            pass    





     
