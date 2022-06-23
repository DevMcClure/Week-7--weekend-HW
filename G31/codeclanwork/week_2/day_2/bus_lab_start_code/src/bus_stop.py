from pkg_resources import parse_version


class BusStop:

    def __init__(self, name):
        
        self.name = name
        self.queue = []

     
    def add_to_queue(self, person):
        self.queue.append(person)
    
    
    def remove_passenger(self):
        passenger = self.queue.pop()
        return passenger 

    def clear(self):
        self.queue = []


    def queue_length(self):
        return len(self.queue)    
            