from db.run_sql import run_sql

from models.task import Task
  
def select_all():  
    tasks = [] 

    sql = "SELECT * FROM tasks"
    results = run_sql(sql)

    # uses run_sql function from run_sql.py file

    for row in results:
        task = Task(row['description'], row['assignee'], row['duration'], row['completed'], row['id'] )
        tasks.append(task)
    return tasks 

